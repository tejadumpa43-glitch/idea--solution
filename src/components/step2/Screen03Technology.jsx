import React, { useState } from 'react';
import { 
  Scale, 
  Check, 
  ChevronDown, 
  ArrowRight, 
  ArrowLeft,
  X,
  Code2,
  Server,
  Database,
  Cpu
} from 'lucide-react';
import { DEFAULT_TECH_RECOMMENDATIONS } from '../../data/planData';

export default function Screen03Technology({ 
  onContinue, 
  onBack 
}) {
  const [techStack, setTechStack] = useState(DEFAULT_TECH_RECOMMENDATIONS);
  const [changingCategory, setChangingCategory] = useState(null);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const handleSelectAlternative = (categoryId, newName) => {
    setTechStack(techStack.map(item => {
      if (item.id === categoryId) {
        return {
          ...item,
          name: newName,
          recommended: newName === DEFAULT_TECH_RECOMMENDATIONS.find(t => t.id === categoryId)?.name
        };
      }
      return item;
    }));
    setChangingCategory(null);
  };

  const getTechIcon = (category) => {
    switch(category) {
      case 'Frontend': return <Code2 size={24} className="text-blue-500" />;
      case 'Backend': return <Server size={24} className="text-purple-500" />;
      case 'Database': return <Database size={24} className="text-amber-500" />;
      case 'AI / Vision': return <Cpu size={24} className="text-emerald-500" />;
      default: return <Code2 size={24} />;
    }
  };

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">03 TECHNOLOGY</div>
        <div className="stage-step-count">Step 2 of 3</div>
      </div>

      <div className="technology-screen-container">
        {/* Title area & Compare Options button */}
        <div className="tech-header-row">
          <div className="screen-header-block">
            <h1 className="screen-main-title">Let's choose the right tools.</h1>
            <p className="screen-main-subtitle">
              Here are technology recommendations based on your project needs. You can keep these, or choose alternatives.
            </p>
          </div>

          <button 
            type="button" 
            className="btn-compare-options"
            onClick={() => setShowCompareModal(true)}
          >
            <Scale size={16} />
            <span>Compare Options</span>
          </button>
        </div>

        {/* 4 Tech Stack Cards List */}
        <div className="tech-cards-list">
          {techStack.map((tech) => (
            <div key={tech.id} className="tech-card-item">
              <div className="tech-card-main">
                {/* Left: Category Badge & Icon */}
                <div className="tech-card-category-col">
                  <div className="tech-icon-container">
                    {getTechIcon(tech.category)}
                  </div>
                  <span className="tech-category-label">{tech.category}</span>
                </div>

                {/* Center: Name, Recommended Badge, Description */}
                <div className="tech-card-info-col">
                  <div className="tech-title-badge-row">
                    <h3 className="tech-name-title">{tech.name}</h3>
                    {tech.recommended && (
                      <span className="badge-recommended">Recommended</span>
                    )}
                  </div>
                  <p className="tech-tagline-text">{tech.tagline}</p>

                  {/* Why callout box */}
                  <div className="tech-why-callout">
                    <span className="why-prefix">Why?</span>
                    <span className="why-text">{tech.why}</span>
                  </div>
                </div>

                {/* Right: Change dropdown button */}
                <div className="tech-card-actions-col">
                  <div className="dropdown-relative-wrap">
                    <button 
                      type="button" 
                      className="btn-change-tech"
                      onClick={() => setChangingCategory(changingCategory === tech.id ? null : tech.id)}
                    >
                      <span>Change</span>
                      <ChevronDown size={14} />
                    </button>

                    {changingCategory === tech.id && (
                      <div className="tech-alternatives-dropdown animate-fade-in">
                        <div className="dropdown-header-label">Switch to alternative:</div>
                        {tech.alternatives.map((altName, aIdx) => (
                          <button
                            key={aIdx}
                            type="button"
                            className={`alt-option-btn ${tech.name === altName ? 'active-opt' : ''}`}
                            onClick={() => handleSelectAlternative(tech.id, altName)}
                          >
                            <span>{altName}</span>
                            {tech.name === altName && <Check size={14} />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compare Options Modal */}
        {showCompareModal && (
          <div className="modal-backdrop-overlay" onClick={() => setShowCompareModal(false)}>
            <div className="modal-card modal-large animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Architecture Technology Comparison</h3>
                <button className="btn-close-modal" onClick={() => setShowCompareModal(false)}>
                  <X size={18} />
                </button>
              </div>
              <div className="modal-body-scroll">
                <table className="compare-tech-table">
                  <thead>
                    <tr>
                      <th>Layer</th>
                      <th>Recommended</th>
                      <th>Primary Advantage</th>
                      <th>Alternative</th>
                      <th>Best When</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Frontend</strong></td>
                      <td><span className="badge-recommended">React + Vite</span></td>
                      <td>Fastest dev server, beginner tutorials, instant web PWA preview</td>
                      <td>Flutter / Next.js</td>
                      <td>Need pure native app store build or SEO-heavy landing pages</td>
                    </tr>
                    <tr>
                      <td><strong>Backend</strong></td>
                      <td><span className="badge-recommended">Node.js / Express</span></td>
                      <td>Same JavaScript language, lightweight REST endpoints</td>
                      <td>Python FastAPI</td>
                      <td>Heavy data science or custom PyTorch computer vision models</td>
                    </tr>
                    <tr>
                      <td><strong>Database</strong></td>
                      <td><span className="badge-recommended">Supabase</span></td>
                      <td>Postgres + Auth + Storage with instant client SDK</td>
                      <td>Firebase</td>
                      <td>NoSQL document schema preference</td>
                    </tr>
                    <tr>
                      <td><strong>AI / Vision</strong></td>
                      <td><span className="badge-recommended">Vision API / MediaPipe</span></td>
                      <td>Zero-latency on-device face mesh & camera heuristics</td>
                      <td>OpenAI Vision API</td>
                      <td>Need complex multi-sentence qualitative artistic critiques</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer-btns">
                <button 
                  type="button" 
                  className="btn-primary-continue"
                  onClick={() => setShowCompareModal(false)}
                >
                  Keep Recommended Stack
                </button>
              </div>
            </div>
          </div>
        )}

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
