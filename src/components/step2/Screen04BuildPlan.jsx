import React, { useState } from 'react';
import { 
  Folder, 
  ChevronDown, 
  ChevronUp, 
  List, 
  Layers, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft,
  Camera,
  Cpu,
  ShieldCheck,
  Rocket
} from 'lucide-react';
import { DEFAULT_MODULES } from '../../data/planData';

export default function Screen04BuildPlan({ 
  onContinue, 
  onBack 
}) {
  const [modules, setModules] = useState(DEFAULT_MODULES);
  const [expandedModuleId, setExpandedModuleId] = useState('mod-3'); // default expand core logic
  const [selectedTask, setSelectedTask] = useState(DEFAULT_MODULES[2].tasks[0]); // Camera Integration
  const [viewMode, setViewMode] = useState('module'); // 'module' | 'list'

  const toggleModule = (id) => {
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  const getModuleFolderColor = (num) => {
    switch(num) {
      case '01': return 'folder-amber';
      case '02': return 'folder-blue';
      case '03': return 'folder-purple';
      case '04': return 'folder-green';
      case '05': return 'folder-orange';
      default: return 'folder-blue';
    }
  };

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">04 BUILD PLAN</div>
        <div className="stage-step-count">Step 2 of 3</div>
      </div>

      <div className="build-plan-screen-container">
        {/* Title area & view toggle */}
        <div className="build-plan-header-row">
          <div className="screen-header-block">
            <h1 className="screen-main-title">Let's break your project into manageable tasks.</h1>
            <p className="screen-main-subtitle">
              Your project is divided into modules. Each module contains specific tasks with clear explanations.
            </p>
          </div>

          <button 
            type="button" 
            className="btn-toggle-view"
            onClick={() => setViewMode(viewMode === 'module' ? 'list' : 'module')}
          >
            {viewMode === 'module' ? <List size={16} /> : <Layers size={16} />}
            <span>{viewMode === 'module' ? 'View as List' : 'View by Module'}</span>
          </button>
        </div>

        {/* 5 Modular Accordion Cards */}
        <div className="modules-accordion-list">
          {modules.map((mod) => {
            const isExpanded = expandedModuleId === mod.id || viewMode === 'list';

            return (
              <div 
                key={mod.id} 
                className={`module-accordion-card ${isExpanded ? 'card-expanded' : ''}`}
              >
                {/* Module Bar */}
                <div 
                  className="module-bar-header"
                  onClick={() => toggleModule(mod.id)}
                >
                  <div className="module-header-left">
                    <div className={`module-folder-badge ${getModuleFolderColor(mod.number)}`}>
                      <Folder size={18} />
                    </div>
                    <div className="module-meta-text">
                      <span className="module-number-title">{mod.number} {mod.name}</span>
                      <span className="module-summary-snippet">{mod.summary}</span>
                    </div>
                  </div>

                  <div className="module-header-right">
                    <span className="task-count-label">{mod.taskCount} tasks</span>
                    <span className="accordion-chevron-icon">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </div>
                </div>

                {/* Subtasks inside this module */}
                {isExpanded && (
                  <div className="module-subtasks-drawer animate-fade-in">
                    <div className="tasks-sublist">
                      {mod.tasks.map((task) => {
                        const isTaskSelected = selectedTask?.id === task.id;

                        return (
                          <div 
                            key={task.id}
                            className={`subtask-item-row ${isTaskSelected ? 'task-row-selected' : ''}`}
                            onClick={() => setSelectedTask(task)}
                          >
                            <div className="task-row-left">
                              <span className="task-bullet-dot"></span>
                              <span className="task-row-title">{task.title}</span>
                            </div>

                            <div className="task-row-right">
                              <span className={`task-status-badge badge-${task.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                {task.status}
                              </span>
                              <span className="task-difficulty-badge">
                                {task.difficulty}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Task Details Inspector Card */}
        {selectedTask && (
          <div className="task-details-inspector-card animate-fade-in">
            <div className="inspector-card-header">
              <span className="inspector-card-tag">Task Details</span>
            </div>

            <div className="task-inspector-title-row">
              <div className="task-inspector-heading-col">
                <div className="task-icon-box">
                  <Camera size={20} className="text-blue-600" />
                </div>
                <div className="task-text-info">
                  <h3 className="task-inspector-title">{selectedTask.title}</h3>
                  <p className="task-inspector-desc">{selectedTask.description}</p>
                </div>
              </div>

              <div className="task-inspector-badges-col">
                <span className={`badge-status-pill badge-${selectedTask.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {selectedTask.status}
                </span>
                <span className="badge-difficulty-pill">
                  {selectedTask.difficulty}
                </span>
              </div>
            </div>

            {/* Why / Depends on / Estimated time 3-column grid */}
            <div className="task-meta-triad-grid">
              <div className="triad-item">
                <span className="triad-label">Why?</span>
                <p className="triad-text">{selectedTask.why}</p>
              </div>

              <div className="triad-item">
                <span className="triad-label">Depends on</span>
                <p className="triad-text">{selectedTask.dependsOn}</p>
              </div>

              <div className="triad-item">
                <span className="triad-label">Estimated time</span>
                <p className="triad-text">{selectedTask.estimatedTime}</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Actions Row */}
        <div className="screen-actions-row">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
          <button className="btn-primary-continue" onClick={onContinue}>
            <span>Continue to Roadmap</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
