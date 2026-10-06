import React, { useState } from 'react';
import { 
  Bot, 
  User, 
  Send, 
  Copy, 
  Check, 
  Code2, 
  HelpCircle, 
  Wrench, 
  CheckSquare, 
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

export default function Screen33AiMentor({ 
  onBackToWorkspace, 
  onProceedToTask 
}) {
  const [activeMode, setActiveMode] = useState('Build'); // 'Build' | 'Explain' | 'Fix' | 'Review'
  const [inputQuestion, setInputQuestion] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const [messages, setMessages] = useState([
    {
      id: 'm1',
      sender: 'bot',
      text: `I'm your AI mentor. I can help you:
• Write and improve code
• Explain how things work
• Fix errors
• Build the current task

What would you like to do?`
    },
    {
      id: 'm2',
      sender: 'user',
      text: 'Create a simple homepage with a camera button.'
    },
    {
      id: 'm3',
      sender: 'bot',
      text: "I'll create a clean homepage with a camera button. Here's the code:",
      hasCode: true,
      fileName: 'Home.jsx',
      codeSnippet: `import React from 'react'
import { Camera } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <h1 className="text-2xl font-bold mb-4">Capture Better Portraits</h1>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2">
        <Camera size={18} />
        <span>Open Camera</span>
      </button>
    </div>
  )
}`
    }
  ]);

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputQuestion.trim()) return;

    const userMsg = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: inputQuestion.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    const q = inputQuestion.trim();
    setInputQuestion('');

    setTimeout(() => {
      let reply = '';
      let snippet = null;

      if (q.toLowerCase().includes('camera') || q.toLowerCase().includes('permission')) {
        reply = "Here is how you handle camera permissions gracefully using the browser `navigator.mediaDevices.getUserMedia` API:";
        snippet = `const startCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', width: { ideal: 1920 } }
    });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  } catch (err) {
    console.error("Camera access denied:", err);
  }
};`;
      } else {
        reply = `Great question! In ${activeMode} mode, I recommend structuring your component with clear hooks and error boundaries so it behaves reliably.`;
      }

      setMessages(prev => [
        ...prev, 
        {
          id: `b-${Date.now()}`,
          sender: 'bot',
          text: reply,
          hasCode: !!snippet,
          fileName: snippet ? 'CameraHandler.jsx' : undefined,
          codeSnippet: snippet
        }
      ]);
    }, 600);
  };

  const copyCode = (snippet, idx) => {
    navigator.clipboard.writeText(snippet);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="step-screen-wrapper animate-fade-in">
      {/* Subheader bar */}
      <div className="screen-sub-header">
        <div className="stage-pill-tag">AI MENTOR</div>
        <div className="stage-step-count">Step 3 of 3</div>
      </div>

      <div className="ai-mentor-card">
        {/* Top Mode Pills */}
        <div className="mentor-mode-pills-row">
          {['Build', 'Explain', 'Fix', 'Review'].map(mode => (
            <button
              key={mode}
              type="button"
              className={`mentor-mode-btn ${activeMode === mode ? 'active-mode' : ''}`}
              onClick={() => setActiveMode(mode)}
            >
              <span>{mode}</span>
            </button>
          ))}
        </div>

        {/* Chat History Container */}
        <div className="mentor-chat-area">
          {messages.map((m, idx) => (
            <div 
              key={m.id}
              className={`mentor-msg-row ${m.sender === 'user' ? 'msg-user' : 'msg-bot'}`}
            >
              {m.sender === 'bot' && (
                <div className="mentor-avatar-icon">
                  <Bot size={18} />
                </div>
              )}

              <div className="mentor-bubble-wrap">
                <div className="mentor-bubble-content">
                  <p className="whitespace-pre-line">{m.text}</p>

                  {m.hasCode && (
                    <div className="snippet-code-box">
                      <div className="snippet-header">
                        <span className="snippet-filename">{m.fileName}</span>
                        <button 
                          className="btn-copy-snippet"
                          onClick={() => copyCode(m.codeSnippet, idx)}
                        >
                          {copiedIndex === idx ? <Check size={13} /> : <Copy size={13} />}
                          <span>{copiedIndex === idx ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <pre className="snippet-body">
                        <code>{m.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {m.sender === 'user' && (
                <div className="user-avatar-icon">
                  <User size={16} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chat Input Bar */}
        <form onSubmit={handleSendMessage} className="mentor-input-bar">
          <input 
            type="text"
            placeholder="Ask anything..."
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
            className="mentor-text-input"
          />
          <button 
            type="submit" 
            className="btn-mentor-send"
            disabled={!inputQuestion.trim()}
          >
            <Send size={15} />
          </button>
        </form>

        {/* Bottom Actions Row */}
        <div className="screen-actions-row">
          <button className="btn-secondary-back" onClick={onBackToWorkspace}>
            <ArrowLeft size={16} />
            <span>Back to Workspace</span>
          </button>
          <button className="btn-primary-continue" onClick={onProceedToTask}>
            <span>View Camera Task Implementation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
