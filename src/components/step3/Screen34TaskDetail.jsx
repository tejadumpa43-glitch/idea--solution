import React, { useState } from 'react';
import { 
  Camera, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  Code2, 
  Terminal, 
  Eye, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft,
  Bot,
  User,
  Check,
  Send
} from 'lucide-react';

export default function Screen34TaskDetail({ 
  onBackToWorkspace, 
  onProceedToTesting 
}) {
  const [viewMode, setViewMode] = useState('implementation'); // 'overview' | 'implementation'
  const [activeStepIndex, setActiveStepIndex] = useState(1); // 0: permission, 1: stream, 2: preview, 3: errors
  const [aiAssistantExpanded, setAiAssistantExpanded] = useState(true);

  const steps = [
    { title: 'Request camera permission', done: true },
    { title: 'Connect camera stream', active: true, done: false },
    { title: 'Display camera preview', done: false },
    { title: 'Handle permission errors', done: false }
  ];

  const cameraCode = `import React, { useEffect, useRef, useState } from 'react'

export default function Camera() {
  const videoRef = useRef(null)
  const [hasPermission, setHasPermission] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment'
          }
        })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          setHasPermission(true)
        }
      } catch (err) {
        setError('Camera access denied')
      }
    }

    startCamera()
  }, [])

  return (
    <div className="camera-viewport">
      <video ref={videoRef} autoPlay playsInline />
    </div>
  )
}`;

  return (
    <div className="step-screen-wrapper full-bleed-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">3.4 TASK IMPLEMENTATION VIEW</div>
        <div className="workspace-header-actions-row">
          <button 
            type="button" 
            className={`btn-workspace-pill ${viewMode === 'overview' ? 'active-pill' : ''}`}
            onClick={() => setViewMode('overview')}
          >
            Overview
          </button>
          <button 
            type="button" 
            className={`btn-workspace-pill ${viewMode === 'implementation' ? 'active-pill' : ''}`}
            onClick={() => setViewMode('implementation')}
          >
            Implementation IDE
          </button>
          <div className="stage-step-count">Step 3 of 3</div>
        </div>
      </div>

      {viewMode === 'overview' ? (
        /* Overview Mode */
        <div className="task-overview-card animate-fade-in">
          <div className="task-overview-header-row">
            <div className="task-icon-box-large">
              <Camera size={26} className="text-emerald-500" />
            </div>
            <div className="task-overview-titles">
              <div className="title-badges-inline">
                <h1 className="screen-main-title">Camera Integration</h1>
                <span className="badge-status-in-progress">In Progress</span>
                <span className="badge-diff-beginner">Beginner</span>
              </div>
              <p className="screen-main-subtitle">
                Allow the application to access the user's camera and display the live feed.
              </p>
            </div>
          </div>

          <div className="task-overview-grid-sections">
            <div className="overview-section-box">
              <span className="sec-label">What are we building?</span>
              <p>We will integrate the device camera and show a live preview in the app.</p>
            </div>

            <div className="overview-section-box">
              <span className="sec-label">Why are we building this?</span>
              <p>Your solution requires real-time scene analysis, so the app needs to see what the user is capturing.</p>
            </div>

            <div className="overview-section-box">
              <span className="sec-label">Dependencies</span>
              <div className="dep-checks-row">
                <span className="dep-chip"><CheckCircle2 size={14} className="text-emerald-500" /> Project setup</span>
                <span className="dep-chip"><CheckCircle2 size={14} className="text-emerald-500" /> UI structure</span>
              </div>
            </div>

            <div className="overview-section-box">
              <span className="sec-label">Expected output</span>
              <p>A working camera preview with permission handling.</p>
            </div>
          </div>

          <div className="overview-actions-row">
            <button className="btn-secondary-back" onClick={onBackToWorkspace}>
              <ArrowLeft size={16} />
              <span>Back to Workspace</span>
            </button>
            <button 
              className="btn-primary-continue"
              onClick={() => setViewMode('implementation')}
            >
              <span>Start Implementation</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        /* Implementation Mode: 3-Column Split View */
        <div className="task-implementation-grid animate-fade-in">
          {/* Column 1: Task Steps & AI Prompt */}
          <div className="task-steps-col">
            <div className="steps-header-block">
              <span className="step-mini-tag">Step 2</span>
              <h3 className="step-subheading">Connect camera stream</h3>
              <p className="step-expl-text">
                Use the getUserMedia API to access the camera and show the live video.
              </p>
            </div>

            <div className="task-steps-checklist">
              {steps.map((st, i) => (
                <div 
                  key={i} 
                  className={`task-step-check-row ${st.active ? 'step-active' : ''}`}
                  onClick={() => setActiveStepIndex(i)}
                >
                  {st.done ? (
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  ) : st.active ? (
                    <span className="pulse-circle-blue"></span>
                  ) : (
                    <Circle size={16} className="text-slate-300" />
                  )}
                  <span className={`step-row-name ${st.active ? 'font-semibold text-blue-600' : ''}`}>
                    {st.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="ai-implement-actions-card">
              <span className="card-note-label">Let AI implement this step for you or try it yourself:</span>
              <div className="action-btns-dual">
                <button type="button" className="btn-implement-ai">
                  <Sparkles size={14} />
                  <span>Implement with AI</span>
                </button>
                <button type="button" className="btn-code-myself">
                  <span>I'll code myself</span>
                </button>
              </div>
            </div>

            {/* AI Assistant Contextual Box */}
            <div className="ai-context-mentor-card">
              <div className="context-mentor-header">
                <div className="flex items-center gap-2">
                  <Bot size={16} className="text-blue-600" />
                  <span className="font-bold text-xs">AI Mentor</span>
                </div>
                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-semibold">Camera Integration</span>
              </div>
              <div className="context-mentor-body">
                <p className="text-xs text-slate-700 leading-relaxed mb-2">
                  I've implemented the camera integration code for you. This will:
                </p>
                <ol className="text-xs text-slate-600 pl-4 list-decimal space-y-1 mb-3">
                  <li>Request camera permission</li>
                  <li>Connect to the device camera</li>
                  <li>Show live preview</li>
                  <li>Handle errors properly</li>
                </ol>
                <div className="bg-blue-50 border border-blue-200 rounded p-2 text-[11px] text-blue-900 leading-snug">
                  "This uses the browser's <code>getUserMedia()</code> API to access the camera."
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Code Editor for Camera.jsx */}
          <div className="task-code-col">
            <div className="editor-top-bar">
              <span className="file-tab-active">Camera.jsx</span>
              <span className="editor-lang-tag">React JSX</span>
            </div>
            <div className="editor-code-container">
              <div className="line-numbers-col">
                {Array.from({ length: 30 }).map((_, i) => (
                  <span key={i} className="line-num">{i + 1}</span>
                ))}
              </div>
              <pre className="code-text-area">
                <code>{cameraCode}</code>
              </pre>
            </div>
          </div>

          {/* Column 3: Live Viewfinder Preview */}
          <div className="task-preview-col">
            <div className="preview-top-bar">
              <span className="preview-title">Live Preview</span>
              <span className="live-status-pill">• Live Viewfinder</span>
            </div>

            {/* Mobile Viewfinder Shell */}
            <div className="viewfinder-phone-frame">
              <div className="viewfinder-top-bar">
                <span className="text-xs font-semibold text-white drop-shadow">Camera</span>
              </div>

              {/* Viewfinder Image Preview (Girl smiling portrait) */}
              <div className="viewfinder-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80" 
                  alt="Camera Live Stream"
                  className="viewfinder-live-image"
                />
                
                {/* HUD Overlay Lines */}
                <div className="viewfinder-hud-overlay">
                  <div className="hud-corner top-left"></div>
                  <div className="hud-corner top-right"></div>
                  <div className="hud-corner bottom-left"></div>
                  <div className="hud-corner bottom-right"></div>
                  <div className="hud-center-prompt">
                    <span>Good Lighting • Hold Steady</span>
                  </div>
                </div>
              </div>

              {/* Shutter Circle Button at bottom */}
              <div className="viewfinder-bottom-bar">
                <button type="button" className="camera-shutter-ring">
                  <div className="camera-shutter-inner"></div>
                </button>
              </div>
            </div>

            <div className="mt-4">
              <button 
                type="button" 
                className="btn-primary-continue w-full justify-center"
                onClick={onProceedToTesting}
              >
                <span>Proceed to Testing Suite</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
