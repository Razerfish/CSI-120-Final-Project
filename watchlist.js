function populateWatchlist() {
    let watchlist = getWatchlist();

    watchlist.forEach((id) => {
        tvmaze.shows(id, (res) => {
            createFullListItem(document.getElementById("watchlist"), res);
        });
    });
}


let tvmaze = new TVMaze();
window.onload = () => {
    populateWatchlist();
}
