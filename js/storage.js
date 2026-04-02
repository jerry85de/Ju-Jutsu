const STORAGE_KEY = "jujutsu_app";

function loadStorage() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function saveStorage(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// STATUS
export function getStatus(id) {
  const data = loadStorage();
  return data.techniqueStatus?.[id] || "learning";
}

export function setStatus(id, status) {
  const data = loadStorage();
  if (!data.techniqueStatus) data.techniqueStatus = {};
  data.techniqueStatus[id] = status;
  saveStorage(data);
}

// NOTIZEN
export function getNote(id) {
  const data = loadStorage();
  return data.techniqueNotes?.[id] || "";
}

export function setNote(id, note) {
  const data = loadStorage();
  if (!data.techniqueNotes) data.techniqueNotes = {};
  data.techniqueNotes[id] = note;
  saveStorage(data);
}
