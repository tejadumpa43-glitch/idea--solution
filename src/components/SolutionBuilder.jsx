import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit2, 
  Check, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles, 
  ArrowLeft, 
  MoveRight, 
  MoveLeft,
  X,
  ShieldAlert,
  Layers,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SolutionBuilder({ 
  insights = {}, 
  initialFeatures = [], 
  onSaveSolution, 
  onGenerateBlueprint, 
  onBackToDefine 
}) {
  const [solutionStatement, setSolutionStatement] = useState(
    insights.proposedSolution || 
    `A minimal, focused application for ${insights.users || 'target users'} that provides ${insights.userNeed || 'real-time guidance'}, enabling ${insights.goal || 'great results on the first attempt'}.`
  );

  const [features, setFeatures] = useState(() => {
    if (initialFeatures && initialFeatures.length > 0) return initialFeatures;
    return [
      {
        id: 'f-1',
        name: 'Core Real-Time Action Loop',
        category: 'MUST HAVE',
        explanation: 'The fundamental mechanism that solves the problem in real-time.',
        whyItSolves: 'Directly addresses the primary user friction point.'
      },
      {
        id: 'f-2',
        name: 'Conversational / Minimal Feedback HUD',
        category: 'MUST HAVE',
        explanation: 'Instant 2-word directions or visual cues that guide the user.',
        whyItSolves: 'Removes cognitive overload and hesitation.'
      },
      {
        id: 'f-3',
        name: 'Smart Validation & Confirmation Guard',
        category: 'MUST HAVE',
        explanation: 'Verifies the optimal state before finalizing the action.',
        whyItSolves: 'Prevents wasted attempts and guarantees quality.'
      },
      {
        id: 'f-4',
        name: 'Preset / Reference Guidance Modes',
        category: 'GOOD TO HAVE',
        explanation: 'Allows user to choose from 3 common styles or presets.',
        whyItSolves: 'Enhances versatility without complicating the first run.'
      },
      {
        id: 'f-5',
        name: 'Community History & Peer Comparison',
        category: 'GOOD TO HAVE',
        explanation: 'Stores past sessions and shows time/quality improvements.',
        whyItSolves: 'Reinforces long-term user retention.'
      },
      {
        id: 'f-6',
        name: 'Automated Multi-User Cloud Sync',
        category: 'FUTURE',
        explanation: 'Team collaboration and automated cross-device syncing.',
        whyItSolves: 'Expands market from solo users to teams in v2.'
      }
    ];
  });

  // Modal / inline state for adding or editing features
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFeatureId, setEditingFeatureId] = useState(null);
  const [featureForm, setFeatureForm] = useState({
    name: '',
    explanation: '',
    whyItSolves: '',
    category: 'MUST HAVE'
  });

  const mustHaveCount = features.filter(f => f.category === 'MUST HAVE').length;
  const isFeatureOverloaded = mustHaveCount > 4;

  const handleOpenAddModal = (defaultCategory = 'MUST HAVE') => {
    setEditingFeatureId(null);
    setFeatureForm({
      name: '',
      explanation: '',
      whyItSolves: '',
      category: defaultCategory
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (feature) => {
    setEditingFeatureId(feature.id);
    setFeatureForm({
      name: feature.name,
      explanation: feature.explanation,
      whyItSolves: feature.whyItSolves,
      category: feature.category
    });
    setIsModalOpen(true);
  };

  const handleSaveFeature = (e) => {
    e.preventDefault();
    if (!featureForm.name.trim()) return;

    if (editingFeatureId) {
      setFeatures(features.map(f => f.id === editingFeatureId ? { ...f, ...featureForm } : f));
    } else {
      const newFeature = {
        id: `feat-${Date.now()}`,
        ...featureForm
      };
      setFeatures([...features, newFeature]);
    }

    setIsModalOpen(false);
  };

  const handleDeleteFeature = (id) => {
    setFeatures(features.filter(f => f.id !== id));
  };

  const handleMoveCategory = (id, newCategory) => {
    setFeatures(features.map(f => f.id === id ? { ...f, category: newCategory } : f));
  };

  const handleGenerateBlueprintClick = () => {
    // Fire celebration confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Confetti fallback
    }

    if (onGenerateBlueprint) {
      onGenerateBlueprint({
        solutionStatement,
        features
      });
    }
  };

  const categories = [
    { 
      id: 'MUST HAVE', 
      label: 'MUST HAVE', 
      badge: 'CORE MVP', 
      desc: 'The absolute bare minimum to solve the core problem. Keep to 3-4 features maximum.',
      color: 'emerald'
    },
    { 
      id: 'GOOD TO HAVE', 
      label: 'GOOD TO HAVE', 
      badge: 'ENHANCEMENTS', 
      desc: 'Valuable features that make the product smoother, but not required on Day 1.',
      color: 'blue'
    },
    { 
      id: 'FUTURE', 
      label: 'FUTURE (v2+)', 
      badge: 'ROADMAP', 
      desc: 'Exciting future ideas to build once you have 100 happy active users.',
      color: 'purple'
    }
  ];

  return (
    <div className="solution-builder-container animate-fade-in">
      {/* Top Header */}
      <div className="solution-header">
        <div className="stage-pill">
          <span className="dot-active"></span>
          STEP 3: SOLUTION ARCHITECTURE & MVP
        </div>
        <h1 className="solution-title"># BUILD THE SOLUTION</h1>
        <p className="solution-subtitle">
          Define your core solution and prioritize features ruthlessly. 
          World-class builders launch with 3 great features, not 20 broken ones.
        </p>
      </div>

      {/* 1. Proposed Solution Statement Card */}
      <div className="solution-statement-card">
        <div className="statement-card-top">
          <div className="statement-label-wrap">
            <Sparkles size={16} className="sparkle-icon" />
            <span className="statement-label">PROPOSED SOLUTION STATEMENT</span>
          </div>
          <span className="draft-tag">CORE HYPOTHESIS</span>
        </div>
        <textarea
          className="solution-textarea"
          rows={3}
          value={solutionStatement}
          onChange={(e) => setSolutionStatement(e.target.value)}
          placeholder="Describe the single-sentence core proposition of what you are building..."
        />
        <div className="statement-footer-tip">
          <span>Formula: [Product] helps [Users] achieve [Goal] by removing [Pain Point].</span>
        </div>
      </div>

      {/* 2. MVP Guardian Alert (Active Overload Warning) */}
      {isFeatureOverloaded ? (
        <div className="architect-warning-banner">
          <ShieldAlert size={20} className="warning-icon" />
          <div className="warning-body">
            <strong>⚠️ Feature Overload Alert ({mustHaveCount} Must-Haves)</strong>
            <p>
              Architect Rule: When a student puts more than 4 features in "Must Have", 
              development time balloons from 2 weeks to 4 months, and 90% of students quit. 
              <strong> Move at least {mustHaveCount - 4} feature(s) to "Good to Have" or "Future"!</strong>
            </p>
          </div>
        </div>
      ) : (
        <div className="architect-mvp-coach-banner">
          <Check size={18} className="coach-icon" />
          <div className="coach-text">
            <strong>Clean MVP Scope ({mustHaveCount}/4 Must-Haves):</strong> You have a razor-sharp, buildable scope. You can actually launch this!
          </div>
        </div>
      )}

      {/* 3. Three Prioritization Columns (Kanban) */}
      <div className="prioritization-board">
        {categories.map((cat) => {
          const catFeatures = features.filter(f => f.category === cat.id);
          
          return (
            <div key={cat.id} className={`p-column column-${cat.color}`}>
              <div className="p-column-header">
                <div className="col-title-row">
                  <h3 className="col-title">{cat.label}</h3>
                  <span className="col-badge">{cat.badge}</span>
                </div>
                <p className="col-desc">{cat.desc}</p>
                <div className="col-count-pill">
                  {catFeatures.length} feature{catFeatures.length !== 1 ? 's' : ''}
                </div>
              </div>

              {/* Column Features List */}
              <div className="p-column-list">
                {catFeatures.map((feat) => (
                  <div key={feat.id} className="feature-card">
                    <div className="feat-card-top">
                      <h4 className="feat-name">{feat.name}</h4>
                      <div className="feat-actions">
                        <button 
                          className="btn-feat-icon"
                          onClick={() => handleOpenEditModal(feat)}
                          title="Edit feature"
                        >
                          <Edit2 size={13} />
                        </button>
                        <button 
                          className="btn-feat-icon btn-feat-del"
                          onClick={() => handleDeleteFeature(feat.id)}
                          title="Delete feature"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>

                    <p className="feat-explanation">{feat.explanation}</p>

                    <div className="feat-why-box">
                      <span className="why-label">Why it solves the problem:</span>
                      <p className="why-text">{feat.whyItSolves}</p>
                    </div>

                    {/* Move Between Categories Buttons */}
                    <div className="feat-move-actions">
                      {cat.id !== 'MUST HAVE' && (
                        <button 
                          className="btn-move-col"
                          onClick={() => handleMoveCategory(feat.id, cat.id === 'FUTURE' ? 'GOOD TO HAVE' : 'MUST HAVE')}
                          title="Promote priority"
                        >
                          <MoveLeft size={12} />
                          <span>{cat.id === 'FUTURE' ? 'To Good' : 'To Must'}</span>
                        </button>
                      )}
                      {cat.id !== 'FUTURE' && (
                        <button 
                          className="btn-move-col"
                          onClick={() => handleMoveCategory(feat.id, cat.id === 'MUST HAVE' ? 'GOOD TO HAVE' : 'FUTURE')}
                          title="Demote priority"
                        >
                          <span>{cat.id === 'MUST HAVE' ? 'To Good' : 'To Future'}</span>
                          <MoveRight size={12} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}

                {/* Quick Add Button per Column */}
                <button 
                  className="btn-add-feature-slot"
                  onClick={() => handleOpenAddModal(cat.id)}
                >
                  <Plus size={15} />
                  <span>+ Add to {cat.label}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Bottom Action Bar */}
      <div className="solution-bottom-bar">
        <button 
          className="btn-bottom-secondary"
          onClick={onBackToDefine}
        >
          <ArrowLeft size={16} />
          <span>Back to Foundations</span>
        </button>

        <button 
          className="btn-bottom-primary btn-generate-blueprint"
          onClick={handleGenerateBlueprintClick}
        >
          <Sparkles size={18} />
          <span>Generate Project Blueprint</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Feature Add/Edit Modal */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-header">
              <h3 className="modal-title">
                {editingFeatureId ? 'Edit Feature' : '+ Add New Feature'}
              </h3>
              <button 
                className="btn-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveFeature} className="modal-form">
              <div className="form-group">
                <label>Feature Name</label>
                <input
                  type="text"
                  placeholder="e.g. Real-Time Scene & Lighting Analyzer"
                  value={featureForm.name}
                  onChange={(e) => setFeatureForm({ ...featureForm, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Short Explanation</label>
                <textarea
                  rows={2}
                  placeholder="What does this feature actually do for the user?"
                  value={featureForm.explanation}
                  onChange={(e) => setFeatureForm({ ...featureForm, explanation: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Why It Solves the Problem</label>
                <textarea
                  rows={2}
                  placeholder="Why is this necessary? How does it eliminate the identified friction?"
                  value={featureForm.whyItSolves}
                  onChange={(e) => setFeatureForm({ ...featureForm, whyItSolves: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Priority Tier (MVP Thinking)</label>
                <select
                  value={featureForm.category}
                  onChange={(e) => setFeatureForm({ ...featureForm, category: e.target.value })}
                >
                  <option value="MUST HAVE">MUST HAVE (Core MVP - Essential for Day 1)</option>
                  <option value="GOOD TO HAVE">GOOD TO HAVE (Enhancement - Can wait for v1.1)</option>
                  <option value="FUTURE">FUTURE (v2+ Roadmap - Build after user traction)</option>
                </select>
              </div>

              <div className="modal-actions">
                <button 
                  type="button" 
                  className="btn-modal-cancel"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-modal-submit">
                  {editingFeatureId ? 'Save Changes' : '+ Add Feature'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
