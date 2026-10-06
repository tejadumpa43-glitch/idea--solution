import React, { useState } from 'react';
import { 
  Check, 
  Edit3, 
  RotateCcw, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  AlertTriangle, 
  GitBranch, 
  Target, 
  Trophy, 
  Compass,
  Save,
  X
} from 'lucide-react';

export default function UnderstandDefine({ 
  insights = {}, 
  onSaveInsights, 
  onAcceptAndProceed, 
  onBackToChat 
}) {
  const [data, setData] = useState({
    problem: insights.problem || insights.painPoint || "Beginners don't have the photographic experience required to make complex decisions on lighting, angle, and framing.",
    users: insights.users || "Everyday smartphone users and students with zero photography knowledge.",
    currentWorkflow: insights.currentWorkflow || "Open phone camera → point randomly → take 30 awkward photos → feel disappointed.",
    painPoint: insights.painPoint || "Cognitive overload from photographic theory; lack of spatial intuition for flattering light.",
    userNeed: insights.userNeed || "Simple, real-time 3-word guidance that translates professional technique into effortless actions.",
    goal: insights.goal || "Allow any beginner to capture a magazine-worthy portrait in under 60 seconds with zero training."
  });

  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');

  const startEdit = (fieldKey, currentValue) => {
    setEditingField(fieldKey);
    setTempValue(currentValue);
  };

  const saveEdit = (fieldKey) => {
    const updated = { ...data, [fieldKey]: tempValue.trim() };
    setData(updated);
    setEditingField(null);
    if (onSaveInsights) {
      onSaveInsights(updated);
    }
  };

  const cancelEdit = () => {
    setEditingField(null);
  };

  const handleAccept = () => {
    if (onAcceptAndProceed) {
      onAcceptAndProceed(data);
    }
  };

  const cards = [
    {
      key: 'problem',
      label: 'PROBLEM',
      sublabel: 'What root problem are we solving?',
      icon: Compass,
      color: 'blue'
    },
    {
      key: 'users',
      label: 'USERS',
      sublabel: 'Who specifically experiences the friction?',
      icon: Users,
      color: 'indigo'
    },
    {
      key: 'currentWorkflow',
      label: 'CURRENT WORKFLOW',
      sublabel: 'How do users deal with this problem today?',
      icon: GitBranch,
      color: 'purple'
    },
    {
      key: 'painPoint',
      label: 'PAIN POINT',
      sublabel: 'Where is the exact breakdown or emotional friction?',
      icon: AlertTriangle,
      color: 'amber'
    },
    {
      key: 'userNeed',
      label: 'USER NEED',
      sublabel: 'What is the underlying human need (not the app)?',
      icon: Target,
      color: 'emerald'
    },
    {
      key: 'goal',
      label: 'GOAL',
      sublabel: 'What should become dramatically better?',
      icon: Trophy,
      color: 'cyan'
    }
  ];

  return (
    <div className="understand-define-container animate-fade-in">
      {/* Top Banner */}
      <div className="define-header">
        <div className="define-header-info">
          <div className="define-stage-tag">
            <span className="dot-active"></span>
            STEP 2: UNDERSTAND & DEFINE
          </div>
          <h1 className="define-title"># YOUR IDEA SO FAR</h1>
          <p className="define-subtitle">
            Here is the architectural foundation extracted from your conversation. 
            Review each pillar, edit any assumptions, and make it your own.
          </p>
        </div>

        {/* Creator Guarantee Pill */}
        <div className="creator-guarantee-box">
          <ShieldCheck size={18} className="shield-icon" />
          <div className="guarantee-text">
            <strong>You are the Creator.</strong>
            <span>The AI is your architectural thinking partner. Tweak any detail freely.</span>
          </div>
        </div>
      </div>

      {/* Grid of the 6 Core Foundations */}
      <div className="define-cards-grid">
        {cards.map((card) => {
          const Icon = card.icon;
          const isEditing = editingField === card.key;
          const value = data[card.key];

          return (
            <div key={card.key} className={`define-card card-${card.color} ${isEditing ? 'is-editing' : ''}`}>
              <div className="define-card-top">
                <div className="card-badge-row">
                  <div className="card-icon-box">
                    <Icon size={16} />
                  </div>
                  <span className="card-pillar-label">{card.label}</span>
                </div>

                {!isEditing ? (
                  <button 
                    className="btn-card-edit"
                    onClick={() => startEdit(card.key, value)}
                    title={`Edit ${card.label}`}
                  >
                    <Edit3 size={14} />
                    <span>Edit</span>
                  </button>
                ) : (
                  <div className="edit-actions-mini">
                    <button 
                      className="btn-edit-save"
                      onClick={() => saveEdit(card.key)}
                      title="Save change"
                    >
                      <Save size={14} />
                    </button>
                    <button 
                      className="btn-edit-cancel"
                      onClick={cancelEdit}
                      title="Cancel"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>

              <div className="card-sublabel">{card.sublabel}</div>

              <div className="card-content-area">
                {isEditing ? (
                  <textarea
                    className="card-edit-textarea"
                    rows={4}
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    autoFocus
                  />
                ) : (
                  <div className="card-content-text" onClick={() => startEdit(card.key, value)}>
                    {value}
                  </div>
                )}
              </div>

              <div className="card-footer-tip">
                <span className="tip-caption">Click text or "Edit" to customize</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Actions Bar */}
      <div className="define-bottom-bar">
        <div className="bottom-left">
          <button 
            className="btn-bottom-secondary"
            onClick={onBackToChat}
          >
            <MessageSquare size={16} />
            <span>Continue Conversation with Architect</span>
          </button>
        </div>

        <div className="bottom-right">
          <button 
            className="btn-bottom-primary"
            onClick={handleAccept}
          >
            <Check size={18} />
            <span>Accept Foundation & Build Solution</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
