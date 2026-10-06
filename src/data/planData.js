// Default and dynamic project plan data generator for Step 2: Project Plan

export const DEFAULT_ARCHITECTURE = {
  appName: 'YOUR APPLICATION',
  appSubtitle: 'Brings everything together',
  pillars: [
    {
      id: 'ui',
      title: 'USER INTERFACE',
      color: 'blue',
      badge: 'Frontend',
      items: ['Web / Mobile App', 'User Screens', 'User Interaction', 'Display Results'],
      description: 'The screens and user experience that students will interact with. This can be a web or mobile application.',
      keyParts: ['Home screen', 'Main features', 'Display results', 'Live feedback alerts']
    },
    {
      id: 'backend',
      title: 'BACKEND',
      color: 'purple',
      badge: 'Logic & API',
      items: ['API Services', 'Business Logic', 'Process Requests', 'Connect Services'],
      description: 'The computational server layer that validates inputs, processes complex business rules, and bridges client interactions with databases and services.',
      keyParts: ['REST / GraphQL APIs', 'Authentication controller', 'Data validation engine', 'Third-party gateway']
    },
    {
      id: 'ai',
      title: 'AI / SERVICES',
      color: 'green',
      badge: 'Intelligence',
      items: ['Analysis Engine', 'Smart Suggestions', 'Process Data', 'External APIs'],
      description: 'Automated intelligence and algorithmic heuristics that analyze context and generate real-time actionable guidance for the student.',
      keyParts: ['Computer vision / NLP pipeline', 'Rule-based heuristics', 'Recommendation scoring', 'External AI APIs']
    },
    {
      id: 'database',
      title: 'DATABASE',
      color: 'gold',
      badge: 'Storage',
      items: ['Store Users', 'Store Projects', 'Store Results', 'Manage Data'],
      description: 'Secure, reliable relational or document storage keeping track of student profiles, project states, historical runs, and asset assets.',
      keyParts: ['User auth tables', 'Project blueprint records', 'Activity logs & metrics', 'Cloud asset storage']
    }
  ]
};

export const DEFAULT_TECH_RECOMMENDATIONS = [
  {
    id: 'frontend',
    category: 'Frontend',
    name: 'React',
    recommended: true,
    tagline: 'Great for interactive and dynamic user interfaces.',
    why: 'Your project needs multiple screens and real-time user interaction. React is widely used and beginner-friendly.',
    alternatives: ['Next.js', 'Vue.js', 'Svelte', 'Flutter (Mobile)']
  },
  {
    id: 'backend',
    category: 'Backend',
    name: 'Node.js + Express',
    recommended: true,
    tagline: 'Simple and flexible for building APIs.',
    why: 'You need an API layer to handle requests, process logic and connect to external services.',
    alternatives: ['Python (FastAPI)', 'NestJS', 'Go (Gin)', 'Serverless Functions']
  },
  {
    id: 'database',
    category: 'Database',
    name: 'Supabase',
    recommended: true,
    tagline: 'Database, authentication and storage in one.',
    why: 'Your project needs user accounts and data storage. Supabase is easy to use and integrates well with modern frameworks.',
    alternatives: ['Firebase', 'PostgreSQL (Neon)', 'MongoDB Atlas', 'SQLite / Cloudflare D1']
  },
  {
    id: 'ai',
    category: 'AI / Vision',
    name: 'Vision API / OpenAI',
    recommended: true,
    tagline: 'Helps analyse images and generate guidance.',
    why: 'Your project needs to understand images, detect scenes and provide intelligent suggestions.',
    alternatives: ['MediaPipe (On-device)', 'Claude API', 'HuggingFace Inference', 'Gemini API']
  }
];

