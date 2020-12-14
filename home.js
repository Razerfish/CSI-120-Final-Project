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


function createHomelistItem(parent, id) {
    return new Promise((resolve) => {
        let item = document.createElement("div");
        item.classList.add("homelist-item", "d-flex", "flex-column");
        parent.appendChild(item);

        let thumbnail = document.createElement("img");
        thumbnail.classList.add("homelist-thumbnail");
        thumbnail.setAttribute("draggable", false);
        item.appendChild(thumbnail);

        let infobox = document.createElement("div");
        infobox.classList.add("homelist-infobox", "d-flex", "flex-column");
        item.appendChild(infobox);

        let title = document.createElement("h2");
        title.classList.add("text-light", "text-center", "h6", "h-50", "m-0");
        infobox.appendChild(title);


        let link = document.createElement("a");
        link.classList.add("mx-auto", "btn", "btn-secondary", "disabled", "homelist-link");
        link.innerText = "Website"
        infobox.appendChild(link);


        tvmaze.shows(id, (res) => {
            let name = res.name;
            let site = res.officialSite;

            if (res.image != null) {
                thumbnail.src = res.image.medium;
            }

            title.innerText = name;

            if (site != null) {
                link.classList.remove("disabled");
                link.href = site;
            }

            resolve(item);
        });
    });
}


function populateSchedule() {
    let schedule = document.getElementById("schedule");
    let now = new Date();

    tvmaze.schedule("US", now.toISOString().substr(0, 10), (res) => {
        for (let i = 0; i < 10; i++) {
            let index = Math.floor(Math.random() * res.length);
            let show = res.splice(index, 1)[0].show.id;

            createHomelistItem(schedule, show);
        }
    });
}


let tvmaze = new TVMaze();
window.onload = () => {
    createShortlist();
    createSchedule();
    populateSchedule();

    createHomelistItem(document.getElementById("shortlist"), 178);
    createHomelistItem(document.getElementById("shortlist"), 37089);
    createHomelistItem(document.getElementById("shortlist"), 2071);
    createHomelistItem(document.getElementById("shortlist"), 1121);
    createHomelistItem(document.getElementById("shortlist"), 5460);
    createHomelistItem(document.getElementById("shortlist"), 7557);
}
