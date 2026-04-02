import { loadData } from "./data.js";
import { getRoute } from "./router.js";
import { renderHome, renderBelt } from "./ui.js";

const app = document.getElementById("app");

async function init() {
  await loadData();
  render();
}

function render() {
  const route = getRoute();
  if (route.page === "belt") {
    app.innerHTML = renderBelt(route.id);
  } else {
    app.innerHTML = renderHome();
  }
}

window.addEventListener("hashchange", render);
init();

async function checkForUpdate() {
  const res = await fetch("./data/version.json");
  const data = await res.json();

  const current = localStorage.getItem("app_version");

  if (current && current !== data.version) {
    console.log("Neue Version erkannt → Cache wird gelöscht");

    // Cache löschen
    caches.keys().then(keys => {
      keys.forEach(k => caches.delete(k));
    });

    localStorage.clear();
    location.reload();
  }

  localStorage.setItem("app_version", data.version);
}
