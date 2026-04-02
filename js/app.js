import { loadData } from "./data.js";
import { getRoute } from "./router.js";
import { renderHome, renderBelt, renderTechnique } from "./ui.js";

const app = document.getElementById("app");

async function init() {
  await loadData();
  render();
}

function render() {
  const route = getRoute();

  if (route.page === "belt") {
    app.innerHTML = renderBelt(route.id);
  } else if (route.page === "technique") {
    app.innerHTML = renderTechnique(route.id);
    setTimeout(() => window.initNote(route.id), 0);
  } else {
    app.innerHTML = renderHome();
  }
}

window.addEventListener("hashchange", render);

init();

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js");
}
