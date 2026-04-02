let DATA=null;
export async function loadData(){
 const res=await fetch("./data/techniques.json");
 DATA=await res.json();
}
export function getBelts(){return DATA.belts;}
export function getBeltById(id){return DATA.belts.find(b=>b.id===id);}
export function getTechniquesByBelt(id){
 return DATA.techniques.filter(t=>t.beltRefs.some(r=>r.beltId===id));
}
export function getCategories(){return DATA.categories;}
