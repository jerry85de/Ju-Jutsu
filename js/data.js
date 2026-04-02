let DATA = null;

export async function loadData() {
  const res = await fetch("./data/techniques.json");
  DATA = await res.json();
}

export function getBelts() {
  return DATA.belts.sort((a, b) => a.order - b.order);
}

export function getBeltById(id) {
  return DATA.belts.find(b => b.id === id);
}

export function getTechniquesByBelt(beltId) {
  return DATA.techniques.filter(t =>
    t.beltRefs.some(ref => ref.beltId === beltId)
  );
}

export function getTechniqueById(id) {
  return DATA.techniques.find(t => t.id === id);
}

export function getCategories() {
  return DATA.categories;
}
