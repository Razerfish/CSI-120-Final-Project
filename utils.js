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
