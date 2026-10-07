import React,{useMemo,useState} from "react";
import {V7_QUESTIONS,V7_CODING} from "./v7AssessmentData";
import "./v7.css";

export default function V7AssessmentHub(){
  const [mode,setMode]=useState("quiz");
  const [module,setModule]=useState("All");
  const [difficulty,setDifficulty]=useState("All");
  const [index,setIndex]=useState(0);
  const [selected,setSelected]=useState("");
  const [score,setScore]=useState(0);
  const [answered,setAnswered]=useState(false);
  const [completed,setCompleted]=useState(0);
  const [showSolution,setShowSolution]=useState(false);

  const modules=["All",...new Set(V7_QUESTIONS.map(q=>q.module))];
  const difficulties=["All","Easy","Medium","Hard"];

  const questions=useMemo(()=>{
    return V7_QUESTIONS.filter(q=>
      (module==="All"||q.module===module)&&
      (difficulty==="All"||q.difficulty===difficulty)
    );
  },[module,difficulty]);

  const q=questions[index];

  function choose(option){
    if(answered)return;
    setSelected(option);
    setAnswered(true);
    if(option===q.answer)setScore(x=>x+1);
    setCompleted(x=>x+1);
  }

  function next(){
    setSelected("");
    setAnswered(false);
    setShowSolution(false);
    setIndex(x=>Math.min(x+1,Math.max(questions.length-1,0)));
  }

  function restart(){
    setIndex(0);
    setSelected("");
    setAnswered(false);
    setScore(0);
    setCompleted(0);
    setShowSolution(false);
  }

  const accuracy=completed?Math.round(score/completed*100):0;

  return (
    <main className="v7">
      <header className="v7-header">
        <div>
          <span>V7 ASSESSMENT ENGINE</span>
          <h1>Practice & Interview Arena</h1>
          <p>Test knowledge → Solve problems → Find weak areas → Improve.</p>
        </div>
        <div className="v7-score">
          <strong>{accuracy}%</strong>
          <small>ACCURACY</small>
        </div>
      </header>

      <section className="v7-controls">
        <button className={mode==="quiz"?"active":""} onClick={()=>setMode("quiz")}>
          MCQ Quiz
        </button>
        <button className={mode==="coding"?"active":""} onClick={()=>setMode("coding")}>
          Coding Lab
        </button>
        <button className={mode==="interview"?"active":""} onClick={()=>setMode("interview")}>
          Interview Mode
        </button>

        {mode==="quiz"&&(
          <>
            <select value={module} onChange={e=>{setModule(e.target.value);restart();}}>
              {modules.map(x=><option key={x}>{x}</option>)}
            </select>

            <select value={difficulty} onChange={e=>{setDifficulty(e.target.value);restart();}}>
              {difficulties.map(x=><option key={x}>{x}</option>)}
            </select>
          </>
        )}
      </section>

      {mode==="quiz"&&q&&(
        <section className="v7-card">
          <div className="v7-question-meta">
            <span>{q.module}</span>
            <b>{q.difficulty}</b>
            <small>{index+1} / {questions.length}</small>
          </div>

          <h2>{q.question}</h2>

          <div className="v7-options">
            {q.options.map(option=>{
              const correct=answered&&option===q.answer;
              const wrong=answered&&option===selected&&option!==q.answer;

              return (
                <button
                  key={option}
                  className={`${correct?"correct":""} ${wrong?"wrong":""}`}
                  onClick={()=>choose(option)}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {answered&&(
            <div className={`v7-feedback ${selected===q.answer?"good":"bad"}`}>
              <strong>{selected===q.answer?"Correct":"Incorrect"}</strong>
              <p>{q.explanation}</p>
            </div>
          )}

          <div className="v7-footer">
            <span>Score: {score}/{completed}</span>
            <div>
              <button onClick={restart}>Restart</button>
              <button onClick={next} disabled={!answered||index>=questions.length-1}>
                Next →
              </button>
            </div>
          </div>
        </section>
      )}

      {mode==="quiz"&&!q&&(
        <section className="v7-card v7-empty">
          <h2>No questions found</h2>
          <p>Change the module or difficulty filter.</p>
        </section>
      )}

      {mode==="coding"&&(
        <section className="v7-coding-grid">
          {V7_CODING.map((c,i)=>(
            <article className="v7-card" key={c.title}>
              <div className="v7-question-meta">
                <span>{c.language}</span>
                <b>{c.difficulty}</b>
              </div>
              <h2>{c.title}</h2>
              <p>{c.task}</p>

              <div className="v7-hint">
                <b>Hint:</b> {c.hint}
              </div>

              <button
                className="v7-solution-btn"
                onClick={()=>setShowSolution(showSolution===i?false:i)}
              >
                {showSolution===i?"Hide Solution":"Show Solution"}
              </button>

              {showSolution===i&&(
                <pre><code>{c.solution}</code></pre>
              )}
            </article>
          ))}
        </section>
      )}

      {mode==="interview"&&(
        <section className="v7-card v7-interview">
          <span>10 LPA INTERVIEW MODE</span>
          <h2>Explain your EntreSkill Hub project.</h2>
          <p>
            Cover the problem, architecture, frontend, backend, database,
            authentication, deployment, security and scalability.
          </p>

          <div className="v7-interview-points">
            <div>01. Problem</div>
            <div>02. Architecture</div>
            <div>03. Technology choices</div>
            <div>04. API design</div>
            <div>05. Database design</div>
            <div>06. Authentication</div>
            <div>07. Deployment</div>
            <div>08. Security</div>
            <div>09. Scalability</div>
            <div>10. Future improvements</div>
          </div>
        </section>
      )}
    </main>
  );
}
