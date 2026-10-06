import React, { useState } from 'react';
import { Settings, Sparkles } from 'lucide-react';

export default function AiProviderBanner({ 
  aiSettings = {
    provider: 'openai',
    model: 'GPT-5.6'
  }, 
  onOpenSettings 
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getProviderName = () => {
    switch (aiSettings.provider) {
      case 'openai': return 'ChatGPT';
      case 'anthropic': return 'Claude';
      case 'google': return 'Gemini';
      default: return 'Custom AI';
    }
  };

  const getModelSnippet = () => {
    if (aiSettings.model?.includes('GPT-5.6')) return 'GPT-5.6';
    if (aiSettings.model?.includes('GPT-4o')) return 'GPT-4o';
    if (aiSettings.model?.includes('Claude 3.5 Sonnet')) return 'Claude 3.5 Sonnet';
    if (aiSettings.model?.includes('Gemini 1.5 Pro')) return 'Gemini 1.5 Pro';
    return aiSettings.model?.slice(0, 12) || 'Active';
  };

  return (
    <div className="ai-provider-banner-wrapper">
      <div 
        className="ai-model-pill-badge"
        onClick={onOpenSettings}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="live-ai-green-dot"></span>
        <span className="ai-pill-label">
          AI: {getProviderName()} ({getModelSnippet()})
        </span>
        <button 
          type="button" 
          className="btn-ai-settings-gear"
          aria-label="Open AI Settings"
        >
          <Settings size={13} />
        </button>

        {showTooltip && (
          <div className="ai-provider-tooltip-popover animate-fade-in">
            <div className="font-bold text-[11px] text-slate-900 mb-0.5">
              Choose your AI provider
            </div>
            <div className="text-[11px] text-slate-500 leading-tight">
              Use OpenAI, Anthropic, Google or any compatible model.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
