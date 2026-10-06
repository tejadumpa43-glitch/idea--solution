// AI Project Architect Engine
// Simulates an experienced project mentor and architect guiding students from raw idea to blueprint.

export const CONVERSATION_STAGES = [
  { id: 'purpose', name: '01 Purpose', promptKey: 'purpose', weight: 15 },
  { id: 'users', name: '02 Users', promptKey: 'users', weight: 15 },
  { id: 'context', name: '03 Context & Timing', promptKey: 'context', weight: 10 },
  { id: 'workflow', name: '04 Current Workflow', promptKey: 'workflow', weight: 15 },
  { id: 'pain_point', name: '05 Pain Point', promptKey: 'painPoint', weight: 15 },
  { id: 'user_need', name: '06 User Need', promptKey: 'userNeed', weight: 15 },
  { id: 'goal', name: '07 Desired Goal', promptKey: 'goal', weight: 15 }
];

export const INITIAL_GREETING = {
  sender: 'architect',
  text: "Tell me about your idea. Don't worry about making it perfect. Just tell me what's in your mind.",
  mentorTip: "Like an architect visiting the empty land, we start without judgment. Rough thoughts, messy sketches, or half-baked dreams are all welcome.",
  suggestions: [
    "I want to build an app that helps hostel students find healthy dinner options without waiting in line.",
    "What if someone who knows zero photography could take professional portrait photos with simple direction?",
    "A study buddy matching tool that pairs engineering students based on specific exam topics and study styles.",
    "A smart campus lost-and-found system that uses photo verification instead of messy WhatsApp posts."
  ]
};

