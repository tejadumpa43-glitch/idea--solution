import React, { useState } from 'react';
import { 
  Download, 
  Pencil, 
  Target, 
  Layers, 
  Cpu, 
  FolderGit2, 
  Rocket, 
  CheckSquare, 
  Calendar, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  ArrowUpRight,
  Printer
} from 'lucide-react';

export default function Screen06FinalPlan({ 
  project = {}, 
  onJumpToTab,
  onGoToStep3,
  onBack,
  onEditPlan 
}) {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    'Overview',
    'Architecture',
    'Technology',
    'Modules',
    'Tasks',
    'Roadmap'
  ];

  const goalText = project?.blueprint?.goal?.summary || 
    project?.extractedInsights?.goal || 
    'A clear statement of what your project aims to achieve based on your blueprint.';

  const summaryCards = [
    {
      id: 'architecture',
      title: 'Architecture',
      icon: <Layers size={20} className="text-blue-500" />,
      metric: '4 components',
      tabTarget: 'Architecture'
    },
    {
      id: 'technology',
      title: 'Technology Stack',
      icon: <Cpu size={20} className="text-purple-500" />,
      metric: '4 tools',
      tabTarget: 'Technology'
    },
    {
      id: 'modules',
      title: 'Core Modules',
      icon: <FolderGit2 size={20} className="text-amber-500" />,
      metric: '5 modules',
      tabTarget: 'Modules'
    },
    {
      id: 'mvp',
      title: 'MVP (First Version)',
      icon: <Rocket size={20} className="text-emerald-500" />,
      metric: 'Key features to build first',
      tabTarget: 'Overview'
    },
    {
      id: 'tasks',
      title: 'Task Breakdown',
      icon: <CheckSquare size={20} className="text-indigo-500" />,
      metric: '14 tasks',
      tabTarget: 'Tasks'
    },
    {
      id: 'roadmap',
      title: 'Build Roadmap',
      icon: <Calendar size={20} className="text-rose-500" />,
      metric: '4 weeks',
      tabTarget: 'Roadmap'
    }
  ];

  const handlePrintDownload = () => {
    window.print();
  };

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">06 PROJECT PLAN</div>
        <div className="stage-step-count">Step 2 of 3</div>
      </div>

      <div className="final-plan-screen-container">
        {/* Title area & Download PDF / Edit Plan buttons */}
        <div className="final-plan-header-row">
          <div className="screen-header-block">
            <h1 className="screen-main-title">Your Project Plan is Ready!</h1>
            <p className="screen-main-subtitle">
              Here is a complete plan to build your project. You can review, edit or download it.
            </p>
          </div>

          <div className="plan-header-action-btns">
            <button 
              type="button" 
              className="btn-header-secondary"
              onClick={handlePrintDownload}
              title="Print or Save PDF"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </button>

            <button 
              type="button" 
              className="btn-header-secondary"
              onClick={onEditPlan || (() => onJumpToTab('Modules'))}
              title="Edit Plan"
            >
              <Pencil size={15} />
              <span>Edit Plan</span>
            </button>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="final-plan-tabs-row">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`plan-tab-pill ${activeTab === tab ? 'active-tab' : ''}`}
              onClick={() => {
                setActiveTab(tab);
                if (tab !== 'Overview' && onJumpToTab) {
                  onJumpToTab(tab);
                }
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="final-plan-content-wrap">
          {/* Project Goal Card */}
          <div className="plan-goal-card">
            <div className="goal-icon-badge">
              <Target size={22} className="text-purple-600" />
            </div>
            <div className="goal-text-col">
              <div className="goal-card-label">Project Goal</div>
              <p className="goal-card-desc">{goalText}</p>
            </div>
          </div>

          {/* 6 Summary Cards Grid */}
          <div className="plan-summary-cards-grid">
            {summaryCards.map((card) => (
              <div 
                key={card.id}
                className="plan-summary-card"
                onClick={() => onJumpToTab && onJumpToTab(card.tabTarget)}
              >
                <div className="summary-card-top">
                  <div className="summary-card-icon-wrap">
                    {card.icon}
                  </div>
                  <h4 className="summary-card-title">{card.title}</h4>
                </div>

                <div className="summary-card-metric-text">
                  {card.metric}
                </div>

                <div className="summary-card-footer">
                  <span className="view-link-text">View</span>
                  <ArrowRight size={14} className="view-link-arrow" />
                </div>
              </div>
            ))}
          </div>

          {/* Success / All Set to Build Banner */}
          <div className="all-set-banner-card animate-fade-in">
            <div className="banner-green-circle">
              <Check size={24} strokeWidth={3} className="text-white" />
            </div>
            <div className="banner-text-info">
              <h3 className="banner-title">You're all set to start building!</h3>
              <p className="banner-desc">
                You now have a clear plan with architecture, technology, tasks and a roadmap. 
                Move to the next step to actually build your project.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="screen-actions-row plan-ready-actions-row">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
          <button 
            type="button" 
            className="btn-primary-go-step3"
            onClick={onGoToStep3}
          >
            <span>Go to Step 3: Build & Launch</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
