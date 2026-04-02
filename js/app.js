import {loadData} from "./data.js";
import {renderHome,renderBelt} from "./ui.js";

const app=document.getElementById("app");

async function init(){
 await loadData();
 render();
}

function render(){
 const hash=location.hash;
 if(hash.startsWith("#/belt/")){
  const id=hash.split("/")[2];
  app.innerHTML=renderBelt(id);
 }else{
  app.innerHTML=renderHome();
 }
}

window.addEventListener("hashchange",render);

init();