import React, { useState } from 'react';
import { 
  Monitor, 
  Server, 
  Sparkles, 
  Database, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { DEFAULT_ARCHITECTURE } from '../../data/planData';

export default function Screen02Architecture({ 
  onContinue, 
  onBack 
}) {
  const [selectedPillarId, setSelectedPillarId] = useState('ui');
  const architecture = DEFAULT_ARCHITECTURE;

  const selectedPillar = architecture.pillars.find(p => p.id === selectedPillarId) || architecture.pillars[0];

  const getPillarIcon = (id) => {
    switch(id) {
      case 'ui': return <Monitor size={22} />;
      case 'backend': return <Server size={22} />;
      case 'ai': return <Sparkles size={22} />;
      case 'database': return <Database size={22} />;
      default: return <Monitor size={22} />;
    }
  };

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">02 ARCHITECTURE</div>
        <div className="stage-step-count">Step 2 of 3</div>
      </div>

      <div className="architecture-screen-container">
        {/* Title area */}
        <div className="screen-header-block">
          <h1 className="screen-main-title">Let's understand how your solution works.</h1>
          <p className="screen-main-subtitle">
            Here is the high level architecture of your application based on your blueprint. Click on any component to learn more.
          </p>
        </div>

        {/* High-Level Architecture Diagram Card */}
        <div className="arch-diagram-canvas-card">
          {/* Top Master App Node */}
          <div className="arch-top-master-node">
            <div className="master-node-card">
              <div className="master-icon-wrap">
                <Monitor size={20} className="text-blue-600" />
              </div>
              <div className="master-text-info">
                <div className="master-title">{architecture.appName}</div>
                <div className="master-subtitle">{architecture.appSubtitle}</div>
              </div>
            </div>
          </div>

          {/* Tree Connectors SVG */}
          <div className="arch-connector-svg-row">
            <svg viewBox="0 0 800 40" fill="none" className="arch-branch-svg">
              {/* Vertical center stem down from master */}
              <line x1="400" y1="0" x2="400" y2="20" stroke="#94A3B8" strokeWidth="2" />
              {/* Horizontal bar across 4 pillars */}
              <line x1="100" y1="20" x2="700" y2="20" stroke="#94A3B8" strokeWidth="2" />
              {/* 4 vertical drops into the pillars */}
              <line x1="100" y1="20" x2="100" y2="40" stroke="#3B82F6" strokeWidth="2" />
              <line x1="300" y1="20" x2="300" y2="40" stroke="#8B5CF6" strokeWidth="2" />
              <line x1="500" y1="20" x2="500" y2="40" stroke="#10B981" strokeWidth="2" />
              <line x1="700" y1="20" x2="700" y2="40" stroke="#F59E0B" strokeWidth="2" />
            </svg>
          </div>

          {/* 4 Architecture Pillars */}
          <div className="arch-pillars-grid">
            {architecture.pillars.map((pillar) => {
              const isSelected = selectedPillarId === pillar.id;

              return (
                <div
                  key={pillar.id}
                  className={`arch-pillar-card pillar-${pillar.color} ${isSelected ? 'pillar-selected' : ''}`}
                  onClick={() => setSelectedPillarId(pillar.id)}
                >
                  <div className="pillar-header-row">
                    <div className="pillar-icon-box">
                      {getPillarIcon(pillar.id)}
                    </div>
                    <h3 className="pillar-title">{pillar.title}</h3>
                  </div>

                  <ul className="pillar-items-list">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="pillar-bullet-item">
                        <span className="pillar-bullet-dot"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Component Detail Card at bottom */}
        <div className="arch-detail-inspector-card animate-fade-in">
          <div className="inspector-left-col">
            <div className="inspector-icon-badge">
              {getPillarIcon(selectedPillar.id)}
            </div>
            <div className="inspector-title-col">
              <h3 className="inspector-heading">{selectedPillar.title}</h3>
              <p className="inspector-desc">{selectedPillar.description}</p>
            </div>
          </div>

          <div className="inspector-right-col">
            <span className="inspector-key-parts-label">Key parts:</span>
            <div className="inspector-chips-row">
              {selectedPillar.keyParts.map((part, idx) => (
                <span key={idx} className="inspector-part-chip">
                  <CheckCircle2 size={13} className="chip-check" />
                  <span>{part}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="screen-actions-row">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
          <button className="btn-primary-continue" onClick={onContinue}>
            <span>Continue</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
