import React, { useState } from 'react';
import { 
  Hammer, 
  Terminal, 
  CheckSquare, 
  ArrowLeft, 
  GitBranch, 
  Code2, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink, 
  FileCode,
  Layers,
  Cpu
} from 'lucide-react';

export default function BuildPhase({ 
  project, 
  onBackToBlueprint, 
  setCurrentView 
}) {
  const [copiedCmd, setCopiedCmd] = useState(null);
  const [tasks, setTasks] = useState([
    { id: 't1', text: 'Initialize Git repository and frontend boilerplate', done: true, tag: 'Setup' },
    { id: 't2', text: 'Define data models and state machine for core user flow', done: false, tag: 'Architecture' },
    { id: 't3', text: 'Build Must-Have Feature #1: Core real-time action loop', done: false, tag: 'Sprint 1' },
    { id: 't4', text: 'Implement Must-Have Feature #2: Instant HUD guidance overlay', done: false, tag: 'Sprint 1' },
    { id: 't5', text: 'Wire up Must-Have Feature #3: Smart confirmation guard', done: false, tag: 'Sprint 1' },
    { id: 't6', text: 'Conduct first live hallway test with 5 target users', done: false, tag: 'Validation' }
  ]);

  const toggleTask = (taskId) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t));
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const completedCount = tasks.filter(t => t.done).length;
  const progressPct = Math.round((completedCount / tasks.length) * 100);

  const bp = project?.blueprint || {};

  return (
    <div className="build-phase-container animate-fade-in">
      {/* Top Header */}
      <div className="build-header">
        <button 
          className="btn-back-crumb"
          onClick={onBackToBlueprint}
        >
          <ArrowLeft size={16} />
          <span>Back to Blueprint</span>
        </button>

        <div className="build-header-main">
          <div className="build-badge">
            <span className="dot-active"></span>
            PHASE 2: CONSTRUCTION & PROTOTYPING
          </div>
          <h1 className="build-title">Build Phase — Sprint 1</h1>
          <p className="build-subtitle">
            Your blueprint for <strong>{project?.title || 'Your Project'}</strong> is locked. 
            Now, let's translate architectural plans into running code.
          </p>
        </div>
      </div>

      {/* Grid: Architecture Diagram & Tasks */}
      <div className="build-grid">
        {/* Left Column: Sprint 1 Checklist */}
        <div className="build-left-col">
          <div className="build-card">
            <div className="build-card-header">
              <div className="header-title-row">
                <CheckSquare size={18} className="icon-emerald" />
                <h3>Sprint 1 Task Roadmap</h3>
              </div>
              <span className="task-count-pill">{completedCount} of {tasks.length} Done</span>
            </div>

            <div className="sprint-progress-bar">
              <div className="sprint-fill" style={{ width: `${progressPct}%` }}></div>
            </div>

            <div className="task-list">
              {tasks.map(task => (
                <div 
                  key={task.id} 
                  className={`task-row ${task.done ? 'task-done' : ''}`}
                  onClick={() => toggleTask(task.id)}
                >
                  <input 
                    type="checkbox" 
                    checked={task.done} 
                    onChange={() => {}} 
                    className="task-checkbox"
                  />
                  <div className="task-text-wrap">
                    <span className="task-name">{task.text}</span>
                    <span className="task-tag">{task.tag}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="build-card-footer">
              <span className="footer-advice">
                Rule: Do not touch Good-to-Have features until Sprint 1 tasks are 100% green!
              </span>
            </div>
          </div>

          {/* Quick Terminal Scaffolding */}
          <div className="build-card terminal-card">
            <div className="build-card-header">
              <div className="header-title-row">
                <Terminal size={18} className="icon-blue" />
                <h3>Quickstart Boilerplate</h3>
              </div>
              <span className="drafting-tag">CLI</span>
            </div>

            <div className="terminal-commands">
              <div className="cmd-row">
                <span className="cmd-prompt">$</span>
                <span className="cmd-text">npm create vite@latest {(project?.title || 'my-app').toLowerCase().replace(/\s+/g, '-')} -- --template react</span>
                <button 
                  className="btn-copy-cmd"
                  onClick={() => copyToClipboard(`npm create vite@latest ${(project?.title || 'my-app').toLowerCase().replace(/\s+/g, '-')} -- --template react`, 'c1')}
                >
                  {copiedCmd === 'c1' ? <Check size={13} /> : <Copy size={13} />}
                </button>
              </div>

              <div className="cmd-row">
                <span className="cmd-prompt">$</span>
                <span className="cmd-text">cd {(project?.title || 'my-app').toLowerCase().replace(/\s+/g, '-')} && npm install lucide-react</span>
                <button 
                  className="btn-copy-cmd"
                  onClick={() => copyToClipboard(`cd ${(project?.title || 'my-app').toLowerCase().replace(/\s+/g, '-')} && npm install lucide-react`, 'c2')}
                >
                  {copiedCmd === 'c2' ? <Check size={13} /> : <Copy size={13} />}
                </button>
              </div>

              <div className="cmd-row">
                <span className="cmd-prompt">$</span>
                <span className="cmd-text">npm run dev</span>
                <button 
                  className="btn-copy-cmd"
                  onClick={() => copyToClipboard('npm run dev', 'c3')}
                >
                  {copiedCmd === 'c3' ? <Check size={13} /> : <Copy size={13} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Recommended Tech Stack & System Architecture Diagram */}
        <div className="build-right-col">
          <div className="build-card">
            <div className="build-card-header">
              <div className="header-title-row">
                <Cpu size={18} className="icon-purple" />
                <h3>Recommended System Architecture</h3>
              </div>
              <span className="drafting-tag">MVP TOPOLOGY</span>
            </div>

            <div className="system-diagram-box">
              <div className="diagram-layer layer-client">
                <div className="layer-badge">CLIENT LAYER</div>
                <div className="layer-title">{bp.techResources?.items?.[0]?.tech || 'React + Vite (PWA)'}</div>
                <p>Minimal camera / dashboard UI with 60fps local state rendering.</p>
              </div>

              <div className="diagram-connector">
                <span>↓ Real-time events & local telemetry</span>
              </div>

              <div className="diagram-layer layer-engine">
                <div className="layer-badge">INTELLIGENCE & VISION LAYER</div>
                <div className="layer-title">{bp.techResources?.items?.[1]?.tech || 'On-device Heuristics / Computer Vision'}</div>
                <p>Analyzes input streams locally without cloud latency or costly API bills.</p>
              </div>

              <div className="diagram-connector">
                <span>↓ Persistent state & session sync</span>
              </div>

              <div className="diagram-layer layer-backend">
                <div className="layer-badge">PERSISTENCE / BACKEND</div>
                <div className="layer-title">{bp.techResources?.items?.[3]?.tech || 'Supabase (PostgreSQL) / Firebase'}</div>
                <p>Stores user projects, authentication, and minimal metadata.</p>
              </div>
            </div>
          </div>

          {/* Student Founder Advice Box */}
          <div className="build-card advice-card">
            <div className="advice-header">
              <Sparkles size={16} />
              <h4>The Golden Rule for Student Builders</h4>
            </div>
            <p>
              “Do not show your code to 100 people on day 30. Show your messy prototype to <strong>3 real target users on day 4</strong>. If they solve their problem, your blueprint was right. If they get confused, adjust the blueprint before building 1,000 more lines of code.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
