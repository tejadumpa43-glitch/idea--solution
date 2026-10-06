import React from 'react';
import { 
  Compass, 
  FolderGit2, 
  Sparkles, 
  BookOpen, 
  Boxes, 
  PlusCircle, 
  Camera, 
  Layers, 
  Settings,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function Sidebar({ 
  currentView, 
  setCurrentView, 
  myProjectsCount = 0,
  onStartNewProject,
  onOpenJustAClick
}) {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Compass },
    { id: 'my-projects', label: 'My Projects', icon: FolderGit2, badge: myProjectsCount },
    { id: 'example-projects', label: 'Example Projects', icon: Sparkles, highlight: true },
    { id: 'learn', label: 'Learn & Philosophy', icon: BookOpen },
    { id: 'resources', label: 'Resources & Stack', icon: Boxes },
  ];

  return (
    <aside className="app-sidebar">
      {/* Brand Header */}
      <div className="sidebar-brand" onClick={() => setCurrentView('dashboard')}>
        <div className="brand-icon-box">
          <Layers className="brand-icon" size={22} />
        </div>
        <div className="brand-text">
          <div className="brand-title">
            IDEA <span className="brand-arrow">→</span> SOLUTION
          </div>
          <div className="brand-tagline">Project Architect for Students</div>
        </div>
      </div>

      {/* Start Project Primary CTA */}
      <div className="sidebar-cta-wrap">
        <button 
          className="btn-start-project"
          onClick={onStartNewProject}
        >
          <PlusCircle size={18} />
          <span>+ Start New Project</span>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <div className="nav-group-title">WORKSPACE</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''} ${item.highlight ? 'nav-highlight' : ''}`}
              onClick={() => setCurrentView(item.id)}
            >
              <Icon size={18} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="nav-badge">{item.badge}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Quick Access to Reference Project */}
      <div className="sidebar-reference-card">
        <div className="ref-card-header">
          <span className="ref-tag">PRIMARY EXAMPLE</span>
          <Camera size={14} className="ref-icon" />
        </div>
        <div className="ref-card-title">JUST A CLICK</div>
        <div className="ref-card-desc">
          See how a raw idea becomes a complete project blueprint.
        </div>
        <button 
          className="btn-ref-study"
          onClick={onOpenJustAClick}
        >
          <span>Explore Case Study</span>
          <ExternalLink size={13} />
        </button>
      </div>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <div className="architect-philosophy-quote">
          <span className="quote-mark">“</span>
          <span>Don't start building with a vague idea. Build with a blueprint.</span>
        </div>
        <div className="sidebar-user-row">
          <div className="user-avatar">
            <span>PA</span>
          </div>
          <div className="user-info">
            <span className="user-name">Project Architect</span>
            <span className="user-role">Student Mentor Mode</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
