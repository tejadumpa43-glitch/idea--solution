import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Lightbulb, 
  Compass, 
  HelpCircle, 
  MessageSquare,
  User,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import LiveInsightsPanel from './LiveInsightsPanel';
import { generateArchitectResponse, INITIAL_GREETING } from '../services/architectAI';

export default function ConversationalWorkspace({ 
  project, 
  onUpdateProject, 
  onProceedToUnderstand, 
  setCurrentView 
}) {
  const [messages, setMessages] = useState(() => {
    if (project?.chatHistory && project.chatHistory.length > 0) {
      return project.chatHistory;
    }
    return [
      {
        id: 'msg-init',
        sender: 'architect',
        text: "Tell me about your idea. Don't worry about making it perfect. Just tell me what's in your mind.",
        mentorTip: "Like an architect visiting the empty site, we begin without judgment. Tell me the raw spark in your own words.",
        suggestions: [
          "I want to build an app that helps hostel students find healthy food without long lines.",
          "What if anyone with zero photography skills could take an editorial-grade portrait photo?",
          "An app for college students to coordinate laundry washer availability without wasted trips.",
          "A smart campus lost and found tool with photo verification instead of messy WhatsApp chats."
        ]
      }
    ];
  });

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [insights, setInsights] = useState(() => {
    return project?.extractedInsights || {
      rawIdea: project?.concept?.rawIdea || '',
      purpose: project?.blueprint?.purpose?.summary || '',
      users: project?.blueprint?.users?.primary || '',
      currentWorkflow: project?.blueprint?.currentWorkflow?.steps?.map(s => s.text).join(' → ') || '',
      painPoint: project?.blueprint?.painPoint?.summary || '',
      userNeed: project?.blueprint?.userNeed?.summary || '',
      goal: project?.blueprint?.goal?.summary || '',
      proposedSolution: project?.blueprint?.solution?.summary || ''
    };
  });

  const [isReadyForReview, setIsReadyForReview] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle sending a message
  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    const userMessage = {
      id: `msg-user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInputText('');

    // Trigger AI Architect thinking
    setIsTyping(true);

    setTimeout(() => {
      const response = generateArchitectResponse(text, updatedHistory, insights);
      
      const architectMessage = {
        id: `msg-arch-${Date.now()}`,
        sender: 'architect',
        text: response.reply,
        mentorTip: response.mentorTip,
        suggestions: response.suggestions || [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const finalHistory = [...updatedHistory, architectMessage];
      setMessages(finalHistory);
      setIsTyping(false);

      if (response.insights) {
        setInsights(response.insights);
      }
      if (response.isReadyForReview) {
        setIsReadyForReview(true);
      }

      // Persist to project state
      if (onUpdateProject) {
        onUpdateProject({
          ...project,
          chatHistory: finalHistory,
          extractedInsights: response.insights || insights
        });
      }
    }, 750);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  const handleResetConversation = () => {
    if (window.confirm("Start fresh with a new idea?")) {
      const resetMessages = [
        {
          id: 'msg-init',
          sender: 'architect',
          text: "Tell me about your idea. Don't worry about making it perfect. Just tell me what's in your mind.",
          mentorTip: "Like an architect visiting the empty site, we begin without judgment. Tell me the raw spark in your own words.",
          suggestions: [
            "I want to build an app that helps hostel students find healthy food without long lines.",
            "What if anyone with zero photography skills could take an editorial-grade portrait photo?",
            "An app for college students to coordinate laundry washer availability without wasted trips.",
            "A smart campus lost and found tool with photo verification instead of messy WhatsApp chats."
          ]
        }
      ];
      setMessages(resetMessages);
      setInsights({
        rawIdea: '',
        purpose: '',
        users: '',
        currentWorkflow: '',
        painPoint: '',
        userNeed: '',
        goal: '',
        proposedSolution: ''
      });
      setIsReadyForReview(false);
      if (onUpdateProject) {
        onUpdateProject({
          ...project,
          chatHistory: resetMessages,
          extractedInsights: {}
        });
      }
    }
  };

  const handleProceed = () => {
    if (onProceedToUnderstand) {
      onProceedToUnderstand(insights);
    }
  };

  return (
    <div className="conversational-workspace-layout animate-fade-in">
      {/* Left / Center: The Architect Dialogue Area */}
      <section className="chat-main-column">
        {/* Workspace Top Banner */}
        <div className="workspace-header">
          <div className="workspace-header-info">
            <div className="stage-pill">
              <span className="dot-active"></span>
              STEP 1: PROJECT DISCOVERY
            </div>
            <h2 className="workspace-title">Let's start with your idea.</h2>
            <p className="workspace-subtitle">
              Your AI Project Architect asks one question at a time to uncover the foundation.
            </p>
          </div>

          <div className="workspace-header-actions">
            <button 
              className="btn-header-ghost"
              onClick={handleResetConversation}
              title="Reset conversation"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
            <button
              className="btn-header-proceed"
              onClick={handleProceed}
            >
              <span>Review Idea So Far</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="chat-stream-container">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`chat-message-row ${msg.sender === 'architect' ? 'msg-architect' : 'msg-user'}`}
            >
              <div className="msg-avatar">
                {msg.sender === 'architect' ? (
                  <div className="architect-avatar-badge">
                    <Compass size={16} />
                  </div>
                ) : (
                  <div className="user-avatar-badge">
                    <User size={16} />
                  </div>
                )}
              </div>

              <div className="msg-body">
                <div className="msg-meta">
                  <span className="msg-sender-name">
                    {msg.sender === 'architect' ? 'AI Project Architect' : 'Student Creator'}
                  </span>
                  {msg.timestamp && <span className="msg-time">{msg.timestamp}</span>}
                </div>

                <div className="msg-bubble">
                  <div className="msg-bubble-text">
                    {msg.text.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx}>
                        {para.split('**').map((chunk, cIdx) => 
                          cIdx % 2 === 1 ? <strong key={cIdx}>{chunk}</strong> : chunk
                        )}
                      </p>
                    ))}
                  </div>

                  {/* Mentor Tip Callout (if present) */}
                  {msg.mentorTip && (
                    <div className="mentor-tip-callout">
                      <div className="tip-header">
                        <Lightbulb size={13} className="tip-icon" />
                        <span>ARCHITECT WISDOM</span>
                      </div>
                      <div className="tip-content">{msg.mentorTip}</div>
                    </div>
                  )}

                  {/* Interactive Quick Suggestions */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="chat-suggestions-wrap">
                      <span className="suggestions-label">QUICK IDEAS / INSPIRATION:</span>
                      <div className="suggestions-chips">
                        {msg.suggestions.map((sug, sIdx) => (
                          <button
                            key={sIdx}
                            className="suggestion-chip"
                            onClick={() => handleSuggestionClick(sug)}
                          >
                            <Sparkles size={12} className="chip-sparkle" />
                            <span>{sug}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="chat-message-row msg-architect">
              <div className="msg-avatar">
                <div className="architect-avatar-badge thinking">
                  <Compass size={16} />
                </div>
              </div>
              <div className="msg-body">
                <div className="msg-bubble typing-bubble">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="typing-label">Analyzing your idea through architectural lenses...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="chat-input-bar-container">
          <div className="chat-input-box">
            <textarea
              ref={textareaRef}
              className="chat-textarea"
              rows={2}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your idea... Don't worry about making it perfect."
            />
            <div className="chat-input-actions">
              <span className="input-hint">Press <strong>Enter ↵</strong> to send</span>
              <button
                className={`btn-send-message ${inputText.trim() ? 'active' : ''}`}
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim() || isTyping}
                title="Send message"
              >
                <Send size={16} />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Right: Live Project Insights Panel */}
      <LiveInsightsPanel 
        insights={insights}
        onReviewIdea={handleProceed}
        isReadyForReview={isReadyForReview}
      />
    </div>
  );
}
