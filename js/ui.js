import {getBelts,getBeltById,getTechniquesByBelt,getCategories} from "./data.js";

export function renderHome(){
 const belts=getBelts();
 return `<h2>Gürtel</h2><ul>${belts.map(b=>`<li><a href="#/belt/${b.id}">${b.name}</a></li>`).join("")}</ul>`;
}

export function renderBelt(id){
 const belt=getBeltById(id);
 const tech=getTechniquesByBelt(id);
 const cats=getCategories();

 return `
 <h2>${belt.name}</h2>
 ${cats.map(c=>{
  const filtered=tech.filter(t=>t.beltRefs.some(r=>r.categoryId===c.id && r.beltId===id));
  return `<h3>${c.name}</h3>
  <ul>${filtered.map(t=>`<li>${t.name}</li>`).join("")}</ul>`;
 }).join("")}
 `;
}
