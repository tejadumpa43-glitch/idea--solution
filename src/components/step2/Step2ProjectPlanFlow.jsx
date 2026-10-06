import React, { useState } from 'react';
import { 
  ClipboardList, 
  Layers, 
  Cpu, 
  FolderGit2, 
  Calendar, 
  CheckCircle2,
  Check
} from 'lucide-react';
import Screen01PlanStart from './Screen01PlanStart';
import Screen02Architecture from './Screen02Architecture';
import Screen03Technology from './Screen03Technology';
import Screen04BuildPlan from './Screen04BuildPlan';
import Screen05Roadmap from './Screen05Roadmap';
import Screen06FinalPlan from './Screen06FinalPlan';

export default function Step2ProjectPlanFlow({ 
  project = {}, 
  initialSubStep = 1,
  onProceedToStep3,
  onBackToStep1 
}) {
  const [subStep, setSubStep] = useState(initialSubStep);

  const navItems = [
    { number: 1, label: 'Plan Start', key: 1 },
    { number: 2, label: 'Architecture', key: 2 },
    { number: 3, label: 'Technology', key: 3 },
    { number: 4, label: 'Build Plan', key: 4 },
    { number: 5, label: 'Roadmap', key: 5 },
    { number: 6, label: 'Final Plan', key: 6 }
  ];

  const handleJumpToTab = (tabName) => {
    switch(tabName) {
      case 'Architecture': setSubStep(2); break;
      case 'Technology': setSubStep(3); break;
      case 'Modules':
      case 'Tasks': setSubStep(4); break;
      case 'Roadmap': setSubStep(5); break;
      default: setSubStep(6); break;
    }
  };

  return (
    <div className="step2-layout-container animate-fade-in">
      {/* Left Sidebar Sub-Navigation for Step 2 */}
      <aside className="step2-vertical-sidebar">
        <div className="sidebar-step-title-row">
          <span className="sidebar-step-heading">Step 2</span>
        </div>

        <nav className="step2-nav-list" aria-label="Step 2 Stages">
          {navItems.map((item) => {
            const isActive = subStep === item.key;
            const isPassed = subStep > item.key;

            return (
              <button
                key={item.key}
                type="button"
                className={`step2-nav-button ${isActive ? 'active-nav-item' : ''} ${isPassed ? 'passed-nav-item' : ''}`}
                onClick={() => setSubStep(item.key)}
              >
                <span className="step2-nav-circle">
                  {isPassed ? (
                    <Check size={12} strokeWidth={3} />
                  ) : (
                    <span>{item.number}</span>
                  )}
                </span>
                <span className="step2-nav-label">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Viewport for Active Step 2 Subscreen */}
      <div className="step2-subscreen-viewport">
        {subStep === 1 && (
          <Screen01PlanStart 
            onBuildMyPlan={() => setSubStep(2)}
          />
        )}

        {subStep === 2 && (
          <Screen02Architecture 
            onContinue={() => setSubStep(3)}
            onBack={() => setSubStep(1)}
          />
        )}

        {subStep === 3 && (
          <Screen03Technology 
            onContinue={() => setSubStep(4)}
            onBack={() => setSubStep(2)}
          />
        )}

        {subStep === 4 && (
          <Screen04BuildPlan 
            onContinue={() => setSubStep(5)}
            onBack={() => setSubStep(3)}
          />
        )}

        {subStep === 5 && (
          <Screen05Roadmap 
            onContinue={() => setSubStep(6)}
            onBack={() => setSubStep(4)}
          />
        )}

        {subStep === 6 && (
          <Screen06FinalPlan 
            project={project}
            onJumpToTab={handleJumpToTab}
            onGoToStep3={onProceedToStep3}
            onBack={() => setSubStep(5)}
            onEditPlan={() => setSubStep(4)}
          />
        )}
      </div>
    </div>
  );
}