export const DEFAULT_MODULES = [
  {
    id: 'mod-1',
    number: '01',
    name: 'Foundation',
    summary: 'Set up the project and development environment',
    taskCount: 3,
    tasks: [
      {
        id: 't-1-1',
        title: 'Project Environment Setup',
        description: 'Initialize Git repository, Vite/React bundler, and configure linting and formatting rules.',
        status: 'In Progress',
        difficulty: 'Beginner',
        why: 'Establishes a solid development foundation so dependencies run reliably across devices.',
        dependsOn: 'Node.js installed on machine',
        estimatedTime: '2-3 hours'
      },
      {
        id: 't-1-2',
        title: 'Design System & Component Tokens',
        description: 'Define core typography, color variables, button styles, and card containers.',
        status: 'Not Started',
        difficulty: 'Beginner',
        why: 'Prevents CSS spaghetti and ensures a unified, premium look across every screen.',
        dependsOn: 'Project Environment Setup',
        estimatedTime: '3-4 hours'
      },
      {
        id: 't-1-3',
        title: 'Application Shell & Routing',
        description: 'Create top navigation header, sidebar navigation, and step router views.',
        status: 'Not Started',
        difficulty: 'Beginner',
        why: 'Allows immediate testing of user transitions between workflow steps.',
        dependsOn: 'Design System & Component Tokens',
        estimatedTime: '2-3 hours'
      }
    ]
  },
  {
    id: 'mod-2',
    number: '02',
    name: 'User Interface',
    summary: 'Build the main screens and user experience',
    taskCount: 5,
    tasks: [
      {
        id: 't-2-1',
        title: 'Core Viewfinder / Main Input View',
        description: 'Build the primary screen where user starts the interaction or streams camera/data.',
        status: 'Not Started',
        difficulty: 'Intermediate',
        why: 'This is the first touchpoint where the user encounters your value proposition.',
        dependsOn: 'Application Shell & Routing',
        estimatedTime: '4-5 hours'
      },
      {
        id: 't-2-2',
        title: 'Real-Time HUD / Direction Overlay',
        description: 'Design the micro-guidance overlay with visual cues, bounding boxes, and simple text prompts.',
        status: 'Not Started',
        difficulty: 'Intermediate',
        why: 'Translates high-level advice into instantaneous 2-3 word human instructions.',
        dependsOn: 'Core Viewfinder / Main Input View',
        estimatedTime: '5-6 hours'
      },
      {
        id: 't-2-3',
        title: 'Live Status & Quality Ring Indicator',
        description: 'Implement color-coded status badge showing whether conditions are ready for action.',
        status: 'Not Started',
        difficulty: 'Beginner',
        why: 'Provides unambiguous visual reassurance to the user before they commit.',
        dependsOn: 'Real-Time HUD / Direction Overlay',
        estimatedTime: '3-4 hours'
      },
      {
        id: 't-2-4',
        title: 'Inspection & Summary Drawer',
        description: 'Card layout showing breakdown of captured metrics, photos, or generated plans.',
        status: 'Not Started',
        difficulty: 'Beginner',
        why: 'Enables users to review and understand what was produced.',
        dependsOn: 'Core Viewfinder / Main Input View',
        estimatedTime: '3-4 hours'
      },
      {
        id: 't-2-5',
        title: 'Responsive Mobile Layout Adaptations',
        description: 'Optimize viewport spacing, touch targets, and scrolling behaviors for smartphone screens.',
        status: 'Not Started',
        difficulty: 'Intermediate',
        why: 'Ensures seamless operation when students test in real dorm or campus environments.',
        dependsOn: 'All UI components',
        estimatedTime: '4-5 hours'
      }
    ]
  },
  {
    id: 'mod-3',
    number: '03',
    name: 'Core Logic',
    summary: 'Implement the main functionality',
    taskCount: 5,
    tasks: [
      {
        id: 't-3-1',
        title: 'Camera Integration & Stream Feed',
        description: 'Allow the application to access the user camera feed with proper permissions and aspect ratio.',
        status: 'Not Started',
        difficulty: 'Beginner',
        why: 'The application needs to see the scene or receive user inputs to provide guidance.',
        dependsOn: 'Project setup & secure HTTPS context',
        estimatedTime: '4-6 hours'
      },
      {
        id: 't-3-2',
        title: 'Analysis Engine / Vision Pipeline',
        description: 'Hook up computer vision or AI parsing to extract distance, lighting balance, or scene tags.',
        status: 'Not Started',
        difficulty: 'Advanced',
        why: 'Powers the core intelligence that differentiates this app from a dumb camera.',
        dependsOn: 'Camera Integration & Stream Feed',
        estimatedTime: '6-8 hours'
      },
      {
        id: 't-3-3',
        title: 'Guidance Generation Heuristics',
        description: 'State machine that translates analyzed metrics into simple human directions (e.g., "Step Closer").',
        status: 'Not Started',
        difficulty: 'Intermediate',
        why: 'Prevents cognitive overload by delivering only one prioritized instruction at a time.',
        dependsOn: 'Analysis Engine / Vision Pipeline',
        estimatedTime: '4-6 hours'
      },
      {
        id: 't-3-4',
        title: 'Smart Trigger / Shutter Assist Guard',
        description: 'Automatically enables capture only when composition and lighting meet quality criteria.',
        status: 'Not Started',
        difficulty: 'Intermediate',
        why: 'Guarantees consistent high quality on the first try.',
        dependsOn: 'Guidance Generation Heuristics',
        estimatedTime: '4-5 hours'
      },
      {
        id: 't-3-5',
        title: 'Local Heuristic Fallbacks',
        description: 'Ensure app gracefully handles network dropouts with fast offline client heuristics.',
        status: 'Not Started',
        difficulty: 'Intermediate',
        why: 'Campus Wi-Fi is notoriously flaky; local fallback keeps the experience smooth.',
        dependsOn: 'Guidance Generation Heuristics',
        estimatedTime: '3-4 hours'
      }
    ]
  },
  {
    id: 'mod-4',
    number: '04',
    name: 'Data & Authentication',
    summary: 'Manage users and data storage',
    taskCount: 4,
    tasks: [
      {
        id: 't-4-1',
        title: 'Supabase Database Schema Setup',
        description: 'Create tables for users, project blueprints, captured photos/results, and metadata.',
        status: 'Not Started',
        difficulty: 'Intermediate',
        why: 'Structured schema ensures clean querying and fast persistence.',
        dependsOn: 'Supabase account & project keys',
        estimatedTime: '3-4 hours'
      },
      {
        id: 't-4-2',
        title: 'User Authentication Flow',
        description: 'Implement passwordless magic-link or email login with session tokens.',
        status: 'Not Started',
        difficulty: 'Intermediate',
        why: 'Protects user privacy and enables cross-device synchronization.',
        dependsOn: 'Supabase Database Schema Setup',
        estimatedTime: '4-5 hours'
      },
      {
        id: 't-4-3',
        title: 'Media Asset Cloud Storage Bucket',
        description: 'Configure secure bucket with public CDN URLs for generated portraits or attachments.',
        status: 'Not Started',
        difficulty: 'Beginner',
        why: 'Prevents overloading database storage with binary image blobs.',
        dependsOn: 'Supabase Database Schema Setup',
        estimatedTime: '2-3 hours'
      },
      {
        id: 't-4-4',
        title: 'Local Storage State Fallback',
        description: 'Cache working draft data locally so unsaved progress is never lost during refresh.',
        status: 'Not Started',
        difficulty: 'Beginner',
        why: 'Guarantees reliable student experience even before account creation.',
        dependsOn: 'Application Shell',
        estimatedTime: '2-3 hours'
      }
    ]
  },
  {
    id: 'mod-5',
    number: '05',
    name: 'Testing & Deployment',
    summary: 'Test the application and prepare for launch',
    taskCount: 3,
    tasks: [
      {
        id: 't-5-1',
        title: 'End-to-End Hallway User Testing',
        description: 'Conduct guided test runs with 5 target students in campus environment; log friction points.',
        status: 'Not Started',
        difficulty: 'Intermediate',
        why: 'Validates that real beginners can follow the 3-word guidance without confusion.',
        dependsOn: 'Core Logic & UI modules',
        estimatedTime: '4-6 hours'
      },
      {
        id: 't-5-2',
        title: 'Production Build & Vercel Deployment',
        description: 'Configure Vite production bundle, environment secrets, and custom subdomain deployment.',
        status: 'Not Started',
        difficulty: 'Beginner',
        why: 'Gives the project a live URL to share with judges, mentors, and classmates.',
        dependsOn: 'All preceding modules',
        estimatedTime: '2-3 hours'
      },
      {
        id: 't-5-3',
        title: 'Project Showcase & Demo Documentation',
        description: 'Prepare 2-minute video walkthrough, README architecture map, and slide deck summary.',
        status: 'Not Started',
        difficulty: 'Beginner',
        why: 'Presents the finished project with professional architectural clarity.',
        dependsOn: 'Production Build & Vercel Deployment',
        estimatedTime: '3-4 hours'
      }
    ]
  }
];

