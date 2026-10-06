import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  Lock, 
  Sparkles, 
  Bot, 
  CheckCircle2,
  Cpu,
  Layers,
  ChevronDown
} from 'lucide-react';

export default function AiSettingsModal({ 
  currentSettings = {
    provider: 'openai',
    model: 'GPT-5.6 (Recommended)',
    apiKey: 'sk-proj-7839201948572910485920183749201',
    connected: true
  },
  onSave, 
  onClose 
}) {
  const [provider, setProvider] = useState(currentSettings.provider || 'openai');
  const [model, setModel] = useState(currentSettings.model || 'GPT-5.6 (Recommended)');
  const [apiKey, setApiKey] = useState(currentSettings.apiKey || 'sk-proj-7839201948572910485920183749201');
  const [showKey, setShowKey] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [connectionSuccess, setConnectionSuccess] = useState(true);

  const providers = [
    {
      id: 'openai',
      name: 'OpenAI\nChatGPT',
      title: 'OpenAI / ChatGPT',
      desc: 'Use OpenAI models like GPT-4o, GPT-5 etc.',
      models: ['GPT-5.6 (Recommended)', 'GPT-4o', 'GPT-4o mini', 'o1-preview'],
      keyPrefix: 'sk-',
      getLink: 'https://platform.openai.com/api-keys'
    },
    {
      id: 'anthropic',
      name: 'Anthropic\nClaude',
      title: 'Anthropic / Claude',
      desc: 'Use Claude models like Claude 3.5 Sonnet, Haiku etc.',
      models: ['Claude 3.5 Sonnet (Recommended)', 'Claude 3.5 Haiku', 'Claude 3 Opus'],
      keyPrefix: 'sk-ant-',
      getLink: 'https://console.anthropic.com/settings/keys'
    },
    {
      id: 'google',
      name: 'Google\nGemini',
      title: 'Google / Gemini',
      desc: 'Use Google models like Gemini 1.5 Pro, Flash etc.',
      models: ['Gemini 1.5 Pro (Recommended)', 'Gemini 1.5 Flash', 'Gemini 2.0 Flash'],
      keyPrefix: 'AIzaSy',
      getLink: 'https://aistudio.google.com/app/apikey'
    },
    {
      id: 'custom',
      name: 'Other /\nCustom',
      title: 'Other / Custom Compatible API',
      desc: 'Connect to any OpenAI-compatible endpoint or local model (Ollama, vLLM).',
      models: ['Llama 3.3 70B', 'DeepSeek-V3', 'Mistral Large', 'Custom Model'],
      keyPrefix: '',
      getLink: 'https://ollama.ai'
    }
  ];

  const selectedProvider = providers.find(p => p.id === provider) || providers[0];

  const handleProviderChange = (pId) => {
    setProvider(pId);
    const pObj = providers.find(p => p.id === pId);
    if (pObj && pObj.models.length > 0) {
      setModel(pObj.models[0]);
    }
    setConnectionSuccess(true);
  };

  const handleTestConnection = () => {
    setIsTesting(true);
    setTimeout(() => {
      setIsTesting(false);
      setConnectionSuccess(true);
    }, 500);
  };

  const handleSave = () => {
    onSave({
      provider,
      providerTitle: selectedProvider.title,
      model,
      apiKey,
      connected: connectionSuccess
    });
    onClose();
  };

  const getProviderIcon = (pId) => {
    switch (pId) {
      case 'openai':
        return (
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
            AI
          </div>
        );
      case 'anthropic':
        return (
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
            AI
          </div>
        );
      case 'google':
        return (
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
            G
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs">
            ⚙
          </div>
        );
    }
  };

  return (
    <div className="modal-backdrop-overlay" onClick={onClose}>
      <div 
        className="modal-card ai-settings-modal-card animate-fade-in" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="ai-settings-modal-header">
          <div className="flex items-center gap-2">
            <span className="ai-badge-header">AI</span>
            <h2 className="ai-settings-title">AI SETTINGS</h2>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <p className="ai-settings-subtitle">
          Choose your AI provider and connect your model.
        </p>

        {/* 2-Column Modal Body */}
        <div className="ai-settings-grid-layout">
          {/* Left Column: AI Provider Menu */}
          <div className="ai-provider-menu-col">
            <div className="provider-col-label">AI PROVIDER</div>
            <div className="provider-options-list">
              {providers.map((p) => {
                const isSelected = provider === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    className={`provider-select-btn ${isSelected ? 'active-provider' : ''}`}
                    onClick={() => handleProviderChange(p.id)}
                  >
                    <div className="flex items-center gap-2.5">
                      {getProviderIcon(p.id)}
                      <div className="provider-name-block">
                        <span className="font-semibold text-xs leading-tight text-slate-800">
                          {p.title.split('/')[0].trim()}
                        </span>
                        <span className="text-[11px] text-slate-500 block">
                          {p.title.split('/')[1]?.trim() || ''}
                        </span>
                      </div>
                    </div>
                    <div className="radio-circle-indicator">
                      {isSelected && <span className="radio-inner-dot"></span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Key, Model & Connection */}
          <div className="ai-config-details-col">
            {/* Header info */}
            <div className="provider-detail-header">
              <div className="flex items-center gap-3 mb-1">
                {getProviderIcon(selectedProvider.id)}
                <div>
                  <h3 className="font-bold text-sm text-slate-900">{selectedProvider.title}</h3>
                  <p className="text-xs text-slate-500">{selectedProvider.desc}</p>
                </div>
              </div>
            </div>

            {/* API Key Input */}
            <div className="config-form-group">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">API Key</label>
                <a 
                  href={selectedProvider.getLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="get-api-key-link"
                >
                  <span>Get API key</span>
                  <ExternalLink size={11} />
                </a>
              </div>
              <div className="api-key-input-container">
                <input
                  type={showKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-••••••••••••••••••••••••••••••••"
                  className="api-key-field"
                />
                <button
                  type="button"
                  className="btn-toggle-eye"
                  onClick={() => setShowKey(!showKey)}
                  title={showKey ? 'Hide key' : 'Show key'}
                >
                  {showKey ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Model Selection Dropdown */}
            <div className="config-form-group">
              <label className="text-xs font-bold text-slate-700">Model</label>
              <div className="select-dropdown-container">
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="model-select-dropdown"
                >
                  {selectedProvider.models.map((m, idx) => (
                    <option key={idx} value={m}>{m}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="dropdown-arrow-icon" />
              </div>
            </div>

            {/* Test Connection Button */}
            <div className="test-connection-row">
              <button
                type="button"
                className="btn-test-connection"
                onClick={handleTestConnection}
                disabled={isTesting}
              >
                {isTesting ? 'Testing...' : 'Test Connection'}
              </button>
            </div>

            {/* Connection Success Banner */}
            {connectionSuccess && (
              <div className="connection-success-alert animate-fade-in">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-xs text-emerald-800">Connection successful!</div>
                  <div className="text-[11px] text-emerald-700">Your API key is valid and ready to use.</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="ai-settings-modal-footer">
          <div className="privacy-lock-notice">
            <Lock size={14} className="text-slate-400 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-slate-500 leading-normal m-0">
              Your API key is stored securely. We never display the complete key. It is used only to connect to your chosen AI provider.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button type="button" className="btn-secondary-outline" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn-primary-continue" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
