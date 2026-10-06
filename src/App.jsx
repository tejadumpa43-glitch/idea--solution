import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Step1BlueprintFlow from './components/step1/Step1BlueprintFlow';
import Step2ProjectPlanFlow from './components/step2/Step2ProjectPlanFlow';
import Step3BuildFlow from './components/step3/Step3BuildFlow';
import Dashboard from './components/Dashboard';
import JustAClickCaseStudy from './components/JustAClickCaseStudy';
import ProjectBlueprint from './components/ProjectBlueprint';
import { 
  loadSavedProjects, 
  saveProjectToStore, 
  JUST_A_CLICK_PROJECT 
} from './data/projectsData';
import './App.css';

export default function App() {
  const [projects, setProjects] = useState(() => loadSavedProjects());
  const [activeProject, setActiveProject] = useState(() => {
    const list = loadSavedProjects();
    const justAClick = list.find(p => p.id === 'just-a-click') || JUST_A_CLICK_PROJECT;
    return justAClick;
  });

  // currentView: 'step1' | 'step2' | 'step3' | 'dashboard' | 'just-a-click'
  const [currentView, setCurrentView] = useState('step1');
  const [currentStep, setCurrentStep] = useState(1);
  const [showFullBlueprintModal, setShowFullBlueprintModal] = useState(false);

  // Auto-sync projects to localStorage
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('idea_to_solution_projects_v1', JSON.stringify(projects));
    }
  }, [projects]);

  // Handle Stepper selection from top Header
  const handleSelectStep = (stepNumber) => {
    setCurrentStep(stepNumber);
    if (stepNumber === 1) setCurrentView('step1');
    if (stepNumber === 2) setCurrentView('step2');
    if (stepNumber === 3) setCurrentView('step3');
  };

  // Start New Project from scratch
  const handleStartNewProject = () => {
    const newProj = {
      id: `proj-${Date.now()}`,
      title: 'New Student Project',
      subtitle: 'In Discovery with AI Project Architect',
      tagline: 'Transforming raw idea into actionable blueprint',
      category: 'Software / Web App',
      status: 'Blueprint in progress',
      progress: 15,
      updatedAt: 'Just now',
      createdAt: new Date().toISOString().split('T')[0],
      isExample: false,
      chatHistory: [],
      extractedInsights: {
        rawIdea: '',
        purpose: '',
        users: '',
        context: '',
        currentWorkflow: '',
        painPoint: '',
        userNeed: '',
        goal: '',
        proposedSolution: ''
      },
      blueprint: {}
    };

    setActiveProject(newProj);
    setCurrentStep(1);
    setCurrentView('step1');
  };

  // Open an existing project
  const handleOpenProject = (project) => {
    setActiveProject(project);
    setCurrentStep(1);
    setCurrentView('step1');
  };

  // Open JUST A CLICK directly
  const handleOpenJustAClick = () => {
    const justAClick = projects.find(p => p.id === 'just-a-click') || JUST_A_CLICK_PROJECT;
    setActiveProject(justAClick);
    setCurrentView('just-a-click');
  };

  // Update working project from sub-flows
  const handleUpdateProject = (updatedProj) => {
    setActiveProject(updatedProj);
    const updatedList = saveProjectToStore(updatedProj);
    setProjects(updatedList);
  };

  // Transition from Step 1 -> Step 2
  const handleProceedToStep2 = () => {
    setCurrentStep(2);
    setCurrentView('step2');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Transition from Step 2 -> Step 3
  const handleProceedToStep3 = () => {
    setCurrentStep(3);
    setCurrentView('step3');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root-shell">
      {/* Top Header Navigation matching screenshots */}
      <Header 
        currentStep={currentStep}
        currentView={currentView}
        onSelectStep={handleSelectStep}
        onGoToDashboard={() => setCurrentView('dashboard')}
        onOpenJustAClick={handleOpenJustAClick}
        onStartNewProject={handleStartNewProject}
        activeProject={activeProject}
      />

      {/* Main Content Router */}
      <main className="app-main-content">
        {/* Dashboard View */}
        {currentView === 'dashboard' && (
          <Dashboard 
            projects={projects}
            onStartNewProject={handleStartNewProject}
            onOpenProject={handleOpenProject}
            onOpenJustAClick={handleOpenJustAClick}
            setCurrentView={setCurrentView}
          />
        )}

        {/* JUST A CLICK Case Study View */}
        {currentView === 'just-a-click' && (
          <JustAClickCaseStudy 
            onViewBlueprint={() => {
              setCurrentStep(1);
              setCurrentView('step1');
            }}
            onBackToDashboard={() => setCurrentView('dashboard')}
          />
        )}

        {/* Step 1: Project Blueprint Flow (6 Sub-screens matching Image 1) */}
        {currentView === 'step1' && (
          <Step1BlueprintFlow 
            project={activeProject}
            onUpdateProject={handleUpdateProject}
            onProceedToStep2={handleProceedToStep2}
            onViewFullBlueprintModal={() => setShowFullBlueprintModal(true)}
          />
        )}

        {/* Step 2: Project Plan Flow (6 Sub-screens with left sidebar matching Image 2) */}
        {currentView === 'step2' && (
          <Step2ProjectPlanFlow 
            project={activeProject}
            onProceedToStep3={handleProceedToStep3}
            onBackToStep1={() => {
              setCurrentStep(1);
              setCurrentView('step1');
            }}
          />
        )}

        {/* Step 3: Build & Launch Flow (Screens 3.1 to 3.7 matching Image 3) */}
        {currentView === 'step3' && (
          <Step3BuildFlow 
            project={activeProject}
            onBackToStep2={() => {
              setCurrentStep(2);
              setCurrentView('step2');
            }}
            onGoToDashboard={() => setCurrentView('dashboard')}
            onStartNewProject={handleStartNewProject}
          />
        )}
      </main>

      {/* Full Blueprint Modal if triggered */}
      {showFullBlueprintModal && (
        <div className="modal-backdrop-overlay" onClick={() => setShowFullBlueprintModal(false)}>
          <div className="modal-card modal-large" onClick={(e) => e.stopPropagation()} style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '1.3rem' }}>Complete 14-Section Project Blueprint</h2>
              <button className="btn-close-modal" onClick={() => setShowFullBlueprintModal(false)}>✕</button>
            </div>
            <ProjectBlueprint 
              project={activeProject}
              onGoToBuildPhase={() => {
                setShowFullBlueprintModal(false);
                handleProceedToStep2();
              }}
              onEditBlueprint={() => {
                setShowFullBlueprintModal(false);
                setCurrentStep(1);
                setCurrentView('step1');
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
