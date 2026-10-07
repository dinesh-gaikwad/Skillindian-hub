import React from "react";

export default function V3CommandCenter() {
  return (
    <section className="v3-command-center">
      <div className="v3-hero">
        <div>
          <span className="v3-badge">V3 AI DEVELOPER COMMAND CENTER</span>
          <h1>Build. Learn. Ship. Get Job Ready.</h1>
          <p>Your unified Full Stack AI Developer career workspace.</p>
        </div>

        <div className="v3-readiness">
          <strong>78%</strong>
          <span>Career Readiness</span>
        </div>
      </div>

      <div className="v3-grid">
        <div className="v3-card">
          <b>Daily Mission</b>
          <p>Complete coding and project tasks.</p>
          <button>Start Mission</button>
        </div>

        <div className="v3-card">
          <b>Skill Progress</b>
          <p>Python 86% · Django 78% · React 72% · AI 54%</p>
        </div>

        <div className="v3-card">
          <b>Interview Readiness</b>
          <p>Technical 84% · Project 76% · HR 68%</p>
          <button>Practice Interview</button>
        </div>

        <div className="v3-card">
          <b>AI Career Copilot</b>
          <p>Roadmap, project and interview guidance.</p>
          <button>Open Copilot</button>
        </div>
      </div>

      <div className="v3-card v3-roadmap">
        <b>Full Stack AI Career Roadmap</b>
        <p>Python → Django → React → SQL → AI/ML → Cloud → Interview</p>
      </div>
    </section>
  );
}
