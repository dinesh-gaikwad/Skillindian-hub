import React,{useEffect,useState} from "react";
import "./v12.css";

const get=(k,d)=>localStorage.getItem(k)||d;

export default function V12DisplaySettings(){
  const [theme,setTheme]=useState(get("esh_theme","system"));
  const [zoom,setZoom]=useState(Number(get("esh_zoom","100")));
  const [font,setFont]=useState(get("esh_font","medium"));
  const [contrast,setContrast]=useState(get("esh_contrast","off")==="on");
  const [motion,setMotion]=useState(get("esh_motion","on")==="on");
  const [compact,setCompact]=useState(get("esh_compact","off")==="on");
  const [focus,setFocus]=useState(get("esh_focus","off")==="on");
  const [reading,setReading]=useState(get("esh_reading","off")==="on");
  const [sidebar,setSidebar]=useState(get("esh_sidebar","open")==="open");

  useEffect(()=>{
    const root=document.documentElement;
    root.dataset.eshTheme=theme;
    root.dataset.eshFont=font;
    root.dataset.eshContrast=contrast?"on":"off";
    root.dataset.eshMotion=motion?"on":"off";
    root.dataset.eshCompact=compact?"on":"off";
    root.dataset.eshFocus=focus?"on":"off";
    root.dataset.eshReading=reading?"on":"off";
    root.dataset.eshSidebar=sidebar?"open":"closed";
    root.style.setProperty("--esh-zoom",`${zoom/100}`);
    localStorage.setItem("esh_theme",theme);
    localStorage.setItem("esh_zoom",zoom);
    localStorage.setItem("esh_font",font);
    localStorage.setItem("esh_contrast",contrast?"on":"off");
    localStorage.setItem("esh_motion",motion?"on":"off");
    localStorage.setItem("esh_compact",compact?"on":"off");
    localStorage.setItem("esh_focus",focus?"on":"off");
    localStorage.setItem("esh_reading",reading?"on":"off");
    localStorage.setItem("esh_sidebar",sidebar?"open":"closed");
  },[theme,zoom,font,contrast,motion,compact,focus,reading,sidebar]);

  const reset=()=>{
    setTheme("system");
    setZoom(100);
    setFont("medium");
    setContrast(false);
    setMotion(true);
    setCompact(false);
    setFocus(false);
    setReading(false);
    setSidebar(true);
  };

  const Toggle=({value,onChange})=>
    <button className={"v12-toggle "+(value?"active":"")} onClick={()=>onChange(!value)}>
      {value?"ON":"OFF"}
    </button>;

  return <div className="v12-page">
    <section className="v12-hero">
      <div>
        <span>V12 • DISPLAY & ACCESSIBILITY</span>
        <h1>Appearance & Accessibility</h1>
        <p>Control theme, zoom, typography, layout and accessibility.</p>
      </div>
      <button className="v12-reset" onClick={reset}>Reset All</button>
    </section>

    <section className="v12-grid">

      <div className="v12-card">
        <h2>Theme Mode</h2>
        <p>Choose how the application appearance behaves.</p>
        <div className="v12-options">
          {["light","dark","system"].map(x=>
            <button
              key={x}
              className={theme===x?"selected":""}
              onClick={()=>setTheme(x)}
            >
              {x==="light"?"☀ Light":x==="dark"?"☾ Dark":"◐ System"}
            </button>
          )}
        </div>
      </div>

      <div className="v12-card">
        <h2>Zoom</h2>
        <p>Current application scale: <b>{zoom}%</b></p>
        <div className="v12-zoom">
          <button onClick={()=>setZoom(Math.max(75,zoom-10))}>−</button>
          <strong>{zoom}%</strong>
          <button onClick={()=>setZoom(Math.min(150,zoom+10))}>+</button>
        </div>
        <input
          type="range"
          min="75"
          max="150"
          step="5"
          value={zoom}
          onChange={e=>setZoom(Number(e.target.value))}
        />
      </div>

      <div className="v12-card">
        <h2>Font Size</h2>
        <p>Adjust readable text scale.</p>
        <div className="v12-options">
          {["small","medium","large"].map(x=>
            <button
              key={x}
              className={font===x?"selected":""}
              onClick={()=>setFont(x)}
            >
              {x}
            </button>
          )}
        </div>
      </div>

      <div className="v12-card">
        <h2>Accessibility</h2>
        <Row title="High Contrast" value={contrast} set={setContrast}/>
        <Row title="Reduced Motion" value={!motion} set={v=>setMotion(!v)}/>
        <Row title="Focus Mode" value={focus} set={setFocus}/>
        <Row title="Reading Mode" value={reading} set={setReading}/>
      </div>

      <div className="v12-card">
        <h2>Layout</h2>
        <Row title="Compact Interface" value={compact} set={setCompact}/>
        <Row title="Sidebar Open" value={sidebar} set={setSidebar}/>
      </div>

      <div className="v12-card">
        <h2>Quick Presets</h2>
        <div className="v12-presets">
          <button onClick={()=>{setTheme("light");setZoom(100);setFont("medium");}}>Standard</button>
          <button onClick={()=>{setTheme("dark");setZoom(100);setFont("medium");}}>Dark Pro</button>
          <button onClick={()=>{setTheme("light");setZoom(115);setFont("large");setContrast(true);}}>Accessibility</button>
          <button onClick={()=>{setTheme("dark");setZoom(90);setFont("small");setCompact(true);}}>Developer Compact</button>
        </div>
      </div>

    </section>

    <section className="v12-preview">
      <span>LIVE PREVIEW</span>
      <h2>EntreSkill Hub Display Preview</h2>
      <p>Theme, zoom, font size, contrast and layout settings are stored locally and remain active after refresh.</p>
      <div className="v12-preview-box">
        <strong>10 LPA Readiness</strong>
        <span>78%</span>
      </div>
    </section>
  </div>
}

function Row({title,value,set}){
  return <div className="v12-row">
    <span>{title}</span>
    <button
      className={"v12-toggle "+(value?"active":"")}
      onClick={()=>set(!value)}
    >
      {value?"ON":"OFF"}
    </button>
  </div>
}
