import React, { useState } from 'react';
import { 
  FileText, 
  Copy, 
  Check, 
  Download, 
  Share2, 
  ArrowRight, 
  Layers, 
  Hammer, 
  Sparkles, 
  Compass, 
  Users, 
  GitBranch, 
  AlertTriangle, 
  Target, 
  Trophy, 
  Cpu, 
  CheckCircle2, 
  CornerDownRight, 
  Printer, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectBlueprint({ 
  project, 
  onGoToBuildPhase, 
  onEditBlueprint 
}) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('visual-map'); // 'visual-map' | 'document'

  const bp = project?.blueprint || {};

  // Formatted markdown for copying
  const generateMarkdown = () => {
    return `# PROJECT BLUEPRINT: ${bp.project?.name || project?.title}
Category: ${bp.project?.category || project?.category}
Tagline: ${project?.tagline || ''}

## 01 — PROJECT
${bp.project?.name || project?.title} (${bp.project?.code || 'STUDENT-BP'})
Stage: ${bp.project?.stage || 'Blueprint Complete'}

## 02 — PURPOSE
${bp.purpose?.summary || 'N/A'}

## 03 — PROBLEM
${bp.problem?.summary || 'N/A'}

## 04 — USERS
Primary: ${bp.users?.primary || 'N/A'}
${bp.users?.persona ? `Persona: ${bp.users.persona}` : ''}

## 05 — CURRENT WORKFLOW
${bp.currentWorkflow?.steps?.map((s, i) => `${i + 1}. ${s.text || s}`).join('\n') || bp.currentWorkflow?.summary || 'N/A'}

## 06 — PAIN POINT
${bp.painPoint?.summary || 'N/A'}

## 07 — USER NEED
${bp.userNeed?.summary || 'N/A'}

## 08 — GOAL
${bp.goal?.summary || 'N/A'}

## 09 — SOLUTION
${bp.solution?.summary || 'N/A'}

## 10 — CORE FEATURES
### MUST HAVE (MVP)
${bp.coreFeatures?.filter(f => f.category === 'MUST HAVE').map(f => `- **${f.name}**: ${f.explanation} (Solves: ${f.whyItSolves})`).join('\n') || 'None'}

### GOOD TO HAVE
${bp.coreFeatures?.filter(f => f.category === 'GOOD TO HAVE').map(f => `- **${f.name}**: ${f.explanation}`).join('\n') || 'None'}

### FUTURE (v2+)
${bp.coreFeatures?.filter(f => f.category === 'FUTURE').map(f => `- **${f.name}**: ${f.explanation}`).join('\n') || 'None'}

## 11 — USER FLOW
${bp.userFlow?.steps?.map((s, i) => `${i + 1}. **${s.name}**: ${s.detail}`).join('\n') || 'N/A'}

## 12 — TECHNOLOGY / RESOURCES
${bp.techResources?.items?.map(t => `- **${t.domain}**: ${t.tech} (${t.why})`).join('\n') || 'N/A'}

## 13 — MVP
${bp.mvp?.summary || 'N/A'}

## 14 — NEXT STEPS
${bp.nextSteps?.actionPlan?.map(a => `- **${a.day}**: ${a.task}`).join('\n') || 'N/A'}

---
Generated with IDEA → SOLUTION (Project Architect for Students)
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(project, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `${(project.title || 'blueprint').toLowerCase().replace(/\s+/g, '_')}_blueprint.json`);
    dlAnchorElem.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="blueprint-page-wrapper animate-fade-in">
      {/* 1. Milestone Celebration Banner */}
      <section className="milestone-ready-banner">
        <div className="milestone-content">
          <div className="milestone-badge">
            <Sparkles size={16} className="badge-sparkle" />
            <span>BLUEPRINT VERIFIED • READY FOR CONSTRUCTION</span>
          </div>
          <h1 className="milestone-title">Your Project Blueprint is Ready.</h1>
          <p className="milestone-subtitle">
            You now have a clear plan. Next, let's turn your blueprint into a working prototype.
          </p>
        </div>

        <div className="milestone-cta-group">
          <button 
            className="btn-milestone-outline"
            onClick={() => setActiveTab(activeTab === 'visual-map' ? 'document' : 'visual-map')}
          >
            <FileText size={16} />
            <span>{activeTab === 'visual-map' ? 'Switch to Document View' : 'Switch to Visual Map'}</span>
          </button>

          <button 
            className="btn-milestone-primary"
            onClick={onGoToBuildPhase}
          >
            <Hammer size={17} />
            <span>Go to Build Phase</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Blueprint Toolbar */}
      <div className="blueprint-toolbar">
        <div className="blueprint-code-tag">
          <span className="mono-dot"></span>
          <span className="mono-code">BLUEPRINT // {bp.project?.code || 'STUDENT-01'}</span>
          <span className="blueprint-status-chip">14 / 14 SECTIONS COMPLETE</span>
        </div>

        <div className="toolbar-actions">
          <button 
            className={`btn-tool ${copied ? 'btn-copied' : ''}`}
            onClick={handleCopyMarkdown}
            title="Copy as Markdown"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'Copied Markdown!' : 'Copy Markdown'}</span>
          </button>

          <button 
            className="btn-tool"
            onClick={handleDownloadJSON}
            title="Download JSON Blueprint"
          >
            <Download size={14} />
            <span>Download JSON</span>
          </button>

          <button 
            className="btn-tool"
            onClick={handlePrint}
            title="Print Blueprint"
          >
            <Printer size={14} />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* 2. Visual Project Map (14 Architectural Sections) */}
      <div className="blueprint-canvas">
        {/* Blueprint Watermark Header */}
        <div className="drafting-header-block">
          <div className="drafting-meta-left">
            <div className="drafting-title">ARCHITECTURAL PROJECT BLUEPRINT</div>
            <div className="drafting-sub">IDEA → SOLUTION FORMAL SPECIFICATION</div>
          </div>
          <div className="drafting-meta-right">
            <div>PROJECT: {bp.project?.name || project?.title}</div>
            <div>STATUS: APPROVED FOR SPRINT 1</div>
          </div>
        </div>

        {/* The 14 Blueprint Grid Nodes */}
        <div className="blueprint-sections-grid">
          {/* 01 — PROJECT */}
          <div className="bp-card bp-card-01">
            <div className="bp-num-tag">01</div>
            <div className="bp-header">
              <span className="bp-section-name">PROJECT</span>
              <span className="bp-spec-badge">IDENTITY</span>
            </div>
            <h3 className="bp-project-hero-title">{bp.project?.name || project?.title}</h3>
            <div className="bp-category-line">{bp.project?.category || project?.category}</div>
            <p className="bp-tagline-quote">"{project?.tagline || 'Turn your ideas into real projects.'}"</p>
          </div>

          {/* 02 — PURPOSE */}
          <div className="bp-card bp-card-02">
            <div className="bp-num-tag">02</div>
            <div className="bp-header">
              <span className="bp-section-name">PURPOSE</span>
              <span className="bp-spec-badge">WHY WE BUILD</span>
            </div>
            <p className="bp-body-text">{bp.purpose?.summary || 'Democratizing quality solutions through ambient guidance.'}</p>
          </div>

          {/* 03 — PROBLEM */}
          <div className="bp-card bp-card-03">
            <div className="bp-num-tag">03</div>
            <div className="bp-header">
              <span className="bp-section-name">PROBLEM</span>
              <span className="bp-spec-badge">ROOT FRICTION</span>
            </div>
            <p className="bp-body-text">{bp.problem?.summary || 'Users lack experience to make complex micro-decisions in real time.'}</p>
          </div>

          {/* 04 — USERS */}
          <div className="bp-card bp-card-04">
            <div className="bp-num-tag">04</div>
            <div className="bp-header">
              <span className="bp-section-name">USERS</span>
              <span className="bp-spec-badge">THE HUMAN</span>
            </div>
            <div className="bp-target-user-callout">
              <strong>Primary User:</strong> {bp.users?.primary || 'Students and everyday creators'}
            </div>
            {bp.users?.persona && (
              <p className="bp-persona-text"><em>Persona:</em> {bp.users.persona}</p>
            )}
          </div>

          {/* 05 — CURRENT WORKFLOW */}
          <div className="bp-card bp-card-05 full-width-sm">
            <div className="bp-num-tag">05</div>
            <div className="bp-header">
              <span className="bp-section-name">CURRENT WORKFLOW</span>
              <span className="bp-spec-badge">THE PAINFUL STATUS QUO</span>
            </div>
            <div className="bp-workflow-timeline">
              {bp.currentWorkflow?.steps?.map((st, i) => (
                <div key={i} className="workflow-pipe-node">
                  <span className="pipe-index">{st.step || i + 1}</span>
                  <span className="pipe-text">{st.text || st}</span>
                  {i < (bp.currentWorkflow.steps.length - 1) && (
                    <ChevronRight size={14} className="pipe-arrow" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 06 — PAIN POINT */}
          <div className="bp-card bp-card-06">
            <div className="bp-num-tag">06</div>
            <div className="bp-header">
              <span className="bp-section-name">PAIN POINT</span>
              <span className="bp-spec-badge">WHERE IT BREAKS</span>
            </div>
            <p className="bp-body-text text-danger-soft">{bp.painPoint?.summary}</p>
          </div>

          {/* 07 — USER NEED */}
          <div className="bp-card bp-card-07">
            <div className="bp-num-tag">07</div>
            <div className="bp-header">
              <span className="bp-section-name">USER NEED</span>
              <span className="bp-spec-badge">CORE HUMAN DESIRE</span>
            </div>
            <p className="bp-body-text text-need">{bp.userNeed?.summary}</p>
          </div>

          {/* 08 — GOAL */}
          <div className="bp-card bp-card-08">
            <div className="bp-num-tag">08</div>
            <div className="bp-header">
              <span className="bp-section-name">GOAL</span>
              <span className="bp-spec-badge">SUCCESS METRIC</span>
            </div>
            <p className="bp-body-text text-goal">{bp.goal?.summary}</p>
          </div>

          {/* 09 — SOLUTION */}
          <div className="bp-card bp-card-09 full-width">
            <div className="bp-num-tag">09</div>
            <div className="bp-header">
              <span className="bp-section-name">SOLUTION</span>
              <span className="bp-spec-badge">ARCHITECTURAL PROPOSAL</span>
            </div>
            <div className="bp-solution-hero-box">
              <p className="bp-solution-lead">{bp.solution?.summary}</p>
              {project?.corePhilosophy && (
                <div className="bp-philosophy-banner">
                  <span className="banner-title">CORE PHILOSOPHY:</span>
                  <span className="banner-quote">“{project.corePhilosophy}”</span>
                </div>
              )}
            </div>
          </div>

          {/* 10 — CORE FEATURES */}
          <div className="bp-card bp-card-10 full-width">
            <div className="bp-num-tag">10</div>
            <div className="bp-header">
              <span className="bp-section-name">CORE FEATURES</span>
              <span className="bp-spec-badge">PRIORITIZED SPECIFICATION</span>
            </div>

            <div className="bp-features-columns">
              <div className="feature-tier-col must">
                <div className="tier-header">MUST HAVE (MVP)</div>
                <div className="tier-items">
                  {bp.coreFeatures?.filter(f => f.category === 'MUST HAVE').map((f) => (
                    <div key={f.id} className="tier-feature-item">
                      <div className="feat-title-row">
                        <CheckCircle2 size={14} className="feat-check" />
                        <strong>{f.name}</strong>
                      </div>
                      <p className="feat-exp">{f.explanation}</p>
                      <div className="feat-why-pill">Solves: {f.whyItSolves}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-tier-col good">
                <div className="tier-header">GOOD TO HAVE</div>
                <div className="tier-items">
                  {bp.coreFeatures?.filter(f => f.category === 'GOOD TO HAVE').map((f) => (
                    <div key={f.id} className="tier-feature-item">
                      <div className="feat-title-row">
                        <span className="feat-bullet">•</span>
                        <strong>{f.name}</strong>
                      </div>
                      <p className="feat-exp">{f.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-tier-col future">
                <div className="tier-header">FUTURE (v2+)</div>
                <div className="tier-items">
                  {bp.coreFeatures?.filter(f => f.category === 'FUTURE').map((f) => (
                    <div key={f.id} className="tier-feature-item">
                      <div className="feat-title-row">
                        <span className="feat-bullet">→</span>
                        <strong>{f.name}</strong>
                      </div>
                      <p className="feat-exp">{f.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 11 — USER FLOW */}
          <div className="bp-card bp-card-11 full-width">
            <div className="bp-num-tag">11</div>
            <div className="bp-header">
              <span className="bp-section-name">USER FLOW</span>
              <span className="bp-spec-badge">INTERACTIVE EXPERIENCE MAP</span>
            </div>

            <div className="bp-user-flow-grid">
              {bp.userFlow?.steps?.map((step, idx) => (
                <div key={step.id || idx} className="flow-step-node">
                  <div className="flow-step-badge">STEP {idx + 1}</div>
                  <h4 className="flow-step-name">{step.name}</h4>
                  <p className="flow-step-detail">{step.detail}</p>
                  {idx < (bp.userFlow.steps.length - 1) && (
                    <div className="flow-connector-line">
                      <ChevronRight size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 12 — TECHNOLOGY / RESOURCES */}
          <div className="bp-card bp-card-12">
            <div className="bp-num-tag">12</div>
            <div className="bp-header">
              <span className="bp-section-name">TECHNOLOGY / RESOURCES</span>
              <span className="bp-spec-badge">STACK SELECTION</span>
            </div>
            <div className="bp-tech-list">
              {bp.techResources?.items?.map((item, idx) => (
                <div key={idx} className="tech-item-row">
                  <span className="tech-domain">{item.domain}:</span>
                  <strong className="tech-name">{item.tech}</strong>
                  <span className="tech-why">({item.why})</span>
                </div>
              ))}
            </div>
          </div>

          {/* 13 — MVP */}
          <div className="bp-card bp-card-13">
            <div className="bp-num-tag">13</div>
            <div className="bp-header">
              <span className="bp-section-name">MVP</span>
              <span className="bp-spec-badge">SMALLEST USEFUL VERSION</span>
            </div>
            <div className="bp-mvp-box">
              <p className="bp-mvp-summary">{bp.mvp?.summary}</p>
            </div>
          </div>

          {/* 14 — NEXT STEPS */}
          <div className="bp-card bp-card-14 full-width">
            <div className="bp-num-tag">14</div>
            <div className="bp-header">
              <span className="bp-section-name">NEXT STEPS</span>
              <span className="bp-spec-badge">WEEK 1 ACTION PLAN</span>
            </div>

            <div className="bp-action-plan-row">
              {bp.nextSteps?.actionPlan?.map((plan, idx) => (
                <div key={idx} className="action-plan-card">
                  <div className="plan-day-tag">{plan.day}</div>
                  <p className="plan-task-desc">{plan.task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blueprint Footer Approval Seal */}
        <div className="drafting-approval-seal">
          <div className="seal-graphic">
            <div className="seal-circle">APPROVED</div>
          </div>
          <div className="seal-text">
            <span>ARCHITECTURAL SPECIFICATION APPROVED FOR CONSTRUCTION</span>
            <p>Phase 1 complete. Proceed to Build Phase to begin Sprint 1 implementation.</p>
          </div>
          <button 
            className="btn-launch-build"
            onClick={onGoToBuildPhase}
          >
            <Hammer size={16} />
            <span>Go to Build Phase →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
