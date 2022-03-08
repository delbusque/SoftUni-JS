const baseUrl = `http://localhost:3030`;

let registerLoginDisplay = document.getElementById('register-login');
let registerUser = document.getElementById('register-user');
let loginUser = document.getElementById('login-user');
const logoutDisplay = document.getElementById('logout');
const logoutButton = logoutDisplay.querySelector('button');
let addMovieDisplay = document.getElementById('add-movies');
let addMovie = document.getElementById('add-movie');
let addMovieForm = document.getElementById('movie-data');
let movieListDisplay = document.getElementById('movie-list');
let showMoviesButton = document.getElementById('show-movies');
let moviesListElement = document.getElementById('movies-list');


showMoviesButton.addEventListener('click', (e) => {
    moviesListElement.innerHTML = '';
    let ulElement = document.createElement('section');
    fetch(`${baseUrl}/data/movies`).then(res => res.json())
        .then(data => {
            data.forEach(movie => {
                let liElement = document.createElement('div');
                let titleElement = document.createElement('h4');
                let descriptionElement = document.createElement('p');
                titleElement.textContent = movie.title;
                descriptionElement.textContent = movie.description;
                liElement.appendChild(titleElement);
                liElement.appendChild(descriptionElement);
                ulElement.appendChild(liElement);

            })
        })

    moviesListElement.appendChild(ulElement);
})

addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let movieData = new FormData(e.currentTarget);
    let title = movieData.get('title');
    let description = movieData.get('description');

    fetch(`${baseUrl}/data/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('auth_token')
            },
            body: JSON.stringify({
                title,
                description
            })
        }).then(res => {
            if (res.ok) {
                addMovieForm.reset();
            }
            return res;
        })
        .then(data => data)
})

registerUser.addEventListener('submit', (e) => {
    e.preventDefault();

    let registerData = new FormData(e.currentTarget);

    fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: registerData.get('email'),
            password: registerData.get('password')
        })
    }).then(res => res.json()).then(data => {
        if (data.code !== 400 && data.code !== 409) {
            getToken(data.accessToken);
            registerLoginDisplay.classList.add('hide');
            logoutDisplay.classList.remove('hide');
            addMovieDisplay.classList.remove('hide');
            movieListDisplay.classList.remove('hide');
        }



    }).catch(err => {
        console.log(err.message)
    })

    registerUser.reset();

})

loginUser.addEventListener('submit', (e) => {
    e.preventDefault();

    let registerData = new FormData(e.currentTarget);

    fetch(`${baseUrl}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: registerData.get('email'),
                password: registerData.get('password')
            })
        }).then(res => {

            if (res.ok) {
                registerLoginDisplay.classList.add('hide');
                logoutDisplay.classList.remove('hide');
                addMovieDisplay.classList.remove('hide');
            }
            return res.json();
        })
        .then(data => {
            getToken(data.accessToken);
            if (data.code !== 403) {
                movieListDisplay.classList.remove('hide');
            }
        }).catch(err => {
            console.log(err.message)
        })
    loginUser.reset();


})

logoutButton.addEventListener('click', (e) => {
    fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': localStorage.getItem('auth_token')
        }
    });
    registerLoginDisplay.classList.remove('hide');
    logoutDisplay.classList.add('hide');
    addMovieDisplay.classList.add('hide');

})

function getToken(token) {
    localStorage.removeItem('auth_token');
    localStorage.setItem('auth_token', token);
}