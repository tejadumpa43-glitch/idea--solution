import React from 'react';
import { 
  PlusCircle, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Camera, 
  Home, 
  Compass, 
  FileText, 
  Hammer, 
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function Dashboard({ 
  projects = [], 
  onStartNewProject, 
  onOpenProject,
  onOpenJustAClick,
  setCurrentView
}) {
  const userProjects = projects.filter(p => !p.isExample);
  const exampleProjects = projects.filter(p => p.isExample);

  // If user hasn't created projects yet, show sample projects in My Projects as well
  const displayedMyProjects = userProjects.length > 0 ? userProjects : [projects[0]];

  return (
    <div className="dashboard-container animate-fade-in">
      {/* 1. Hero / Main Header */}
      <section className="dashboard-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-glow-dot"></span>
            <span>PROJECT ARCHITECT FOR STUDENTS</span>
          </div>
          <h1 className="hero-title">
            IDEA <span className="gradient-arrow">→</span> SOLUTION
          </h1>
          <p className="hero-subtitle">
            Turn your ideas into real projects.
          </p>
          <p className="hero-description">
            Don’t start constructing a house without an architectural drawing. 
            Before writing a single line of code, get complete clarity on your purpose, 
            users, pain points, and MVP features.
          </p>

          <div className="hero-actions">
            <button 
              className="btn-primary-hero"
              onClick={onStartNewProject}
            >
              <PlusCircle size={20} />
              <span>+ Start New Project</span>
            </button>
            <button 
              className="btn-secondary-hero"
              onClick={onOpenJustAClick}
            >
              <Camera size={18} />
              <span>See How a Project is Built (Just A Click)</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Visual Home Architect Metaphor Graphic Card */}
        <div className="hero-metaphor-card">
          <div className="metaphor-header">
            <div className="metaphor-tag">THE ARCHITECT’S PHILOSOPHY</div>
            <div className="metaphor-label">Why Blueprint First?</div>
          </div>

          <div className="metaphor-comparison">
            <div className="metaphor-side without-blueprint">
              <div className="side-title">❌ Random Construction</div>
              <p>Jump straight into coding → build 20 random features → get overwhelmed → abandon project after 2 weeks.</p>
            </div>
            <div className="metaphor-divider">vs</div>
            <div className="metaphor-side with-blueprint">
              <div className="side-title">✨ The Architectural Way</div>
              <p>Understand the human → identify the root pain point → draft the 14-point blueprint → launch a razor-sharp MVP.</p>
            </div>
          </div>

          <div className="metaphor-stages-pill">
            <span>RAW IDEA</span>
            <ChevronRight size={12} />
            <span>UNDERSTAND</span>
            <ChevronRight size={12} />
            <span className="pill-highlight">BLUEPRINT</span>
            <ChevronRight size={12} />
            <span>BUILD</span>
          </div>
        </div>
      </section>

      {/* 2. Transformation Pipeline Overview */}
      <section className="dashboard-pipeline-strip">
        <div className="pipeline-strip-title">THE 10-STEP STUDENT JOURNEY</div>
        <div className="pipeline-steps-track">
          {[
            { num: '01', label: 'Raw Idea' },
            { num: '02', label: 'Understanding' },
            { num: '03', label: 'Problem' },
            { num: '04', label: 'Users' },
            { num: '05', label: 'Pain Points' },
            { num: '06', label: 'User Need' },
            { num: '07', label: 'Solution' },
            { num: '08', label: 'Features' },
            { num: '09', label: 'Blueprint' },
            { num: '10', label: 'Build' },
          ].map((s, idx) => (
            <div key={idx} className="pipeline-step-item">
              <span className="step-num">{s.num}</span>
              <span className="step-label">{s.label}</span>
              {idx < 9 && <span className="step-connector">→</span>}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Section: MY PROJECTS */}
      <section className="dashboard-section">
        <div className="section-header">
          <div className="section-title-wrap">
            <h2 className="section-title">MY PROJECTS</h2>
            <span className="section-subtitle">Your active project architectures and blueprints</span>
          </div>
          <button 
            className="btn-section-link"
            onClick={onStartNewProject}
          >
            + New Project
          </button>
        </div>

        <div className="projects-grid">
          {displayedMyProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-top">
                <span className="project-category-badge">{project.category || 'Software / Web App'}</span>
                <span className="project-updated">
                  <Clock size={12} /> {project.updatedAt || 'Recent'}
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle || project.tagline}</p>

              {/* Progress Indicator */}
              <div className="project-progress-wrap">
                <div className="progress-labels">
                  <span className="progress-status-text">
                    {project.status || `Blueprint ${project.progress || 92}% complete`}
                  </span>
                  <span className="progress-pct">{project.progress || 92}%</span>
                </div>
                <div className="progress-bar-track">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${project.progress || 92}%` }}
                  ></div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="card-footer">
                <button 
                  className="btn-open-project"
                  onClick={() => onOpenProject(project)}
                >
                  <span>Open Project</span>
                  <ArrowRight size={15} />
                </button>
                <button 
                  className="btn-view-blueprint-ghost"
                  onClick={() => {
                    onOpenProject(project);
                    setCurrentView('blueprint');
                  }}
                >
                  View Blueprint
                </button>
              </div>
            </div>
          ))}

          {/* New Project Placeholder Card */}
          <div className="project-card-new-placeholder" onClick={onStartNewProject}>
            <div className="placeholder-icon-wrap">
              <PlusCircle size={28} />
            </div>
            <h4>Have another idea?</h4>
            <p>Tell the Project Architect what is in your mind.</p>
            <span className="placeholder-cta">+ Start Blueprint</span>
          </div>
        </div>
      </section>

      {/* 4. Section: EXAMPLE PROJECTS */}
      <section className="dashboard-section example-projects-section">
        <div className="section-header">
          <div className="section-title-wrap">
            <div className="tag-example">LEARN FROM REAL BLUEPRINTS</div>
            <h2 className="section-title">EXAMPLE PROJECTS</h2>
            <span className="section-subtitle">
              Study how students transformed vague thoughts into world-class blueprints.
            </span>
          </div>
        </div>

        {/* Featured Card: JUST A CLICK */}
        <div className="featured-example-card">
          <div className="featured-banner-tag">
            <Camera size={14} />
            <span>PRIMARY REFERENCE PROJECT</span>
          </div>

          <div className="featured-grid">
            <div className="featured-info">
              <div className="project-code">CASE STUDY 01</div>
              <h3 className="featured-title">JUST A CLICK</h3>
              <h4 className="featured-subtitle">Professional Photography Application</h4>
              
              <blockquote className="featured-concept-quote">
                “What if a person who knows nothing about photography could click a professional portrait?”
              </blockquote>

              <p className="featured-explanation">
                Beginners don't understand composition, lighting angles, or golden framing. 
                <strong> JUST A CLICK</strong> replaces 10 years of photography theory with 
                calm 3-word ambient instructions: <em>"Move closer. Turn to light. Hold... CLICK."</em>
              </p>

              <div className="featured-philosophy-callout">
                <div className="callout-pill">CORE PHILOSOPHY</div>
                <div className="callout-text">
                  “The user sees simplicity. The system handles complexity.”
                </div>
              </div>

              <div className="featured-actions">
                <button 
                  className="btn-primary-action"
                  onClick={onOpenJustAClick}
                >
                  <Sparkles size={16} />
                  <span>Explore Interactive Case Study & Simulator</span>
                </button>
                <button 
                  className="btn-outline-action"
                  onClick={() => {
                    const justAClick = projects.find(p => p.id === 'just-a-click');
                    if (justAClick) onOpenProject(justAClick);
                    setCurrentView('blueprint');
                  }}
                >
                  <FileText size={15} />
                  <span>View 14-Section Blueprint</span>
                </button>
              </div>
            </div>

            {/* Visual Preview Box */}
            <div className="featured-visual-box">
              <div className="visual-hud-mock">
                <div className="hud-top-bar">
                  <span className="hud-mode">PORTRAIT GUIDANCE AI</span>
                  <span className="hud-status">● TRACKING</span>
                </div>
                <div className="hud-reticle-box">
                  <div className="reticle-corner top-left"></div>
                  <div className="reticle-corner top-right"></div>
                  <div className="reticle-corner btm-left"></div>
                  <div className="reticle-corner btm-right"></div>
                  <div className="hud-distance-pill">Distance: 1.9m (Golden Range)</div>
                </div>
                <div className="hud-instruction-bubble">
                  <span className="bubble-speaker">AI Architect:</span>
                  <span className="bubble-instruction">“Step 2 paces closer & turn 30° toward window”</span>
                </div>
                <div className="hud-bottom-bar">
                  <span className="hud-spec">Exposure: Balanced</span>
                  <button className="hud-shutter-preview">CLICK</button>
                  <span className="hud-spec">Rule of Thirds: 98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Example Project Cards */}
        <div className="other-examples-grid">
          {exampleProjects.filter(p => p.id !== 'just-a-click').map(project => (
            <div key={project.id} className="example-mini-card">
              <div className="mini-card-top">
                <span className="mini-code">{project.blueprint?.project?.code || 'STUDENT'}</span>
                <span className="mini-category">{project.category}</span>
              </div>
              <h4 className="mini-title">{project.title}</h4>
              <p className="mini-desc">{project.subtitle}</p>
              <div className="mini-analogy">
                <span className="analogy-label">Core Metaphor:</span> {project.concept?.analogy}
              </div>
              <div className="mini-card-footer">
                <button 
                  className="btn-mini-open"
                  onClick={() => {
                    onOpenProject(project);
                    setCurrentView('blueprint');
                  }}
                >
                  <span>Study Blueprint</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Architectural Guide Footer Banner */}
      <section className="dashboard-manifesto-banner">
        <div className="manifesto-content">
          <div className="manifesto-tag">STEP 1 PRINCIPLE</div>
          <h3>“Give the student complete clarity about what they are building before they start building.”</h3>
          <p>
            The AI Project Architect is your thinking partner. We ask one question at a time, 
            challenge vague assumptions, eliminate feature bloat, and hand you an ironclad blueprint.
          </p>
        </div>
        <button 
          className="btn-manifesto-learn"
          onClick={() => setCurrentView('learn')}
        >
          Read The Architect Manifesto
        </button>
      </section>
    </div>
  );
}
