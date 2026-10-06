import React, { useState } from 'react';
import { 
  Camera, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Eye, 
  Sun, 
  Compass, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  FileText, 
  ChevronRight, 
  Play, 
  RotateCcw,
  Sliders,
  Maximize2
} from 'lucide-react';
import { JUST_A_CLICK_PROJECT } from '../data/projectsData';
import confetti from 'canvas-confetti';

export default function JustAClickCaseStudy({ 
  onViewBlueprint, 
  onBackToDashboard 
}) {
  const [activeTab, setActiveTab] = useState('interactive-simulator'); // 'interactive-simulator' | 'case-study-journey'
  
  // Camera simulator states
  const [simStep, setSimStep] = useState(0); // 0: Init, 1: Distance, 2: Light, 3: Eye-level, 4: Locked & Ready, 5: Captured Result
  const [isCapturing, setIsCapturing] = useState(false);
  const [comparisonSlider, setComparisonSlider] = useState(50);

  const simSteps = [
    {
      step: 0,
      hudPrompt: "Scanning scene... Subject detected.",
      audioVoice: "Subject is 3.4m away. That's too far for a portrait.",
      actionInstruction: "“Step 3 paces closer”",
      buttonText: "Step Closer →",
      distance: "3.4m (Too Far)",
      lighting: "Backlit (Harsh)",
      angle: "High Angle (+18°)",
      alignmentPct: 42
    },
    {
      step: 1,
      hudPrompt: "Good distance! Window light is on your right.",
      audioVoice: "Notice the dark shadows across the subject's nose.",
      actionInstruction: "“Turn subject 30° toward the window”",
      buttonText: "Turn Toward Light →",
      distance: "1.9m (Golden Range)",
      lighting: "Backlit (Harsh)",
      angle: "High Angle (+18°)",
      alignmentPct: 68
    },
    {
      step: 2,
      hudPrompt: "Lighting locked! Flattering soft key light detected.",
      audioVoice: "Camera is currently held too high, creating a receding forehead.",
      actionInstruction: "“Lower camera 4 inches to eye level”",
      buttonText: "Lower to Eye Level →",
      distance: "1.9m (Golden Range)",
      lighting: "Soft Key Light (Optimal)",
      angle: "High Angle (+18°)",
      alignmentPct: 85
    },
    {
      step: 3,
      hudPrompt: "Composition, lighting, and eye-level aligned! Perfect.",
      audioVoice: "Golden frame locked. Shutter enabled.",
      actionInstruction: "“Hold steady...”",
      buttonText: "Hold Steady →",
      distance: "1.9m (Golden Range)",
      lighting: "Soft Key Light (Optimal)",
      angle: "Eye Level (0° Flattering)",
      alignmentPct: 98
    },
    {
      step: 4,
      hudPrompt: "GREEN LOCK ACTIVE — Ready to capture!",
      audioVoice: "Tap CLICK to take the editorial portrait.",
      actionInstruction: "“CLICK!”",
      buttonText: "CLICK SHUTTER 📸",
      distance: "1.9m (Golden Range)",
      lighting: "Soft Key Light (Optimal)",
      angle: "Eye Level (0° Flattering)",
      alignmentPct: 100
    }
  ];

  const handleNextSimStep = () => {
    if (simStep < 4) {
      setSimStep(simStep + 1);
    } else if (simStep === 4) {
      // Trigger shutter capture!
      setIsCapturing(true);
      setTimeout(() => {
        setIsCapturing(false);
        setSimStep(5);
        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.6 }
          });
        } catch (e) {}
      }, 650);
    }
  };

  const handleResetSimulator = () => {
    setSimStep(0);
    setIsCapturing(false);
  };

  const currentSim = simSteps[Math.min(simStep, 4)];

  return (
    <div className="case-study-container animate-fade-in">
      {/* 1. Header Banner */}
      <div className="case-study-hero">
        <div className="hero-nav-row">
          <button 
            className="btn-back-crumb"
            onClick={onBackToDashboard}
          >
            <ArrowLeft size={16} />
            <span>Back to Dashboard</span>
          </button>
          <div className="case-study-tag">REFERENCE PROJECT & CASE STUDY</div>
        </div>

        <div className="hero-title-area">
          <div className="category-meta">Photography / Computer Vision / Creative Technology</div>
          <h1 className="case-hero-title">JUST A CLICK</h1>
          <p className="case-hero-quote">
            “What if a person who knows nothing about photography could click a professional portrait?”
          </p>
        </div>

        {/* Core Philosophy Banner */}
        <div className="philosophy-highlight-banner">
          <div className="phil-label">THE CORE ARCHITECTURAL PHILOSOPHY</div>
          <div className="phil-quote">
            “The user sees simplicity. The system handles complexity.”
          </div>
          <p className="phil-desc">
            Instead of forcing beginners to learn aperture, ISO, light falloff, and thirds rules, 
            the application does all the mathematical heavy lifting and gives the user 3-word guidance.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="case-study-tabs">
          <button 
            className={`tab-btn ${activeTab === 'interactive-simulator' ? 'active' : ''}`}
            onClick={() => setActiveTab('interactive-simulator')}
          >
            <Camera size={16} />
            <span>Interactive Camera Simulator</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'case-study-journey' ? 'active' : ''}`}
            onClick={() => setActiveTab('case-study-journey')}
          >
            <Layers size={16} />
            <span>The 10-Stage Architectural Journey</span>
          </button>
          <button 
            className="tab-btn tab-blueprint-link"
            onClick={onViewBlueprint}
          >
            <FileText size={16} />
            <span>View Full 14-Section Blueprint</span>
          </button>
        </div>
      </div>

      {/* 2. TAB A: Interactive Camera Guidance Simulator */}
      {activeTab === 'interactive-simulator' && (
        <section className="interactive-simulator-section animate-fade-in">
          <div className="simulator-intro-bar">
            <div>
              <h3>Live MVP Prototype Simulator</h3>
              <p>Experience how Just A Click guides a beginner from awkward snapshot to gallery-worthy portrait.</p>
            </div>
            <button 
              className="btn-reset-sim"
              onClick={handleResetSimulator}
            >
              <RotateCcw size={14} />
              <span>Reset Demo</span>
            </button>
          </div>

          <div className="simulator-viewport-grid">
            {/* Viewfinder Mock */}
            <div className={`camera-viewfinder ${isCapturing ? 'shutter-flash' : ''} ${simStep === 5 ? 'show-result' : ''}`}>
              {/* Shutter Animation Overlay */}
              {isCapturing && <div className="camera-shutter-curtain"></div>}

              {simStep < 5 ? (
                <>
                  {/* Viewfinder HUD Overlays */}
                  <div className="vf-top-hud">
                    <div className="vf-mode-pill">PORTRAIT GUIDANCE AI</div>
                    <div className="vf-alignment-meter">
                      <span>ALIGNMENT</span>
                      <div className="meter-track">
                        <div 
                          className={`meter-fill ${currentSim.alignmentPct > 90 ? 'meter-locked' : ''}`}
                          style={{ width: `${currentSim.alignmentPct}%` }}
                        ></div>
                      </div>
                      <span className="meter-num">{currentSim.alignmentPct}%</span>
                    </div>
                  </div>

                  {/* Rule of Thirds Grid Lines */}
                  <div className="vf-grid-overlay">
                    <div className="grid-line h-1"></div>
                    <div className="grid-line h-2"></div>
                    <div className="grid-line v-1"></div>
                    <div className="grid-line v-2"></div>
                  </div>

                  {/* Facial Detection Bounding Box (Animated based on step) */}
                  <div className={`vf-subject-box step-${simStep}`}>
                    <div className="vf-box-corner tl"></div>
                    <div className="vf-box-corner tr"></div>
                    <div className="vf-box-corner bl"></div>
                    <div className="vf-box-corner br"></div>
                    
                    <div className="vf-box-label">
                      <span>SUBJECT FACE (TRACKED)</span>
                    </div>

                    {/* Golden level line */}
                    {simStep >= 3 && <div className="vf-level-line">EYE LEVEL LOCKED</div>}
                  </div>

                  {/* Ambient Light Vector Indicator */}
                  <div className={`vf-sun-vector step-${simStep}`}>
                    <Sun size={20} className="sun-icon" />
                    <span>NATURAL LIGHT ANGLE</span>
                  </div>

                  {/* Conversational Whisper Prompts */}
                  <div className="vf-prompt-card">
                    <div className="prompt-speaker">
                      <Sparkles size={14} />
                      <span>JUST A CLICK AUDIO DIRECTOR:</span>
                    </div>
                    <div className="prompt-action-speech">
                      {currentSim.actionInstruction}
                    </div>
                    <div className="prompt-context-sub">
                      {currentSim.audioVoice}
                    </div>
                  </div>

                  {/* Viewfinder Bottom Bar */}
                  <div className="vf-bottom-hud">
                    <div className="hud-metric">
                      <span className="m-label">Distance:</span>
                      <strong className="m-val">{currentSim.distance}</strong>
                    </div>

                    <button 
                      className={`btn-shutter-trigger ${simStep === 4 ? 'shutter-ready' : 'shutter-waiting'}`}
                      onClick={handleNextSimStep}
                    >
                      <span>{currentSim.buttonText}</span>
                    </button>

                    <div className="hud-metric">
                      <span className="m-label">Lighting:</span>
                      <strong className="m-val">{currentSim.lighting}</strong>
                    </div>
                  </div>
                </>
              ) : (
                /* Portrait Result Screen */
                <div className="vf-result-screen animate-fade-in">
                  <div className="result-header">
                    <CheckCircle2 size={24} className="result-check" />
                    <h3>Portrait Captured Successfully!</h3>
                    <p>The system handled the 12 optical variables. You simply clicked.</p>
                  </div>

                  {/* Before vs After Comparison Card */}
                  <div className="comparison-box">
                    <div className="comparison-preview-card">
                      <div className="comp-side before-side">
                        <span className="comp-tag">WITHOUT GUIDANCE</span>
                        <div className="comp-art amateur-shot">
                          <div className="shot-avatar amateur"></div>
                          <p>Flat fluorescent lighting • 40 random shots • Awkward double chin angle • Cluttered background</p>
                        </div>
                      </div>

                      <div className="comp-divider">
                        <span>VS</span>
                      </div>

                      <div className="comp-side after-side">
                        <span className="comp-tag highlight">WITH JUST A CLICK</span>
                        <div className="comp-art editorial-shot">
                          <div className="shot-avatar editorial"></div>
                          <p>Soft 45° window light • Perfect rule-of-thirds • Eye-level perspective • 1 single click</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="result-footer-actions">
                    <button 
                      className="btn-replay-sim"
                      onClick={handleResetSimulator}
                    >
                      <RotateCcw size={15} />
                      <span>Try Simulator Again</span>
                    </button>
                    <button 
                      className="btn-view-bp-from-sim"
                      onClick={onViewBlueprint}
                    >
                      <span>View Full Just A Click Blueprint</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Side Explanations for the Simulator */}
            <div className="simulator-side-notes">
              <div className="side-note-card">
                <div className="note-card-tag">WHAT THE USER SEES</div>
                <h4>3 Words on Screen</h4>
                <p>
                  The user never sees histograms, EV ratios, or facial landmark meshes. 
                  They only hear: <em>"Step closer. Turn to the window. Hold."</em>
                </p>
              </div>

              <div className="side-note-card">
                <div className="note-card-tag">WHAT THE SYSTEM DOES</div>
                <h4>Complex Computer Vision Under the Hood</h4>
                <ul>
                  <li>Calculates distance via MediaPipe Face Mesh bounding ratio</li>
                  <li>Analyzes luminance vector via histogram contrast</li>
                  <li>Checks rule-of-thirds eye-level horizon lock</li>
                  <li>Locks shutter until framing threshold hits 95%+</li>
                </ul>
              </div>

              <div className="side-note-card highlight-card">
                <div className="note-card-tag">STUDENT TAKEAWAY</div>
                <h4>This is what MVP Clarity looks like!</h4>
                <p>
                  The creator did not try to build an Instagram clone, a messaging app, and an editing suite all at once. 
                  They focused 100% on the single core problem.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. TAB B: The 10-Stage Architectural Journey */}
      {activeTab === 'case-study-journey' && (
        <section className="case-journey-section animate-fade-in">
          <div className="journey-intro">
            <h2>The 10-Stage Transformation</h2>
            <p>From an incomplete raw idea in a student's dorm room to a production-ready architectural blueprint.</p>
          </div>

          <div className="journey-stages-timeline">
            {JUST_A_CLICK_PROJECT.caseStudy.stages.map((stage) => (
              <div key={stage.stageNumber} className="journey-stage-row">
                <div className="stage-left-rail">
                  <div className="stage-number-badge">{stage.stageNumber}</div>
                  <div className="stage-rail-line"></div>
                </div>

                <div className="stage-card">
                  <div className="stage-header">
                    <h3 className="stage-title">{stage.title}</h3>
                    <span className="stage-subtitle">{stage.subtitle}</span>
                  </div>

                  <div className="stage-content-box">
                    <p className="stage-main-text">{stage.content}</p>
                    {stage.critique && (
                      <div className="stage-critique-box">
                        <span className="critique-label">⚠️ The Danger / Mentor Observation:</span>
                        <p>{stage.critique}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="journey-bottom-action">
            <button 
              className="btn-primary-hero"
              onClick={onViewBlueprint}
            >
              <span>Inspect the Complete 14-Section Blueprint</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
