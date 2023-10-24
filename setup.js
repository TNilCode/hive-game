export function renderGrid(){
    const hiveGridEl = document.querySelector(".hive-grid");

    const hexagonAmount = 80;
    for(let i = 1; i <= hexagonAmount; i++) {
        hiveGridEl.insertAdjacentHTML("beforeend", `<div class="hexagon" id="tile-${i}"></div>`);
        if(i == 11 || i == 31 || i == 51 || i == 71) document.querySelector(`#tile-${i}`).style.marginLeft = "calc(var(--s)/2 + var(--m))";
    }


}