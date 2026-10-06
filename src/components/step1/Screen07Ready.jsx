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
import AiProviderBanner from './AiProviderBanner';

export default function Screen07Ready({ 
  project = {}, 
  aiSettings,
  onOpenAiSettings,
  onViewFullBlueprint, 
  onContinueToStep2,
  onBack 
}) {
  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.55 }
      });
    } catch (e) {
      // ignore
    }
  }, []);

  const col1Items = [
    'Problem',
    'Users',
    'Context',
    'Current Workflow',
    'Pain Point'
  ];

  const col2Items = [
    'User Need',
    'Goal',
    'Solution',
    'Features',
    'User Flow',
    'MVP'
  ];

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Top AI Provider Banner */}
      <AiProviderBanner 
        aiSettings={aiSettings}
        onOpenSettings={onOpenAiSettings}
      />

      {/* Subheader bar */}
      <div className="screen-sub-header flex justify-end">
        <div className="stage-step-count">Step 1 of 3</div>
      </div>

      <div className="blueprint-ready-container">
        {/* Big Green Check Circle with rays */}
        <div className="celebration-hero-wrap">
          <div className="green-checkmark-rays-wrap">
            <div className="celebration-rays-bg">
              <span className="ray ray-1"></span>
              <span className="ray ray-2"></span>
              <span className="ray ray-3"></span>
              <span className="ray ray-4"></span>
              <span className="ray ray-5"></span>
              <span className="ray ray-6"></span>
            </div>
            <div className="big-green-check-circle animate-pop-in">
              <Check size={44} strokeWidth={3.8} className="text-white" />
            </div>
          </div>

          <h1 className="screen-main-title ready-title">Your Blueprint is Ready!</h1>
          <div className="ready-subtitle-lines">
            <p className="ready-sub-line-1">You started with an idea.</p>
            <p className="ready-sub-line-2">Now you know exactly what you are building.</p>
          </div>
        </div>

        {/* 2-Column Summary Checklist Card */}
        <div className="ready-checklist-card">
          <div className="checklist-two-columns">
            {/* Column 1 */}
            <div className="checklist-column">
              {col1Items.map((item, idx) => (
                <div key={idx} className="checklist-badge-row">
                  <div className="check-bullet-icon">
                    <CheckCircle2 size={18} className="text-emerald-500 fill-emerald-50" />
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
                    <CheckCircle2 size={18} className="text-emerald-500 fill-emerald-50" />
                  </div>
                  <span className="checklist-item-name">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="ready-bottom-actions-row">
          <button
            type="button"
            className="btn-view-blueprint-outline"
            onClick={onViewFullBlueprint}
          >
            <FileText size={16} />
            <span>View Full Blueprint</span>
          </button>

          <button
            type="button"
            className="btn-primary-continue"
            onClick={onContinueToStep2}
          >
            <span>Continue to Step 2</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
