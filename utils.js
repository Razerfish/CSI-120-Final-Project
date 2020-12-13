function displayShortlistThumbnail(parent, id) {
    return new Promise((resolve, reject) => {
        let main = document.createElement("div");
        main.classList.add("homelist-item", "d-flex", "flex-column");
        parent.appendChild(main);
        
        tvmaze.shows(id, (res) => {
            let name = res.name;
            let summary = res.summary;
            let officialSite = res.officialSite;
            let imageURL = res.image.medium;

            let thumbnail = document.createElement("img");
            thumbnail.classList.add("thumbnail-image-sm")
            thumbnail.src = res.image.medium;
            main.appendChild(thumbnail);

            let infobox = document.createElement("div");
            infobox.classList.add("d-flex", "flex-column", "infobox");

            let title = document.createElement("h2");
            title.classList.add("text-light", "text-center", "h6", "h-50", "m-0");
            title.innerText = res.name;
            infobox.appendChild(title);

            main.appendChild(infobox);
        });
    });
}
