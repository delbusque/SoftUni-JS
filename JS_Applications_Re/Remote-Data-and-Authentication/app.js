const baseUrl = `http://localhost:3030`;
let showMoviesButton = document.getElementById('show-movies');

showMoviesButton.addEventListener('click', () => {
    fetch(`${baseUrl}`)

})