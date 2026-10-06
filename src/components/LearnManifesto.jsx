import React from 'react';
import { 
  Home, 
  Compass, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  AlertOctagon, 
  ArrowRight, 
  Hammer, 
  FileText, 
  Eye
} from 'lucide-react';

export default function LearnManifesto({ 
  onStartNewProject, 
  onOpenJustAClick,
  setCurrentView 
}) {
  const pillars = [
    {
      num: '01',
      title: 'Why is the house being built?',
      analogy: 'In Architecture: Is this a warm family home, a summer cabin, or a busy university dormitory?',
      studentApp: 'In Your Project: Why solve this? If there is no real pain, nobody will care when you launch.'
    },
    {
      num: '02',
      title: 'Who will use it?',
      analogy: 'In Architecture: An elderly couple needs single-story ramps; an active family needs a huge kitchen.',
      studentApp: 'In Your Project: Not "all college students". Narrow down to first-year hostel students, or novices behind a camera.'
    },
    {
      num: '03',
      title: 'What is their daily routine?',
      analogy: 'In Architecture: How do they walk from the garage to the kitchen with grocery bags?',
      studentApp: 'In Your Project: How do they currently deal with the issue? If you do not understand their messy workaround, you will build the wrong tool.'
    },
    {
      num: '04',
      title: 'Where does the friction occur?',
      analogy: 'In Architecture: Is the hallway cramped? Is the living room freezing in winter?',
      studentApp: 'In Your Project: Identify the exact wound: cognitive overload, wasted walking time, or social embarrassment.'
    },
    {
      num: '05',
      title: 'Drafting the 14-Point Blueprint',
      analogy: 'In Architecture: The structural drawing with dimensions, materials, and foundation depth.',
      studentApp: 'In Your Project: The complete 14-section project specification approved before opening VS Code.'
    },
    {
      num: '06',
      title: 'Constructing the MVP',
      analogy: 'In Architecture: Pour the concrete foundation, frame the walls, and install the roof before picking wallpaper.',
      studentApp: 'In Your Project: Build the 3 Must-Have features first. No dark mode toggles or sticker packs until the core loop works!'
    }
  ];

  return (
    <div className="manifesto-page-container animate-fade-in">
      {/* Hero */}
      <section className="manifesto-hero">
        <div className="manifesto-tag">THE PROJECT ARCHITECT MANIFESTO</div>
        <h1 className="manifesto-main-title">
          “Don’t start building with a vague idea.<br />
          <span className="gradient-highlight">Build with a blueprint.”</span>
        </h1>
        <p className="manifesto-lead">
          Why 92% of student projects get abandoned after two weeks — and how the philosophy 
          of classical home architecture gives you an unfair advantage.
        </p>

        <div className="manifesto-hero-ctas">
          <button 
            className="btn-primary-hero"
            onClick={onStartNewProject}
          >
            <span>+ Start Your Project Blueprint</span>
            <ArrowRight size={16} />
          </button>
          <button 
            className="btn-secondary-hero"
            onClick={onOpenJustAClick}
          >
            <span>Study Reference Project (Just A Click)</span>
          </button>
        </div>
      </section>

      {/* The Core Home Analogy */}
      <section className="analogy-deep-dive">
        <div className="analogy-card">
          <div className="analogy-header">
            <Home size={22} className="home-icon" />
            <h2>The Analogy of Building a Home</h2>
          </div>

          <p className="analogy-text">
            Imagine a person who buys a plot of land and immediately starts stacking random bricks, 
            pouring cement in the corner, and nailing window frames together without a drawing.
          </p>
          <p className="analogy-text">
            Within three days, the walls are crooked. There are no water pipes. The doors don't line up. 
            Exhausted and frustrated, they walk away and leave the half-built mess to rot.
          </p>
          <div className="analogy-quote">
            “That is exactly how most students write software. They get an excited spark at 1 AM, 
            open their terminal, install 40 libraries, write 800 lines of messy code, get overwhelmed by edge cases, 
            and abandon the repo forever.”
          </div>

          <h3 className="sub-heading">What does a master architect do first?</h3>
          <div className="architect-steps-grid">
            {pillars.map((p) => (
              <div key={p.num} className="step-card">
                <span className="step-card-num">{p.num}</span>
                <h4 className="step-card-title">{p.title}</h4>
                <div className="analogy-pill">{p.analogy}</div>
                <div className="student-app-pill">{p.studentApp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Vague Idea vs. Architectural Blueprint */}
      <section className="comparison-section">
        <h2 className="section-title">The Transformation: Before vs. After</h2>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>LENS</th>
                <th className="th-bad">❌ The Vague Student Idea</th>
                <th className="th-good">✨ The Architectural Blueprint</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Scope</strong></td>
                <td className="td-bad">“I want to build an AI social photo app for everyone.”</td>
                <td className="td-good">“JUST A CLICK: Conversational portrait director for photo novices.”</td>
              </tr>
              <tr>
                <td><strong>Target User</strong></td>
                <td className="td-bad">“College students, influencers, photographers, everyone.”</td>
                <td className="td-good">“Beginners who feel nervous taking portraits of their friends.”</td>
              </tr>
              <tr>
                <td><strong>Problem</strong></td>
                <td className="td-bad">“Default camera apps are boring.”</td>
                <td className="td-good">“Portraits require 12 simultaneous decisions novices can’t make.”</td>
              </tr>
              <tr>
                <td><strong>Solution</strong></td>
                <td className="td-bad">“Add 50 filters, stickers, direct messages, and Web3 tokens.”</td>
                <td className="td-good">“3-word ambient guidance: ‘Move closer. Turn to light. Hold.’”</td>
              </tr>
              <tr>
                <td><strong>Day 1 Goal</strong></td>
                <td className="td-bad">“Design a complex animated logo and database schema.”</td>
                <td className="td-good">“Validate face distance calculation with 3 friends in the dorm.”</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* The 5 Golden Rules */}
      <section className="manifesto-rules-section">
        <div className="rules-header">
          <Sparkles size={20} className="sparkle-gold" />
          <h2>The 5 Golden Rules of the Student Architect</h2>
        </div>

        <div className="rules-grid">
          <div className="rule-box">
            <span className="rule-num">RULE 01</span>
            <h4>Problem ≠ Solution</h4>
            <p>Never jump to the tool before understanding the human pain. The tool is merely the bridge.</p>
          </div>
          <div className="rule-box">
            <span className="rule-num">RULE 02</span>
            <h4>Say NO to 80% of Features</h4>
            <p>Every feature you add multiplies your bugs and launch delay. If a feature isn't essential on Day 1, kill it.</p>
          </div>
          <div className="rule-box">
            <span className="rule-num">RULE 03</span>
            <h4>The User Sees Simplicity; System Handles Complexity</h4>
            <p>The hallmark of great software is making intricate, difficult math feel like magic to the user.</p>
          </div>
          <div className="rule-box">
            <span className="rule-num">RULE 04</span>
            <h4>The Student is Always the Creator</h4>
            <p>The AI is your architect mentor. It challenges your blind spots, but you own the creative vision.</p>
          </div>
          <div className="rule-box">
            <span className="rule-num">RULE 05</span>
            <h4>Blueprint First, Construction Second</h4>
            <p>When your blueprint is crystal clear, coding becomes fast, peaceful, and extraordinarily effective.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
