// References
// https://github.com/bmartins/tvmaze-js
// https://www.tvmaze.com/api

let tvmaze = new TVMaze();
window.onload = () => {
    let show = tvmaze.shows(4);
    console.log(show.name);
}
