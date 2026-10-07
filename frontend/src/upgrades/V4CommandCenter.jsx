import React, { useMemo, useState } from "react";
import "./v4.css";

const skills = [
  ["Python", 86],
  ["Django", 78],
  ["React", 72],
  ["SQL", 81],
  ["AI / ML", 54],
  ["Cloud", 48],
  ["DSA", 67],
  ["System Design", 42],
];

const missions = [
  "Solve 5 Python problems",
  "Build one Django REST API",
  "Complete React Hooks practice",
  "Solve 3 SQL optimization questions",
  "Design one AI feature",
];

export default function V4CommandCenter() {
  const [mission, setMission] = useState(0);
  const [xp, setXp] = useState(2480);
  const [streak, setStreak] = useState(7);
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [copilot, setCopilot] = useState(false);
  const [toast, setToast] = useState("");

  const filteredSkills = useMemo(() => {
    if (!search.trim()) return skills;
    return skills.filter(([name]) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const completeMission = () => {
    setXp(v => v + 100);
    setMission(v => Math.min(v + 1, missions.length - 1));
    setStreak(v => v + 1);
    setToast("+100 XP Mission completed");
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <main className="v4-command-center">

      <header className="v4-topbar">
        <div>
          <span className="v4-eyebrow">ENTRESKILL HUB V4</span>
          <h1>AI Developer Command Center</h1>
          <p>Build skills. Ship projects. Crack interviews. Get job ready.</p>
        </div>

        <div className="v4-top-actions">
          <div className="v4-xp">
            <strong>{xp.toLocaleString()}</strong>
            <span>XP</span>
          </div>
          <div className="v4-streak">
            <strong>{streak}</strong>
            <span>DAY STREAK</span>
          </div>
          <button
            className="v4-icon-btn"
            onClick={() => {
              setNotifications(0);
              setToast("Notifications marked as read");
              setTimeout(() => setToast(""), 1800);
            }}
          >
            🔔 {notifications}
          </button>
        </div>
      </header>

      <section className="v4-hero">
        <div className="v4-hero-copy">
          <span className="v4-pill">10 LPA READINESS ENGINE</span>
          <h2>Build. Learn. Practice. Deploy.</h2>
          <p>
            Your unified workspace for Full Stack Development,
            AI Engineering, DSA, Cloud and Interview preparation.
          </p>

          <div className="v4-actions">
            <button
              className="v4-primary"
              onClick={completeMission}
            >
              Complete Daily Mission
            </button>
            <button
              className="v4-secondary"
              onClick={() => setCopilot(v => !v)}
            >
              AI Career Copilot
            </button>
          </div>
        </div>

        <div className="v4-readiness-ring">
          <div>
            <strong>78%</strong>
            <span>READY</span>
          </div>
        </div>
      </section>

      <section className="v4-stats">
        <article>
          <span>Career Readiness</span>
          <strong>78%</strong>
          <small>+8% this month</small>
        </article>
        <article>
          <span>Projects</span>
          <strong>8 / 10</strong>
          <small>2 projects remaining</small>
        </article>
        <article>
          <span>Interview Score</span>
          <strong>84%</strong>
          <small>Strong technical base</small>
        </article>
        <article>
          <span>Profile Strength</span>
          <strong>92%</strong>
          <small>Resume optimized</small>
        </article>
      </section>

      <section className="v4-grid">

        <article className="v4-panel v4-mission">
          <div className="v4-panel-title">
            <div>
              <span>DAILY MISSION</span>
              <h3>Today's Challenge</h3>
            </div>
            <b>+100 XP</b>
          </div>

          <div className="v4-mission-box">
            <div className="v4-mission-number">
              {mission + 1}
            </div>
            <div>
              <strong>{missions[mission]}</strong>
              <p>Complete this task to increase your readiness score.</p>
            </div>
          </div>

          <button className="v4-wide-btn" onClick={completeMission}>
            Mark Mission Complete
          </button>
        </article>

        <article className="v4-panel">
          <div className="v4-panel-title">
            <div>
              <span>INTERVIEW RADAR</span>
              <h3>Interview Readiness</h3>
            </div>
            <b>84%</b>
          </div>

          <div className="v4-bars">
            {[
              ["Python", 88],
              ["Django", 82],
              ["React", 76],
              ["SQL", 91],
              ["System Design", 63],
              ["HR", 72],
            ].map(([name, value]) => (
              <div className="v4-bar" key={name}>
                <div>
                  <span>{name}</span>
                  <strong>{value}%</strong>
                </div>
                <div className="v4-track">
                  <i style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="v4-panel v4-skills">
          <div className="v4-panel-title">
            <div>
              <span>SKILL GRAPH</span>
              <h3>Technical Growth</h3>
            </div>
          </div>

          <div className="v4-search">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search skill..."
            />
          </div>

          <div className="v4-skill-list">
            {filteredSkills.map(([name, value]) => (
              <div className="v4-skill" key={name}>
                <div>
                  <span>{name}</span>
                  <strong>{value}%</strong>
                </div>
                <div className="v4-track">
                  <i style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="v4-panel">
          <div className="v4-panel-title">
            <div>
              <span>CAREER ROADMAP</span>
              <h3>Full Stack AI Engineer</h3>
            </div>
          </div>

          <div className="v4-roadmap">
            {[
              ["01", "Python", true],
              ["02", "Django + REST", true],
              ["03", "React", true],
              ["04", "SQL + DBMS", true],
              ["05", "AI / ML", false],
              ["06", "Cloud + DevOps", false],
              ["07", "System Design", false],
              ["08", "Interview", false],
            ].map(([no, name, done]) => (
              <div className={`v4-step ${done ? "done" : ""}`} key={no}>
                <span>{done ? "✓" : no}</span>
                <b>{name}</b>
              </div>
            ))}
          </div>
        </article>

        <article className="v4-panel">
          <div className="v4-panel-title">
            <div>
              <span>ACHIEVEMENTS</span>
              <h3>Developer Badges</h3>
            </div>
          </div>

          <div className="v4-badges">
            <div className="v4-badge-card">🐍<b>Python Pro</b><small>Unlocked</small></div>
            <div className="v4-badge-card">⚛️<b>React Builder</b><small>Unlocked</small></div>
            <div className="v4-badge-card">🗄️<b>SQL Master</b><small>Unlocked</small></div>
            <div className="v4-badge-card locked">🔒<b>AI Engineer</b><small>54% progress</small></div>
          </div>
        </article>

        <article className="v4-panel">
          <div className="v4-panel-title">
            <div>
              <span>PROJECT ARCHITECTURE</span>
              <h3>EntreSkill Hub</h3>
            </div>
          </div>

          <div className="v4-architecture">
            <div>React UI</div>
            <span>↓</span>
            <div>REST API</div>
            <span>↓</span>
            <div>Django</div>
            <span>↓</span>
            <div>PostgreSQL</div>
          </div>

          <div className="v4-tech-row">
            <span>Docker</span>
            <span>JWT</span>
            <span>Azure</span>
            <span>CI/CD</span>
          </div>
        </article>

      </section>

      {copilot && (
        <aside className="v4-copilot">
          <div>
            <span>AI CAREER COPILOT</span>
            <h3>Next Best Action</h3>
          </div>
          <p>
            Focus on <b>AI / ML</b> next. Your current technical foundation
            is strong enough to start an AI project.
          </p>
          <button onClick={() => setCopilot(false)}>Close</button>
        </aside>
      )}

      {toast && <div className="v4-toast">{toast}</div>}

    </main>
  );
}
