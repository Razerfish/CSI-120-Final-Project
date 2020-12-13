function createHomelistItem(parent, id) {
    return new Promise((resolve) => {
        let item = document.createElement("div");
        item.classList.add("homelist-item", "d-flex", "flex-column");
        parent.appendChild(item);

        let thumbnail = document.createElement("img");
        thumbnail.classList.add("homelist-thumbnail");
        item.appendChild(thumbnail);

        let infobox = document.createElement("div");
        infobox.classList.add("homelist-infobox");
        item.appendChild(infobox);

        let title = document.createElement("h2");
        title.classList.add("text-light", "text-center", "h6", "h-50", "m-0");
        infobox.appendChild(title);

        tvmaze.shows(id, (res) => {
            thumbnail.src = res.image.medium;
            title.innerText = res.name;

            resolve(item);
        });
    });
}
