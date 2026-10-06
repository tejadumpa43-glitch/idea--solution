import React, { useState } from 'react';
import { 
  Rocket, 
  Terminal, 
  Code2, 
  CheckSquare, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Sparkles, 
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Step3BuildLaunch({ 
  project = {}, 
  onBackToStep2,
  onGoToDashboard 
}) {
  const [copiedKey, setCopiedKey] = useState(null);
  const [activeTab, setActiveTab] = useState('sprint'); // 'sprint' | 'scaffold' | 'ai-prompts' | 'deploy'

  const [sprintTasks, setSprintTasks] = useState([
    { id: 'st-1', title: 'Initialize Git repo and push to GitHub', done: true, tag: 'Setup' },
    { id: 'st-2', title: 'Scaffold React + Vite project structure', done: true, tag: 'Foundation' },
    { id: 'st-3', title: 'Build Core Viewfinder and Camera stream access', done: false, tag: 'Module 02' },
    { id: 'st-4', title: 'Implement real-time HUD direction prompt state machine', done: false, tag: 'Module 03' },
    { id: 'st-5', title: 'Integrate smart shutter lock guard for quality photos', done: false, tag: 'Module 03' },
    { id: 'st-6', title: 'Connect Supabase backend for saving results', done: false, tag: 'Module 04' },
    { id: 'st-7', title: 'Run live hallway test with 5 target campus students', done: false, tag: 'Validation' }
  ]);

  const toggleTask = (id) => {
    setSprintTasks(sprintTasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const completedCount = sprintTasks.filter(t => t.done).length;
  const progressPct = Math.round((completedCount / sprintTasks.length) * 100);

  const projectName = project?.title || 'YOUR PROJECT';

  const terminalCommands = `# 1. Clone your repo or create project directory
mkdir -p "${projectName.toLowerCase().replace(/[^a-z0-9]/g, '-')}" && cd "$_"

# 2. Scaffold Vite + React app
npm create vite@latest ./ -- --template react

# 3. Install core dependencies (icons, styling, database)
npm install lucide-react @supabase/supabase-js canvas-confetti

# 4. Start local development server
npm run dev`;

  const aiPrompts = [
    {
      title: 'Prompt: Camera Viewfinder with MediaPipe / Video Stream',
      prompt: `Act as a senior creative technologist. I am building "${projectName}". 
Create a React component that opens the device camera feed, requests 1080p stream with facingMode "environment", and mounts a minimal translucent HUD overlay. 
Include error handling for permission denials and fallback mock video. Make the code modular and clean.`
    },
    {
      title: 'Prompt: Real-Time Direction HUD State Machine',
      prompt: `Create a lightweight heuristic rule engine in JavaScript for "${projectName}". 
It should analyze bounding box metrics:
- Distance: Prompts "Step 2 steps closer" if face < 15% frame width
- Framing: Prompts "Tilt down slightly" if eyes are in top 10%
- Lighting: Prompts "Turn toward the light" if left-right luminance delta > 40%
Output simple 2-to-3 word instructions that update smoothly.`
    },
    {
      title: 'Prompt: Supabase Database Schema & Storage',
      prompt: `Generate SQL schema for Supabase to support "${projectName}".
Include:
- projects table (id, user_id, title, status, blueprint_json)
- captured_sessions table (id, project_id, image_url, metrics, created_at)
- Row Level Security (RLS) policies allowing authenticated users to read and insert their own data.`
    }
  ];

  const handleTriggerLaunchCelebration = () => {
    try {
      confetti({ particleCount: 120, spread: 100, origin: { y: 0.5 } });
    } catch(e) {}
  };

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">01 SPRINT 1 EXECUTION</div>
        <div className="stage-step-count">Step 3 of 3</div>
      </div>

      <div className="build-launch-container">
        {/* Title row */}
        <div className="build-launch-header">
          <div className="screen-header-block">
            <h1 className="screen-main-title">Build & Launch: {projectName}</h1>
            <p className="screen-main-subtitle">
              Your architectural plan is locked. Now let's execute Sprint 1 and ship your MVP prototype.
            </p>
          </div>

          <div className="launch-header-actions">
            <button 
              type="button" 
              className="btn-launch-celebrate"
              onClick={handleTriggerLaunchCelebration}
            >
              <Rocket size={16} />
              <span>Celebrate Milestone!</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs for Step 3 */}
        <div className="build-nav-tabs">
          <button 
            className={`build-tab-btn ${activeTab === 'sprint' ? 'active-build-tab' : ''}`}
            onClick={() => setActiveTab('sprint')}
          >
            <CheckSquare size={16} />
            <span>Sprint 1 Tasks</span>
          </button>

          <button 
            className={`build-tab-btn ${activeTab === 'scaffold' ? 'active-build-tab' : ''}`}
            onClick={() => setActiveTab('scaffold')}
          >
            <Terminal size={16} />
            <span>Terminal Setup</span>
          </button>

          <button 
            className={`build-tab-btn ${activeTab === 'ai-prompts' ? 'active-build-tab' : ''}`}
            onClick={() => setActiveTab('ai-prompts')}
          >
            <Sparkles size={16} />
            <span>AI Code Prompts</span>
          </button>

          <button 
            className={`build-tab-btn ${activeTab === 'deploy' ? 'active-build-tab' : ''}`}
            onClick={() => setActiveTab('deploy')}
          >
            <Zap size={16} />
            <span>Deployment Guide</span>
          </button>
        </div>

        {/* Tab 1: Sprint 1 Task Execution Board */}
        {activeTab === 'sprint' && (
          <div className="build-tab-content animate-fade-in">
            <div className="sprint-board-card">
              <div className="sprint-board-header">
                <div className="sprint-header-left">
                  <h3 className="sprint-title">Sprint 1 Execution Checklist</h3>
                  <span className="sprint-subtext">Focus only on your Must-Have capabilities for MVP launch.</span>
                </div>
                <div className="sprint-progress-pill">
                  {completedCount} of {sprintTasks.length} Done ({progressPct}%)
                </div>
              </div>

              <div className="sprint-progress-track">
                <div className="sprint-progress-fill" style={{ width: `${progressPct}%` }}></div>
              </div>

              <div className="sprint-tasks-list">
                {sprintTasks.map((t) => (
                  <div 
                    key={t.id}
                    className={`sprint-task-row ${t.done ? 'task-is-done' : ''}`}
                    onClick={() => toggleTask(t.id)}
                  >
                    <div className="task-row-checkbox-wrap">
                      <input 
                        type="checkbox"
                        checked={t.done}
                        onChange={() => {}}
                        className="sprint-checkbox"
                      />
                      <span className="sprint-task-text">{t.title}</span>
                    </div>

                    <span className="sprint-tag-pill">{t.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Terminal Setup */}
        {activeTab === 'scaffold' && (
          <div className="build-tab-content animate-fade-in">
            <div className="terminal-card">
              <div className="terminal-card-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="terminal-title">bash — quickstart commands</span>
                <button 
                  className="btn-copy-terminal"
                  onClick={() => copyToClipboard(terminalCommands, 'term-cmd')}
                >
                  {copiedKey === 'term-cmd' ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedKey === 'term-cmd' ? 'Copied' : 'Copy Commands'}</span>
                </button>
              </div>

              <pre className="terminal-code-body">
                <code>{terminalCommands}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Tab 3: AI Code Prompts */}
        {activeTab === 'ai-prompts' && (
          <div className="build-tab-content animate-fade-in">
            <div className="ai-prompts-grid">
              {aiPrompts.map((p, idx) => (
                <div key={idx} className="ai-prompt-card">
                  <div className="prompt-card-header">
                    <h4 className="prompt-title">{p.title}</h4>
                    <button 
                      className="btn-copy-prompt"
                      onClick={() => copyToClipboard(p.prompt, `prompt-${idx}`)}
                    >
                      {copiedKey === `prompt-${idx}` ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedKey === `prompt-${idx}` ? 'Copied' : 'Copy Prompt'}</span>
                    </button>
                  </div>
                  <pre className="prompt-code-body">
                    <code>{p.prompt}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Deployment Guide */}
        {activeTab === 'deploy' && (
          <div className="build-tab-content animate-fade-in">
            <div className="deploy-guide-card">
              <h3>Deploying Your Project to Vercel in 2 Minutes</h3>
              <ol className="deploy-steps-list">
                <li>
                  <strong>Push code to GitHub:</strong> Ensure your main branch is updated and clean.
                </li>
                <li>
                  <strong>Connect Vercel:</strong> Go to <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>, click <em>Add New Project</em>, and select your repository.
                </li>
                <li>
                  <strong>Configure Environment Variables:</strong> If using Supabase, add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code>.
                </li>
                <li>
                  <strong>Click Deploy:</strong> Your app will be live on a <code>.vercel.app</code> domain with automatic HTTPS.
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* Bottom Actions Row */}
        <div className="screen-actions-row">
          <button className="btn-secondary-back" onClick={onBackToStep2}>
            <ArrowLeft size={16} />
            <span>Back to Step 2 Plan</span>
          </button>
          <button className="btn-primary-continue" onClick={onGoToDashboard}>
            <span>Return to Dashboard</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
