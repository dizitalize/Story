try{
(()=>{var O=console.error;console.error=(...e)=>{(e[0]?.toString()||"").includes("unable to determine the source of the event")||O.apply(console,e)};})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
