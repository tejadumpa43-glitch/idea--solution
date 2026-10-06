import React, { useState } from 'react';
import { 
  Camera, 
  CheckCircle2, 
  Pencil, 
  ArrowRight, 
  ArrowLeft,
  Smartphone,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

export default function Screen36PreviewReview({ 
  onBack, 
  onProceedToLaunch 
}) {
  const [activeTab, setActiveTab] = useState('Live Preview');

  const tabs = [
    'Live Preview',
    'Features',
    'Performance',
    'Security',
    'Accessibility'
  ];

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">3.6 PREVIEW & REVIEW</div>
        <div className="stage-step-count">Step 3 of 3</div>
      </div>

      <div className="preview-review-container">
        {/* Title area */}
        <div className="screen-header-block">
          <h1 className="screen-main-title">Your project is almost ready!</h1>
          <p className="screen-main-subtitle">
            Here's a review of your project before deployment.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="review-tabs-bar">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`review-tab-btn ${activeTab === tab ? 'active-tab' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <span>{tab}</span>
            </button>
          ))}
        </div>

        {/* 2-Column Grid: Left Mobile Mockup, Right Checklist Card */}
        <div className="preview-review-grid">
          {/* Left: Mobile Phone Mockup */}
          <div className="review-mockup-wrapper">
            <div className="mobile-mockup-frame">
              <div className="mockup-speaker-notch"></div>
              <div className="mockup-screen-inner">
                <div className="mockup-screen-header">
                  <span className="font-bold text-sm">Your App</span>
                  <span className="mockup-status-dot"></span>
                </div>

                <div className="mockup-body-content">
                  <div className="mockup-camera-icon-wrap">
                    <Camera size={34} className="text-blue-600" />
                  </div>
                  <h3 className="mockup-card-title">Capture Better Portraits</h3>
                  <p className="mockup-card-subtitle">
                    Real-time guidance for perfect photos
                  </p>

                  <button type="button" className="mockup-btn-open-camera">
                    <Camera size={16} />
                    <span>Open Camera</span>
                  </button>
                </div>

                <div className="mockup-bottom-nav">
                  <div className="nav-item active-nav"><span className="nav-label">Home</span></div>
                  <div className="nav-item"><span className="nav-label">Guide</span></div>
                  <div className="nav-item"><span className="nav-label">Gallery</span></div>
                  <div className="nav-item"><span className="nav-label">Profile</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Readiness Checklist Card */}
          <div className="review-checklist-card">
            <div className="checklist-card-header">
              <h3 className="checklist-heading">Checklist</h3>
              <button type="button" className="btn-edit-checklist">
                <Pencil size={14} />
                <span>Edit</span>
              </button>
            </div>

            <div className="checklist-metrics-list">
              {/* Metric 1 */}
              <div className="checklist-metric-item">
                <div className="metric-label-row">
                  <span className="metric-name">Core features implemented</span>
                  <span className="metric-score font-bold text-emerald-600">8/10</span>
                </div>
                <div className="metric-bar-track">
                  <div className="metric-bar-fill bg-emerald-500" style={{ width: '80%' }}></div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="checklist-metric-item">
                <div className="metric-label-row">
                  <span className="metric-name">Build tasks completed</span>
                  <span className="metric-score font-bold text-amber-600">12/14</span>
                </div>
                <div className="metric-bar-track">
                  <div className="metric-bar-fill bg-amber-500" style={{ width: '85%' }}></div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="checklist-metric-item">
                <div className="metric-label-row">
                  <span className="metric-name">All tests passed</span>
                  <span className="metric-score font-bold text-blue-600">6/7</span>
                </div>
                <div className="metric-bar-track">
                  <div className="metric-bar-fill bg-blue-500" style={{ width: '86%' }}></div>
                </div>
              </div>

              {/* Check 4 */}
              <div className="checklist-status-row">
                <div className="status-name-wrap">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Responsive design</span>
                </div>
                <span className="badge-ready">• Ready</span>
              </div>

              {/* Check 5 */}
              <div className="checklist-status-row">
                <div className="status-name-wrap">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Environment variables configured</span>
                </div>
                <span className="badge-ready">• Ready</span>
              </div>
            </div>

            {/* Checklist Bottom Buttons */}
            <div className="checklist-card-actions">
              <button type="button" className="btn-secondary-outline">
                <span>View Issues</span>
              </button>
              <button 
                type="button" 
                className="btn-primary-continue"
                onClick={onProceedToLaunch}
              >
                <span>Continue to Deploy</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="screen-actions-row">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back to Testing</span>
          </button>
        </div>
      </div>
    </div>
  );
}
