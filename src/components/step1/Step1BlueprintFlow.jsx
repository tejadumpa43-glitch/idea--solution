import React, { useState } from 'react';
import Screen01Start from './Screen01Start';
import Screen02Explore from './Screen02Explore';
import Screen03Understand from './Screen03Understand';
import Screen04Solution from './Screen04Solution';
import Screen05Prioritization from './Screen05Prioritization';
import Screen06BlueprintMap from './Screen06BlueprintMap';
import Screen07Ready from './Screen07Ready';
import AiSettingsModal from './AiSettingsModal';

export default function Step1BlueprintFlow({ 
  project = {}, 
  initialSubStep = 1,
  onUpdateProject, 
  onProceedToStep2,
  onViewFullBlueprintModal 
}) {
  const [subStep, setSubStep] = useState(initialSubStep);
  const [rawIdea, setRawIdea] = useState(project?.concept?.rawIdea || project?.extractedInsights?.rawIdea || '');
  const [chatHistory, setChatHistory] = useState(project?.chatHistory || []);
  
  // AI Settings State (Shared across all Step 1 screens)
  const [aiSettings, setAiSettings] = useState({
    provider: 'openai',
    model: 'GPT-5.6 (Recommended)',
    apiKey: 'sk-proj-7839201948572910485920183749201',
    connected: true
  });
  const [showAiModal, setShowAiModal] = useState(false);

  // Extracted insights
  const [insights, setInsights] = useState(() => ({
    problem: project?.blueprint?.problem?.summary || project?.extractedInsights?.problem || 'Beginners struggle to create professional-looking portraits because they don\'t know the photographic decisions required.',
    users: project?.blueprint?.users?.primary || project?.extractedInsights?.users || 'People who want good portraits but have little or no photography knowledge.',
    context: project?.extractedInsights?.context || 'Occurs when capturing photos in normal environments using a smartphone or camera.',
    currentWorkflow: project?.blueprint?.currentWorkflow?.steps?.map(s => s.text).join(' → ') || project?.extractedInsights?.currentWorkflow || 'Position person → Point camera → Guess framing → Click.',
    painPoint: project?.blueprint?.painPoint?.summary || project?.extractedInsights?.painPoint || 'Users don\'t know where to position themselves, the subject, or how to handle lighting and framing.',
    userNeed: project?.blueprint?.userNeed?.summary || project?.extractedInsights?.userNeed || 'Simple real-time guidance that translates photography knowledge into actionable instructions.',
    goal: project?.blueprint?.goal?.summary || project?.extractedInsights?.goal || 'Help beginners create better portraits without needing photography expertise.',
    solution: project?.blueprint?.solution?.summary || project?.extractedInsights?.proposedSolution || 'An intelligent photography application that analyzes the scene and guides beginners through composition, lighting, framing and camera positioning so they can capture a better portrait.',
    ...project?.extractedInsights
  }));

  const [features, setFeatures] = useState(project?.blueprint?.coreFeatures || []);
  const [priorities, setPriorities] = useState(null);

  // 1: Start -> 2: Explore
  const handleStartContinue = (enteredIdea) => {
    setRawIdea(enteredIdea);
    setInsights(prev => ({ ...prev, rawIdea: enteredIdea }));
    if (onUpdateProject) {
      onUpdateProject({
        ...project,
        title: enteredIdea.slice(0, 32).toUpperCase().replace(/[^A-Z0-9 ]/g, '') || project.title,
        extractedInsights: { ...project.extractedInsights, rawIdea: enteredIdea }
      });
    }
    setSubStep(2);
  };

  // 2: Explore -> 3: Understand
  const handleExploreContinue = ({ chatHistory: history, insights: gatheredInsights }) => {
    setChatHistory(history);
    setInsights(prev => ({ ...prev, ...gatheredInsights }));
    if (onUpdateProject) {
      onUpdateProject({
        ...project,
        chatHistory: history,
        extractedInsights: gatheredInsights
      });
    }
    setSubStep(3);
  };

  // 3: Understand -> 4: Solution
  const handleUnderstandContinue = (definedData) => {
    setInsights(prev => ({ ...prev, ...definedData }));
    if (onUpdateProject) {
      onUpdateProject({
        ...project,
        extractedInsights: { ...project.extractedInsights, ...definedData }
      });
    }
    setSubStep(4);
  };

  // 4: Solution -> 5: Prioritization
  const handleSolutionContinue = ({ solutionStatement, capabilities, features: chosenFeatures }) => {
    setInsights(prev => ({ ...prev, solution: solutionStatement }));
    setFeatures(chosenFeatures || capabilities);
    if (onUpdateProject) {
      onUpdateProject({
        ...project,
        extractedInsights: { ...project.extractedInsights, proposedSolution: solutionStatement },
        blueprint: {
          ...project.blueprint,
          solution: { title: 'What are we proposing?', summary: solutionStatement },
          coreFeatures: chosenFeatures || capabilities
        }
      });
    }
    setSubStep(5);
  };

  // 5: Prioritization -> 6: Blueprint Map
  const handlePrioritizationContinue = (chosenPriorities) => {
    setPriorities(chosenPriorities);
    if (onUpdateProject) {
      onUpdateProject({
        ...project,
        priorities: chosenPriorities
      });
    }
    setSubStep(6);
  };

  // 6: Blueprint Map -> 7: Ready
  const handleBlueprintMapContinue = () => {
    setSubStep(7);
  };

  return (
    <div className="blueprint-flow-wrapper">
      {/* Universal AI Settings Modal */}
      {showAiModal && (
        <AiSettingsModal 
          currentSettings={aiSettings}
          onSave={(newSettings) => setAiSettings(newSettings)}
          onClose={() => setShowAiModal(false)}
        />
      )}

      {/* Screen 01: START */}
      {subStep === 1 && (
        <Screen01Start 
          initialIdea={rawIdea}
          aiSettings={aiSettings}
          onOpenAiSettings={() => setShowAiModal(true)}
          onContinue={handleStartContinue}
        />
      )}

      {/* Screen 02: EXPLORE */}
      {subStep === 2 && (
        <Screen02Explore 
          initialIdea={rawIdea}
          existingChat={chatHistory}
          existingInsights={insights}
          aiSettings={aiSettings}
          onOpenAiSettings={() => setShowAiModal(true)}
          onContinue={handleExploreContinue}
          onBack={() => setSubStep(1)}
        />
      )}

      {/* Screen 03: UNDERSTAND & DEFINE */}
      {subStep === 3 && (
        <Screen03Understand 
          insights={insights}
          projectName={project.title}
          aiSettings={aiSettings}
          onOpenAiSettings={() => setShowAiModal(true)}
          onContinue={handleUnderstandContinue}
          onBack={() => setSubStep(2)}
          onEditMore={() => setSubStep(2)}
        />
      )}

      {/* Screen 04: SOLUTION DEVELOPMENT */}
      {subStep === 4 && (
        <Screen04Solution 
          definedData={insights}
          existingFeatures={features}
          aiSettings={aiSettings}
          onOpenAiSettings={() => setShowAiModal(true)}
          onContinue={handleSolutionContinue}
          onBack={() => setSubStep(3)}
        />
      )}

      {/* Screen 05: FEATURE PRIORITIZATION */}
      {subStep === 5 && (
        <Screen05Prioritization 
          aiSettings={aiSettings}
          onOpenAiSettings={() => setShowAiModal(true)}
          initialPriorities={priorities}
          onContinue={handlePrioritizationContinue}
          onBack={() => setSubStep(4)}
        />
      )}

      {/* Screen 06: PROJECT BLUEPRINT */}
      {subStep === 6 && (
        <Screen06BlueprintMap 
          project={project}
          insights={insights}
          features={features}
          priorities={priorities}
          aiSettings={aiSettings}
          onOpenAiSettings={() => setShowAiModal(true)}
          onContinue={handleBlueprintMapContinue}
          onBack={() => setSubStep(5)}
        />
      )}

      {/* Screen 07: BLUEPRINT READY */}
      {subStep === 7 && (
        <Screen07Ready 
          project={project}
          aiSettings={aiSettings}
          onOpenAiSettings={() => setShowAiModal(true)}
          onViewFullBlueprint={onViewFullBlueprintModal || (() => setSubStep(6))}
          onContinueToStep2={onProceedToStep2}
          onBack={() => setSubStep(6)}
        />
      )}
    </div>
  );
}
