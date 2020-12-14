function saveWatchlist(watchlist) {
    Cookies.set("watchlist", JSON.stringify({ "watchlist": watchlist }));
}


function getWatchlist() {
    let watchlist = Cookies.get("watchlist");

    if (watchlist == "" || watchlist == undefined) {
        return [];
    } else {
        return JSON.parse(watchlist).watchlist;
    }
}


function addToWatchlist(id) {
    let watchlist = getWatchlist();
    watchlist.push(id);
    saveWatchlist(watchlist);
}


function removeFromWatchlist(id) {
    let watchlist = getWatchlist();

    while (watchlist.indexOf(id) != -1) {
        watchlist.splice(watchlist.indexOf(id), 1);
    }

    saveWatchlist(watchlist);
}


function createFullListItem(parent, show) {
    let item = document.createElement("li");
    item.classList.add("bg-dark", "d-flex", "flex-row", "justify-content-start",
        "mb-4", "p-3", "full-list-item");
    parent.appendChild(item);

    let container = document.createElement("div");
    container.classList.add("d-flex", "flex-row", "justify-content-start");
    item.appendChild(container);

    // This column contains the title, thumbnail and a link to the shows site.
    let metaColumn = document.createElement("div");
    metaColumn.classList.add("d-flex", "flex-column", "justify-content-around");
    metaColumn.id = "meta-column";
    container.appendChild(metaColumn);

    let title = document.createElement("p");
    title.classList.add("text-light", "w-100", "text-center", "lead");
    title.innerText = show.name;
    metaColumn.appendChild(title);

    let thumbnail = document.createElement("img");
    thumbnail.classList.add("thumbnail", "mx-auto");
    if (show.image.medium != undefined) {
        thumbnail.src = show.image.medium;
    }
    thumbnail.draggable = false;
    metaColumn.appendChild(thumbnail);


    let controls = document.createElement("div");
    controls.classList.add("d-flex", "flex-row", "mt-3", "justify-content-center");
    controls.id = "controls";
    metaColumn.appendChild(controls);


    let watchlistButton = document.createElement("button");
    watchlistButton.classList.add("btn","watchlist-button");
    watchlistButton.setAttribute("data-showid", show.id);

    if (getWatchlist().indexOf(show.id) == -1) {
        watchlistButton.classList.add("btn-success");
        watchlistButton.innerText = "Add show";
    } else {
        watchlistButton.classList.add("btn-danger");
        watchlistButton.innerText = "Remove show";
    }

    watchlistButton.addEventListener("click", (event) => {
        let id = Number(event.target.getAttribute("data-showid"));

        if (event.target.classList.contains("btn-success")) {
            addToWatchlist(id);
            event.target.classList.remove("btn-success");
            event.target.classList.add("btn-danger");
            event.target.innerText = "Remove Show";
        } else if (event.target.classList.contains("btn-danger")) {
            removeFromWatchlist(id);
            event.target.classList.remove("btn-danger");
            event.target.classList.add("btn-success");
            event.target.innerText = "Add Show";
        }
        console.log(getWatchlist());
    });
    controls.appendChild(watchlistButton);


    let link = document.createElement("a");
    link.classList.add("btn", "btn-secondary", "disabled", "show-link");
    link.innerText = "Official Site";
    if (show.officialSite != null) {
        link.classList.remove("disabled");
        link.href = show.officialSite;
    }
    controls.appendChild(link);


    // This column contains information about the show.
    let infoColumn = document.createElement("div");
    infoColumn.classList.add("d-flex", "flex-column", "mx-5", "my-5", "justify-items-start", "info-column");
    container.appendChild(infoColumn);

    let description = document.createElement("p");
    description.classList.add("text-left", "text-light", "description", "info-item", "mx-auto");
    if (show.summary) {
        // This isn't perfect but it should be good enough to strip out the <p> tags.
        description.innerHTML = `<u>Description:</u> ${show.summary.replace(/<\/?[^>]+(>|$)/g, "")}`;
    } else {
        description.innerHTML = "<u>Description:</u> Description Unavailable";
    }
    infoColumn.appendChild(description);

    let genres = document.createElement("p");
    genres.classList.add("text-left", "text-light", "genres", "info-item", "mx-auto");
    if (show.genres) {
        genres.innerHTML = "<u>Genres:</u> ";
        for (let i = 0; i < show.genres.length; i++) {
            genres.innerHTML += show.genres[i];
            if (i < show.genres.length - 1) {
                genres.innerHTML += ", ";
            }
        }
    } else {
        genres.innerHTML = "<u>Genres:</u> None";
    }
    infoColumn.appendChild(genres);

    let network = document.createElement("p");
    network.classList.add("text-left", "text-light", "network", "info-item", "mx-auto");
    if (show.network && show.network.name) {
        network.innerHTML = `<u>Network:</u> ${show.network.name}`;
    } else {
        network.innerHTML = "<u>Network:</u> Unknown";
    }
    infoColumn.appendChild(network);
    
}
