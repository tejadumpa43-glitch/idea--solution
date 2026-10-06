import React, { useState } from 'react';
import { 
  FileText, 
  ArrowRight, 
  ArrowLeft, 
  AlertCircle, 
  Users, 
  Target, 
  Lightbulb, 
  Wrench, 
  Sparkles, 
  GitBranch, 
  Rocket,
  Download,
  Check
} from 'lucide-react';
import AiProviderBanner from './AiProviderBanner';

export default function Screen06BlueprintMap({ 
  project = {}, 
  insights = {}, 
  features = [], 
  priorities,
  aiSettings,
  onOpenAiSettings,
  onContinue, 
  onBack 
}) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  const projectName = project.title || 'Professional Photography App';
  const projectTagline = 'Help anyone capture a professional-looking portrait without needing photography expertise.';

  const problemText = insights.problem || 'Beginners struggle to create professional-looking portraits.';
  const usersText = insights.users || 'People who want good portraits but have little or no photography knowledge.';
  const goalText = insights.goal || 'Help beginners create better portraits without needing photography expertise.';
  const userNeedText = insights.userNeed || 'Simple real-time guidance that translates photography knowledge into actionable instructions.';
  const solutionText = insights.solution || 'An intelligent photography application that analyzes the scene and guides beginners through composition, lighting, framing and positioning.';

  const handleExportPdf = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportSuccess(true);
      window.print();
      setTimeout(() => setExportSuccess(false), 3000);
    }, 600);
  };

  return (
    <div className="step-screen-wrapper animate-fade-in print-section-target">
      {/* Top AI Provider Banner */}
      <AiProviderBanner 
        aiSettings={aiSettings}
        onOpenSettings={onOpenAiSettings}
      />

      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">06 PROJECT BLUEPRINT</div>
        <div className="stage-step-count">Step 1 of 3</div>
      </div>

      <div className="blueprint-map-container">
        {/* Title area & Export PDF Button */}
        <div className="blueprint-map-top-bar">
          <div className="blueprint-title-wrap">
            <h1 className="screen-main-title">Your Project Blueprint</h1>
            <p className="screen-main-subtitle">
              Here is the complete view of your project, created from our conversation.
            </p>
          </div>

          <button 
            type="button" 
            className="btn-export-pdf"
            onClick={handleExportPdf}
            disabled={isExporting}
          >
            {exportSuccess ? <Check size={15} className="text-emerald-600" /> : <FileText size={15} />}
            <span>{isExporting ? 'Preparing...' : exportSuccess ? 'Exported!' : 'Export PDF'}</span>
          </button>
        </div>

        {/* Tree Flowchart Diagram Canvas */}
        <div className="flowchart-blueprint-tree">
          {/* Top Navy Master Node */}
          <div className="flowchart-master-node-wrapper">
            <div className="master-project-card">
              <span className="master-project-tag">PROJECT</span>
              <h2 className="master-project-title">{projectName}</h2>
              <p className="master-project-desc">{projectTagline}</p>
            </div>
          </div>

          {/* SVG Tree Connector 1 */}
          <div className="tree-connector-line vertical-line"></div>

          {/* Row 1: Problem | Users | Goal */}
          <div className="flowchart-tree-row row-three-cols">
            <div className="tree-card card-problem">
              <div className="tree-card-header">
                <span className="card-badge-icon badge-red"><AlertCircle size={14} /></span>
                <span className="card-badge-label label-red">PROBLEM</span>
              </div>
              <p className="tree-card-text">{problemText}</p>
            </div>

            <div className="tree-card card-users">
              <div className="tree-card-header">
                <span className="card-badge-icon badge-blue"><Users size={14} /></span>
                <span className="card-badge-label label-blue">USERS</span>
              </div>
              <p className="tree-card-text">{usersText}</p>
            </div>

            <div className="tree-card card-goal">
              <div className="tree-card-header">
                <span className="card-badge-icon badge-green"><Target size={14} /></span>
                <span className="card-badge-label label-green">GOAL</span>
              </div>
              <p className="tree-card-text">{goalText}</p>
            </div>
          </div>

          {/* SVG Tree Connector 2 */}
          <div className="tree-connector-line vertical-line"></div>

          {/* Row 2: User Need (Single centered card) */}
          <div className="flowchart-tree-row row-single-center">
            <div className="tree-card card-user-need">
              <div className="tree-card-header">
                <span className="card-badge-icon badge-purple"><Lightbulb size={14} /></span>
                <span className="card-badge-label label-purple">USER NEED</span>
              </div>
              <p className="tree-card-text">{userNeedText}</p>
            </div>
          </div>

          {/* SVG Tree Connector 3 */}
          <div className="tree-connector-line vertical-line"></div>

          {/* Row 3: Solution (Single centered card) */}
          <div className="flowchart-tree-row row-single-center">
            <div className="tree-card card-solution">
              <div className="tree-card-header">
                <span className="card-badge-icon badge-cyan"><Wrench size={14} /></span>
                <span className="card-badge-label label-cyan">SOLUTION</span>
              </div>
              <p className="tree-card-text">{solutionText}</p>
            </div>
          </div>

          {/* SVG Tree Connector 4 */}
          <div className="tree-connector-line vertical-line"></div>

          {/* Row 4: Features | User Flow | MVP (3 cards side by side) */}
          <div className="flowchart-tree-row row-three-cols">
            {/* Features Card */}
            <div className="tree-card card-features">
              <div className="tree-card-header">
                <span className="card-badge-icon badge-amber"><Sparkles size={14} /></span>
                <span className="card-badge-label label-amber">FEATURES</span>
              </div>
              <ul className="tree-card-bullets-list">
                <li>• Scene Analysis</li>
                <li>• Composition Guidance</li>
                <li>• Lighting Guidance</li>
                <li className="text-slate-400">• + more...</li>
              </ul>
            </div>

            {/* User Flow Card */}
            <div className="tree-card card-user-flow">
              <div className="tree-card-header">
                <span className="card-badge-icon badge-blue"><GitBranch size={14} /></span>
                <span className="card-badge-label label-blue">USER FLOW</span>
              </div>
              <ul className="tree-card-bullets-list">
                <li>• Open App</li>
                <li>• Get Guidance</li>
                <li>• Adjust & Capture</li>
                <li>• Review Result</li>
              </ul>
            </div>

            {/* MVP Card */}
            <div className="tree-card card-mvp">
              <div className="tree-card-header">
                <span className="card-badge-icon badge-green"><Rocket size={14} /></span>
                <span className="card-badge-label label-green">MVP</span>
              </div>
              <ul className="tree-card-bullets-list">
                <li>• Person Detection</li>
                <li>• Composition Guidance</li>
                <li>• Camera Position Guidance</li>
                <li>• Basic Capture</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="screen-bottom-actions">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          <button className="btn-primary-continue" onClick={onContinue}>
            <span>Complete Blueprint</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
