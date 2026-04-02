let DATA=null;
export async function loadData(){const r=await fetch("./data/techniques.json");DATA=await r.json();}
export function getBelts(){return DATA.belts;}
export function getBeltById(id){return DATA.belts.find(b=>b.id===id);}
export function getCategories(){return DATA.categories;}
export function getTechniquesByBelt(id){return DATA.techniques.filter(t=>t.beltRefs.some(r=>r.beltId===id));}