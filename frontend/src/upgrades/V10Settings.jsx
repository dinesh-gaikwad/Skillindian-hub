import React,{useState} from 'react';
import './v10.css';

const MENU=[
  ['profile','Profile'],
  ['account','Account'],
  ['security','Security'],
  ['notifications','Notifications'],
  ['appearance','Appearance'],
  ['learning','Learning'],
  ['privacy','Privacy'],
  ['connections','Connections'],
  ['data','Data & Storage']
];

function Toggle({value,onChange}){
  return (
    <button
      type="button"
      className={`v10-toggle ${value?'on':''}`}
      onClick={()=>onChange(!value)}
      aria-label="Toggle setting"
    >
      <span/>
    </button>
  );
}

export default function V10Settings(){
  const [section,setSection]=useState('profile');
  const [saved,setSaved]=useState(false);

  const [settings,setSettings]=useState({
    fullName:'Dinesh Gaikwad',
    username:'dinesh-gaikwad',
    email:'Account email',
    phone:'',
    bio:'Full Stack AI Developer',
    twoFactor:false,
    loginAlerts:true,
    emailNotifications:true,
    courseReminders:true,
    interviewReminders:true,
    weeklyReport:true,
    marketing:false,
    compactMode:false,
    autoPlay:false,
    publicProfile:true,
    showProgress:true,
    showAchievements:true,
    personalizedRecommendations:true,
    language:'English',
    timezone:'Asia/Kolkata'
  });

  const update=(key,value)=>{
    setSettings(prev=>({...prev,[key]:value}));
  };

  const save=()=>{
    setSaved(true);
    setTimeout(()=>setSaved(false),2200);
  };

  const Row=({title,description,children})=>(
    <div className="v10-row">
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <div>{children}</div>
    </div>
  );

  return (
    <div className="v10-page">

      <div className="v10-header">
        <div>
          <span className="v10-label">ENTRESKILL HUB</span>
          <h1>Settings</h1>
          <p>Manage your account, preferences, privacy and learning experience.</p>
        </div>
        <button className="v10-save" onClick={save}>
          Save Changes
        </button>
      </div>

      {saved && (
        <div className="v10-toast">
          Settings saved successfully
        </div>
      )}

      <div className="v10-layout">

        <aside className="v10-sidebar">
          <div className="v10-side-title">SETTINGS</div>

          {MENU.map(([id,label])=>(
            <button
              key={id}
              className={section===id?'active':''}
              onClick={()=>setSection(id)}
            >
              <span>{label}</span>
              {section===id && <b>›</b>}
            </button>
          ))}

          <div className="v10-side-footer">
            <span>Version</span>
            <strong>V10</strong>
          </div>
        </aside>

        <main className="v10-main">

          {section==='profile' && (
            <section>
              <div className="v10-section-head">
                <span className="v10-label">PROFILE</span>
                <h2>Profile Settings</h2>
                <p>Control the information displayed on your professional profile.</p>
              </div>

              <div className="v10-card">

                <div className="v10-avatar-row">
                  <div className="v10-avatar">DG</div>
                  <div>
                    <strong>Profile Avatar</strong>
                    <p>Use your initials or upload a professional photo.</p>
                    <button className="v10-outline">Change Avatar</button>
                  </div>
                </div>

                <div className="v10-form-grid">
                  <label>
                    Full Name
                    <input
                      value={settings.fullName}
                      onChange={e=>update('fullName',e.target.value)}
                    />
                  </label>

                  <label>
                    Username
                    <input
                      value={settings.username}
                      onChange={e=>update('username',e.target.value)}
                    />
                  </label>

                  <label>
                    Email
                    <input value={settings.email} readOnly/>
                  </label>

                  <label>
                    Phone
                    <input
                      value={settings.phone}
                      onChange={e=>update('phone',e.target.value)}
                      placeholder="Add phone number"
                    />
                  </label>
                </div>

                <label className="v10-full-label">
                  Professional Bio
                  <textarea
                    value={settings.bio}
                    onChange={e=>update('bio',e.target.value)}
                    rows="4"
                  />
                </label>

              </div>
            </section>
          )}

          {section==='account' && (
            <section>
              <div className="v10-section-head">
                <span className="v10-label">ACCOUNT</span>
                <h2>Account Preferences</h2>
                <p>Manage your basic account configuration.</p>
              </div>

              <div className="v10-card">
                <Row
                  title="Language"
                  description="Choose the language used across the platform."
                >
                  <select
                    value={settings.language}
                    onChange={e=>update('language',e.target.value)}
                  >
                    <option>English</option>
                    <option>Marathi</option>
                    <option>Hindi</option>
                  </select>
                </Row>

                <Row
                  title="Timezone"
                  description="Used for reminders and activity timestamps."
                >
                  <select
                    value={settings.timezone}
                    onChange={e=>update('timezone',e.target.value)}
                  >
                    <option value="Asia/Kolkata">Asia/Kolkata</option>
                    <option value="UTC">UTC</option>
                    <option value="Asia/Dubai">Asia/Dubai</option>
                  </select>
                </Row>

                <Row
                  title="Email Notifications"
                  description="Receive important account emails."
                >
                  <Toggle
                    value={settings.emailNotifications}
                    onChange={v=>update('emailNotifications',v)}
                  />
                </Row>
              </div>
            </section>
          )}

          {section==='security' && (
            <section>
              <div className="v10-section-head">
                <span className="v10-label">SECURITY</span>
                <h2>Security & Login</h2>
                <p>Protect your account and monitor authentication activity.</p>
              </div>

              <div className="v10-card">

                <Row
                  title="Two-Factor Authentication"
                  description="Add an additional authentication layer to your account."
                >
                  <Toggle
                    value={settings.twoFactor}
                    onChange={v=>update('twoFactor',v)}
                  />
                </Row>

                <Row
                  title="Login Alerts"
                  description="Receive alerts when a new login is detected."
                >
                  <Toggle
                    value={settings.loginAlerts}
                    onChange={v=>update('loginAlerts',v)}
                  />
                </Row>

                <div className="v10-security-actions">
                  <button className="v10-outline">Change Password</button>
                  <button className="v10-outline">View Active Sessions</button>
                </div>

              </div>
            </section>
          )}

          {section==='notifications' && (
            <section>
              <div className="v10-section-head">
                <span className="v10-label">NOTIFICATIONS</span>
                <h2>Notification Center</h2>
                <p>Choose which updates you want to receive.</p>
              </div>

              <div className="v10-card">

                <Row
                  title="Course Reminders"
                  description="Reminders for unfinished lessons and courses."
                >
                  <Toggle
                    value={settings.courseReminders}
                    onChange={v=>update('courseReminders',v)}
                  />
                </Row>

                <Row
                  title="Interview Reminders"
                  description="Practice and assessment reminders."
                >
                  <Toggle
                    value={settings.interviewReminders}
                    onChange={v=>update('interviewReminders',v)}
                  />
                </Row>

                <Row
                  title="Weekly Progress Report"
                  description="Receive a summary of your learning activity."
                >
                  <Toggle
                    value={settings.weeklyReport}
                    onChange={v=>update('weeklyReport',v)}
                  />
                </Row>

                <Row
                  title="Product & Marketing"
                  description="Optional product news and platform updates."
                >
                  <Toggle
                    value={settings.marketing}
                    onChange={v=>update('marketing',v)}
                  />
                </Row>

              </div>
            </section>
          )}

          {section==='appearance' && (
            <section>
              <div className="v10-section-head">
                <span className="v10-label">APPEARANCE</span>
                <h2>Appearance</h2>
                <p>Customize how the platform behaves and displays information.</p>
              </div>

              <div className="v10-card">

                <div className="v10-theme">
                  <strong>Theme</strong>
                  <p>Use the application appearance configured in ChatGPT/project settings.</p>
                  <div className="v10-theme-grid">
                    <button className="selected">System</button>
                    <button>Light</button>
                    <button>Dark</button>
                  </div>
                </div>

                <Row
                  title="Compact Mode"
                  description="Reduce spacing for information-dense screens."
                >
                  <Toggle
                    value={settings.compactMode}
                    onChange={v=>update('compactMode',v)}
                  />
                </Row>

                <Row
                  title="Auto-play Learning Media"
                  description="Automatically play supported learning media."
                >
                  <Toggle
                    value={settings.autoPlay}
                    onChange={v=>update('autoPlay',v)}
                  />
                </Row>

              </div>
            </section>
          )}

          {section==='learning' && (
            <section>
              <div className="v10-section-head">
                <span className="v10-label">LEARNING</span>
                <h2>Learning Preferences</h2>
                <p>Customize your career-development experience.</p>
              </div>

              <div className="v10-card">

                <Row
                  title="Personalized Recommendations"
                  description="Use learning activity to improve career recommendations."
                >
                  <Toggle
                    value={settings.personalizedRecommendations}
                    onChange={v=>update('personalizedRecommendations',v)}
                  />
                </Row>

                <Row
                  title="Daily Learning Goal"
                  description="Recommended target for your daily learning routine."
                >
                  <select>
                    <option>30 minutes</option>
                    <option>60 minutes</option>
                    <option>90 minutes</option>
                    <option>120 minutes</option>
                  </select>
                </Row>

                <Row
                  title="Interview Difficulty"
                  description="Default difficulty for interview practice."
                >
                  <select>
                    <option>Adaptive</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </Row>

              </div>
            </section>
          )}

          {section==='privacy' && (
            <section>
              <div className="v10-section-head">
                <span className="v10-label">PRIVACY</span>
                <h2>Privacy Controls</h2>
                <p>Control what other users can see.</p>
              </div>

              <div className="v10-card">

                <Row
                  title="Public Profile"
                  description="Allow your professional profile to be visible."
                >
                  <Toggle
                    value={settings.publicProfile}
                    onChange={v=>update('publicProfile',v)}
                  />
                </Row>

                <Row
                  title="Show Learning Progress"
                  description="Display course progress on your profile."
                >
                  <Toggle
                    value={settings.showProgress}
                    onChange={v=>update('showProgress',v)}
                  />
                </Row>

                <Row
                  title="Show Achievements"
                  description="Display badges and achievements publicly."
                >
                  <Toggle
                    value={settings.showAchievements}
                    onChange={v=>update('showAchievements',v)}
                  />
                </Row>

              </div>
            </section>
          )}

          {section==='connections' && (
            <section>
              <div className="v10-section-head">
                <span className="v10-label">CONNECTIONS</span>
                <h2>Connected Accounts</h2>
                <p>Manage external professional profiles.</p>
              </div>

              <div className="v10-card">

                {[
                  ['GitHub','Code repositories and developer activity'],
                  ['LinkedIn','Professional profile and career identity'],
                  ['Portfolio','Personal projects and work samples']
                ].map(([name,desc])=>(
                  <div className="v10-connection" key={name}>
                    <div className="v10-connection-icon">
                      {name[0]}
                    </div>
                    <div>
                      <strong>{name}</strong>
                      <p>{desc}</p>
                    </div>
                    <button className="v10-outline">Connect</button>
                  </div>
                ))}

              </div>
            </section>
          )}

          {section==='data' && (
            <section>
              <div className="v10-section-head">
                <span className="v10-label">DATA</span>
                <h2>Data & Storage</h2>
                <p>Manage your application data.</p>
              </div>

              <div className="v10-card">

                <div className="v10-data-box">
                  <strong>Export Your Data</strong>
                  <p>Request a downloadable copy of your profile, learning and activity data.</p>
                  <button className="v10-outline">Request Export</button>
                </div>

                <div className="v10-data-box danger">
                  <strong>Danger Zone</strong>
                  <p>Account deletion is irreversible. This action should require explicit confirmation.</p>
                  <button className="v10-danger">Delete Account</button>
                </div>

              </div>
            </section>
          )}

        </main>
      </div>
    </div>
  );
}
