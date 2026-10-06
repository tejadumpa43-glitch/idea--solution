// Pre-configured projects data and blueprint structures

export const JUST_A_CLICK_PROJECT = {
  id: 'just-a-click',
  title: 'JUST A CLICK',
  subtitle: 'Professional Photography Application',
  tagline: 'What if a person who knows nothing about photography could click a professional portrait?',
  category: 'Photography / Computer Vision / Creative Technology',
  status: 'Blueprint 100% complete',
  progress: 100,
  updatedAt: 'Just now',
  createdAt: '2026-10-06',
  isExample: true,
  featured: true,
  corePhilosophy: 'The user sees simplicity. The system handles complexity.',
  
  // High level concept
  concept: {
    rawIdea: "I want anyone, even someone with zero camera knowledge, to be able to take an editorial-grade portrait on their phone without having to learn lighting or settings.",
    analogy: "Creating a professional portrait requires dozens of photographic micro-decisions (composition, lighting, framing, camera angle, exposure, depth of field) that beginners do not know how to make. An architect doesn't ask a resident to calculate stress loads; the architect designs the structure so living in it is effortless. Similarly, Just A Click handles every technical calculation and whispers 3-word guidance to the photographer.",
    vision: "Make professional-looking portrait photography accessible to people without photography knowledge."
  },

  // 14 Blueprint Sections
  blueprint: {
    project: {
      name: 'JUST A CLICK',
      code: 'JAC-01',
      category: 'Photography & AI Vision',
      stage: 'Blueprint Complete — Ready for Sprint 1'
    },
    purpose: {
      title: 'Why are we building this?',
      summary: 'Portrait photography is a universal human desire (capturing memories, LinkedIn headshots, family milestones, creative portraits), but 95% of people feel awkward behind the lens and end up with unflattering, poorly lit photos. We are democratizing the artistic intuition of world-class photographers through real-time ambient guidance.'
    },
    problem: {
      title: 'What problem are we solving?',
      summary: 'Creating a professional-looking portrait requires dozens of simultaneous decisions that beginners do not know how to make: lighting direction, rule-of-thirds alignment, lens distortion compensation, subject distance, and flattering camera angles. Traditional camera apps dump complex sliders (ISO, shutter speed, EV, grid lines) onto novices, worsening their cognitive overload.'
    },
    users: {
      title: 'Who are we solving it for?',
      primary: 'Everyday smartphone users and beginners who want great portraits of their friends, family, or partners without photography knowledge.',
      secondary: 'Solo content creators, college students needing professional LinkedIn headshots, and event attendees.',
      persona: 'Maya (21, College Student): Wants to take great pictures of her roommate for job applications and Instagram, but her photos always look washed out, blurry, or have awkward double-chin angles.'
    },
    currentWorkflow: {
      title: 'How do users currently deal with it?',
      steps: [
        { step: 1, text: 'Open default smartphone camera app' },
        { step: 2, text: 'Point randomly at the subject with no sense of natural light source' },
        { step: 3, text: 'Take 40 rapid burst photos from chest level' },
        { step: 4, text: 'Review photos and feel disappointed (harsh shadows, flat faces, cluttered background)' },
        { step: 5, text: 'Apply aggressive Instagram/VSCO filters to mask bad lighting, resulting in an artificial look' }
      ]
    },
    painPoint: {
      title: 'Where is the problem?',
      summary: 'Cognitive paralysis and lack of spatial intuition. Novices do not know how to evaluate ambient light, calculate golden distance (usually 1.8m - 2.2m for 50mm equivalent portraits), or position the camera at eye-level to prevent unflattering perspective distortion.'
    },
    userNeed: {
      title: 'What do they actually need?',
      summary: 'Simple real-time directional guidance that translates master photography techniques into bite-sized, actionable 2-3 word human instructions.'
    },
    goal: {
      title: 'What should improve?',
      summary: 'Any beginner can take a gallery-quality portrait on their first try in under 45 seconds, eliminating the need to take 40 throwaway shots.'
    },
    solution: {
      title: 'What are we proposing?',
      summary: 'An intelligent photography guidance application that analyzes the live camera feed through computer vision and translates composition, lighting, and framing into conversational audio/visual commands: "Move 2 steps closer", "Turn subject toward the window", "Lower camera slightly", "Hold steady... CLICK".'
    },
    coreFeatures: [
      {
        id: 'feat-1',
        name: 'Real-Time Scene & Lighting Analyzer',
        category: 'MUST HAVE',
        explanation: 'Uses computer vision to detect ambient light vectors, distance to subject face, and background contrast.',
        whyItSolves: 'Directly removes the guesswork of whether lighting is flattering or harsh.'
      },
      {
        id: 'feat-2',
        name: 'Conversational HUD Direction Overlay',
        category: 'MUST HAVE',
        explanation: 'Displays minimal 2-word live prompts ("Step Closer", "Tilt Down", "Turn to Light", "Hold Steady").',
        whyItSolves: 'Translates complex optical rules into instantaneous micro-actions for zero-friction usability.'
      },
      {
        id: 'feat-3',
        name: 'Smart Shutter Lock & Auto-Capture Assist',
        category: 'MUST HAVE',
        explanation: 'Pulsing emerald ring that activates shutter only when framing, lighting, and focus meet editorial criteria.',
        whyItSolves: 'Guarantees that when the shutter clicks, the shot is technically and aesthetically aligned.'
      },
      {
        id: 'feat-4',
        name: 'Natural Skin Tone & Ambient Balance Tuning',
        category: 'MUST HAVE',
        explanation: 'Subtle computational tone curves optimized for natural skin clarity without plastic skin-smoothing.',
        whyItSolves: 'Ensures portraits look authentic and magazine-grade without clownish beauty filters.'
      },
      {
        id: 'feat-5',
        name: 'Reference Image Composition Matcher',
        category: 'GOOD TO HAVE',
        explanation: 'Upload or pick an inspirational portrait (e.g., Vogue, cinematic stills) and live ghost overlay guides your angle.',
        whyItSolves: 'Gives users creative confidence to recreate iconic portrait styles.'
      },
      {
        id: 'feat-6',
        name: 'Golden Hour & Sun Path Finder',
        category: 'GOOD TO HAVE',
        explanation: 'AR compass indicating direction of the best natural window or golden hour sunlight.',
        whyItSolves: 'Teaches users to leverage free natural light.'
      },
      {
        id: 'feat-7',
        name: 'Instant Before / After Difference Reveal',
        category: 'GOOD TO HAVE',
        explanation: 'Split slider showing the photo with standard camera framing vs. the Just A Click directed portrait.',
        whyItSolves: 'Provides immediate feedback and reinforces the user’s sense of photographic achievement.'
      },
      {
        id: 'feat-8',
        name: 'Multi-Person Group Portrait Director',
        category: 'FUTURE',
        explanation: 'Directs groups of 3+ people on staggered heights and cohesive spacing.',
        whyItSolves: 'Expands scope from solo portraits to group photography.'
      },
      {
        id: 'feat-9',
        name: 'Interactive Photography Micro-Academy',
        category: 'FUTURE',
        explanation: 'Gamified 3-minute missions explaining why specific light ratios work.',
        whyItSolves: 'Transforms users from assisted clickers into confident independent photographers.'
      }
    ],
    userFlow: {
      title: 'How will the user interact with it?',
      steps: [
        { id: 'uf-1', name: 'Open Camera', detail: 'App opens directly into live camera viewfinder with minimal HUD' },
        { id: 'uf-2', name: 'Scene Scan', detail: 'System detects face at 3.2m with harsh backlighting from ceiling' },
        { id: 'uf-3', name: 'Ambient Guidance', detail: 'Haptic pulse + overlay: "Move 3 steps closer to subject"' },
        { id: 'uf-4', name: 'Angle Correction', detail: 'Audio prompt + compass: "Turn subject 30° toward the window"' },
        { id: 'uf-5', name: 'Height Alignment', detail: 'Level guide snaps: "Lower camera 4 inches to eye level"' },
        { id: 'uf-6', name: 'Lock & Click', detail: 'HUD flashes green: "Hold steady!" Shutter captures golden frame' },
        { id: 'uf-7', name: 'Editorial Polish', detail: 'Instant preview ready to share with professional depth-of-field' }
      ]
    },
    techResources: {
      title: 'What will be needed to build it?',
      items: [
        { domain: 'Client App', tech: 'React Native / Flutter or Progressive Web App (Camera API + WebGL)', why: 'Cross-platform mobile access with instant camera hardware acceleration' },
        { domain: 'Vision & Tracking', tech: 'MediaPipe Face Mesh + TensorFlow.js / CoreML', why: 'Real-time on-device facial landmark and distance estimation without sending video to cloud' },
        { domain: 'Lighting Heuristics', tech: 'Histogram Luminance Analyzer + Edge Detection shader', why: 'Calculates key-to-fill light ratio in real-time at 60fps' },
        { domain: 'Backend & Sync', tech: 'Supabase (PostgreSQL + Storage) / Firebase', why: 'Fast authentication, user gallery sync, and preset management' }
      ]
    },
    mvp: {
      title: 'What is the smallest useful version (MVP)?',
      summary: 'A web/mobile camera interface that performs 3 essential checks for solo portraits: 1) Face distance calculation (prompts to move closer/farther), 2) Rule-of-thirds eye-line alignment (prompts to lower/raise camera), 3) Face shadow detection (prompts to rotate toward brightest ambient light source). When all 3 are green, shutter captures.'
    },
    nextSteps: {
      title: 'What should the student build first?',
      actionPlan: [
        { day: 'Day 1-2', task: 'Build Camera Viewfinder with MediaPipe Face Mesh running locally in browser or React Native to calculate bounding box size.' },
        { day: 'Day 3-5', task: 'Code the 3 rule heuristics (Distance, Eye-line level, Light balance) and wire up the dynamic text HUD prompt state machine.' },
        { day: 'Day 6-7', task: 'Test with 5 friends in dim rooms and bright outdoors; refine instruction phrasing to be under 3 words.' }
      ]
    }
  },

  // Case study interactive breakdown for students
  caseStudy: {
    stages: [
      {
        stageNumber: '01',
        title: 'RAW IDEA',
        subtitle: 'The spark in the student’s mind',
        content: '"I want to build an app that takes professional photos for people."',
        critique: 'Vague! Does this mean automated filters? An expensive DSLR accessory? A booking platform for photographers? Without architecture, this idea goes nowhere.'
      },
      {
        stageNumber: '02',
        title: 'UNDERSTAND',
        subtitle: 'Digging for the real truth',
        content: 'Why does someone need this? Because a portrait represents identity. Everyone wants to look confident, artistic, and natural. But hiring a photographer costs $200, and standard phone cameras produce flat, sterile mugshots.'
      },
      {
        stageNumber: '03',
        title: 'PROBLEM',
        subtitle: 'The root breakdown',
        content: 'Great portraiture is 90% decision-making (direction, distance, light, height) and 10% pressing the shutter. Novices don’t lack camera sensors; they lack the 10 years of training to make those decisions.'
      },
      {
        stageNumber: '04',
        title: 'USERS',
        subtitle: 'Zooming in on the real human',
        content: 'Not "everyone with a phone." Specifically: everyday beginners who feel nervous taking photos of others and produce awkward results that frustrate both the photographer and the model.'
      },
      {
        stageNumber: '05',
        title: 'CURRENT WORKFLOW',
        subtitle: 'Observing the painful habit',
        content: 'Stand at standing eye-level → shoot 40 identical photos with overhead fluorescent lighting → flip through 40 bad photos → post nothing.'
      },
      {
        stageNumber: '06',
        title: 'PAIN POINT',
        subtitle: 'The exact friction',
        content: 'Cognitive overload. People don’t know what to change. They know the photo looks bad, but they don’t know if it’s the angle, the distance, or the shadow.'
      },
      {
        stageNumber: '07',
        title: 'USER NEED',
        subtitle: 'The human solution requirement',
        content: 'An invisible director standing next to them giving calm, ultra-simple instructions: "Step closer. Turn towards the window. Hold."'
      },
      {
        stageNumber: '08',
        title: 'SOLUTION',
        subtitle: 'The product definition',
        content: 'Just A Click: The camera that directs you like a magazine photographer. The user sees simplicity; the system handles the complexity.'
      },
      {
        stageNumber: '09',
        title: 'FEATURES & MVP',
        subtitle: 'Eliminating the non-essentials',
        content: 'Say NO to filters, social feeds, and sticker packs. Focus 100% on the core loop: Analyze → Guide → Lock → Capture.'
      },
      {
        stageNumber: '10',
        title: 'BLUEPRINT → BUILD',
        subtitle: 'Actionable execution',
        content: 'With complete clarity, the student knows the exact 3 computer vision algorithms to write on Monday morning.'
      }
    ]
  }
};

