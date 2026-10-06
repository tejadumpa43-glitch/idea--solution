import React, { useState } from 'react';
import { 
  Lightbulb, 
  Check, 
  Home, 
  FolderGit2, 
  Compass, 
  User, 
  Settings, 
  ChevronDown,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function Header({ 
  currentStep = 1, // 1: Blueprint, 2: Plan, 3: Build, or 'dashboard'
  currentView,
  onSelectStep, 
  onGoToDashboard,
  onOpenJustAClick,
  onStartNewProject,
  activeProject
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Stepper definition
  const steps = [
    { number: 1, label: 'Project Blueprint', stepKey: 1 },
    { number: 2, label: 'Project Plan', stepKey: 2 },
    { number: 3, label: 'Build & Launch', stepKey: 3 }
  ];

  return (
    <header className="app-top-header">
      {/* Left: Brand Logo & Title */}
      <div className="header-brand" onClick={onGoToDashboard} title="Go to Dashboard">
        <div className="brand-icon-box">
          <Lightbulb size={20} className="brand-bulb-icon" />
        </div>
        <div className="brand-text">
          <span className="brand-name">IDEA</span>
          <span className="brand-arrow">→</span>
          <span className="brand-name">SOLUTION</span>
        </div>
      </div>

      {/* Center: 3-Step Stepper Pills */}
      <nav className="header-stepper-nav" aria-label="Project Lifecycle Steps">
        <div className="stepper-track">
          {steps.map((step) => {
            const isActive = currentStep === step.stepKey;
            const isCompleted = currentStep > step.stepKey;

            return (
              <button
                key={step.number}
                className={`stepper-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                onClick={() => onSelectStep(step.stepKey)}
                title={`Go to Step ${step.number}: ${step.label}`}
              >
                <span className="stepper-circle">
                  {isCompleted ? (
                    <Check size={12} strokeWidth={3} />
                  ) : (
                    <span>{step.number}</span>
                  )}
                </span>
                <span className="stepper-label">{step.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Right: User Avatar & Quick Menu */}
      <div className="header-user-section">
        <button 
          className="header-home-btn"
          onClick={onGoToDashboard}
          title="Home Dashboard"
        >
          <Home size={18} />
        </button>

        <div className="user-profile-menu-container">
          <button 
            className="user-profile-pill" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            <div className="avatar-circle">
              {/* Crisp avatar image representation */}
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                alt="Student Profile"
                className="avatar-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="avatar-fallback" style={{ display: 'none' }}>
                <User size={16} />
              </div>
            </div>
            <span className="user-name-snippet">Student</span>
            <ChevronDown size={14} className="user-menu-chevron" />
          </button>

          {menuOpen && (
            <div className="user-dropdown-menu animate-fade-in" onClick={() => setMenuOpen(false)}>
              <div className="dropdown-header">
                <strong>Project Architect Studio</strong>
                <span>Student Mode</span>
              </div>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" onClick={onGoToDashboard}>
                <Home size={15} />
                <span>Dashboard & Projects</span>
              </button>
              <button className="dropdown-item" onClick={onStartNewProject}>
                <Sparkles size={15} />
                <span>+ Start New Project</span>
              </button>
              <button className="dropdown-item" onClick={onOpenJustAClick}>
                <FolderGit2 size={15} />
                <span>Example: JUST A CLICK</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
