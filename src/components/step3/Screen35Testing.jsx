import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  XCircle, 
  Circle, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  RotateCcw,
  ShieldCheck
} from 'lucide-react';

export default function Screen35Testing({ 
  onBack, 
  onProceedToReview 
}) {
  const [isRunningAll, setIsRunningAll] = useState(false);
  const [tests, setTests] = useState([
    {
      id: 't1',
      name: 'Application loads',
      status: 'Passed',
      desc: 'App opens without errors'
    },
    {
      id: 't2',
      name: 'Camera permission',
      status: 'Passed',
      desc: 'Camera access works correctly'
    },
    {
      id: 't3',
      name: 'Camera preview',
      status: 'Passed',
      desc: 'Live video is displayed'
    },
    {
      id: 't4',
      name: 'Capture image',
      status: 'Passed',
      desc: 'Image can be captured successfully'
    },
    {
      id: 't5',
      name: 'Image analysis',
      status: 'Failed',
      desc: "AI service didn't return a response",
      fixable: true
    },
    {
      id: 't6',
      name: 'Guidance result',
      status: 'Not Run',
      desc: 'Portrait guidance is generated'
    },
    {
      id: 't7',
      name: 'Complete user flow',
      status: 'Not Run',
      desc: 'End-to-end user journey test'
    }
  ]);

  const handleRunAll = () => {
    setIsRunningAll(true);
    setTimeout(() => {
      setTests(prev => prev.map(t => {
        if (t.id === 't5') return t; // keep failed for demo until user clicks fix
        return { ...t, status: 'Passed' };
      }));
      setIsRunningAll(false);
    }, 800);
  };

  const handleFixWithAi = (testId) => {
    setTests(prev => prev.map(t => {
      if (t.id === testId) {
        return {
          ...t,
          status: 'Passed',
          desc: 'AI endpoint timeout handled gracefully with local heuristics',
          fixable: false
        };
      }
      return t;
    }));
  };

  const passedCount = tests.filter(t => t.status === 'Passed').length;

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">3.5 TESTING</div>
        <div className="stage-step-count">Step 3 of 3</div>
      </div>

      <div className="testing-screen-card">
        {/* Title area & Run All Tests button */}
        <div className="testing-header-row">
          <div className="screen-header-block">
            <h1 className="screen-main-title">Let's test your project.</h1>
            <p className="screen-main-subtitle">
              We'll run important tests to make sure everything works as expected.
            </p>
          </div>

          <button 
            type="button" 
            className="btn-primary-run-all-tests"
            onClick={handleRunAll}
            disabled={isRunningAll}
          >
            <Play size={15} fill="currentColor" />
            <span>{isRunningAll ? 'Running Tests...' : 'Run All Tests'}</span>
          </button>
        </div>

        {/* Tests List */}
        <div className="tests-results-list">
          {tests.map((test) => (
            <div key={test.id} className="test-row-item">
              <div className="test-left-info">
                <span className="test-status-indicator">
                  {test.status === 'Passed' && <CheckCircle2 size={18} className="text-emerald-500" />}
                  {test.status === 'Failed' && <XCircle size={18} className="text-rose-500" />}
                  {test.status === 'Not Run' && <Circle size={18} className="text-slate-300" />}
                </span>
                <span className="test-name-bold">{test.name}</span>
              </div>

              <div className="test-center-badge">
                <span className={`test-badge-pill pill-${test.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  • {test.status}
                </span>
              </div>

              <div className="test-desc-col">
                <span className={`test-desc-text ${test.status === 'Failed' ? 'text-rose-600 font-medium' : ''}`}>
                  {test.desc}
                </span>
              </div>

              <div className="test-action-col">
                {test.status === 'Failed' && test.fixable && (
                  <button 
                    type="button" 
                    className="btn-fix-with-ai"
                    onClick={() => handleFixWithAi(test.id)}
                  >
                    <Sparkles size={14} />
                    <span>Fix with AI</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary note */}
        <div className="tests-summary-bar">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-blue-600" />
            <span className="text-xs font-semibold text-slate-700">
              {passedCount} of {tests.length} tests passing
            </span>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="screen-actions-row">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
          <button 
            className="btn-primary-continue"
            onClick={onProceedToReview}
          >
            <span>Continue to Preview & Review</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
