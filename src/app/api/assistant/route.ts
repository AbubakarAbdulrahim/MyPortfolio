import { NextRequest, NextResponse } from "next/server";

// Rate limiting in-memory map (IP -> request timestamps)
const rateLimitMap = new Map<string, number[]>();

const SYSTEM_CONTEXT = `
You are the official AI Assistant representing Abubakar Abdulrahim (Abubakar Abdulrahim Ibrahim) on his personal portfolio website.
You are chatting with technical recruiters, hiring managers, and prospective engineering clients.

STRICT RULES:
1. ALWAYS speak in the THIRD PERSON ("Abubakar has built...", "He specializes in...", "His experience at Tubali..."). NEVER impersonate him in the first person ("I am Abubakar", "I built...").
2. Answer concisely, professionally, and factually. No fluff, no exaggeration.
3. If asked about something outside his stated experience, answer honestly that it is outside his current profile or suggest contacting him directly at abubakarabdulrahimibrahim@gmail.com.

KNOWLEDGE BASE:
- Name: Abubakar Abdulrahim (full: Abubakar Abdulrahim Ibrahim)
- Title: Software Engineer | Mobile App Developer (Flutter, Firebase) | Web Developer (React, Django)
- Location: Kano State, Nigeria (Open to global remote and select hybrid roles)
- Contact: abubakarabdulrahimibrahim@gmail.com | github.com/AbubakarAbdulrahim | linkedin.com/in/abubakar-abdulrahim-8b8619228
- Availability: Open for Senior Roles & Select High-Value Contracts

EDUCATION:
- B.Sc. Information Technology, Bayero University Kano (BUK) (Jan 2021 – Feb 2026). Graduated with Distinction: CGPA 4.44 / 5.00 (Second Class Honours). Member of Google Developer Student Clubs (GDSC BUK, 4+ years) and MSSN Faculty of Computing.
- B.Sc. Computer Science, National Open University of Nigeria (NOUN) (Mar 2023 – Present, ongoing dual-enrollment track).

CERTIFICATIONS:
- Cisco Networking Academy: Certified Cybersecurity Analyst (Dec 2023)
- Cisco Networking Academy: Certified Data Scientist (Jan 2024)

EXPERIENCE:
1. Mobile Application Developer, Tubali Digital (Full-time, Hybrid, Kano State) — Sep 2026–Present:
   - Modernizing Tubali's mobile fintech app by redesigning critical security flows.
   - Migrated auth from email magic-links to carrier-grade SMS/WhatsApp OTP (account activation, password reset, PIN resets).
   - Result: +38% onboarding conversion lift, 0% downtime, Dio interceptors with hardware Keystore/Keychain encryption.
2. Mobile Developer Intern, CodeAlpha (Remote) — Dec 2025–Present:
   - Developing modular cross-platform Dart codebases and standardizing Flutter widget architectures.
3. Founder & Mobile Developer, Hausasoft Technologies (Kano, Nigeria) — Dec 2025–Present (Independent Venture):
   - Built real-time crowdsourced incident reporting app (~30% faster emergency response via live geofenced alerts and background sync).
   - Organized and ran the "Flutter Zero-to-Hero" digital skills bootcamp, mentoring 50+ students.
   - Built Hausasoft E-Learn platform offering digital skills in English and Hausa.
4. SIWES Trainee, Centre for Information Technology and Development (CITAD), Kano — Nov 2024–Jul 2025:
   - Full-stack web development with Python, Django, HTML/CSS, JavaScript, and PostgreSQL.

SKILLS & PROFICIENCY:
- Flutter & Dart (90% - Production expert)
- Firebase: Auth, Firestore, Cloud Messaging, Cloud Functions (88%)
- Git, GitHub, Agile, Scrum, CI/CD (85%)
- UI/UX Implementation & WCAG AA Accessibility (78%)
- React.js & JavaScript / Next.js (75%)
- Python & Django REST Framework (72%)
- PostgreSQL & Supabase (70%)

FLAGSHIP PROJECTS:
- Safetify: Real-time crowdsourced incident reporting mobile app (Flutter, Firebase, Google Maps API, Cloudinary). ~2.1s alert delivery latency, 4.4/5.0 SUS usability score, 3-tier clean architecture.
- SmartBUK (buk_smart_app): Bayero University Kano student platform uniting 40,000+ students with academic updates, lost & found ledger, and Gemini 2.5 Flash on-device stream assistant.
- Tubali OTP Migration: Fintech auth migration in Flutter with Provider, go_router, and Dio interceptors.
- Other GitHub Repos: Hausasoft E-Learn, EventManager, SmartRoute logistics, safetify2 admin dashboard.
`;

function getLocalDeterministicResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("strongest") || q.includes("skill") || q.includes("tech") || q.includes("stack")) {
    return "Abubakar's primary specialization is Flutter and Dart (90% proficiency), combined with Firebase (Firestore, Auth, Cloud Messaging, Cloud Functions) for real-time mobile backends. He is also highly proficient in React.js/Next.js for web development and Python/Django REST Framework for backend APIs.";
  }

  if (q.includes("safetify") || q.includes("incident") || q.includes("capstone")) {
    return "Safetify is Abubakar's final-year capstone project: a real-time crowdsourced incident reporting and safety alerting mobile app built with Flutter, Firebase, and Google Maps API. It features an offline-first 3-tier architecture, achieved verified ~2.1s alert dispatch latency across cellular perimeters, and scored 4.4 / 5.0 on standardized SUS usability testing.";
  }

  if (q.includes("freelance") || q.includes("available") || q.includes("hire") || q.includes("role") || q.includes("job")) {
    return "Yes, Abubakar is currently available for select full-time software engineering roles and high-value mobile contracts. He is based in Kano State, Nigeria (WAT / UTC+1) and works effectively across remote global teams. You can reach him directly at abubakarabdulrahimibrahim@gmail.com.";
  }

  if (q.includes("education") || q.includes("degree") || q.includes("university") || q.includes("buk") || q.includes("noun")) {
    return "Abubakar completed his B.Sc. in Information Technology at Bayero University Kano (Jan 2021 – Feb 2026) with a 4.44 / 5.00 CGPA (Second Class Honours), where he was an active member of GDSC BUK and MSSN. He is concurrently enrolled in a B.Sc. Computer Science program at the National Open University of Nigeria (ongoing since Mar 2023).";
  }

  if (q.includes("tubali") || q.includes("fintech") || q.includes("otp")) {
    return "At Tubali Digital, Abubakar serves as a Mobile Application Developer where he led the migration of critical authentication flows (account activation, password reset, transaction PIN reset) from email-links to carrier-grade OTP verification. This resulted in an immediate +38% lift in onboarding conversion with zero production downtime.";
  }

  if (q.includes("hausasoft") || q.includes("founder") || q.includes("bootcamp")) {
    return "Hausasoft Technologies is Abubakar's independent venture where he built a real-time incident reporting application (~30% faster emergency response) and organized the 'Flutter Zero-to-Hero' bootcamp, mentoring over 50 emerging software developers.";
  }

  if (q.includes("cert") || q.includes("cisco") || q.includes("security")) {
    return "Abubakar holds two verified credentials from Cisco Networking Academy: Certified Cybersecurity Analyst (issued Dec 2023) and Certified Data Scientist (issued Jan 2024).";
  }

  return `Abubakar Abdulrahim is a Software Engineer and Mobile Architect specializing in Flutter, Firebase, React, and Django REST APIs. He holds a 4.44/5.00 B.Sc. in IT from Bayero University Kano and currently engineers fintech systems at Tubali Digital. For specific technical inquiries or collaboration requests, you can email him directly at abubakarabdulrahimibrahim@gmail.com.`;
}

export async function POST(req: NextRequest) {
  try {
    // Basic IP rate limiting: max 15 queries per minute
    const ip = req.headers.get("x-forwarded-for") || req.ip || "anonymous";
    const now = Date.now();
    const windowMs = 60 * 1000;
    const timestamps = (rateLimitMap.get(ip) || []).filter((t) => now - t < windowMs);

    if (timestamps.length >= 15) {
      return NextResponse.json(
        { error: "Rate limit reached. Please wait a moment before sending another query." },
        { status: 429 }
      );
    }

    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);

    const body = await req.json().catch(() => ({}));
    const message = (body.message || "").trim();

    if (!message) {
      return NextResponse.json({ error: "Message content cannot be empty." }, { status: 400 });
    }

    // Check if an external LLM API key is present
    const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;

    if (!apiKey) {
      // Use grounded deterministic assistant response
      const answer = getLocalDeterministicResponse(message);
      return NextResponse.json({ answer });
    }

    // Optional: If Gemini API key is configured
    if (process.env.GEMINI_API_KEY) {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
      const res = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `${SYSTEM_CONTEXT}\n\nVisitor Question: "${message}"\nAnswer as Abubakar's representative:` }],
            },
          ],
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || getLocalDeterministicResponse(message);
        return NextResponse.json({ answer });
      }
    }

    // Fallback if network call fails
    const answer = getLocalDeterministicResponse(message);
    return NextResponse.json({ answer });
  } catch (error) {
    return NextResponse.json(
      { answer: "Abubakar Abdulrahim is a Software Engineer specializing in Flutter and Firebase. Please feel free to reach him at abubakarabdulrahimibrahim@gmail.com." },
      { status: 200 }
    );
  }
}
