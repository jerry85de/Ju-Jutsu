import{loadData,getBelts,getBeltById,getCategories,getTechniquesByBelt}from"./data.js";
const app=document.getElementById("app");
async function init(){await loadData();render();}
function render(){
 const hash=location.hash;
 if(hash.startsWith("#/belt/")){
  const id=hash.split("/")[2];
  const belt=getBeltById(id);
  const cats=getCategories();
  const tech=getTechniquesByBelt(id);
  app.innerHTML=`<h2>${belt.name}</h2>`+cats.map(c=>{
    const f=tech.filter(t=>t.beltRefs.some(r=>r.categoryId===c.id&&r.beltId===id));
    return `<h3>${c.name}</h3><ul>${f.map(t=>`<li>${t.name}</li>`).join("")}</ul>`;
  }).join("");
 }else{
  app.innerHTML=getBelts().map(b=>`<a href="#/belt/${b.id}">${b.name}</a><br>`).join("");
 }
}
window.addEventListener("hashchange",render);
init();