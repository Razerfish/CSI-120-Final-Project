function getTitleQuery(url) {
    let query = new URL(url);

    return query.searchParams.get("title");
}


function populateResults(titleQuery) {
    tvmaze.show_search(titleQuery, (res) => {
        res.forEach((show) => {
            show = show.show;
            createFullListItem(document.getElementById("results"), show);
        });
    });
}

let tvmaze = new TVMaze();
window.onload = () => {
    let query = getTitleQuery(window.location.href);

    document.getElementById("search-query-message").innerText = `Results for: ${query}`;

    populateResults(query);
}
