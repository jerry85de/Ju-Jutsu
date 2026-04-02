import {
  getBelts,
  getBeltById,
  getTechniquesByBelt,
  getTechniqueById,
  getCategories
} from "./data.js";

import { getStatus, setStatus, getNote, setNote } from "./storage.js";

export function renderHome() {
  const belts = getBelts();

  return `
    <h2>Gürtel</h2>
    <ul>
      ${belts.map(b => `
        <li><a href="#/belt/${b.id}">${b.name}</a></li>
      `).join("")}
    </ul>
  `;
}

export function renderBelt(id) {
  const belt = getBeltById(id);
  const techniques = getTechniquesByBelt(id);
  const categories = getCategories();
  if (!belt) return "<p>Gurt nicht gefunden</p>";

  return `
    <h2>${belt.name}</h2>

    <h3>Voraussetzungen</h3>
    <ul>
      ${belt.requirements.map(r => `
        <li><strong>${r.label}:</strong> ${r.value}</li>
      `).join("")}
    </ul>

    <h3>Techniken</h3>

    ${categories.map(cat => {
      const filtered = techniques.filter(t =>
        t.beltRefs.some(ref =>
          ref.beltId === id && ref.categoryId === cat.id
        )
      );

      if (filtered.length === 0) return "";

      return `
        <h4>${cat.name}</h4>
        <ul>
          ${filtered.map(t => `
            <li>
              <a href="#/technique/${t.id}">
                ${t.name}
              </a>
              <span class="status status-${getStatus(t.id)}">
  ${getStatusLabel(getStatus(t.id))}
</span>
            </li>
          `).join("")}
        </ul>
      `;
    }).join("")}

    <p><a href="#">← Zurück</a></p>
  `;
}

export function renderTechnique(id) {
  const t = getTechniqueById(id);

  if (!t) return "<p>Technik nicht gefunden</p>";

  return `
    <h2>${t.name}</h2>
    <p><em>${t.translation}</em></p>
    <p>${t.description}</p>

    <h3>Status</h3>
    <button onclick="setStatusUI('${id}', 'learning')">Erlernen</button>
    <button onclick="setStatusUI('${id}', 'practicing')">Üben</button>
    <button onclick="setStatusUI('${id}', 'ready')">Bereit</button>

    <h3>Notizen</h3>
    <textarea id="note">${getNote(id)}</textarea>

    <p><a href="javascript:history.back()">← Zurück</a></p>
  `;
}

window.setStatusUI = function(id, status) {
  setStatus(id, status);
  location.reload();
};

window.initNote = function(id) {
  const el = document.getElementById("note");
  el.addEventListener("input", (e) => {
    setNote(id, e.target.value);
  });
};
