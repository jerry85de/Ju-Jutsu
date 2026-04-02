import { getBelts, getBeltById } from "./data.js";

export function renderHome() {
  const belts = getBelts();

  return `
    <h2>Gürtel</h2>
    <ul>
      ${belts.map(b => `
        <li>
          <a href="#/belt/${b.id}">
            ${b.name}
          </a>
        </li>
      `).join("")}
    </ul>
  `;
}

export function renderBelt(id) {
  const belt = getBeltById(id);

  if (!belt) return "<p>Gurt nicht gefunden</p>";

  return `
    <h2>${belt.name}</h2>

    <h3>Voraussetzungen</h3>
    <ul>
      ${belt.requirements.map(r => `
        <li><strong>${r.label}:</strong> ${r.value}</li>
      `).join("")}
    </ul>

    <p><a href="#">← Zurück</a></p>
  `;
}