// Intelligent heuristic assistant that understands student input and crafts the next question
export const generateArchitectResponse = (messageText, currentHistory = [], currentInsights = {}) => {
  const text = messageText.trim();
  const lower = text.toLowerCase();
  
  // Calculate turn count (architect turns)
  const architectTurns = currentHistory.filter(m => m.sender === 'architect').length;
  
  // Create copy of insights to mutate
  const newInsights = { ...currentInsights };

  // Step 1: First turn - user entered raw idea
  if (architectTurns === 1) {
    newInsights.purpose = extractPurposeFromRaw(text);
    newInsights.rawIdea = text;
    
    // Check if user already mentioned a specific user group
    const detectedUsers = extractUsers(lower);
    if (detectedUsers.isSpecific) {
      newInsights.users = detectedUsers.value;
      return {
        reply: `That's an exciting foundation: "${summarizeIdea(text)}".\n\nI noticed you mentioned ${detectedUsers.value}. Tell me about their context: When and where does this struggle hit them the hardest during a typical week?`,
        mentorTip: "Great architects observe the resident in their natural habitat. Pinpointing the exact moment of friction prevents you from building features nobody uses.",
        stage: 'context',
        insights: newInsights,
        suggestions: [
          "Usually around late evenings after classes or library hours.",
          "Right when exams or project deadlines are 48 hours away.",
          "During daily peak rush hours when everyone is overwhelmed."
        ]
      };
    } else if (detectedUsers.isVague) {
      // Respectfully challenge broad groups (e.g. "college students", "everyone", "people")
      return {
        reply: `That's a great starting point: "${summarizeIdea(text)}".\n\nYou mentioned "${detectedUsers.raw || 'people/students'}", but that's a very broad group. Which specific subset experiences this problem most acutely and feels the pain every single day?`,
        mentorTip: "Architect Rule: When you design a house for 'everyone', nobody loves it. First-year hostel students have very different pain points than commuting seniors.",
        stage: 'users',
        insights: newInsights,
        suggestions: [
          "Hostel students living in on-campus dorms",
          "Beginner students with zero prior technical knowledge",
          "Commuting students who travel 2+ hours daily",
          "Student founders trying to recruit technical teammates"
        ]
      };
    } else {
      return {
        reply: `I love the spark here. Let's ground this into reality.\n\nWho do you imagine using this first? Describe the exact person who will feel relief when this exists.`,
        mentorTip: "Always identify the actual human. Don't build for an abstract demographic; imagine Maya or Alex sitting in their dorm room.",
        stage: 'users',
        insights: newInsights,
        suggestions: [
          "Hostel students who live away from home for the first time",
          "Everyday phone users who want great photos without camera jargon",
          "Junior students struggling to find project mentors"
        ]
      };
    }
  }

  // Turn 2: User specified users
  if (!newInsights.users) {
    newInsights.users = text;
    return {
      reply: `Clear target: **${text}**.\n\nNow, walk me through their current experience. What do they currently do today when this problem happens? What's the messy workaround?`,
      mentorTip: "Before proposing a new bridge, study how people currently cross the river. If they use messy WhatsApp groups or manual spreadsheets, that's your benchmark.",
      stage: 'workflow',
      insights: newInsights,
      suggestions: [
        "They ask friends in WhatsApp groups or scroll Reddit endlessly.",
        "They point and take 40 bad photos, feeling frustrated with the result.",
        "They walk 15 minutes in person only to find out it's closed or crowded.",
        "They just endure the problem or give up entirely."
      ]
    };
  }

  // Turn 3: User described current workflow
  if (!newInsights.currentWorkflow) {
    newInsights.currentWorkflow = text;
    return {
      reply: `That current workflow sounds exhausting: "${summarizeShort(text)}".\n\nWhere exactly does this break down? What is the single biggest point of friction or emotional frustration for them?`,
      mentorTip: "Problem ≠ Solution. Don't jump to the app yet! Drill down on the specific wound. Is it wasted time, social embarrassment, or cognitive overload?",
      stage: 'pain_point',
      insights: newInsights,
      suggestions: [
        "Cognitive overload: they don't know what choices to make.",
        "Wasted time and energy with zero certainty of a good outcome.",
        "Information blackout right when they need to make a quick decision.",
        "High cost or awkwardness of asking for help."
      ]
    };
  }

  // Turn 4: User described pain point
  if (!newInsights.painPoint) {
    newInsights.painPoint = text;
    return {
      reply: `Understood: the real friction is **${text}**.\n\nIf we strip away all fancy tech, what does this person actually NEED at that exact moment? What is the core human need?`,
      mentorTip: "A customer doesn't need a 1/4-inch drill bit; they need a 1/4-inch hole in the wall. Focus on the direct human need, not the mechanism.",
      stage: 'user_need',
      insights: newInsights,
      suggestions: [
        "Simple, actionable real-time guidance that makes the decision effortless.",
        "Instant, reliable truth from peers before committing time.",
        "A safe, guided way to achieve professional results without training."
      ]
    };
  }

  // Turn 5: User described user need
  if (!newInsights.userNeed) {
    newInsights.userNeed = text;
    return {
      reply: `Spot on: they need **${text}**.\n\nNow let's define success: If our solution works wonders, what should become better? What changes for this person?`,
      mentorTip: "Every blueprint has a success metric. Is it 'takes 30 seconds instead of 40 minutes' or 'gives confidence on the first try'?",
      stage: 'goal',
      insights: newInsights,
      suggestions: [
        "They get great results on the first try in under 60 seconds.",
        "They save 30 minutes every evening and make healthier daily choices.",
        "They never waste a walk down the stairs or feel anxious about availability."
      ]
    };
  }

  // Turn 6: User described goal
  if (!newInsights.goal) {
    newInsights.goal = text;
    
    // Synthesize proposed solution
    const proposedSolution = synthesizeSolution(newInsights);
    newInsights.proposedSolution = proposedSolution;
    
    return {
      reply: `Fantastic clarity! We now have the complete architectural foundation for your idea.\n\n**Here is what we have uncovered together:**\n• **Users:** ${newInsights.users}\n• **Pain Point:** ${newInsights.painPoint}\n• **Core Need:** ${newInsights.userNeed}\n• **Target Goal:** ${newInsights.goal}\n\n**Proposed Core Solution:**\n${proposedSolution}\n\nShall we review and lock down **"Your Idea So Far"** before moving into feature prioritization?`,
      mentorTip: "Notice how we arrived at the solution naturally through understanding the user and problem, rather than guessing random features! This is how world-class architects work.",
      stage: 'ready_for_review',
      insights: newInsights,
      isReadyForReview: true,
      suggestions: [
        "Let's review 'Your Idea So Far'!",
        "Can we refine the target users a bit more?",
        "What core features would this need?"
      ]
    };
  }

  // Extended conversational turns if user continues chatting
  return {
    reply: `I've noted that additional nuance: "${summarizeShort(text)}". Every bit of context makes your project blueprint more robust.\n\nYour foundation is strong enough to review in **"Your Idea So Far"** or proceed straight to **Solution & Features**. What would you like to do?`,
    mentorTip: "Keep your scope tight. You now possess the blueprint clarity that 90% of student builders lack before writing code.",
    stage: 'refinement',
    insights: newInsights,
    isReadyForReview: true,
    suggestions: [
      "Review 'Your Idea So Far'",
      "Proceed to Build the Solution & Features",
      "I want to add another detail about the users"
    ]
  };
};

