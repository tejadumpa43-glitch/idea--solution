import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  CheckCircle2, 
  Loader2, 
  Circle, 
  Sparkles, 
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import AiProviderBanner from './AiProviderBanner';
import { generateArchitectResponse } from '../../services/architectAI';

export default function Screen02Explore({ 
  initialIdea = '', 
  existingChat = [], 
  existingInsights = {}, 
  aiSettings,
  onOpenAiSettings,
  onContinue,
  onBack 
}) {
  const [messages, setMessages] = useState(() => {
    if (existingChat && existingChat.length > 0) return existingChat;

    return [
      {
        id: 'msg-1',
        sender: 'architect',
        text: "That's an interesting idea! Let's explore it a little.",
        time: '10:24 AM'
      },
      {
        id: 'msg-2',
        sender: 'architect',
        text: "Who do you imagine using this application?",
        time: '10:24 AM',
        suggestions: [
          "People who don't know photography",
          "College and university students",
          "Smartphone content creators",
          "Small business owners taking product photos"
        ]
      },
      {
        id: 'msg-3',
        sender: 'user',
        text: "People who don't know photography.",
        time: '10:25 AM'
      },
      {
        id: 'msg-4',
        sender: 'architect',
        text: "Great! What makes taking a good portrait difficult for them today?",
        time: '10:25 AM',
        suggestions: [
          "They don't know lighting, angles or composition",
          "They take 50 shots and none look good",
          "Camera settings are too confusing",
          "They don't know how to direct the person posing"
        ]
      }
    ];
  });

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [insights, setInsights] = useState(() => ({
    rawIdea: initialIdea || 'Helps people take better photos.',
    users: existingInsights.users || "People who don't know photography.",
    problem: existingInsights.problem || 'Beginners struggle to create professional-looking portraits.',
    context: existingInsights.context || 'Capturing photos in normal everyday environments.',
    currentWorkflow: existingInsights.currentWorkflow || 'Position person → Point camera → Guess framing → Click.',
    painPoint: existingInsights.painPoint || "Users don't know where to position themselves or handle lighting.",
    userNeed: existingInsights.userNeed || 'Simple real-time guidance that translates photography knowledge.',
    goal: existingInsights.goal || 'Help beginners create better portraits without needing photography expertise.',
    solution: existingInsights.solution || 'An intelligent photography application that guides beginners.',
    ...existingInsights
  }));

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      time: timeStr
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateArchitectResponse(text, newHistory, insights);
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'architect',
        text: response.reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: response.suggestions || []
      };

      setMessages([...newHistory, botMsg]);
      setIsTyping(false);

      if (response.insights) {
        setInsights(prev => ({ ...prev, ...response.insights }));
      }
    }, 600);
  };

  // 8 structured insight items matching the reference screenshot
  const insightItems = [
    { 
      key: 'rawIdea', 
      label: 'IDEA', 
      captured: true, 
      value: insights.rawIdea || 'Helps people take better photos.' 
    },
    { 
      key: 'users', 
      label: 'USERS', 
      captured: true, 
      value: insights.users || "People who don't know photography." 
    },
    { 
      key: 'problem', 
      label: 'PROBLEM', 
      captured: false, 
      value: 'Discovering...' 
    },
    { 
      key: 'context', 
      label: 'CONTEXT', 
      captured: false, 
      value: 'Discovering...' 
    },
    { 
      key: 'currentWorkflow', 
      label: 'CURRENT WORKFLOW', 
      captured: false, 
      value: 'Discovering...' 
    },
    { 
      key: 'painPoint', 
      label: 'PAIN POINT', 
      captured: false, 
      value: 'Discovering...' 
    },
    { 
      key: 'userNeed', 
      label: 'USER NEED', 
      captured: false, 
      value: 'Discovering...' 
    },
    { 
      key: 'goal', 
      label: 'GOAL', 
      captured: false, 
      value: 'Discovering...' 
    }
  ];

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Top AI Provider Banner */}
      <AiProviderBanner 
        aiSettings={aiSettings}
        onOpenSettings={onOpenAiSettings}
      />

      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">02 EXPLORE</div>
        <div className="stage-step-count">Step 1 of 3</div>
      </div>

      <div className="explore-container">
        {/* Title area */}
        <div className="explore-header-row">
          <div>
            <h1 className="screen-main-title">Let's explore your idea together.</h1>
            <p className="screen-main-subtitle">
              I'll ask you some questions to understand it better. You can answer in your own words.
            </p>
          </div>
        </div>

        {/* 2-Column: Left Chat, Right Project Insights */}
        <div className="explore-content-grid">
          {/* Left Column: Chat Area */}
          <div className="chat-window-card">
            <div className="chat-messages-container">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`chat-bubble-row ${msg.sender === 'user' ? 'sender-user' : 'sender-bot'}`}
                >
                  {msg.sender === 'architect' && (
                    <div className="bot-avatar-badge" title="AI Architect">
                      {/* OpenAI / AI Icon */}
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1635a.0804.0804 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4022-.6863zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.907 9.2298V6.8974a.0662.0662 0 0 1 .0331-.0615l4.8872-2.8245a4.5087 4.5087 0 0 1 6.6027 4.6543zM10.7066 12.0125l2.4277-1.3963 2.4277 1.3963v2.7913l-2.4277 1.3963-2.4277-1.3963z"/>
                      </svg>
                    </div>
                  )}

                  <div className="bubble-wrapper">
                    <div className="bubble-body">
                      <p className="bubble-text">{msg.text}</p>
                      <span className="bubble-timestamp">{msg.time}</span>
                    </div>

                    {msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="bubble-quick-replies">
                        {msg.suggestions.map((sug, sIdx) => (
                          <button
                            key={sIdx}
                            type="button"
                            className="btn-quick-reply"
                            onClick={() => handleSendMessage(sug)}
                          >
                            {sug}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="user-avatar-badge" title="You">
                      <User size={16} />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="chat-bubble-row sender-bot">
                  <div className="bot-avatar-badge">
                    <Bot size={18} />
                  </div>
                  <div className="bubble-wrapper">
                    <div className="bubble-body typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Chat Input Bar */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
              className="chat-input-bar"
            >
              <input
                type="text"
                placeholder="Type your answer..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isTyping}
                className="chat-text-input"
              />
              <button 
                type="submit" 
                className="chat-send-btn"
                disabled={!inputText.trim() || isTyping}
              >
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Right Column: PROJECT INSIGHTS Sidebar */}
          <aside className="project-insights-card">
            <div className="insights-card-header">
              <h3 className="insights-title">PROJECT INSIGHTS</h3>
            </div>

            <div className="insights-status-list">
              {insightItems.map((item) => (
                <div key={item.key} className="insight-status-row">
                  <div className="status-indicator-col">
                    {item.captured ? (
                      <CheckCircle2 size={16} className="status-icon icon-captured" />
                    ) : (
                      <Circle size={15} className="status-icon icon-pending" />
                    )}
                  </div>
                  <div className="status-text-col">
                    <div className="insight-tag-name">{item.label}</div>
                    <div className={`insight-state-label ${item.captured ? 'state-captured' : 'state-discovering'}`}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer action */}
            <div className="insights-card-footer">
              <button
                className="btn-insights-proceed"
                onClick={() => onContinue({ chatHistory: messages, insights })}
              >
                <span>Continue to Define</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </aside>
        </div>

        {/* Bottom Back Button */}
        <div className="explore-bottom-actions">
          <button className="btn-secondary-back" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          <button
            className="btn-primary-continue"
            onClick={() => onContinue({ chatHistory: messages, insights })}
          >
            <span>Continue to Understand</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