export const DEFAULT_ROADMAP_WEEKS = [
  {
    weekNumber: 1,
    title: 'Foundation',
    range: 'Days 1–7',
    color: 'blue',
    tasks: [
      { id: 'rw-1-1', title: 'Set up development environment', done: true, status: 'In Progress' },
      { id: 'rw-1-2', title: 'Create project structure', done: true, status: 'Done' },
      { id: 'rw-1-3', title: 'Setup version control (GitHub)', done: false, status: 'Pending' }
    ]
  },
  {
    weekNumber: 2,
    title: 'User Interface',
    range: 'Days 8–14',
    color: 'blue',
    tasks: [
      { id: 'rw-2-1', title: 'Build main screens', done: false, status: 'Pending' },
      { id: 'rw-2-2', title: 'Implement basic navigation', done: false, status: 'Pending' },
      { id: 'rw-2-3', title: 'Design UI components', done: false, status: 'Pending' }
    ]
  },
  {
    weekNumber: 3,
    title: 'Core Functionality',
    range: 'Days 15–21',
    color: 'purple',
    tasks: [
      { id: 'rw-3-1', title: 'Camera integration', done: false, status: 'Pending' },
      { id: 'rw-3-2', title: 'AI analysis module', done: false, status: 'Pending' },
      { id: 'rw-3-3', title: 'Guidance generation', done: false, status: 'Pending' }
    ]
  },
  {
    weekNumber: 4,
    title: 'Data & Testing',
    range: 'Days 22–28',
    color: 'green',
    tasks: [
      { id: 'rw-4-1', title: 'User authentication', done: false, status: 'Pending' },
      { id: 'rw-4-2', title: 'Store project data', done: false, status: 'Pending' },
      { id: 'rw-4-3', title: 'Test complete flow', done: false, status: 'Pending' }
    ]
  }
];

export const ROADMAP_METRICS = {
  totalTasks: 14,
  majorMilestones: 4,
  estimatedTime: '4 Weeks',
  mvpRelease: '1 MVP Release'
};
