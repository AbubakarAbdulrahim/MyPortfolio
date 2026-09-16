import { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "architecting-geofenced-incident-dispatch-flutter",
    title: "Architecting Low-Latency Geofenced Incident Dispatch in Flutter with Firebase & Background Services",
    tagline: "How we achieved ~2.1 second alert dispatches across cellular networks in Safetify with offline-first persistence.",
    excerpt:
      "A deep technical breakdown of real-time mobile geofencing, background daemon lifecycle management on iOS & Android, and structuring three-tier clean architecture in Flutter.",
    publishedAt: "2026-03-12",
    readTime: "7 min read",
    category: "Mobile Architecture",
    tags: ["Flutter", "Firebase", "Geofencing", "Clean Architecture", "Performance"],
    content: `
### The Challenge of Real-Time Geofenced Alerts

When developing **Safetify**, our crowdsourced safety and incident response platform, the primary architectural obstacle was not merely sending push notifications—it was ensuring that alerts reached user devices within a strict 3-second window while minimizing battery drain from GPS polling.

In high-density metropolitan areas like Kano, mobile network conditions fluctuate rapidly between 4G and intermittent 2G/3G connections. A standard client-side distance filter fails when the app is suspended in the background.

\`\`\`dart
// Sample: Optimized Geofence stream listener with battery-conscious distance filters
Stream<Position> createGeofencedLocationStream() {
  return Geolocator.getPositionStream(
    locationSettings: const LocationSettings(
      accuracy: LocationAccuracy.high,
      distanceFilter: 25, // Only trigger wakeups on 25m displacements
    ),
  ).distinct((previous, current) {
    // Suppress jitter without losing spatial resolution
    return Geolocator.distanceBetween(
      previous.latitude,
      previous.longitude,
      current.latitude,
      current.longitude,
    ) < 20.0;
  });
}
\`\`\`

### 3-Tier Decoupled Architecture

To ensure testability and prevent UI widgets from coupling directly to Firebase, Safetify adopts a strict 3-tier architecture:

1. **Presentation Layer**: Scoped BLoC / Cubit state machines handling UI emissions and event triggers.
2. **Domain Layer**: Pure Dart entities and abstract repository contracts.
3. **Data Layer**: Concrete repository implementations coordinating between local SQLite caches and Cloud Firestore snapshots.

### Measuring Verification Latency

Through automated instrumentation across 60 field test runs, our end-to-end telemetry revealed:
- **Client Dispatch to Cloud Function**: 420ms
- **Firestore Trigger & Geohash Radius Calculation**: 380ms
- **FCM Delivery to Perimeter Devices**: 1,310ms
- **Total Latency**: **~2.11 seconds**

By decoupling background sync from the main isolate, Safetify preserved smooth 60fps scrolling while keeping citizens protected in real time.
    `,
  },
  {
    slug: "on-device-ai-vs-cloud-gemini-flutter",
    title: "On-Device AI vs Cloud Endpoints: Integrating Gemini 2.5 Flash on Mobile with Graceful Degradation",
    tagline: "Balancing ultra-low latency token streaming, prompt grounding, and offline fallback mechanisms for 40,000+ university students.",
    excerpt:
      "Lessons learned integrating Gemini 2.5 Flash API into the BUK Student App to deliver instant, context-aware campus intelligence without breaking the data bank.",
    publishedAt: "2026-02-18",
    readTime: "9 min read",
    category: "Edge & Applied AI",
    tags: ["Gemini 2.5 Flash", "Flutter", "Edge AI", "SSE Streaming", "Mobile UX"],
    content: `
### Bringing Foundational Models to Mobile Campus Life

Bayero University Kano hosts over 40,000 students across multiple campuses. In developing the **BUK Student App**, our goal was to provide an intelligent assistant that could instantly resolve queries regarding senate policies, faculty directories, hall reservations, and examination schedules.

Using large, monolithic cloud models introduces two severe problems on mobile:
1. **Network Latency & Cost**: High response latency (>3 seconds) frustrates students in transit.
2. **Connectivity Fragility**: Poor connection causes entire chat completions to fail mid-request.

### The Gemini 2.5 Flash Solution

We selected Google's **Gemini 2.5 Flash API** due to its sub-second time-to-first-token (TTFT) and high reasoning efficiency on structured context.

\`\`\`dart
// Streaming SSE tokens directly to a reactive UI in Flutter
Stream<String> streamGeminiResponse(String prompt, String campusContext) async* {
  final client = http.Client();
  final request = http.Request('POST', Uri.parse('\$apiBaseUrl/streamTokens'))
    ..headers['Content-Type'] = 'application/json'
    ..body = jsonEncode({
      'prompt': prompt,
      'grounding_context': campusContext,
      'temperature': 0.2, // Deterministic institutional facts
    });

  final streamedResponse = await client.send(request);
  await for (final chunk in streamedResponse.stream.transform(utf8.decoder)) {
    yield chunk;
  }
}
\`\`\`

### Aesthetic Excellence: The Apple Intelligence Glow

Rather than rendering text into a generic chat bubble, we designed an OLED-black interface featuring fluid radial glowing borders that react in real-time to incoming tokens, conveying a tactile, living intelligence directly on mobile hardware.
    `,
  },
  {
    slug: "zero-downtime-fintech-otp-migration",
    title: "Migrating Production Fintech Auth: Zero-Downtime Transition to Carrier-Grade OTP in Flutter",
    tagline: "Eliminating 82% of user authentication support tickets and lifting registration conversion by 38% at Tubali.",
    excerpt:
      "A deep dive into replacing fragile email magic links with multi-channel OTP verification using Dio interceptors, hardware Keystore bindings, and fail-safe WhatsApp pathways.",
    publishedAt: "2026-01-29",
    readTime: "8 min read",
    category: "Fintech Security",
    tags: ["Flutter", "Dio", "Security", "Fintech", "go_router", "Provider"],
    content: `
### The Email-Link Crisis in Emerging Fintech

At **Tubali**, user onboarding was suffering a critical leak: prospective customers entering registration flows were stalling at email verification. In Nigeria and West Africa, transactional emails from financial services frequently end up trapped in spam folders, delayed by upstream relays, or severed by deep-link fragmentation across mobile browsers.

The business mandate was unambiguous: **Migrate all 4 authentication checkpoints to carrier-grade SMS and WhatsApp OTP verification with zero downtime and zero regressions.**

### Architectural Strategy

We executed the migration across three foundational pillars:

1. **Dio Custom Interceptors**:
   Centralizing authentication token rotation, header signing, and error mapping directly inside the HTTP client layer.

\`\`\`dart
class FintechSecurityInterceptor extends Interceptor {
  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) async {
    final deviceId = await SecureStorage.getHardwareFingerprint();
    options.headers['X-Device-Attestation'] = deviceId;
    options.headers['X-Client-Timestamp'] = DateTime.now().toUtc().toIso8601String();
    handler.next(options);
  }

  @override
  void onError(DioException err, ErrorInterceptorHandler handler) {
    if (err.response?.statusCode == 401) {
      // Ephemeral token expired: trigger silent OTP re-validation or graceful re-auth
      AuthEventBus.emit(AuthSessionExpiredEvent());
    }
    handler.next(err);
  }
}
\`\`\`

2. **Automated SMS Autofill & Hardware Keystore**:
   Integrating native Android SMS Retriever API and iOS One-Time Code textContentType to reduce user input errors to zero.

3. **Multi-Carrier Fallback Handshake**:
   If carrier SMS delivery is not confirmed within 45 seconds, the UI gracefully offers an automated, verified WhatsApp message trigger.

### Quantitative Business Impact

- **+38%** lift in completed user onboarding registrations.
- **-82%** decrease in authentication support tickets.
- **0.00%** unscheduled system downtime during migration.
    `,
  },
  {
    slug: "mobile-crowdsensing-low-bandwidth-environments",
    title: "Mobile Crowdsensing: Lessons from Building Resilient Architectures for Intermittent Connectivity",
    tagline: "Techniques for localized data aggregation, client-side payload compression, and eventual consistency.",
    excerpt:
      "Strategies for building distributed sensor and reporting applications that remain functional and dependable even when cellular bandwidth is scarce.",
    publishedAt: "2025-11-14",
    readTime: "6 min read",
    category: "Distributed Systems",
    tags: ["Distributed Systems", "Crowdsensing", "SQLite", "Offline-First", "Data Compression"],
    content: `
### Rethinking Data Ingestion Under Real-World Bandwidth Constraints

Mobile crowdsensing relies on hundreds of distributed nodes (smartphones) capturing environmental, spatial, or incident telemetry. In the developed world, developers frequently take continuous broadband connectivity for granted. In developing regions, however, mobile crowdsensing architectures must be designed under the assumption that **the network is down until proven otherwise**.

### Core Tenets of Resilient Crowdsensing

1. **Client-Side Media Triage**:
   Never upload uncompressed media. In Safetify, we implemented client-side image downsampling that reduces high-megapixel camera snapshots to high-fidelity WebP formats (<200KB) prior to upload.

2. **Transactional SQLite Queues**:
   Every report is committed to local persistent storage *before* any network socket is opened. A dedicated background worker continuously drains the sync queue when signal strength is verified.

3. **Eventual Consistency with Cryptographic Deduplication**:
   When dozens of nearby users submit reports on the same event simultaneously, client-side geohashing clusters reports within a 50-meter cell into a single parent event before pushing redundant payloads to the cloud.

These architectural considerations transform fragile mobile prototypes into dependable civic utilities.
    `,
  },
];
