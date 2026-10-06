import React, { useState } from 'react';
import { 
  Play, 
  CheckSquare, 
  Terminal, 
  Smartphone, 
  Monitor, 
  Camera, 
  Sparkles, 
  ArrowRight, 
  Folder, 
  Check, 
  Circle, 
  CheckCircle2,
  Bot,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export default function Screen32Workspace({ 
  onSelectTask, 
  onOpenAiMentor, 
  onGoToTesting,
  onOpenLiveCamera 
}) {
  const [activeFile, setActiveFile] = useState('Home.jsx');
  const [activeTab, setActiveTab] = useState('terminal'); // 'terminal' | 'problems' | 'output'
  const [previewDevice, setPreviewDevice] = useState('mobile'); // 'web' | 'mobile'
  const [isRunning, setIsRunning] = useState(true);

  const fileContents = {
    'Home.jsx': `import React from 'react'
import { Camera, ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <nav className="px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Your App</h1>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
          <Camera size={32} />
        </div>
        
        <h2 className="text-2xl font-bold mb-2">Capture Better Portraits</h2>
        <p className="text-slate-600 mb-8 max-w-sm">
          Real-time guidance for perfect photos
        </p>

        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/20">
          <Camera size={20} />
          <span>Open Camera</span>
        </button>
      </div>
    </div>
  )
}`,
    'App.jsx': `import React from 'react'
import Home from './Home'

export default function App() {
  return (
    <div className="app-viewport">
      <Home />
    </div>
  )
}`,
    'index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}`
  };

  const handleRun = () => {
    setIsRunning(false);
    setTimeout(() => setIsRunning(true), 300);
  };

  return (
    <div className="step-screen-wrapper full-bleed-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">3.2 BUILD WORKSPACE</div>
        <div className="workspace-header-actions-row">
          <button 
            type="button" 
            className="btn-workspace-pill"
            onClick={onOpenAiMentor}
          >
            <Bot size={15} />
            <span>AI Mentor</span>
          </button>
          <button 
            type="button" 
            className="btn-workspace-pill btn-pill-primary"
            onClick={onGoToTesting}
          >
            <span>Proceed to Testing</span>
            <ArrowRight size={15} />
          </button>
          <div className="stage-step-count">Step 3 of 3</div>
        </div>
      </div>

      {/* 3-Column IDE Layout */}
      <div className="workspace-ide-grid">
        {/* Column 1: Project Tasks Sidebar */}
        <div className="workspace-tasks-sidebar">
          <div className="tasks-sidebar-header">
            <h3 className="tasks-title">Project Tasks</h3>
            <span className="tasks-progress-text">2 / 14 completed (14%)</span>
          </div>

          <div className="tasks-progress-track">
            <div className="tasks-progress-fill" style={{ width: '14%' }}></div>
          </div>

          <div className="task-modules-tree">
            {/* 01 Foundation */}
            <div className="task-group-block">
              <div className="task-group-header group-done">
                <span className="group-num">01</span>
                <span className="group-title">Foundation</span>
              </div>
              <div className="task-group-items">
                <div className="task-tree-item item-done">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Project setup</span>
                </div>
                <div className="task-tree-item item-done">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Repository setup</span>
                </div>
                <div className="task-tree-item">
                  <Circle size={14} className="text-slate-400" />
                  <span>Environment configuration</span>
                </div>
              </div>
            </div>

            {/* 02 User Interface */}
            <div className="task-group-block">
              <div className="task-group-header group-active">
                <span className="group-num">02</span>
                <span className="group-title">User Interface</span>
              </div>
              <div className="task-group-items">
                <div 
                  className="task-tree-item item-active"
                  onClick={() => setActiveFile('Home.jsx')}
                >
                  <span className="active-dot"></span>
                  <span className="font-semibold text-blue-600">Home screen</span>
                </div>
                <div className="task-tree-item">
                  <Circle size={14} className="text-slate-400" />
                  <span>Navigation</span>
                </div>
                <div className="task-tree-item">
                  <Circle size={14} className="text-slate-400" />
                  <span>UI components</span>
                </div>
                <div className="task-tree-item">
                  <Circle size={14} className="text-slate-400" />
                  <span>Responsive design</span>
                </div>
              </div>
            </div>

            {/* 03 Core Logic */}
            <div className="task-group-block">
              <div className="task-group-header">
                <span className="group-num">03</span>
                <span className="group-title">Core Logic</span>
              </div>
              <div className="task-group-items">
                <div 
                  className="task-tree-item hover-target"
                  onClick={onSelectTask}
                >
                  <Circle size={14} className="text-slate-400" />
                  <span className="text-slate-700 font-medium">Camera integration</span>
                  <span className="chip-jump">View</span>
                </div>
                <div className="task-tree-item">
                  <Circle size={14} className="text-slate-400" />
                  <span>Image analysis</span>
                </div>
                <div className="task-tree-item">
                  <Circle size={14} className="text-slate-400" />
                  <span>Guidance engine</span>
                </div>
              </div>
            </div>

            {/* 04 Data & Authentication */}
            <div className="task-group-block">
              <div className="task-group-header">
                <span className="group-num">04</span>
                <span className="group-title">Data & Authentication</span>
              </div>
            </div>

            {/* 05 Testing & Deployment */}
            <div className="task-group-block">
              <div className="task-group-header">
                <span className="group-num">05</span>
                <span className="group-title">Testing & Deployment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Code Editor & Terminal */}
        <div className="workspace-editor-col">
          {/* Editor Header with File Tabs and Run button */}
          <div className="editor-top-bar">
            <div className="editor-file-tabs">
              {['Home.jsx', 'App.jsx', 'index.css'].map(file => (
                <button
                  key={file}
                  type="button"
                  className={`editor-tab-pill ${activeFile === file ? 'active-tab' : ''}`}
                  onClick={() => setActiveFile(file)}
                >
                  <span>{file}</span>
                </button>
              ))}
            </div>

            <button 
              type="button" 
              className="btn-editor-run"
              onClick={handleRun}
            >
              <Play size={13} fill="currentColor" />
              <span>Run</span>
            </button>
          </div>

          {/* Dark Code Surface */}
          <div className="editor-code-container">
            <div className="line-numbers-col">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className="line-num">{i + 1}</span>
              ))}
            </div>
            <pre className="code-text-area">
              <code>{fileContents[activeFile]}</code>
            </pre>
          </div>

          {/* Bottom Terminal Drawer */}
          <div className="editor-terminal-drawer">
            <div className="terminal-drawer-tabs">
              <button 
                type="button"
                className={`terminal-tab-btn ${activeTab === 'terminal' ? 'active-t-tab' : ''}`}
                onClick={() => setActiveTab('terminal')}
              >
                Terminal
              </button>
              <button 
                type="button"
                className={`terminal-tab-btn ${activeTab === 'problems' ? 'active-t-tab' : ''}`}
                onClick={() => setActiveTab('problems')}
              >
                Problems (0)
              </button>
              <button 
                type="button"
                className={`terminal-tab-btn ${activeTab === 'output' ? 'active-t-tab' : ''}`}
                onClick={() => setActiveTab('output')}
              >
                Output
              </button>
            </div>

            <div className="terminal-output-body">
              <div className="terminal-text-line">
                <span className="text-emerald-400 font-bold">VITE v5.0.0</span> ready in <span className="font-semibold text-white">320ms</span>
              </div>
              <div className="terminal-text-line">
                ➜ <span className="font-semibold text-white">Local:</span> <span className="text-cyan-400 underline">http://localhost:5173/</span>
              </div>
              <div className="terminal-text-line text-slate-400">
                ➜ <span className="font-semibold text-white">Network:</span> use --host to expose
              </div>
              <div className="terminal-text-line text-slate-500">
                press h + enter to show help
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Live Preview & Mobile Mockup */}
        <div className="workspace-preview-col">
          <div className="preview-top-bar">
            <span className="preview-title">Live Preview</span>
            <div className="device-toggle-pills">
              <button
                type="button"
                className={`toggle-btn ${previewDevice === 'web' ? 'active' : ''}`}
                onClick={() => setPreviewDevice('web')}
              >
                Web
              </button>
              <button
                type="button"
                className={`toggle-btn ${previewDevice === 'mobile' ? 'active' : ''}`}
                onClick={() => setPreviewDevice('mobile')}
              >
                Mobile
              </button>
            </div>
          </div>

          {/* Device Mockup Shell */}
          <div className="mobile-mockup-frame">
            <div className="mockup-speaker-notch"></div>

            <div className="mockup-screen-inner">
              {/* Screen Content */}
              <div className="mockup-screen-header">
                <span className="font-bold text-sm">Your App</span>
                <span className="mockup-status-dot"></span>
              </div>

              <div className="mockup-body-content">
                <div className="mockup-camera-icon-wrap">
                  <Camera size={34} className="text-blue-600" />
                </div>

                <h3 className="mockup-card-title">Capture Better Portraits</h3>
                <p className="mockup-card-subtitle">
                  Real-time guidance for perfect photos
                </p>

                <button 
                  type="button"
                  className="mockup-btn-open-camera"
                  onClick={onOpenLiveCamera || onSelectTask}
                >
                  <Camera size={16} />
                  <span>Open Camera</span>
                </button>
              </div>

              {/* Bottom Nav Bar on Phone */}
              <div className="mockup-bottom-nav">
                <div className="nav-item active-nav">
                  <span className="nav-dot"></span>
                  <span className="nav-label">Home</span>
                </div>
                <div className="nav-item">
                  <span className="nav-label">Guide</span>
                </div>
                <div className="nav-item">
                  <span className="nav-label">Gallery</span>
                </div>
                <div className="nav-item">
                  <span className="nav-label">Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
