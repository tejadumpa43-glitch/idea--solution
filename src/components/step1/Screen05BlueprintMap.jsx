import React, { useState } from 'react';
import { 
  Compass, 
  AlertCircle, 
  Users, 
  MapPin, 
  RotateCw, 
  Flame, 
  Lightbulb, 
  Target, 
  Wrench, 
  Sparkles, 
  GitBranch, 
  Rocket, 
  ArrowRight, 
  ArrowLeft,
  ChevronDown
} from 'lucide-react';

export default function Screen05BlueprintMap({ 
  project = {}, 
  insights = {}, 
  features = [], 
  onContinue, 
  onBack 
}) {
  const [selectedSection, setSelectedSection] = useState('overview');

  const sectionsList = [
    { id: 'overview', label: 'Overview', icon: <Compass size={16} /> },
    { id: 'problem', label: 'Problem', icon: <AlertCircle size={16} /> },
    { id: 'users', label: 'Users', icon: <Users size={16} /> },
    { id: 'context', label: 'Context', icon: <MapPin size={16} /> },
    { id: 'currentWorkflow', label: 'Current Workflow', icon: <RotateCw size={16} /> },
    { id: 'painPoint', label: 'Pain Point', icon: <Flame size={16} /> },
    { id: 'userNeed', label: 'User Need', icon: <Lightbulb size={16} /> },
    { id: 'goal', label: 'Goal', icon: <Target size={16} /> },
    { id: 'solution', label: 'Solution', icon: <Wrench size={16} /> },
    { id: 'features', label: 'Features', icon: <Sparkles size={16} /> },
    { id: 'userFlow', label: 'User Flow', icon: <GitBranch size={16} /> },
    { id: 'mvp', label: 'MVP', icon: <Rocket size={16} /> }
  ];

  const problemText = insights.problem || 'Beginners do not know the photographic decisions required to create a strong portrait.';
  const usersText = insights.users || 'People who want great portraits but do not understand photography.';
  const goalText = insights.goal || 'Enable any novice to capture a gallery-grade portrait in under 45 seconds.';
  const userNeedText = insights.userNeed || 'Simple guidance that translates photography expertise into actionable instructions.';
  const solutionText = insights.solution || 'An intelligent photography guidance application that analyzes the scene and guides users.';

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">05 BLUEPRINT GENERATION</div>
        <div className="stage-step-count">Step 1 of 3</div>
      </div>

      <div className="blueprint-map-container">
        {/* Title area */}
        <div className="screen-header-block">
          <h1 className="screen-main-title">Your Project Blueprint.</h1>
          <p className="screen-main-subtitle">
            This is a complete view of your project, created from our conversation. Click on each section to explore the details.
          </p>
        </div>

        {/* 2-Column: Left Flowchart Tree, Right BLUEPRINT SECTIONS menu */}
        <div className="blueprint-grid-layout">
          {/* Left Column: Interactive Flowchart Diagram */}
          <div className="flowchart-canvas-card">
            <div className="flowchart-tree">
              {/* Row 1: Problem | Users | Goal */}
              <div className="tree-row row-level-1">
                <div 
                  className={`tree-node-card node-problem ${selectedSection === 'problem' ? 'selected' : ''}`}
                  onClick={() => setSelectedSection('problem')}
                >
                  <div className="node-badge-header">
                    <span className="node-icon icon-red"><AlertCircle size={14} /></span>
                    <span className="node-title">Problem</span>
                  </div>
                  <p className="node-text">{problemText}</p>
                </div>

                <div 
                  className={`tree-node-card node-users ${selectedSection === 'users' ? 'selected' : ''}`}
                  onClick={() => setSelectedSection('users')}
                >
                  <div className="node-badge-header">
                    <span className="node-icon icon-blue"><Users size={14} /></span>
                    <span className="node-title">Users</span>
                  </div>
                  <p className="node-text">{usersText}</p>
                </div>

                <div 
                  className={`tree-node-card node-goal ${selectedSection === 'goal' ? 'selected' : ''}`}
                  onClick={() => setSelectedSection('goal')}
                >
                  <div className="node-badge-header">
                    <span className="node-icon icon-gold"><Target size={14} /></span>
                    <span className="node-title">Goal</span>
                  </div>
                  <p className="node-text">{goalText}</p>
                </div>
              </div>

              {/* Connecting SVG lines from Row 1 to Row 2 */}
              <div className="tree-connector-row">
                <svg className="connector-svg" viewBox="0 0 600 40" fill="none">
                  <path d="M100 0 L100 20 L300 20 L300 40" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M300 0 L300 40" stroke="#3B82F6" strokeWidth="2" />
                  <path d="M500 0 L500 20 L300 20" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                  <polygon points="296,36 300,40 304,36" fill="#3B82F6" />
                </svg>
              </div>

              {/* Row 2: User Need */}
              <div className="tree-row row-level-2">
                <div 
                  className={`tree-node-card node-need wide-node ${selectedSection === 'userNeed' ? 'selected' : ''}`}
                  onClick={() => setSelectedSection('userNeed')}
                >
                  <div className="node-badge-header">
                    <span className="node-icon icon-purple"><Lightbulb size={14} /></span>
                    <span className="node-title">User Need</span>
                  </div>
                  <p className="node-text">{userNeedText}</p>
                </div>
              </div>

              {/* Connector line from Row 2 to Row 3 */}
              <div className="tree-connector-row">
                <svg className="connector-svg" viewBox="0 0 600 30" fill="none">
                  <path d="M300 0 L300 30" stroke="#10B981" strokeWidth="2" />
                  <polygon points="296,26 300,30 304,26" fill="#10B981" />
                </svg>
              </div>

              {/* Row 3: Solution */}
              <div className="tree-row row-level-3">
                <div 
                  className={`tree-node-card node-solution wide-node ${selectedSection === 'solution' ? 'selected' : ''}`}
                  onClick={() => setSelectedSection('solution')}
                >
                  <div className="node-badge-header">
                    <span className="node-icon icon-green"><Wrench size={14} /></span>
                    <span className="node-title">Solution</span>
                  </div>
                  <p className="node-text">{solutionText}</p>
                </div>
              </div>

              {/* Connector lines branching from Solution to Features, User Flow, MVP */}
              <div className="tree-connector-row">
                <svg className="connector-svg" viewBox="0 0 600 40" fill="none">
                  <path d="M300 0 L300 20 L100 20 L100 40" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M300 0 L300 40" stroke="#3B82F6" strokeWidth="2" />
                  <path d="M300 0 L300 20 L500 20 L500 40" stroke="#10B981" strokeWidth="2" />
                  <polygon points="96,36 100,40 104,36" fill="#F59E0B" />
                  <polygon points="296,36 300,40 304,36" fill="#3B82F6" />
                  <polygon points="496,36 500,40 504,36" fill="#10B981" />
                </svg>
              </div>

              {/* Row 4: Features | User Flow | MVP */}
              <div className="tree-row row-level-4">
                <div 
                  className={`tree-node-card node-features ${selectedSection === 'features' ? 'selected' : ''}`}
                  onClick={() => setSelectedSection('features')}
                >
                  <div className="node-badge-header">
                    <span className="node-icon icon-gold"><Sparkles size={14} /></span>
                    <span className="node-title">Features</span>
                  </div>
                  <p className="node-text">
                    {features.length > 0 
                      ? `${features.filter(f => f.enabled).length} capabilities selected (Core & Aux)` 
                      : 'Camera Analyzer, HUD Prompts, Shutter Lock'}
                  </p>
                </div>

                <div 
                  className={`tree-node-card node-userflow ${selectedSection === 'userFlow' ? 'selected' : ''}`}
                  onClick={() => setSelectedSection('userFlow')}
                >
                  <div className="node-badge-header">
                    <span className="node-icon icon-blue"><GitBranch size={14} /></span>
                    <span className="node-title">User Flow</span>
                  </div>
                  <p className="node-text">
                    Open Camera → Scan Scene → Ambient Guidance → Auto Click
                  </p>
                </div>

                <div 
                  className={`tree-node-card node-mvp ${selectedSection === 'mvp' ? 'selected' : ''}`}
                  onClick={() => setSelectedSection('mvp')}
                >
                  <div className="node-badge-header">
                    <span className="node-icon icon-green"><Rocket size={14} /></span>
                    <span className="node-title">MVP</span>
                  </div>
                  <p className="node-text">
                    Core 3 checks: distance, rule of thirds, ambient light ratio
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Section Detail Toast */}
            {selectedSection !== 'overview' && (
              <div className="node-detail-panel animate-fade-in">
                <div className="detail-panel-title">
                  Section Details: <strong>{selectedSection.toUpperCase()}</strong>
                </div>
                <p className="detail-panel-desc">
                  {insights[selectedSection] || 'Active section integrated into the student architectural blueprint.'}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: BLUEPRINT SECTIONS Navigation Menu */}
          <aside className="blueprint-sections-sidebar">
            <div className="sidebar-card-header">
              <h3 className="sidebar-menu-title">BLUEPRINT SECTIONS</h3>
            </div>

            <nav className="sections-vertical-nav">
              {sectionsList.map((sec) => (
                <button
                  key={sec.id}
                  className={`section-nav-item ${selectedSection === sec.id ? 'active-section' : ''}`}
                  onClick={() => setSelectedSection(sec.id)}
                >
                  <span className="section-nav-icon">{sec.icon}</span>
                  <span className="section-nav-label">{sec.label}</span>
                </button>
              ))}
            </nav>
          </aside>
        </div>

        {/* Bottom Actions Row */}
        <div className="blueprint-actions-row">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
          <button 
            className="btn-primary-continue"
            onClick={onContinue}
          >
            <span>Confirm & Continue</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
