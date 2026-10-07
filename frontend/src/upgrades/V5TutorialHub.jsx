import React,{useMemo,useState} from "react";
import {V5_MODULES,V5_LESSON_CONTENT} from "./v5TutorialData";
import "./v5.css";

const fallback = {
  theory:"This lesson introduces the core concepts required to become job ready.",
  example:"// Practice the concept with a small program or project.",
  output:"Expected result depends on the exercise.",
  practical:"Create a small practical implementation and test it.",
  interview:"Explain this concept with definition, example and real-world use.",
  revision:"Definition → Example → Practical → Interview."
};

export default function V5TutorialHub(){
  const [moduleId,setModuleId]=useState("foundation");
  const [lessonIndex,setLessonIndex]=useState(0);
  const [search,setSearch]=useState("");
  const [completed,setCompleted]=useState({});
  const [showAnswer,setShowAnswer]=useState(false);

  const module=V5_MODULES.find(m=>m.id===moduleId)||V5_MODULES[0];
  const filtered=useMemo(()=>{
    const q=search.toLowerCase().trim();
    if(!q)return module.lessons;
    return module.lessons.filter(([title,desc])=>
      `${title} ${desc}`.toLowerCase().includes(q)
    );
  },[module,search]);

  const selectedTitle=module.lessons[lessonIndex]?.[0]||module.lessons[0][0];
  const content=V5_LESSON_CONTENT[selectedTitle]||fallback;
  const key=`${module.id}-${lessonIndex}`;
  const done=!!completed[key];
  const progress=Math.round(
    (module.lessons.filter((_,i)=>completed[`${module.id}-${i}`]).length/module.lessons.length)*100
  );

  function chooseModule(id){
    setModuleId(id);
    setLessonIndex(0);
    setShowAnswer(false);
    setSearch("");
  }

  function chooseLesson(index){
    const realIndex=module.lessons.findIndex(x=>x[0]===filtered[index]?.[0]);
    setLessonIndex(realIndex<0?0:realIndex);
    setShowAnswer(false);
  }

  function complete(){
    setCompleted(v=>({...v,[key]:true}));
  }

  return (
    <main className="v5">
      <header className="v5-head">
        <div>
          <span className="v5-label">V5 LEARNING ENGINE</span>
          <h1>Tutorial & Notes Hub</h1>
          <p>Learn → Practice → Revise → Interview → Build</p>
        </div>
        <div className="v5-progress">
          <strong>{progress}%</strong>
          <span>MODULE PROGRESS</span>
        </div>
      </header>

      <section className="v5-layout">
        <aside className="v5-sidebar">
          <input
            className="v5-search"
            placeholder="Search lessons..."
            value={search}
            onChange={e=>setSearch(e.target.value)}
          />

          <div className="v5-module-list">
            {V5_MODULES.map(m=>{
              const p=Math.round(
                m.lessons.filter((_,i)=>completed[`${m.id}-${i}`]).length/m.lessons.length*100
              );
              return (
                <button
                  key={m.id}
                  className={`v5-module ${moduleId===m.id?"active":""}`}
                  onClick={()=>chooseModule(m.id)}
                >
                  <span className="v5-module-icon">{m.icon}</span>
                  <span>
                    <b>{m.title}</b>
                    <small>{m.lessons.length} lessons · {p}%</small>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="v5-main">
          <div className="v5-module-header">
            <div>
              <span>{module.icon} {module.level}</span>
              <h2>{module.title}</h2>
            </div>
            <strong>{module.lessons.length} Lessons</strong>
          </div>

          <div className="v5-lesson-tabs">
            {filtered.map(([title],i)=>{
              const real=module.lessons.findIndex(x=>x[0]===title);
              return (
                <button
                  key={title}
                  className={real===lessonIndex?"selected":""}
                  onClick={()=>chooseLesson(i)}
                >
                  {completed[`${module.id}-${real}`]?"✓ ":""}{title}
                </button>
              );
            })}
          </div>

          <article className="v5-note">
            <div className="v5-note-head">
              <div>
                <span>LESSON {lessonIndex+1} / {module.lessons.length}</span>
                <h2>{selectedTitle}</h2>
              </div>
              {done && <b className="v5-complete">COMPLETED</b>}
            </div>

            <section>
              <h3>01 — Theory</h3>
              <p>{content.theory}</p>
            </section>

            <section>
              <h3>02 — Example / Code</h3>
              <pre><code>{content.example}</code></pre>
            </section>

            <section>
              <h3>03 — Expected Output</h3>
              <div className="v5-output">{content.output}</div>
            </section>

            <section>
              <h3>04 — Practical Task</h3>
              <p>{content.practical}</p>
            </section>

            <section>
              <h3>05 — Interview Question</h3>
              <p><b>{content.interview}</b></p>
              <button
                className="v5-answer"
                onClick={()=>setShowAnswer(v=>!v)}
              >
                {showAnswer?"Hide Quick Answer":"Show Quick Answer"}
              </button>
              {showAnswer&&(
                <div className="v5-answer-box">
                  Define the concept clearly, explain how it works, give a small
                  example and mention one real-world use case.
                </div>
              )}
            </section>

            <section>
              <h3>06 — Fast Revision</h3>
              <div className="v5-revision">{content.revision}</div>
            </section>

            <footer className="v5-footer">
              <button
                disabled={lessonIndex===0}
                onClick={()=>setLessonIndex(v=>Math.max(0,v-1))}
              >
                ← Previous
              </button>

              <button
                className="primary"
                onClick={complete}
              >
                {done?"✓ Lesson Completed":"Mark Lesson Complete"}
              </button>

              <button
                disabled={lessonIndex===module.lessons.length-1}
                onClick={()=>setLessonIndex(v=>Math.min(module.lessons.length-1,v+1))}
              >
                Next →
              </button>
            </footer>
          </article>
        </section>
      </section>
    </main>
  );
}
