import React from 'react';
import { 
  ClipboardList, 
  Network, 
  Cpu, 
  Package, 
  CheckSquare, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import BoyPlanningIllustration from '../illustrations/BoyPlanningIllustration';

export default function Screen01PlanStart({ 
  onBuildMyPlan 
}) {
  const planPoints = [
    {
      icon: <ClipboardList size={18} className="text-blue-500" />,
      text: 'What needs to be built'
    },
    {
      icon: <Network size={18} className="text-indigo-500" />,
      text: 'How the parts connect'
    },
    {
      icon: <Cpu size={18} className="text-teal-500" />,
      text: 'What technology you may need'
    },
    {
      icon: <Package size={18} className="text-amber-500" />,
      text: 'What to build first'
    },
    {
      icon: <CheckSquare size={18} className="text-emerald-500" />,
      text: 'The tasks required'
    },
    {
      icon: <TrendingUp size={18} className="text-blue-600" />,
      text: 'A clear roadmap to build your project'
    }
  ];

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">02 PLAN START</div>
        <div className="stage-step-count">Step 2 of 3</div>
      </div>

      <div className="plan-start-card">
        <div className="plan-start-grid">
          {/* Left Column: Heading and 6 Items */}
          <div className="plan-start-text-col">
            <h1 className="screen-main-title">Your blueprint is ready.</h1>
            <h2 className="screen-main-title secondary-title">Now let's turn it into a plan.</h2>
            
            <p className="plan-points-intro">We'll help you understand:</p>

            <div className="plan-points-list">
              {planPoints.map((item, idx) => (
                <div key={idx} className="plan-point-row">
                  <div className="plan-point-icon-box">
                    {item.icon}
                  </div>
                  <span className="plan-point-text">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="plan-start-action">
              <button 
                type="button" 
                className="btn-primary-build-plan"
                onClick={onBuildMyPlan}
              >
                <span>Build My Plan</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Student Boy Illustration */}
          <div className="plan-start-illustration-col">
            <BoyPlanningIllustration />
          </div>
        </div>
      </div>
    </div>
  );
}
