import React from 'react';
import { 
  Compass, 
  Users, 
  GitBranch, 
  AlertTriangle, 
  Target, 
  Trophy, 
  ArrowRight, 
  Sparkles, 
  CheckCircle,
  HelpCircle,
  Clock,
  Layers
} from 'lucide-react';

export default function LiveInsightsPanel({ 
  insights = {}, 
  onReviewIdea, 
  isReadyForReview = false 
}) {
  // Calculate completion percentage based on filled dimensions
  const dimensions = [
    { key: 'purpose', label: 'Purpose', icon: Compass, value: insights.purpose },
    { key: 'users', label: 'Users', icon: Users, value: insights.users },
    { key: 'currentWorkflow', label: 'Current Workflow', icon: GitBranch, value: insights.currentWorkflow },
    { key: 'painPoint', label: 'Pain Point', icon: AlertTriangle, value: insights.painPoint },
    { key: 'userNeed', label: 'User Need', icon: Target, value: insights.userNeed },
    { key: 'goal', label: 'Goal', icon: Trophy, value: insights.goal },
  ];

  const filledCount = dimensions.filter(d => Boolean(d.value)).length;
  const completionPct = Math.round((filledCount / dimensions.length) * 100);

  // Helper to format workflow into step pills if comma or arrow separated
  const renderWorkflow = (workflowText) => {
    if (!workflowText) return null;
    
    // Split on -> or arrows or commas if present
    let steps = [];
    if (workflowText.includes('→') || workflowText.includes('->')) {
      steps = workflowText.split(/→|->/).map(s => s.trim()).filter(Boolean);
    } else if (workflowText.includes(';')) {
      steps = workflowText.split(';').map(s => s.trim()).filter(Boolean);
    }

    if (steps.length > 1) {
      return (
        <div className="insight-workflow-steps">
          {steps.map((st, i) => (
            <div key={i} className="workflow-step-chip">
              <span className="step-idx">{i + 1}</span>
              <span className="step-txt">{st}</span>
            </div>
          ))}
        </div>
      );
    }

    return <p className="insight-value-text">{workflowText}</p>;
  };

  return (
    <aside className="live-insights-panel">
      {/* Panel Top */}
      <div className="insights-panel-header">
        <div className="header-tag-row">
          <span className="panel-live-pill">
            <span className="live-pulsing-indicator"></span>
            LIVE UPDATE
          </span>
          <span className="panel-stage-text">STEP 1 ARCHITECT</span>
        </div>
        <h3 className="insights-panel-title">PROJECT INSIGHTS</h3>
        <p className="insights-panel-subtitle">
          Your conversation transformed into architectural foundations.
        </p>

        {/* Blueprint Readiness Meter */}
        <div className="readiness-meter">
          <div className="readiness-meta">
            <span className="readiness-label">Blueprint Clarity</span>
            <span className="readiness-pct">{completionPct}%</span>
          </div>
          <div className="readiness-track">
            <div 
              className="readiness-fill"
              style={{ width: `${Math.max(completionPct, 8)}%` }}
            ></div>
          </div>
          <div className="readiness-hint">
            {filledCount < 3 
              ? 'Exploring the foundation with your mentor...' 
              : filledCount < 6 
                ? 'Strong clarity developing — keep chatting!' 
                : 'Complete foundation unlocked! Ready to define.'}
          </div>
        </div>
      </div>

      {/* Structured Insights Cards */}
      <div className="insights-cards-list">
        {/* 1. Purpose */}
        <div className={`insight-card ${insights.purpose ? 'filled' : 'waiting'}`}>
          <div className="insight-card-header">
            <div className="insight-icon-wrap">
              <Compass size={14} />
            </div>
            <span className="insight-field-name">Purpose</span>
            {insights.purpose && <CheckCircle size={13} className="check-icon" />}
          </div>
          <div className="insight-card-body">
            {insights.purpose ? (
              <p className="insight-value-text">{insights.purpose}</p>
            ) : (
              <div className="waiting-placeholder">Awaiting idea input...</div>
            )}
          </div>
        </div>

        {/* 2. Users */}
        <div className={`insight-card ${insights.users ? 'filled' : 'waiting'}`}>
          <div className="insight-card-header">
            <div className="insight-icon-wrap">
              <Users size={14} />
            </div>
            <span className="insight-field-name">Users</span>
            {insights.users && <CheckCircle size={13} className="check-icon" />}
          </div>
          <div className="insight-card-body">
            {insights.users ? (
              <p className="insight-value-text highlight-users">{insights.users}</p>
            ) : (
              <div className="waiting-placeholder">Will discover target users next...</div>
            )}
          </div>
        </div>

        {/* 3. Current Workflow */}
        <div className={`insight-card ${insights.currentWorkflow ? 'filled' : 'waiting'}`}>
          <div className="insight-card-header">
            <div className="insight-icon-wrap">
              <GitBranch size={14} />
            </div>
            <span className="insight-field-name">Current Workflow</span>
            {insights.currentWorkflow && <CheckCircle size={13} className="check-icon" />}
          </div>
          <div className="insight-card-body">
            {insights.currentWorkflow ? (
              renderWorkflow(insights.currentWorkflow)
            ) : (
              <div className="waiting-placeholder">How users currently deal with it...</div>
            )}
          </div>
        </div>

        {/* 4. Pain Point */}
        <div className={`insight-card ${insights.painPoint ? 'filled' : 'waiting'}`}>
          <div className="insight-card-header">
            <div className="insight-icon-wrap pain-wrap">
              <AlertTriangle size={14} />
            </div>
            <span className="insight-field-name">Pain Point</span>
            {insights.painPoint && <CheckCircle size={13} className="check-icon" />}
          </div>
          <div className="insight-card-body">
            {insights.painPoint ? (
              <p className="insight-value-text text-danger-soft">{insights.painPoint}</p>
            ) : (
              <div className="waiting-placeholder">Where the exact friction occurs...</div>
            )}
          </div>
        </div>

        {/* 5. User Need */}
        <div className={`insight-card ${insights.userNeed ? 'filled' : 'waiting'}`}>
          <div className="insight-card-header">
            <div className="insight-icon-wrap need-wrap">
              <Target size={14} />
            </div>
            <span className="insight-field-name">User Need</span>
            {insights.userNeed && <CheckCircle size={13} className="check-icon" />}
          </div>
          <div className="insight-card-body">
            {insights.userNeed ? (
              <p className="insight-value-text text-need">{insights.userNeed}</p>
            ) : (
              <div className="waiting-placeholder">What they actually need...</div>
            )}
          </div>
        </div>

        {/* 6. Goal */}
        <div className={`insight-card ${insights.goal ? 'filled' : 'waiting'}`}>
          <div className="insight-card-header">
            <div className="insight-icon-wrap goal-wrap">
              <Trophy size={14} />
            </div>
            <span className="insight-field-name">Goal</span>
            {insights.goal && <CheckCircle size={13} className="check-icon" />}
          </div>
          <div className="insight-card-body">
            {insights.goal ? (
              <p className="insight-value-text text-goal">{insights.goal}</p>
            ) : (
              <div className="waiting-placeholder">What becomes better when solved...</div>
            )}
          </div>
        </div>
      </div>

      {/* Review CTA at bottom of panel */}
      <div className="insights-panel-footer">
        <button
          className={`btn-insights-review ${filledCount >= 3 ? 'ready' : 'dim'}`}
          onClick={onReviewIdea}
          title={filledCount < 3 ? 'Answer a few more questions to unlock review' : 'Review your idea foundations'}
        >
          <span>Review Idea So Far</span>
          <ArrowRight size={15} />
        </button>
        <span className="footer-micro-note">
          {filledCount >= 5 ? '✨ Ready to lock in your definition' : 'The AI extracts insights live as you chat'}
        </span>
      </div>
    </aside>
  );
}
