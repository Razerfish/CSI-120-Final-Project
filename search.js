function getTitleQuery(url) {
    let query = new URL(url);

    return query.searchParams.get("title");
}


function createResultItem(show) {
    let results = document.getElementById("results");

    let item = document.createElement("li");
    item.classList.add("bg-dark", "d-flex", "flex-row", "justify-content-start",
        "mb-4", "p-3", "result-item");
    results.appendChild(item);

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
    thumbnail.classList.add("result-thumbnail", "mx-auto");
    if (show.image.medium != undefined) {
        thumbnail.src = show.image.medium;
    }
    metaColumn.appendChild(thumbnail);

    let link = document.createElement("a");
    link.classList.add("btn", "btn-secondary", "disabled", "results-link", "mx-auto", "mt-3", "meta-column");
    link.innerText = "Official Site";
    console.log(show.officialSite);
    if (show.officialSite != null) {
        link.classList.remove("disabled");
        link.href = show.officialSite;
    }
    metaColumn.appendChild(link);

    // This column contains information about the show.
    let infoColumn = document.createElement("div");
    infoColumn.classList.add("d-flex", "flex-column", "mx-5", "my-5", "justify-items-start");
    infoColumn.id = "info-column";
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


function populateResults(titleQuery) {
    tvmaze.show_search(titleQuery, (res) => {
        res.forEach((show) => {
            show = show.show;
            createResultItem(show);
        });
    });
}

let tvmaze = new TVMaze();
window.onload = () => {
    let query = getTitleQuery(window.location.href);

    document.getElementById("search-query-message").innerText = `Results for: ${query}`;

    populateResults(query);
}
