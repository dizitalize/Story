try{
(()=>{var d=console.error;console.error=(...o)=>{(o[0]?.toString()||"").includes("unable to determine the source of the event")||d.apply(console,o)};})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