// Helper utilities for NLP heuristics
function extractUsers(text) {
  const vagueTerms = ['everyone', 'all students', 'anybody', 'people', 'college students', 'users'];
  for (const v of vagueTerms) {
    if (text.includes(v)) {
      return { isVague: true, raw: v };
    }
  }

  const specificMatches = [
    { pattern: 'hostel', label: 'Hostel / Dormitory students' },
    { pattern: 'freshmen', label: 'First-year / Freshmen students' },
    { pattern: 'first year', label: 'First-year college students' },
    { pattern: 'photo', label: 'People with zero photography training' },
    { pattern: 'beginner', label: 'Beginners trying a complex task' },
    { pattern: 'commuter', label: 'Daily commuter students' }
  ];

  for (const m of specificMatches) {
    if (text.includes(m.pattern)) {
      return { isSpecific: true, value: m.label };
    }
  }

  return { isSpecific: false, isVague: false };
}

function extractPurposeFromRaw(text) {
  if (text.length > 200) {
    return text.substring(0, 197) + '...';
  }
  return text;
}

function summarizeIdea(text) {
  const cleaned = text.replace(/^(i want to build|i want an app that|an app for|build a|create a)\s+/i, '');
  if (cleaned.length > 60) {
    return cleaned.substring(0, 57) + '...';
  }
  return cleaned;
}

function summarizeShort(text) {
  if (text.length > 70) {
    return text.substring(0, 67) + '...';
  }
  return text;
}

function synthesizeSolution(insights) {
  const users = insights.users || 'target users';
  const need = insights.userNeed || 'solve their daily friction';
  const goal = insights.goal || 'reach better results easily';
  
  return `A targeted, minimal application designed specifically for ${users} that delivers ${need}, ensuring ${goal}. The system handles technical complexity behind the scenes while presenting the user with calm, simple guidance.`;
}

