import React,{useMemo,useState} from 'react';
import './v9.css';

const skills=[
  ['Python','Advanced'],
  ['Django','Advanced'],
  ['React','Intermediate'],
  ['JavaScript','Intermediate'],
  ['SQL','Advanced'],
  ['MySQL','Advanced'],
  ['REST API','Advanced'],
  ['Git','Intermediate'],
  ['Docker','Intermediate'],
  ['AI/ML','Learning']
];

const courses=[
  ['Python & OOP',88],
  ['Web & React',76],
  ['Django & APIs',82],
  ['SQL & Data',91],
  ['AI Engineering',54]
];

const activities=[
  ['Completed Django REST API lesson','Today'],
  ['Scored 86% in Python assessment','Yesterday'],
  ['Completed SQL & Data module','2 days ago'],
  ['Added Full Stack AI project','4 days ago']
];

export default function V9ProfileDashboard(){
  const [tab,setTab]=useState('overview');
  const [editing,setEditing]=useState(false);
  const [name,setName]=useState('Dinesh Gaikwad');
  const [headline,setHeadline]=useState('Full Stack AI Developer');
  const [saved,setSaved]=useState(false);

  const completion=useMemo(()=>86,[ ]);

  const saveProfile=()=>{
    setEditing(false);
    setSaved(true);
    setTimeout(()=>setSaved(false),2200);
  };

  return (
    <div className="v9-page">

      <header className="v9-hero">
        <div className="v9-cover"></div>

        <div className="v9-profile-main">
          <div className="v9-avatar">
            {name.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase()}
          </div>

          <div className="v9-identity">
            {editing ? (
              <div className="v9-edit-fields">
                <input value={name} onChange={e=>setName(e.target.value)}/>
                <input value={headline} onChange={e=>setHeadline(e.target.value)}/>
              </div>
            ) : (
              <>
                <h1>{name}</h1>
                <p>{headline}</p>
              </>
            )}

            <div className="v9-location">India • Open to opportunities</div>
          </div>

          <div className="v9-profile-actions">
            {editing ? (
              <>
                <button onClick={saveProfile}>Save Profile</button>
                <button className="v9-secondary" onClick={()=>setEditing(false)}>Cancel</button>
              </>
            ) : (
              <button onClick={()=>setEditing(true)}>Edit Profile</button>
            )}
          </div>
        </div>
      </header>

      {saved && <div className="v9-toast">Profile saved successfully</div>}

      <nav className="v9-tabs">
        {[
          ['overview','Overview'],
          ['skills','Skills'],
          ['projects','Projects'],
          ['activity','Activity'],
          ['account','Account']
        ].map(([id,label])=>(
          <button
            key={id}
            className={tab===id?'active':''}
            onClick={()=>setTab(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <main className="v9-content">

        {tab==='overview' && (
          <>
            <section className="v9-grid v9-top-grid">

              <article className="v9-card v9-completion">
                <div className="v9-card-head">
                  <div>
                    <span className="v9-label">PROFILE STRENGTH</span>
                    <h2>{completion}% Complete</h2>
                  </div>
                  <div className="v9-ring">{completion}%</div>
                </div>

                <div className="v9-progress">
                  <span style={{width:`${completion}%`}}></span>
                </div>

                <p>Add portfolio, certifications and experience to reach 100%.</p>
              </article>

              <article className="v9-card">
                <span className="v9-label">CAREER TARGET</span>
                <h2>Full Stack AI Engineer</h2>
                <p className="v9-muted">Target readiness: 10 LPA+</p>

                <div className="v9-mini-stats">
                  <div><strong>78%</strong><span>Skills</span></div>
                  <div><strong>81%</strong><span>Interview</span></div>
                  <div><strong>64%</strong><span>Projects</span></div>
                </div>
              </article>

            </section>

            <section className="v9-grid v9-main-grid">

              <div className="v9-stack">

                <article className="v9-card">
                  <div className="v9-section-title">
                    <div>
                      <span className="v9-label">ABOUT</span>
                      <h2>Professional Profile</h2>
                    </div>
                    <button onClick={()=>setEditing(true)}>Edit</button>
                  </div>

                  <p className="v9-about">
                    Full Stack AI Developer focused on building modern web
                    applications, REST APIs, databases, AI-powered features
                    and production-ready software systems.
                  </p>
                </article>

                <article className="v9-card">
                  <div className="v9-section-title">
                    <div>
                      <span className="v9-label">LEARNING</span>
                      <h2>Course Progress</h2>
                    </div>
                    <span className="v9-muted">5 active</span>
                  </div>

                  <div className="v9-courses">
                    {courses.map(([course,progress])=>(
                      <div className="v9-course" key={course}>
                        <div className="v9-course-row">
                          <strong>{course}</strong>
                          <span>{progress}%</span>
                        </div>
                        <div className="v9-progress">
                          <span style={{width:`${progress}%`}}></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="v9-card">
                  <div className="v9-section-title">
                    <div>
                      <span className="v9-label">ACHIEVEMENTS</span>
                      <h2>Badges & Certifications</h2>
                    </div>
                  </div>

                  <div className="v9-badges">
                    <div className="v9-badge">PYTHON<br/><small>Expert Track</small></div>
                    <div className="v9-badge">DJANGO<br/><small>API Builder</small></div>
                    <div className="v9-badge">SQL<br/><small>Data Ready</small></div>
                    <div className="v9-badge">DSA<br/><small>Practice</small></div>
                  </div>
                </article>

              </div>

              <aside className="v9-stack">

                <article className="v9-card">
                  <span className="v9-label">CONTACT</span>
                  <div className="v9-info-list">
                    <div><span>Email</span><strong>Available in account</strong></div>
                    <div><span>Phone</span><strong>Available in account</strong></div>
                    <div><span>Location</span><strong>India</strong></div>
                  </div>
                </article>

                <article className="v9-card">
                  <span className="v9-label">SOCIAL PROFILES</span>
                  <div className="v9-links">
                    <button>GitHub</button>
                    <button>LinkedIn</button>
                    <button>Portfolio</button>
                  </div>
                </article>

                <article className="v9-card">
                  <span className="v9-label">INTERVIEW READINESS</span>
                  <div className="v9-readiness">
                    <strong>81%</strong>
                    <span>Interview Ready</span>
                  </div>
                  <div className="v9-progress">
                    <span style={{width:'81%'}}></span>
                  </div>
                  <p className="v9-muted">Keep practicing DSA, system design and project questions.</p>
                </article>

              </aside>
            </section>
          </>
        )}

        {tab==='skills' && (
          <section className="v9-card">
            <div className="v9-section-title">
              <div>
                <span className="v9-label">TECHNICAL PROFILE</span>
                <h2>Skills Matrix</h2>
              </div>
            </div>

            <div className="v9-skill-grid">
              {skills.map(([skill,level])=>(
                <div className="v9-skill" key={skill}>
                  <div>
                    <strong>{skill}</strong>
                    <span>{level}</span>
                  </div>
                  <div className="v9-progress">
                    <span style={{
                      width:
                        level==='Advanced'?'88%':
                        level==='Intermediate'?'68%':'42%'
                    }}></span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab==='projects' && (
          <section className="v9-card">
            <span className="v9-label">PORTFOLIO</span>
            <h2>Projects</h2>

            <div className="v9-project-grid">
              <article className="v9-project">
                <span>FULL STACK</span>
                <h3>EntreSkill Hub</h3>
                <p>Career learning and interview preparation platform using React and Django.</p>
                <div>React • Django • REST • SQL • Docker</div>
              </article>

              <article className="v9-project">
                <span>AI</span>
                <h3>AI Career Assistant</h3>
                <p>Career recommendation and skill-gap analysis concept.</p>
                <div>Python • AI • APIs</div>
              </article>

              <article className="v9-project">
                <span>WEB</span>
                <h3>Full Stack Application</h3>
                <p>Production-oriented web application with authentication and database integration.</p>
                <div>React • Django • Database</div>
              </article>
            </div>
          </section>
        )}

        {tab==='activity' && (
          <section className="v9-card">
            <span className="v9-label">RECENT ACTIVITY</span>
            <h2>Activity Timeline</h2>

            <div className="v9-timeline">
              {activities.map(([text,time])=>(
                <div className="v9-event" key={text}>
                  <div className="v9-dot"></div>
                  <div>
                    <strong>{text}</strong>
                    <span>{time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab==='account' && (
          <section className="v9-card">
            <span className="v9-label">ACCOUNT</span>
            <h2>Account & Security</h2>

            <div className="v9-account-grid">
              <div>
                <strong>Authentication</strong>
                <span>JWT authentication enabled</span>
              </div>
              <div>
                <strong>Profile Visibility</strong>
                <span>Professional profile</span>
              </div>
              <div>
                <strong>Session</strong>
                <span>Authenticated session</span>
              </div>
              <div>
                <strong>Security</strong>
                <span>Protected API access</span>
              </div>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}
