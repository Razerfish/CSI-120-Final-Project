// References
// https://github.com/bmartins/tvmaze-js
// https://www.tvmaze.com/api


function createShortlist() {
    let shortlist = document.createElement("div");

    shortlist.classList.add("w-100", "d-flex", "flex-row", "justify-content-between", "homelist");
    shortlist.id = "shortlist";

    document.getElementById("shortlist-container").appendChild(shortlist);
}


function createSchedule() {
    let schedule = document.createElement("div");

    schedule.classList.add("w-100", "d-flex", "flex-row", "justify-content-between", "homelist");
    schedule.id = "schedule";

    document.getElementById("schedule-container").appendChild(schedule);
}


let tvmaze = new TVMaze();
window.onload = () => {
    createShortlist();

    createHomelistItem(document.getElementById("shortlist"), 178);
    createHomelistItem(document.getElementById("shortlist"), 37089);
    createHomelistItem(document.getElementById("shortlist"), 2071);
    createHomelistItem(document.getElementById("shortlist"), 1121);
    createHomelistItem(document.getElementById("shortlist"), 5460);
    createHomelistItem(document.getElementById("shortlist"), 7557);
}
