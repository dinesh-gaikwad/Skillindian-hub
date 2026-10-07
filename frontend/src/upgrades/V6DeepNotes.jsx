import React,{useMemo,useState} from "react";
import {V5_MODULES} from "./v5TutorialData";
import {V6_NOTES} from "./v6NotesData";
import "./v6.css";

const fallback={
  definition:"Detailed notes for this lesson.",
  why:"Understand why the concept is important in professional development.",
  how:"Study the concept, implement an example and verify the output.",
  syntax:"Review the syntax used by the selected technology.",
  examples:["Create a small example based on this lesson."],
  dryRun:["Input → Processing → Output"],
  mistakes:["Review syntax carefully.","Test small examples first."],
  practical:"Build a small practical implementation.",
  homework:"Create three exercises based on this lesson.",
  interview:["Explain the concept.","Give a practical example."],
  cheat:"Definition → Why → How → Example → Practice → Interview"
};

export default function V6DeepNotes(){
  const [moduleId,setModuleId]=useState("python");
  const [lessonIndex,setLessonIndex]=useState(0);
  const [search,setSearch]=useState("");
  const [tab,setTab]=useState("all");

  const module=V5_MODULES.find(m=>m.id===moduleId)||V5_MODULES[0];

  const lessons=useMemo(()=>{
    const q=search.toLowerCase().trim();
    if(!q)return module.lessons;
    return module.lessons.filter(([a,b])=>
      `${a} ${b}`.toLowerCase().includes(q)
    );
  },[module,search]);

  const title=module.lessons[lessonIndex]?.[0]||module.lessons[0][0];
  const note=V6_NOTES[title]||fallback;

  const jumpToTitle=(title)=>{
    const i=module.lessons.findIndex(x=>x[0]===title);
    if(i>=0)setLessonIndex(i);
  };

  return (
    <main className="v6">
      <header className="v6-header">
        <div>
          <span>V6 KNOWLEDGE ENGINE</span>
          <h1>Deep Notes Academy</h1>
          <p>Learn deeply. Practice practically. Answer confidently.</p>
        </div>
        <div className="v6-score">
          <strong>100%</strong>
          <small>NOTES ENGINE</small>
        </div>
      </header>

      <div className="v6-layout">
        <aside className="v6-sidebar">
          <input
            value={search}
            onChange={e=>setSearch(e.target.value)}
            placeholder="Search module / lesson..."
          />

          {V5_MODULES.map(m=>(
            <button
              key={m.id}
              className={m.id===moduleId?"active":""}
              onClick={()=>{
                setModuleId(m.id);
                setLessonIndex(0);
                setSearch("");
              }}
            >
              <b>{m.icon} {m.title}</b>
              <small>{m.lessons.length} lessons</small>
            </button>
          ))}
        </aside>

        <section className="v6-content">
          <div className="v6-course">
            <div>
              <span>{module.icon} {module.level}</span>
              <h2>{module.title}</h2>
            </div>
            <strong>{module.lessons.length} lessons</strong>
          </div>

          <nav className="v6-tabs">
            {["all","theory","code","practice","interview"].map(x=>(
              <button
                key={x}
                className={tab===x?"active":""}
                onClick={()=>setTab(x)}
              >
                {x.toUpperCase()}
              </button>
            ))}
          </nav>

          <div className="v6-lessons">
            {lessons.map(([t],i)=>(
              <button
                key={t}
                className={
                  module.lessons[lessonIndex]?.[0]===t ? "selected":""
                }
                onClick={()=>jumpToTitle(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <article className="v6-note">
            <div className="v6-note-title">
              <span>LESSON {lessonIndex+1}</span>
              <h2>{title}</h2>
            </div>

            {(tab==="all"||tab==="theory")&&(
              <>
                <section>
                  <h3>01. Definition</h3>
                  <p>{note.definition}</p>
                </section>

                <section>
                  <h3>02. Why is this important?</h3>
                  <p>{note.why}</p>
                </section>

                <section>
                  <h3>03. How it works</h3>
                  <p>{note.how}</p>
                </section>

                <section>
                  <h3>04. Syntax</h3>
                  <pre>{note.syntax}</pre>
                </section>
              </>
            )}

            {(tab==="all"||tab==="code")&&(
              <section>
                <h3>05. Examples</h3>
                {note.examples.map((x,i)=><pre key={i}>{x}</pre>)}
              </section>
            )}

            {tab==="all"&&(
              <section>
                <h3>06. Dry Run</h3>
                <ol>
                  {note.dryRun.map((x,i)=><li key={i}>{x}</li>)}
                </ol>
              </section>
            )}

            {(tab==="all"||tab==="practice")&&(
              <>
                <section>
                  <h3>07. Common Mistakes</h3>
                  <ul>{note.mistakes.map((x,i)=><li key={i}>{x}</li>)}</ul>
                </section>

                <section>
                  <h3>08. Practical Task</h3>
                  <div className="v6-box">{note.practical}</div>
                </section>

                <section>
                  <h3>09. Homework</h3>
                  <div className="v6-box">{note.homework}</div>
                </section>
              </>
            )}

            {(tab==="all"||tab==="interview")&&(
              <section>
                <h3>10. Interview Questions</h3>
                <div className="v6-questions">
                  {note.interview.map((q,i)=>(
                    <div key={i}>
                      <b>Q{i+1}</b>
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {tab==="all"&&(
              <section>
                <h3>11. Fast Cheat Sheet</h3>
                <div className="v6-cheat">{note.cheat}</div>
              </section>
            )}

            <footer className="v6-nav">
              <button
                disabled={lessonIndex===0}
                onClick={()=>setLessonIndex(x=>Math.max(0,x-1))}
              >
                ← Previous
              </button>

              <button
                disabled={lessonIndex===module.lessons.length-1}
                onClick={()=>setLessonIndex(x=>Math.min(module.lessons.length-1,x+1))}
              >
                Next →
              </button>
            </footer>
          </article>
        </section>
      </div>
    </main>
  );
}
