let DATA = null;

export async function loadData() {
  const res = await fetch("data/techniques.json");
  DATA = await res.json();
}

export function getBelts() {
  return DATA.belts.sort((a, b) => a.order - b.order);
}

export function getBeltById(id) {
  return DATA.belts.find(b => b.id === id);
}