export const SAMPLE_PROJECTS = [
  JUST_A_CLICK_PROJECT,
  {
    id: 'campus-mess-radar',
    title: 'MESS RADAR',
    subtitle: 'Campus Dining & Healthy Meal Discovery',
    tagline: 'Help hostel students eat healthy without the dinner chaos.',
    category: 'Campus Living / Health Tech',
    status: 'Blueprint 85% complete',
    progress: 85,
    updatedAt: '2 hours ago',
    createdAt: '2026-10-04',
    isExample: true,
    featured: false,
    concept: {
      rawIdea: "An app for college hostel students to know what food is good today and avoid junk food when the mess menu is terrible.",
      analogy: "Like an airport flight board combined with nutritional triage for hungry students.",
      vision: "Empower 5,000+ campus residents to make healthy, fast, budget-friendly dining decisions every day."
    },
    blueprint: {
      project: { name: 'MESS RADAR', code: 'MR-02', category: 'Campus Living', stage: 'Blueprint Review' },
      purpose: { title: 'Why build this?', summary: 'Hostel students suffer from chronic nutrition deficits and wasted money because they skip bad mess meals and default to unhealthy fried street food.' },
      problem: { title: 'What problem?', summary: 'Students have no reliable way to know today’s live mess quality or wait times until they walk 15 minutes to the dining hall, leading to impulsive junk food delivery.' },
      users: { title: 'Who is it for?', primary: 'First and second year hostel students living on campus meal plans.' },
      currentWorkflow: {
        title: 'Current Workflow',
        steps: [
          { step: 1, text: 'Walk 10 minutes to mess hall' },
          { step: 2, text: 'Find 45-person queue and disappointing dish' },
          { step: 3, text: 'Ask friends in WhatsApp group what to order' },
          { step: 4, text: 'Order overpriced oily fast food at 10 PM' }
        ]
      },
      painPoint: { title: 'Pain Point', summary: 'Information blackout right at the 7:30 PM decision moment.' },
      userNeed: { title: 'User Need', summary: 'Real-time crowd feedback and healthy alternative suggestions within 500m of their dorm.' },
      goal: { title: 'Goal', summary: 'Reduce unhealthy takeout orders by 40% and save students 30 minutes every evening.' },
      solution: { title: 'Solution', summary: 'A peer-powered live mess status board with instant healthy campus alternative recommendations.' },
      coreFeatures: [
        { id: 'mr-1', name: 'Live Mess Vibe & Quality Polling (Thumbs Up/Down in 5s)', category: 'MUST HAVE', explanation: 'Instant 1-tap ratings from students eating right now.', whyItSolves: 'Provides real-time truth.' },
        { id: 'mr-2', name: 'Healthy Campus Backup Radar', category: 'MUST HAVE', explanation: 'Lists top 3 nutritious meals within walking distance under $3.', whyItSolves: 'Stops impulsive junk food ordering.' },
        { id: 'mr-3', name: 'Crowd & Queue Wait Meter', category: 'MUST HAVE', explanation: 'Community estimation of queue speed.', whyItSolves: 'Saves 25m of standing in lines.' },
        { id: 'mr-4', name: 'Dietary Preference Alerts (High Protein / Vegetarian)', category: 'GOOD TO HAVE', explanation: 'Filters items with good macro nutritional value.', whyItSolves: 'Catches fitness enthusiast needs.' }
      ],
      userFlow: {
        title: 'User Flow',
        steps: [
          { id: 'mr-f1', name: 'Check at 7:45 PM', detail: 'Open app to see Mess rating: 2.1/5 (Long line, burnt paneer)' },
          { id: 'mr-f2', name: 'View Smart Alternatives', detail: 'App highlights: North Canteen fresh fruit bowl + grilled sandwich (5m away, $2.20)' },
          { id: 'mr-f3', name: 'Make confident choice', detail: 'Head straight to healthy dinner with roommate in under 15 minutes' }
        ]
      },
      techResources: {
        title: 'Tech Stack',
        items: [
          { domain: 'Frontend', tech: 'React + Vite (PWA)', why: 'Fast mobile web loading with zero app store install friction' },
          { domain: 'Backend', tech: 'Supabase Realtime', why: 'Instant live voting broadcast across all active campus users' }
        ]
      },
      mvp: {
        title: 'MVP Definition',
        summary: 'Single page PWA showing today’s mess vote score + top 2 vetted healthy backups with live crowd timestamps.'
      },
      nextSteps: {
        title: 'Next Steps',
        actionPlan: [
          { day: 'Day 1-2', task: 'Deploy basic Supabase schema and student voting button.' },
          { day: 'Day 3-4', task: 'Map out 10 approved healthy campus food options.' },
          { day: 'Day 5', task: 'Share QR code in Block B hostel lounge.' }
        ]
      }
    }
  },
  {
    id: 'dorm-wash-sync',
    title: 'DORM WASH',
    subtitle: 'Smart Dorm Laundry Availability & Cycle Alerts',
    tagline: 'Never carry a heavy laundry basket down four flights of stairs for nothing.',
    category: 'IoT / Campus Utility',
    status: 'Blueprint 78% complete',
    progress: 78,
    updatedAt: 'Yesterday',
    createdAt: '2026-10-02',
    isExample: true,
    featured: false,
    concept: {
      rawIdea: "An app that shows if the hostel washing machines are free so you don't carry clothes down and find all machines occupied.",
      analogy: "Like Google Maps showing open parking spots, but for 8 shared washers in a 400-student dormitory.",
      vision: "Eliminate laundry anxiety and machine-hogging arguments across student residences."
    },
    blueprint: {
      project: { name: 'DORM WASH', code: 'DW-03', category: 'Campus Utility', stage: 'Blueprint Draft' },
      purpose: { title: 'Why build this?', summary: '400 students share 8 washing machines. People leave wet clothes inside for hours, causing constant hostel friction.' },
      problem: { title: 'What problem?', summary: 'Zero visibility into washer availability; students waste physical effort and time checking machines in person.' },
      users: { title: 'Who is it for?', primary: 'Hostel residents using communal laundry rooms.' },
      currentWorkflow: {
        title: 'Current Workflow',
        steps: [
          { step: 1, text: 'Pack heavy laundry hamper' },
          { step: 2, text: 'Walk down 4 flights of stairs to basement' },
          { step: 3, text: 'All 8 machines are running or full of forgotten clothes' },
          { step: 4, text: 'Trudge back upstairs irritated; try again 2 hours later' }
        ]
      },
      painPoint: { title: 'Pain Point', summary: 'Blind guesswork and lack of accountability for finishing cycles.' },
      userNeed: { title: 'User Need', summary: 'Live timer on every machine + automated reminder when your load finishes.' },
      goal: { title: 'Goal', summary: 'Zero wasted trips down stairs and 50% faster turnaround time for finished loads.' },
      solution: { title: 'Solution', summary: 'QR-code synchronized washer countdown timer and community courtesy notifier.' },
      coreFeatures: [
        { id: 'dw-1', name: '1-Tap QR Cycle Starter', category: 'MUST HAVE', explanation: 'Scan machine QR and select 30m / 45m wash cycle.', whyItSolves: 'Establishes clear countdown.' },
        { id: 'dw-2', name: 'Live Availability Board', category: 'MUST HAVE', explanation: 'Shows exactly how many minutes remain on all 8 washers.', whyItSolves: 'Check status before leaving dorm room.' },
        { id: 'dw-3', name: 'Courtesy Buzz Reminder', category: 'MUST HAVE', explanation: 'Sends SMS/Notification 5 minutes before cycle ends to free up washer.', whyItSolves: 'Prevents abandoned wet clothes.' }
      ],
      userFlow: {
        title: 'User Flow',
        steps: [
          { id: 'dw-f1', name: 'Check from desk', detail: 'See Washer #3 has 4 minutes left' },
          { id: 'dw-f2', name: 'Head down right on time', detail: 'Arrive as previous user removes clothes' },
          { id: 'dw-f3', name: 'Start & get buzzed', detail: 'Scan QR, start wash, receive phone ping when done' }
        ]
      },
      techResources: {
        title: 'Tech Stack',
        items: [
          { domain: 'Frontend', tech: 'React + Tailwind/CSS PWA', why: 'Instant access on student phones' },
          { domain: 'Database', tech: 'Firebase Cloud Firestore', why: 'Real-time document listeners for timer sync' }
        ]
      },
      mvp: {
        title: 'MVP Definition',
        summary: 'Web app with 8 machine cards, QR codes stuck on physical machines, and simple browser countdowns.'
      },
      nextSteps: {
        title: 'Next Steps',
        actionPlan: [
          { day: 'Day 1', task: 'Print 8 distinct QR stickers for basement laundry room.' },
          { day: 'Day 2', task: 'Build simple Firestore web page with 8 timer cards.' },
          { day: 'Day 3', task: 'Test with 20 floor mates.' }
        ]
      }
    }
  }
];

// LocalStorage helpers
const STORAGE_KEY = 'idea_to_solution_projects_v1';

export const loadSavedProjects = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_PROJECTS));
      return SAMPLE_PROJECTS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_PROJECTS));
      return SAMPLE_PROJECTS;
    }
    return parsed;
  } catch (e) {
    console.error('Error loading projects from storage:', e);
    return SAMPLE_PROJECTS;
  }
};

export const saveProjectToStore = (project) => {
  try {
    const current = loadSavedProjects();
    const existingIndex = current.findIndex(p => p.id === project.id);
    let updated;
    if (existingIndex >= 0) {
      updated = [...current];
      updated[existingIndex] = { ...project, updatedAt: 'Just now' };
    } else {
      updated = [project, ...current];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to save project:', e);
    return [];
  }
};

export const deleteProjectFromStore = (projectId) => {
  try {
    const current = loadSavedProjects();
    const filtered = current.filter(p => p.id !== projectId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  } catch (e) {
    console.error('Failed to delete project:', e);
    return [];
  }
};
