import { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-i-built-safetify",
    title: "How I Built Safetify: Real-Time Incident Reporting with Flutter and Firebase",
    tagline: "Architecture choices, geolocation, and lessons from building a public safety mobile app.",
    excerpt:
      "A walkthrough of building Safetify from concept to deployment — handling geolocation in Flutter, structuring real-time Firestore listeners, and designing for low-bandwidth mobile networks.",
    publishedAt: "2026-03-12",
    readTime: "5 min read",
    category: "Mobile Development",
    tags: ["Flutter", "Firebase", "Geolocation", "Mobile Architecture"],
    content: `
### Why I Built Safetify

During my final year in Information Technology at Bayero University Kano, I wanted my capstone project to address a tangible challenge: timely emergency notification and safety awareness.

In dense communities, incidents often take too long to reach neighbors or emergency responders because communication is fragmented across phone calls and unverified social media posts.

### Core Technical Architecture

Safetify was built around three primary engineering considerations:

1. **Clean State Management**: Using Provider and structured repository patterns to separate UI components from Firebase data services.
2. **Geolocation & Distance Filtering**: Leveraging the device's GPS to trigger localized proximity alerts without draining battery through continuous polling.
3. **Offline Caching**: Storing queued report data locally so users can draft incident details even during momentary network dropouts.

\`\`\`dart
// Structured repository pattern in Flutter
abstract class IncidentRepository {
  Future<void> submitIncident(IncidentReport report);
  Stream<List<IncidentReport>> getNearbyIncidents(GeoPoint userLocation, double radiusKm);
}
\`\`\`

### Key Takeaway

Building Safetify reinforced the importance of designing for real-world constraints — prioritizing reliable offline handling, clean navigation, and intuitive UI under pressure.
    `,
  },
  {
    slug: "what-i-learned-building-first-realtime-mobile-app",
    title: "What I Learned Building My First Real-Time Mobile App",
    tagline: "Practical lessons in state management, network resilience, and UI responsiveness.",
    excerpt:
      "Transitioning from static mobile interfaces to reactive, live-synced systems came with key lessons in listener lifecycles, error boundaries, and user feedback.",
    publishedAt: "2026-02-20",
    readTime: "4 min read",
    category: "Engineering Notes",
    tags: ["Flutter", "Firebase", "Real-Time", "Lessons Learned"],
    content: `
### Moving Beyond Static UI

Building applications that update instantly when remote data changes requires a shift in how state and listeners are managed.

Here are the three most valuable lessons I learned:

1. **Dispose Listeners Promptly**: Stream subscriptions and snapshot listeners must be cleanly closed when screens unmount to prevent memory leaks.
2. **Design Explicit Loading and Error States**: A real-time app needs clear feedback when connecting, reconnecting, or encountering permission denials.
3. **Keep Local State Predictable**: Don't let optimistic UI updates drift out of sync with verified backend records.
    `,
  },
  {
    slug: "flutter-vs-native-what-i-actually-use",
    title: "Flutter vs. Native: What I Actually Use and Why",
    tagline: "A pragmatic developer perspective on cross-platform development for African markets.",
    excerpt:
      "Why Flutter remains my primary choice for shipping cross-platform mobile apps rapidly while maintaining native performance and fluid UI.",
    publishedAt: "2026-01-15",
    readTime: "4 min read",
    category: "Mobile Development",
    tags: ["Flutter", "Dart", "Cross-Platform", "Tech Stack"],
    content: `
### The Pragmatic Choice

When building digital products in Nigeria, development speed and cross-platform consistency across diverse Android and iOS devices are critical.

Flutter enables a single engineering team to deliver polished, responsive applications on both platforms without maintaining duplicate codebases.

### Where Flutter Shines
- **Unified UI Rendering**: The Skia/Impeller engine ensures exact visual fidelity across OEM Android skins.
- **Fast Iteration**: Stateful Hot Reload speeds up UI tweaking and state debugging significantly.
- **Rich Package Ecosystem**: Mature libraries for Firebase, SQLite, mapping, and secure storage.
    `,
  },
  {
    slug: "building-technology-for-nigerian-users",
    title: "Building Technology for Nigerian Users: Designing for Real-World Constraints",
    tagline: "Network fluctuations, device fragmentation, and accessible UX.",
    excerpt:
      "Why optimizing for mobile data costs, intermittent connectivity, and localized workflows matters when building software in emerging markets.",
    publishedAt: "2025-11-28",
    readTime: "5 min read",
    category: "Product & UX",
    tags: ["Nigeria", "Accessibility", "Product Design", "UX"],
    content: `
### Real-World Constraints

Building software for Nigerian users requires thinking beyond ideal high-speed broadband conditions:

1. **Data Optimization**: Compress images and payloads on-device before transmission.
2. **Resilient Session Handling**: Provide clear token refresh loops and offline fallbacks rather than abruptly kicking users out.
3. **Clear, Accessible Language**: Keep interfaces straightforward and intuitive across diverse technical literacy levels.
    `,
  },
];
