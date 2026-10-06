import React, { useState } from 'react';
import { 
  AlertCircle, 
  Users, 
  MapPin, 
  RotateCw, 
  Flame, 
  Lightbulb, 
  Target, 
  Pencil, 
  Check, 
  X, 
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import AiProviderBanner from './AiProviderBanner';

export default function Screen03Understand({ 
  insights = {}, 
  projectName = '',
  aiSettings,
  onOpenAiSettings,
  onContinue, 
  onBack,
  onEditMore
}) {
  const [data, setData] = useState({
    problem: insights.problem || 'Beginners struggle to create professional-looking portraits because they don\'t know the photographic decisions required.',
    users: insights.users || 'People who want good portraits but have little or no photography knowledge.',
    context: insights.context || 'Occurs when capturing photos in normal environments using a smartphone or camera.',
    currentWorkflow: insights.currentWorkflow || 'Position person → Point camera → Guess framing → Click.',
    painPoint: insights.painPoint || 'Users don\'t know where to position themselves, the subject, or how to handle lighting and framing.',
    userNeed: insights.userNeed || 'Simple real-time guidance that translates photography knowledge into actionable instructions.',
    goal: insights.goal || 'Help beginners create better portraits without needing photography expertise.'
  });

  const [editingKey, setEditingKey] = useState(null);
  const [editText, setEditText] = useState('');
  const [isEditingAll, setIsEditingAll] = useState(false);

  const handleStartEdit = (key, currentVal) => {
    setEditingKey(key);
    setEditText(currentVal);
  };

  const handleSaveEdit = (key) => {
    setData(prev => ({ ...prev, [key]: editText }));
    setEditingKey(null);
  };

  const handleCancelEdit = () => {
    setEditingKey(null);
  };

  const handleToggleEditAll = () => {
    setIsEditingAll(!isEditingAll);
  };

  const rows = [
    {
      key: 'problem',
      label: 'Problem',
      badgeBg: 'bg-red-50 text-red-600 border-red-200',
      iconBoxBg: 'bg-red-500 text-white',
      icon: <AlertCircle size={18} />,
      value: data.problem
    },
    {
      key: 'users',
      label: 'Users',
      badgeBg: 'bg-blue-50 text-blue-600 border-blue-200',
      iconBoxBg: 'bg-blue-500 text-white',
      icon: <Users size={18} />,
      value: data.users
    },
    {
      key: 'context',
      label: 'Context',
      badgeBg: 'bg-amber-50 text-amber-600 border-amber-200',
      iconBoxBg: 'bg-amber-500 text-white',
      icon: <MapPin size={18} />,
      value: data.context
    },
    {
      key: 'currentWorkflow',
      label: 'Current Workflow',
      badgeBg: 'bg-purple-50 text-purple-600 border-purple-200',
      iconBoxBg: 'bg-purple-500 text-white',
      icon: <RotateCw size={18} />,
      value: data.currentWorkflow
    },
    {
      key: 'painPoint',
      label: 'Pain Point',
      badgeBg: 'bg-rose-50 text-rose-600 border-rose-200',
      iconBoxBg: 'bg-rose-500 text-white',
      icon: <Flame size={18} />,
      value: data.painPoint
    },
    {
      key: 'userNeed',
      label: 'User Need',
      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      iconBoxBg: 'bg-emerald-500 text-white',
      icon: <Lightbulb size={18} />,
      value: data.userNeed
    },
    {
      key: 'goal',
      label: 'Goal',
      badgeBg: 'bg-sky-50 text-sky-600 border-sky-200',
      iconBoxBg: 'bg-sky-600 text-white',
      icon: <Target size={18} />,
      value: data.goal
    }
  ];

  const handleLooksRight = () => {
    onContinue(data);
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
        <div className="stage-pill-tag">03 UNDERSTAND & DEFINE</div>
        <div className="stage-step-count">Step 1 of 3</div>
      </div>

      <div className="understand-define-container">
        {/* Header with Title & Edit All button */}
        <div className="understand-header-row">
          <div className="understand-header-text">
            <h1 className="screen-main-title">Your idea so far.</h1>
            <p className="screen-main-subtitle">
              Here is what I've understood from our conversation. Please review and edit if needed.
            </p>
          </div>
          <button 
            type="button" 
            className={`btn-edit-all ${isEditingAll ? 'active' : ''}`}
            onClick={handleToggleEditAll}
          >
            <Pencil size={14} />
            <span>{isEditingAll ? 'Done Editing' : 'Edit All'}</span>
          </button>
        </div>

        {/* 7 Horizontal Cards List */}
        <div className="horizontal-insights-stack">
          {rows.map((row) => {
            const isEditingThis = editingKey === row.key || isEditingAll;

            return (
              <div key={row.key} className="insight-horizontal-row-card">
                {/* Left colored square icon */}
                <div className={`row-icon-badge ${row.iconBoxBg}`}>
                  {row.icon}
                </div>

                {/* Middle content: Label + Text */}
                <div className="row-content-body">
                  <span className="row-label-title">{row.label}</span>
                  
                  {isEditingThis ? (
                    <div className="row-inline-editor">
                      <textarea
                        value={isEditingAll ? data[row.key] : editText}
                        onChange={(e) => {
                          if (isEditingAll) {
                            setData(prev => ({ ...prev, [row.key]: e.target.value }));
                          } else {
                            setEditText(e.target.value);
                          }
                        }}
                        rows={2}
                        className="row-edit-textarea"
                        autoFocus={editingKey === row.key}
                      />
                      {!isEditingAll && (
                        <div className="row-editor-actions">
                          <button 
                            type="button" 
                            className="btn-save-inline" 
                            onClick={() => handleSaveEdit(row.key)}
                          >
                            <Check size={14} /> Save
                          </button>
                          <button 
                            type="button" 
                            className="btn-cancel-inline" 
                            onClick={handleCancelEdit}
                          >
                            <X size={14} /> Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="row-description-text">{data[row.key]}</p>
                  )}
                </div>

                {/* Right pencil icon (when not editing all) */}
                {!isEditingAll && !isEditingThis && (
                  <button
                    type="button"
                    className="row-pencil-btn"
                    title={`Edit ${row.label}`}
                    onClick={() => handleStartEdit(row.key, data[row.key])}
                  >
                    <Pencil size={15} />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="screen-bottom-actions">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          <button className="btn-primary-continue" onClick={handleLooksRight}>
            <span>Looks Right</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
