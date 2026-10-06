import React from 'react';
import { 
  Bot, 
  CheckSquare, 
  Eye, 
  Wrench, 
  Rocket, 
  ArrowRight,
  Layers,
  Flag,
  Clock
} from 'lucide-react';
import GirlCodingRocketIllustration from '../illustrations/GirlCodingRocketIllustration';

export default function Screen31BuildStart({ onStartBuilding }) {
  const features = [
    {
      icon: <Bot size={18} className="text-blue-500" />,
      text: 'Build with AI support'
    },
    {
      icon: <CheckSquare size={18} className="text-emerald-500" />,
      text: 'Follow your task list'
    },
    {
      icon: <Eye size={18} className="text-purple-500" />,
      text: 'See live preview as you build'
    },
    {
      icon: <Wrench size={18} className="text-amber-500" />,
      text: 'Run tests and fix issues'
    },
    {
      icon: <Rocket size={18} className="text-rose-500" />,
      text: 'Deploy with one click'
    }
  ];

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">3.1 BUILD START</div>
        <div className="stage-step-count">Step 3 of 3</div>
      </div>

      <div className="build-start-card">
        <div className="build-start-grid">
          {/* Left Column: Heading, description, feature bullets */}
          <div className="build-start-text-col">
            <h1 className="screen-main-title">Your plan is ready.</h1>
            <h2 className="screen-main-title secondary-title">Now let's build your project.</h2>
            <p className="screen-main-subtitle">
              We'll help you turn your plan into a working application. You'll get an AI-powered development workspace, step-by-step guidance, testing, and deployment.
            </p>

            <div className="build-features-list">
              {features.map((f, idx) => (
                <div key={idx} className="build-feature-row">
                  <div className="build-feature-icon-box">
                    {f.icon}
                  </div>
                  <span className="build-feature-text">{f.text}</span>
                </div>
              ))}
            </div>

            {/* Bottom 3 Summary Cards */}
            <div className="build-plan-triad-cards">
              <div className="plan-triad-card">
                <div className="triad-icon-box">
                  <Layers size={18} className="text-blue-500" />
                </div>
                <div className="triad-info">
                  <div className="triad-val">14 Build Tasks</div>
                  <div className="triad-sub">From your plan</div>
                </div>
              </div>

              <div className="plan-triad-card">
                <div className="triad-icon-box">
                  <Flag size={18} className="text-emerald-500" />
                </div>
                <div className="triad-info">
                  <div className="triad-val">4 Milestones</div>
                  <div className="triad-sub">To reach MVP</div>
                </div>
              </div>

              <div className="plan-triad-card">
                <div className="triad-icon-box">
                  <Clock size={18} className="text-amber-500" />
                </div>
                <div className="triad-info">
                  <div className="triad-val">~4 Weeks</div>
                  <div className="triad-sub">Estimated time</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="build-start-action-row">
              <button 
                type="button" 
                className="btn-primary-start-building"
                onClick={onStartBuilding}
              >
                <span>Start Building</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div className="build-start-illustration-col">
            <GirlCodingRocketIllustration />
          </div>
        </div>
      </div>
    </div>
  );
}
