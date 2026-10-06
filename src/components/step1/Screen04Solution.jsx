import React, { useState } from 'react';
import { 
  Lightbulb, 
  Pencil, 
  Check, 
  X, 
  Camera, 
  Grid, 
  Sun, 
  Crop, 
  Move, 
  Focus, 
  Image as ImageIcon,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import AiProviderBanner from './AiProviderBanner';

export default function Screen04Solution({ 
  definedData = {}, 
  existingFeatures = [],
  aiSettings,
  onOpenAiSettings,
  onContinue, 
  onBack 
}) {
  const [solutionStatement, setSolutionStatement] = useState(
    definedData.solution || 
    'An intelligent photography application that analyzes the scene and guides beginners through composition, lighting, framing and camera positioning so they can capture a better portrait.'
  );
  const [isEditingSolution, setIsEditingSolution] = useState(false);
  const [editSolText, setEditSolText] = useState(solutionStatement);

  const [capabilities, setCapabilities] = useState([
    {
      id: 'cap-1',
      name: 'Scene Analysis',
      icon: <Camera size={18} className="text-blue-500" />,
      why: 'To detect people, background and lighting conditions.',
      enabled: true,
      category: 'must'
    },
    {
      id: 'cap-2',
      name: 'Composition Guidance',
      icon: <Grid size={18} className="text-indigo-500" />,
      why: 'Beginners don\'t know where to position the subject.',
      enabled: true,
      category: 'must'
    },
    {
      id: 'cap-3',
      name: 'Lighting Guidance',
      icon: <Sun size={18} className="text-amber-500" />,
      why: 'Users often take photos in poor lighting.',
      enabled: true,
      category: 'good'
    },
    {
      id: 'cap-4',
      name: 'Framing Guidance',
      icon: <Crop size={18} className="text-purple-500" />,
      why: 'Helps achieve a clean and professional composition.',
      enabled: true,
      category: 'must'
    },
    {
      id: 'cap-5',
      name: 'Camera Position Guidance',
      icon: <Move size={18} className="text-sky-500" />,
      why: 'Users don\'t know the right distance or angle.',
      enabled: true,
      category: 'must'
    },
    {
      id: 'cap-6',
      name: 'Focus Guidance',
      icon: <Focus size={18} className="text-rose-500" />,
      why: 'Ensures the subject is sharp and clear.',
      enabled: false,
      category: 'future'
    },
    {
      id: 'cap-7',
      name: 'Reference Image Mode',
      icon: <ImageIcon size={18} className="text-emerald-500" />,
      why: 'Provides visual examples of good portraits.',
      enabled: false,
      category: 'good'
    }
  ]);

  const toggleCapability = (id) => {
    setCapabilities(capabilities.map(c => 
      c.id === id ? { ...c, enabled: !c.enabled } : c
    ));
  };

  const handleSaveSolution = () => {
    setSolutionStatement(editSolText);
    setIsEditingSolution(false);
  };

  const handleCancelSolution = () => {
    setEditSolText(solutionStatement);
    setIsEditingSolution(false);
  };

  const handleProceed = () => {
    onContinue({
      solutionStatement,
      capabilities,
      features: capabilities.filter(c => c.enabled)
    });
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
        <div className="stage-pill-tag">04 SOLUTION DEVELOPMENT</div>
        <div className="stage-step-count">Step 1 of 3</div>
      </div>

      <div className="solution-dev-container">
        {/* Title area */}
        <div className="solution-header-text">
          <h1 className="screen-main-title">Let's decide how you want to solve it.</h1>
          <p className="screen-main-subtitle">
            Based on our conversation, here's a proposed solution and suggested capabilities. Each feature is connected to a real user need.
          </p>
        </div>

        {/* Proposed Solution Card */}
        <div className="proposed-solution-card">
          <div className="solution-card-top">
            <div className="solution-badge-and-title">
              <div className="solution-purple-icon-box">
                <Lightbulb size={22} className="text-purple-600" />
              </div>
              <h2 className="solution-title-heading">Proposed Solution</h2>
            </div>
            {!isEditingSolution && (
              <button
                type="button"
                className="btn-edit-solution"
                onClick={() => setIsEditingSolution(true)}
              >
                <Pencil size={14} />
                <span>Edit</span>
              </button>
            )}
          </div>

          <div className="solution-card-body">
            {isEditingSolution ? (
              <div className="solution-edit-block">
                <textarea
                  value={editSolText}
                  onChange={(e) => setEditSolText(e.target.value)}
                  rows={3}
                  className="solution-textarea"
                />
                <div className="solution-edit-actions">
                  <button type="button" className="btn-save-inline" onClick={handleSaveSolution}>
                    <Check size={14} /> Save
                  </button>
                  <button type="button" className="btn-cancel-inline" onClick={handleCancelSolution}>
                    <X size={14} /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="solution-statement-text">{solutionStatement}</p>
            )}
          </div>
        </div>

        {/* Suggested Capabilities 2-Column Table */}
        <div className="capabilities-table-container">
          <div className="capabilities-table-header">
            <div className="col-header col-cap-name">Suggested Capabilities</div>
            <div className="col-header col-cap-why">Why do we need this?</div>
          </div>

          <div className="capabilities-table-body">
            {capabilities.map((cap) => (
              <div 
                key={cap.id} 
                className={`capability-table-row ${cap.enabled ? 'selected-row' : ''}`}
                onClick={() => toggleCapability(cap.id)}
              >
                {/* Left Column: Checkbox + Icon + Title */}
                <div className="col-cell col-cap-name">
                  <label 
                    className="cap-checkbox-label"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      checked={cap.enabled}
                      onChange={() => toggleCapability(cap.id)}
                      className="cap-custom-checkbox"
                    />
                  </label>
                  <div className="cap-icon-box">
                    {cap.icon}
                  </div>
                  <span className="cap-name-text">{cap.name}</span>
                </div>

                {/* Right Column: Why text */}
                <div className="col-cell col-cap-why">
                  <p className="cap-why-text">{cap.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="screen-bottom-actions">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          <button className="btn-primary-continue" onClick={handleProceed}>
            <span>Continue to Prioritization</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
