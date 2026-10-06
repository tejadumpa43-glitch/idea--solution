import React, { useState } from 'react';
import Screen31BuildStart from './Screen31BuildStart';
import Screen32Workspace from './Screen32Workspace';
import Screen33AiMentor from './Screen33AiMentor';
import Screen34TaskDetail from './Screen34TaskDetail';
import Screen35Testing from './Screen35Testing';
import Screen36PreviewReview from './Screen36PreviewReview';
import Screen37Launch from './Screen37Launch';

export default function Step3BuildFlow({ 
  project = {}, 
  initialSubStep = 1,
  onBackToStep2,
  onGoToDashboard,
  onStartNewProject 
}) {
  const [subStep, setSubStep] = useState(initialSubStep);

  return (
    <div className="step3-flow-container animate-fade-in">
      {subStep === 1 && (
        <Screen31BuildStart 
          onStartBuilding={() => setSubStep(2)}
        />
      )}

      {subStep === 2 && (
        <Screen32Workspace 
          onSelectTask={() => setSubStep(4)}
          onOpenAiMentor={() => setSubStep(3)}
          onGoToTesting={() => setSubStep(5)}
          onOpenLiveCamera={() => setSubStep(4)}
        />
      )}

      {subStep === 3 && (
        <Screen33AiMentor 
          onBackToWorkspace={() => setSubStep(2)}
          onProceedToTask={() => setSubStep(4)}
        />
      )}

      {subStep === 4 && (
        <Screen34TaskDetail 
          onBackToWorkspace={() => setSubStep(2)}
          onProceedToTesting={() => setSubStep(5)}
        />
      )}

      {subStep === 5 && (
        <Screen35Testing 
          onBack={() => setSubStep(2)}
          onProceedToReview={() => setSubStep(6)}
        />
      )}

      {subStep === 6 && (
        <Screen36PreviewReview 
          onBack={() => setSubStep(5)}
          onProceedToLaunch={() => setSubStep(7)}
        />
      )}

      {subStep === 7 && (
        <Screen37Launch 
          project={project}
          onGoToDashboard={onGoToDashboard}
          onStartNewProject={onStartNewProject}
        />
      )}
    </div>
  );
}
