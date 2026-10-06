import React, { useState } from 'react';
import { Lightbulb, Users, Settings, ArrowRight } from 'lucide-react';
import GirlThinkingIllustration from '../illustrations/GirlThinkingIllustration';
import AiProviderBanner from './AiProviderBanner';

export default function Screen01Start({ 
  initialIdea = '', 
  aiSettings,
  onOpenAiSettings,
  onContinue 
}) {
  const [ideaText, setIdeaText] = useState(initialIdea || '');

  const suggestions = [
    {
      icon: <Lightbulb size={18} className="text-purple-600" />,
      text: 'An app that helps students better.',
      fullIdea: 'I want to build an app that helps hostel students find healthy food without long lines.'
    },
    {
      icon: <Users size={18} className="text-blue-600" />,
      text: 'A platform to connect local businesses.',
      fullIdea: 'A platform to connect local campus businesses and student freelancers for micro-gigs.'
    },
    {
      icon: <Settings size={18} className="text-amber-600" />,
      text: 'A tool that makes a task easier.',
      fullIdea: 'A tool that makes taking editorial-grade portrait photography simple for beginners who know nothing about cameras.'
    }
  ];

  const handleSelectSuggestion = (suggestion) => {
    setIdeaText(suggestion.fullIdea);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!ideaText.trim()) return;
    onContinue(ideaText.trim());
  };

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Top AI Model Pill */}
      <AiProviderBanner 
        aiSettings={aiSettings}
        onOpenSettings={onOpenAiSettings}
      />

      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">01 START</div>
        <div className="stage-step-count">Step 1 of 3</div>
      </div>

      <div className="start-content-card">
        {/* Title area & illustration */}
        <div className="start-hero-grid">
          <div className="start-hero-text">
            <h1 className="screen-main-title">Let's start with your idea.</h1>
            <p className="screen-main-subtitle">
              Don't worry about making it perfect. Just tell us what's in your mind.
            </p>
          </div>
          <div className="start-hero-illustration">
            <GirlThinkingIllustration />
          </div>
        </div>

        {/* Idea input area */}
        <form onSubmit={handleSubmit} className="start-form-area">
          <div className="textarea-card-container">
            <textarea
              className="idea-main-textarea"
              placeholder="I want to build..."
              value={ideaText}
              onChange={(e) => setIdeaText(e.target.value.slice(0, 500))}
              rows={4}
              maxLength={500}
            />
            <div className="textarea-counter">
              {ideaText.length}/500
            </div>
          </div>

          {/* Suggestions row */}
          <div className="suggestions-section">
            <p className="suggestions-label">You can write in your own words. Here are some example ideas:</p>
            <div className="suggestions-grid">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="suggestion-pill-card"
                  onClick={() => handleSelectSuggestion(s)}
                >
                  <div className="suggestion-icon-wrap">{s.icon}</div>
                  <span className="suggestion-text">{s.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Continue button */}
          <div className="start-actions-row">
            <button
              type="submit"
              className="btn-primary-continue"
              disabled={!ideaText.trim()}
            >
              <span>Continue</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
