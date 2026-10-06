import React, { useEffect } from 'react';
import { 
  Check, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Screen06Ready({ 
  project = {}, 
  onViewFullBlueprint, 
  onContinueToStep2,
  onBack 
}) {
  useEffect(() => {
    // Festive celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  }, []);

  const col1Items = [
    'Problem',
    'Users',
    'Context',
    'Current Workflow'
  ];

  const col2Items = [
    'Pain Point',
    'User Need',
    'Goal',
    'Solution',
    'Features',
    'User Flow',
    'MVP'
  ];

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">06 READY</div>
        <div className="stage-step-count">Step 1 of 3</div>
      </div>

      <div className="blueprint-ready-container">
        {/* Celebration icon & confetti visual */}
        <div className="celebration-hero-wrap">
          {/* Confetti sprinkle SVG backdrop */}
          <div className="confetti-backdrop-svg">
            <svg viewBox="0 0 300 120" fill="none" className="confetti-decor">
              <circle cx="40" cy="20" r="3" fill="#F59E0B" />
              <rect x="70" y="30" width="8" height="4" rx="2" fill="#3B82F6" transform="rotate(25 70 30)" />
              <circle cx="100" cy="15" r="4" fill="#10B981" />
              <rect x="130" y="25" width="7" height="3" rx="1.5" fill="#EC4899" transform="rotate(-30 130 25)" />
              <circle cx="170" cy="18" r="3.5" fill="#8B5CF6" />
              <rect x="210" y="28" width="8" height="4" rx="2" fill="#F59E0B" transform="rotate(40 210 28)" />
              <circle cx="250" cy="22" r="3" fill="#3B82F6" />
              <rect x="280" y="35" width="6" height="3" rx="1.5" fill="#10B981" transform="rotate(-15 280 35)" />
            </svg>
          </div>

          <div className="big-green-check-circle animate-pop-in">
            <Check size={48} strokeWidth={3.5} className="check-svg-icon" />
          </div>

          <h1 className="screen-main-title ready-title">Your Blueprint is Ready!</h1>
          <p className="screen-main-subtitle ready-subtitle">
            You started with an idea. Now you know what you're building.
          </p>
        </div>

        {/* 2-Column Summary Checklist Card */}
        <div className="ready-checklist-card">
          <div className="checklist-two-columns">
            {/* Column 1 */}
            <div className="checklist-column">
              {col1Items.map((item, idx) => (
                <div key={idx} className="checklist-badge-row">
                  <div className="check-bullet-icon">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                  </div>
                  <span className="checklist-item-name">{item}</span>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="checklist-column">
              {col2Items.map((item, idx) => (
                <div key={idx} className="checklist-badge-row">
                  <div className="check-bullet-icon">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                  </div>
                  <span className="checklist-item-name">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="ready-actions-row">
          <button 
            type="button"
            className="btn-secondary-blueprint"
            onClick={onViewFullBlueprint}
          >
            <FileText size={18} />
            <span>View Full Blueprint</span>
          </button>

          <button 
            type="button"
            className="btn-primary-step2"
            onClick={onContinueToStep2}
          >
            <span>Continue to Step 2</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Optional back link */}
        <div className="ready-back-row">
          <button className="btn-link-back" onClick={onBack}>
            <ArrowLeft size={14} />
            <span>Review Previous Stage</span>
          </button>
        </div>
      </div>
    </div>
  );
}
