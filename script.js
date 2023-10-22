const hiveGridEl = document.querySelector(".hive-grid");

hexagonAmount = 80;
for(i = 1; i <= hexagonAmount; i++) hiveGridEl.insertAdjacentHTML("beforeend", `<div class="hexagon"></div>`);