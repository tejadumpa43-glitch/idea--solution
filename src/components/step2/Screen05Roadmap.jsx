import React, { useState } from 'react';
import { 
  Calendar, 
  List, 
  CheckSquare, 
  Flag, 
  Clock, 
  Rocket, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Circle
} from 'lucide-react';
import { DEFAULT_ROADMAP_WEEKS, ROADMAP_METRICS } from '../../data/planData';

export default function Screen05Roadmap({ 
  onContinue, 
  onBack 
}) {
  const [weeks, setWeeks] = useState(DEFAULT_ROADMAP_WEEKS);
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' | 'list'

  const toggleTask = (weekNumber, taskId) => {
    setWeeks(weeks.map(week => {
      if (week.weekNumber === weekNumber) {
        return {
          ...week,
          tasks: week.tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t)
        };
      }
      return week;
    }));
  };

  const getWeekCircleColor = (color) => {
    switch(color) {
      case 'blue': return 'circle-blue';
      case 'purple': return 'circle-purple';
      case 'green': return 'circle-green';
      default: return 'circle-blue';
    }
  };

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">05 BUILD ROADMAP</div>
        <div className="stage-step-count">Step 2 of 3</div>
      </div>

      <div className="roadmap-screen-container">
        {/* Title area & Timeline/List toggle */}
        <div className="roadmap-header-row">
          <div className="screen-header-block">
            <h1 className="screen-main-title">Your step-by-step roadmap.</h1>
            <p className="screen-main-subtitle">
              Here is the recommended order to build your project. Each phase contains key tasks and milestones.
            </p>
          </div>

          <div className="timeline-toggle-pill-wrap">
            <button
              type="button"
              className={`toggle-pill-btn ${viewMode === 'timeline' ? 'active-pill' : ''}`}
              onClick={() => setViewMode('timeline')}
            >
              Timeline
            </button>
            <button
              type="button"
              className={`toggle-pill-btn ${viewMode === 'list' ? 'active-pill' : ''}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
          </div>
        </div>

        {/* Vertical Timeline Card Container */}
        <div className="roadmap-timeline-card">
          <div className="timeline-track-wrap">
            {weeks.map((week, wIdx) => (
              <div key={week.weekNumber} className="timeline-milestone-block">
                {/* Numbered node circle with line */}
                <div className="timeline-node-col">
                  <div className={`milestone-number-circle ${getWeekCircleColor(week.color)}`}>
                    {week.weekNumber}
                  </div>
                  {wIdx < weeks.length - 1 && <div className="timeline-vertical-line"></div>}
                </div>

                {/* Content block for this week */}
                <div className="milestone-content-card">
                  <div className="milestone-card-top-row">
                    <div className="milestone-title-group">
                      <h3 className="milestone-title">Week {week.weekNumber}</h3>
                      <span className="milestone-name">{week.title}</span>
                      <span className="milestone-range-tag">{week.range}</span>
                    </div>

                    <span className="milestone-task-badge">
                      {week.tasks.length} tasks
                    </span>
                  </div>

                  {/* Checklist tasks in this week */}
                  <div className="milestone-tasks-checklist">
                    {week.tasks.map((task) => (
                      <div 
                        key={task.id}
                        className={`milestone-task-item ${task.done ? 'task-completed' : ''}`}
                        onClick={() => toggleTask(week.weekNumber, task.id)}
                      >
                        <div className="milestone-task-check-wrap">
                          <input 
                            type="checkbox"
                            checked={task.done}
                            onChange={() => {}}
                            className="milestone-task-checkbox"
                          />
                          <span className="milestone-task-title">{task.title}</span>
                        </div>

                        {task.status === 'In Progress' && (
                          <span className="badge-in-progress">In Progress</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Metrics Bar */}
          <div className="roadmap-metrics-footer-bar">
            <div className="metric-cell">
              <CheckSquare size={16} className="text-blue-500" />
              <div className="metric-val-wrap">
                <span className="metric-val">{ROADMAP_METRICS.totalTasks}</span>
                <span className="metric-label">Total Tasks</span>
              </div>
            </div>

            <div className="metric-divider"></div>

            <div className="metric-cell">
              <Flag size={16} className="text-emerald-500" />
              <div className="metric-val-wrap">
                <span className="metric-val">{ROADMAP_METRICS.majorMilestones}</span>
                <span className="metric-label">Major Milestones</span>
              </div>
            </div>

            <div className="metric-divider"></div>

            <div className="metric-cell">
              <Clock size={16} className="text-purple-500" />
              <div className="metric-val-wrap">
                <span className="metric-val">{ROADMAP_METRICS.estimatedTime}</span>
                <span className="metric-label">Estimated Time</span>
              </div>
            </div>

            <div className="metric-divider"></div>

            <div className="metric-cell">
              <Rocket size={16} className="text-amber-500" />
              <div className="metric-val-wrap">
                <span className="metric-val">{ROADMAP_METRICS.mvpRelease}</span>
                <span className="metric-label">Release</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="screen-actions-row">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
          <button className="btn-primary-continue" onClick={onContinue}>
            <span>Continue to Final Plan</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
