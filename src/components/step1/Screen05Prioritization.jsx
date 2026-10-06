import React, { useState } from 'react';
import { 
  Pin, 
  Bookmark, 
  Clock, 
  Info, 
  ArrowRight, 
  ArrowLeft,
  Check,
  Plus
} from 'lucide-react';
import AiProviderBanner from './AiProviderBanner';

export default function Screen05Prioritization({ 
  aiSettings,
  onOpenAiSettings,
  initialPriorities,
  onContinue, 
  onBack 
}) {
  const [priorities, setPriorities] = useState(() => {
    if (initialPriorities) return initialPriorities;
    return {
      mustHave: [
        { id: 'p-1', name: 'Person Detection', checked: true },
        { id: 'p-2', name: 'Composition Guidance', checked: true },
        { id: 'p-3', name: 'Camera Position Guidance', checked: true },
        { id: 'p-4', name: 'Basic Capture', checked: true }
      ],
      goodToHave: [
        { id: 'p-5', name: 'Lighting Analysis', checked: true },
        { id: 'p-6', name: 'Reference Image Mode', checked: true }
      ],
      future: [
        { id: 'p-7', name: 'Automatic Style Matching', checked: false },
        { id: 'p-8', name: 'Advanced Camera Settings', checked: false },
        { id: 'p-9', name: 'AI Photo Enhancement', checked: false }
      ]
    };
  });

  const toggleCheck = (categoryKey, itemId) => {
    setPriorities(prev => ({
      ...prev,
      [categoryKey]: prev[categoryKey].map(item => 
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  const handleProceed = () => {
    onContinue(priorities);
  };

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Top AI Provider Banner */}
      <AiProviderBanner 
        aiSettings={aiSettings}
        onOpenSettings={onOpenAiSettings}
      />

      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">05 FEATURE PRIORITIZATION</div>
        <div className="stage-step-count">Step 1 of 3</div>
      </div>

      <div className="prioritization-container">
        {/* Title area */}
        <div className="prioritization-header-text">
          <h1 className="screen-main-title">Prioritize your features.</h1>
          <p className="screen-main-subtitle">
            Let's decide what to build first. This helps you focus on the most important features for your MVP.
          </p>
        </div>

        {/* 3 Kanban Columns Grid */}
        <div className="prioritization-columns-grid">
          {/* Column 1: Must Have */}
          <div className="kanban-column column-must-have">
            <div className="kanban-header-bar header-red">
              <div className="flex items-center gap-2">
                <span className="kanban-header-icon-wrap icon-red">
                  <Pin size={15} />
                </span>
                <span className="kanban-title-main">Must Have</span>
              </div>
              <span className="kanban-subtitle-tag tag-red">(Needed for MVP)</span>
            </div>

            <div className="kanban-items-list">
              {priorities.mustHave.map(item => (
                <div 
                  key={item.id} 
                  className={`kanban-item-card ${item.checked ? 'item-checked' : ''}`}
                  onClick={() => toggleCheck('mustHave', item.id)}
                >
                  <label 
                    className="kanban-checkbox-label"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleCheck('mustHave', item.id)}
                      className="kanban-custom-checkbox checkbox-blue"
                    />
                  </label>
                  <span className="kanban-item-text">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Good to Have */}
          <div className="kanban-column column-good-to-have">
            <div className="kanban-header-bar header-amber">
              <div className="flex items-center gap-2">
                <span className="kanban-header-icon-wrap icon-amber">
                  <Bookmark size={15} />
                </span>
                <span className="kanban-title-main">Good to Have</span>
              </div>
              <span className="kanban-subtitle-tag tag-amber">(Nice to have)</span>
            </div>

            <div className="kanban-items-list">
              {priorities.goodToHave.map(item => (
                <div 
                  key={item.id} 
                  className={`kanban-item-card ${item.checked ? 'item-checked' : ''}`}
                  onClick={() => toggleCheck('goodToHave', item.id)}
                >
                  <label 
                    className="kanban-checkbox-label"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleCheck('goodToHave', item.id)}
                      className="kanban-custom-checkbox checkbox-blue"
                    />
                  </label>
                  <span className="kanban-item-text">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Future */}
          <div className="kanban-column column-future">
            <div className="kanban-header-bar header-purple">
              <div className="flex items-center gap-2">
                <span className="kanban-header-icon-wrap icon-purple">
                  <Clock size={15} />
                </span>
                <span className="kanban-title-main">Future</span>
              </div>
              <span className="kanban-subtitle-tag tag-purple">(Later)</span>
            </div>

            <div className="kanban-items-list">
              {priorities.future.map(item => (
                <div 
                  key={item.id} 
                  className={`kanban-item-card ${item.checked ? 'item-checked' : ''}`}
                  onClick={() => toggleCheck('future', item.id)}
                >
                  <label 
                    className="kanban-checkbox-label"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleCheck('future', item.id)}
                      className="kanban-custom-checkbox checkbox-blue"
                    />
                  </label>
                  <span className="kanban-item-text">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why prioritize? Info Callout Box */}
        <div className="why-prioritize-callout-card">
          <div className="callout-info-icon-box">
            <Info size={18} className="text-blue-600" />
          </div>
          <div className="callout-text-block">
            <span className="callout-bold-title">Why prioritize?</span>
            <span className="callout-desc-body">
              {' '}Starting with a focused MVP helps you build faster, test early with users, and add advanced features later.
            </span>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="screen-bottom-actions">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          <button className="btn-primary-continue" onClick={handleProceed}>
            <span>Continue to Blueprint</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
