import React, { useEffect, useState } from 'react';
import { 
  Rocket, 
  Check, 
  Copy, 
  Share2, 
  ExternalLink, 
  Code2, 
  Users, 
  MessageSquare, 
  Home, 
  CheckCircle2,
  Camera,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Screen37Launch({ 
  project = {}, 
  onGoToDashboard, 
  onStartNewProject 
}) {
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (e) {}
  }, []);

  const projectUrl = 'https://your-project.vercel.app';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(projectUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">3.7 LAUNCH</div>
        <div className="stage-step-count">Step 3 of 3</div>
      </div>

      <div className="launch-screen-container">
        {/* Celebration Hero with Rocket */}
        <div className="launch-hero-block">
          <div className="launch-rocket-badge animate-pop-in">
            <Rocket size={38} className="text-blue-600" />
          </div>

          <h1 className="screen-main-title launch-title">Your project is live! 🎉</h1>
          <p className="screen-main-subtitle launch-subtitle">
            You've successfully turned your idea into a working product.
          </p>
        </div>

        {/* Live Project Deployment Card */}
        <div className="live-deployment-card">
          <div className="deployment-left-col">
            {/* Thumbnail Mockup */}
            <div className="deployment-thumbnail-phone">
              <Camera size={18} className="text-blue-600 mb-1" />
              <span className="text-[9px] font-bold text-slate-800">Your App</span>
            </div>

            <div className="deployment-meta-text">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="deployment-title">{project?.title || 'Your Application'}</h3>
                <span className="badge-live-dot">• Live</span>
              </div>
              <a 
                href={projectUrl} 
                target="_blank" 
                rel="noreferrer"
                className="deployment-url-link"
              >
                <span>{projectUrl}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Action buttons */}
          <div className="deployment-action-btns">
            <button 
              type="button" 
              className="btn-primary-continue"
              onClick={() => window.open(projectUrl, '_blank')}
            >
              <span>Open Project</span>
            </button>

            <button 
              type="button" 
              className="btn-secondary-outline"
              onClick={handleCopyLink}
            >
              {copiedLink ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span>{copiedLink ? 'Copied Link' : 'Copy Link'}</span>
            </button>

            <button 
              type="button" 
              className="btn-secondary-outline"
              onClick={() => alert('Share link copied to clipboard!')}
            >
              <Share2 size={14} />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* What's next section */}
        <div className="whats-next-section">
          <h3 className="whats-next-heading">What's next?</h3>

          <div className="whats-next-grid">
            <div className="whats-next-card">
              <div className="next-icon-box bg-blue-50 text-blue-600">
                <Code2 size={20} />
              </div>
              <div className="next-text-info">
                <h4 className="next-card-title">Continue Development</h4>
                <p className="next-card-desc">Add more features from your backlog</p>
              </div>
            </div>

            <div className="whats-next-card">
              <div className="next-icon-box bg-purple-50 text-purple-600">
                <Users size={20} />
              </div>
              <div className="next-text-info">
                <h4 className="next-card-title">Share Your Project</h4>
                <p className="next-card-desc">Show it to classmates, mentors & judges</p>
              </div>
            </div>

            <div className="whats-next-card">
              <div className="next-icon-box bg-emerald-50 text-emerald-600">
                <MessageSquare size={20} />
              </div>
              <div className="next-text-info">
                <h4 className="next-card-title">Get Feedback</h4>
                <p className="next-card-desc">Improve and iterate based on feedback</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="screen-actions-row">
          <button className="btn-secondary-back" onClick={onGoToDashboard}>
            <Home size={16} />
            <span>Dashboard</span>
          </button>
          <button className="btn-primary-continue" onClick={onStartNewProject}>
            <span>+ Start Another Project</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
