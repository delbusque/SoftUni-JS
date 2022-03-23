import { html } from '../../node_modules/lit-html/lit-html.js'

const showUserInfo = (email) => html `
<span>Welcome ${email}</span>
`;

const guestButtons = () => html `
<a class="nav-link" href="/login">Login</a>
<a class="nav-link" href="/register">Register</a>
`

const privateButtons = () => html `
<a class="nav-link" href="/my-movies">My Movies</a>
<a class="nav-link" href="/add-movie">Add Movie</a>
<a class="nav-link" href="/logout">Logout</a>

`

const navigationTemplate = (isAuthenticated, email) => html `
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
                        ${isAuthenticated ? privateButtons() : guestButtons()}
                    </div>
                </div>
                ${isAuthenticated && showUserInfo(email)}
            </div>
        </nav>
`

export function navigationView(ctx) {
    return navigationTemplate(ctx.isAuthenticated, ctx.email);
}