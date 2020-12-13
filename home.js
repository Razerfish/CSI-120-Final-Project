// References
// https://github.com/bmartins/tvmaze-js
// https://www.tvmaze.com/api

function initShortlist() {
    let shortlist = document.createElement("div");

    shortlist.classList.add("w-100", "d-flex", "flex-row", "justify-content-between", "home-list");
    shortlist.id = "shortlist";

    document.getElementById("shortlist-container").appendChild(shortlist);
}


function initSchedule() {
    let schedule = document.createElement("div");

    schedule.classList.add("w-100", "d-flex", "flex-row", "justify-content-around", "home-list");
    shortlist.id = "schedule";

    document.getElementById("schedule-container").appendChild(schedule);
}


let tvmaze = new TVMaze();
window.onload = () => {
    initShortlist();

    displayShortlistThumbnail(document.getElementById("shortlist"), 178);
    displayShortlistThumbnail(document.getElementById("shortlist"), 37089);
    displayShortlistThumbnail(document.getElementById("shortlist"), 2071);
    displayShortlistThumbnail(document.getElementById("shortlist"), 1121);
    displayShortlistThumbnail(document.getElementById("shortlist"), 5460);
    displayShortlistThumbnail(document.getElementById("shortlist"), 7557);
}
