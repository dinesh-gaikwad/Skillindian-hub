import React,{useState} from "react";
import "./v11.css";

const features=[
 ["Welcome Emails","Automatically welcome new learners."],
 ["Course Notifications","Enrollment and completion notifications."],
 ["Security Alerts","Security-related email notification layer."],
 ["Password Recovery","Ready for password-reset email integration."],
 ["Learning Reminders","Foundation for scheduled learning reminders."],
 ["Progress Reports","Foundation for weekly progress emails."]
];

export default function V11EmailService(){
 const [test,setTest]=useState("");
 const [sent,setSent]=useState(false);

 const sendTest=()=>{
   setSent(false);
   setTimeout(()=>setSent(true),500);
 };

 return <div className="v11-page">
   <section className="v11-hero">
    <div>
     <span className="v11-pill">V11 • COMMUNICATION ENGINE</span>
     <h1>Email Service Center</h1>
     <p>Centralized email infrastructure for EntreSkill Hub.</p>
    </div>
    <div className="v11-status">EMAIL SERVICE<br/><b>READY</b></div>
   </section>

   <section className="v11-grid">
    {features.map(([title,desc])=>
      <article className="v11-card" key={title}>
       <div className="v11-icon">✉</div>
       <h3>{title}</h3>
       <p>{desc}</p>
       <span className="v11-ready">READY</span>
      </article>
    )}
   </section>

   <section className="v11-test">
    <h2>Email Test Center</h2>
    <p>Enter an email address to prepare a test-email workflow.</p>
    <div className="v11-form">
      <input
       value={test}
       onChange={e=>setTest(e.target.value)}
       placeholder="your@email.com"
       type="email"
      />
      <button onClick={sendTest}>Send Test</button>
    </div>
    {sent && <div className="v11-toast">Test workflow triggered.</div>}
   </section>
 </div>
}
