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
