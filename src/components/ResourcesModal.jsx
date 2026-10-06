import React, { useState } from 'react';
import { 
  Boxes, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Users, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function ResourcesModal({ 
  onStartNewProject 
}) {
  const [copiedSection, setCopiedSection] = useState(null);

  const copyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const blankTemplate = `# PROJECT BLUEPRINT [BLANK SPEC]
01 — PROJECT NAME: 
02 — PURPOSE: Why are we building this?
03 — PROBLEM: What specific friction are we solving?
04 — USERS: Who is the primary target persona?
05 — CURRENT WORKFLOW: Step 1 -> Step 2 -> Step 3 -> Step 4
06 — PAIN POINT: Where does the current workflow break?
07 — USER NEED: What does the human actually need?
08 — GOAL: What metric or outcome improves?
09 — SOLUTION: Proposed core proposition in 1 sentence
10 — CORE FEATURES:
  - MUST HAVE: (Max 3-4 items)
  - GOOD TO HAVE:
  - FUTURE:
11 — USER FLOW: Screen 1 -> Screen 2 -> Screen 3
12 — TECHNOLOGY: Client / DB / Intelligence
13 — MVP DEFINITION: The smallest useful testable version
14 — NEXT STEPS: Day 1-2 / Day 3-5 / Day 6-7 plan
`;

  return (
    <div className="resources-page-container animate-fade-in">
      <div className="resources-hero">
        <div className="resources-tag">STUDENT BUILDER TOOLKIT</div>
        <h1>Architect Resources & Blueprints</h1>
        <p>Curated templates, student-tested tech stacks, and user interview heuristics.</p>
      </div>

      <div className="resources-grid">
        {/* 1. Blank Blueprint Spec */}
        <div className="resource-card">
          <div className="res-card-top">
            <FileText size={18} className="icon-blue" />
            <h3>Blank 14-Section Blueprint</h3>
          </div>
          <p>
            The standard markdown specification template used across all IDEA → SOLUTION projects.
          </p>
          <div className="res-code-preview">
            <pre>{blankTemplate.slice(0, 240)}...</pre>
          </div>
          <button 
            className="btn-res-action"
            onClick={() => copyText(blankTemplate, 'blank-tpl')}
          >
            {copiedSection === 'blank-tpl' ? <Check size={14} /> : <Copy size={14} />}
            <span>{copiedSection === 'blank-tpl' ? 'Copied Template!' : 'Copy Blank Template'}</span>
          </button>
        </div>

        {/* 2. Hallway Interview Guide */}
        <div className="resource-card">
          <div className="res-card-top">
            <Users size={18} className="icon-emerald" />
            <h3>5-Question Hallway Interview Guide</h3>
          </div>
          <p>
            Ask these 5 questions to 5 students in your dorm lounge before touching a database:
          </p>
          <ul className="res-list">
            <li>1. "When was the last time you dealt with [problem]?"</li>
            <li>2. "What was the hardest or most annoying part about it?"</li>
            <li>3. "What workaround or hack did you use to solve it?"</li>
            <li>4. "Why did that workaround feel unsatisfying?"</li>
            <li>5. "If a tool did [core action] in 30 seconds, would you use it?"</li>
          </ul>
          <button 
            className="btn-res-action"
            onClick={() => copyText("1. When was the last time you dealt with [problem]?\n2. What was the hardest part?\n3. What workaround did you use?\n4. Why was that unsatisfying?\n5. If a tool did [core action] in 30s, would you use it?", 'interview')}
          >
            {copiedSection === 'interview' ? <Check size={14} /> : <Copy size={14} />}
            <span>{copiedSection === 'interview' ? 'Copied Questions!' : 'Copy Interview Script'}</span>
          </button>
        </div>

        {/* 3. Recommended Student Tech Stack */}
        <div className="resource-card">
          <div className="res-card-top">
            <Cpu size={18} className="icon-purple" />
            <h3>The 48-Hour Student Stack</h3>
          </div>
          <p>
            Avoid infrastructure traps. Use this zero-cost, high-velocity development stack:
          </p>
          <div className="tech-pills-row">
            <div className="tech-pill">
              <strong>Frontend:</strong> React + Vite + Vanilla CSS
            </div>
            <div className="tech-pill">
              <strong>Hosting:</strong> Vercel / Netlify / GitHub Pages (Free)
            </div>
            <div className="tech-pill">
              <strong>Database & Auth:</strong> Supabase (PostgreSQL with instant REST)
            </div>
            <div className="tech-pill">
              <strong>Icons:</strong> Lucide React
            </div>
            <div className="tech-pill">
              <strong>AI/Vision:</strong> MediaPipe / HuggingFace Inference API
            </div>
          </div>
          <button 
            className="btn-res-action"
            onClick={onStartNewProject}
          >
            <span>Start a Project with this Stack →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