// Generate smart initial feature suggestions based on user insights
export const generateSuggestedFeatures = (insights) => {
  const raw = (insights.rawIdea || '') + ' ' + (insights.purpose || '') + ' ' + (insights.painPoint || '');
  const lower = raw.toLowerCase();

  // If photography or visual
  if (lower.includes('photo') || lower.includes('camera') || lower.includes('click') || lower.includes('portrait')) {
    return [
      {
        id: 'f-1',
        name: 'Live Scene & Lighting Evaluator',
        category: 'MUST HAVE',
        explanation: 'Detects facial distance, lighting angle, and rule-of-thirds positioning in real-time.',
        whyItSolves: 'Removes the cognitive burden of calculating photography theory.'
      },
      {
        id: 'f-2',
        name: 'Conversational 3-Word Guidance HUD',
        category: 'MUST HAVE',
        explanation: 'Whispers direct instructions: "Move closer", "Turn to window", "Hold steady".',
        whyItSolves: 'Turns complex composition into instant, brainless micro-actions.'
      },
      {
        id: 'f-3',
        name: 'Smart Shutter Lock Assist',
        category: 'MUST HAVE',
        explanation: 'Enables shutter capture only when alignment and lighting hit golden marks.',
        whyItSolves: 'Guarantees the first shot is gallery-grade instead of taking 40 discards.'
      },
      {
        id: 'f-4',
        name: 'Inspiration Pose & Framing Matcher',
        category: 'GOOD TO HAVE',
        explanation: 'Transparent reference overlay to mimic favorite editorial portraits.',
        whyItSolves: 'Gives beginner models confident pose direction.'
      },
      {
        id: 'f-5',
        name: 'Before / After Comparison Reveal',
        category: 'GOOD TO HAVE',
        explanation: 'Interactive split screen showing standard camera vs. directed result.',
        whyItSolves: 'Provides instant visual validation of quality improvement.'
      },
      {
        id: 'f-6',
        name: 'AI Group Portrait Director',
        category: 'FUTURE',
        explanation: 'Coordinates positioning for groups of 3+ people.',
        whyItSolves: 'Expands utility beyond solo portraiture.'
      }
    ];
  }

  // If food / dining / mess
  if (lower.includes('food') || lower.includes('mess') || lower.includes('meal') || lower.includes('dinner')) {
    return [
      {
        id: 'f-1',
        name: 'Real-Time Crowd & Quality Pulse (5s Poll)',
        category: 'MUST HAVE',
        explanation: '1-tap student voting on current food freshness, menu accuracy, and queue length.',
        whyItSolves: 'Provides accurate real-time truth before students walk across campus.'
      },
      {
        id: 'f-2',
        name: 'Healthy Campus Backup Recommender',
        category: 'MUST HAVE',
        explanation: 'Shows top 3 nutritious, low-budget meal alternatives within 500 meters.',
        whyItSolves: 'Directly stops impulsive late-night ordering of oily junk food.'
      },
      {
        id: 'f-3',
        name: 'Peak Hour Queue Wait-Time Meter',
        category: 'MUST HAVE',
        explanation: 'Visual gauge showing estimated wait times in the dining hall.',
        whyItSolves: 'Saves students 25+ minutes of standing in chaotic lines.'
      },
      {
        id: 'f-4',
        name: 'Daily Nutritional Value Breakdown',
        category: 'GOOD TO HAVE',
        explanation: 'Approximates protein and calorie estimates for today’s menu items.',
        whyItSolves: 'Supports students with fitness or dietary targets.'
      },
      {
        id: 'f-5',
        name: 'Mess Menu Calendar & Favorites Alert',
        category: 'GOOD TO HAVE',
        explanation: 'Sends notification when favorite special dishes are scheduled.',
        whyItSolves: 'Ensures students never miss their favorite meals.'
      },
      {
        id: 'f-6',
        name: 'Direct Canteen Pre-order & Pickup',
        category: 'FUTURE',
        explanation: 'Pre-order takeaway meals to skip counter wait completely.',
        whyItSolves: 'Full end-to-end commerce integration for campus.'
      }
    ];
  }

  // Generic / default smart blueprint features
  return [
    {
      id: 'f-1',
      name: 'Single-Purpose Action Hub',
      category: 'MUST HAVE',
      explanation: 'Zero clutter interface focusing purely on the primary user need with zero setup.',
      whyItSolves: 'Eliminates friction and delivers immediate value within 30 seconds.'
    },
    {
      id: 'f-2',
      name: 'Live Real-Time Status & Feedback Loop',
      category: 'MUST HAVE',
      explanation: 'Provides instant visual clarity on availability, status, or guided instructions.',
      whyItSolves: 'Directly resolves the information blackout identified in user research.'
    },
    {
      id: 'f-3',
      name: 'Contextual Smart Notifications',
      category: 'MUST HAVE',
      explanation: 'Alerts the user at the exact moment of decision without spamming.',
      whyItSolves: 'Delivers information at the right time in the user workflow.'
    },
    {
      id: 'f-4',
      name: 'Peer Collaboration & Shared State',
      category: 'GOOD TO HAVE',
      explanation: 'Allows teammates or dorm mates to contribute status updates together.',
      whyItSolves: 'Distributes the data collection effort across the student community.'
    },
    {
      id: 'f-5',
      name: 'History & Personal Impact Metrics',
      category: 'GOOD TO HAVE',
      explanation: 'Shows time saved and weekly habit trends.',
      whyItSolves: 'Reinforces positive retention and habit formation.'
    },
    {
      id: 'f-6',
      name: 'Campus Automated Integration / Hardware Sensors',
      category: 'FUTURE',
      explanation: 'Automates manual polling via IoT or official college API integrations.',
      whyItSolves: 'Eliminates reliance on user-generated submissions in version 2.'
    }
  ];
};
