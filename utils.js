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
