import { html } from '../../node_modules/lit-html/lit-html.js'
import * as authService from '../services/authService.js'
import * as moviesService from '../services/moviesService.js'

const showUserInfo = (email) => html `
<span>Welcome ${email}</span>
`;

const guestButtons = () => html `
<a class="nav-link" href="/login">Login</a>
<a class="nav-link" href="/register">Register</a>
`

const privateButtons = (onLogout) => html `
<a class="nav-link" href="/my-movies">My Movies</a>
<a class="nav-link" href="/movies/add">Add Movie</a>
<a class="nav-link" @click=${onLogout} href="#">Logout</a>

`

const navigationTemplate = (isAuthenticated, email, onLogout, onSearch) => html `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">MovieDB</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" aria-current="page" href="/home">Home</a>
                        <a class="nav-link" href="/movies">Movies</a>
                        ${isAuthenticated ? privateButtons(onLogout) : guestButtons()}
                    </div>
                    <form class="d-flex" @submit=${onSearch}>
        <input name="search-text" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
                </div>
                ${isAuthenticated && showUserInfo(email)}
            </div>
        </nav>
`

export function navigationView(ctx) {
    const onLogout = (e) => {
        e.preventDefault();

        authService.logout().then(() => {
            ctx.page.redirect('/home')
        })
    }

    const onSearch = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let searchText = formData.get('search-text').trim();

        if (searchText) {
            ctx.page.redirect(`/movies?search=${searchText}`)
        }
    }
    return navigationTemplate(ctx.isAuthenticated, ctx.email, onLogout, onSearch);
}