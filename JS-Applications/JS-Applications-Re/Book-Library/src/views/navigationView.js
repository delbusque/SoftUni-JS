import { html } from '../../node_modules/lit-html/lit-html.js';

const guestUserNavigation = () => html `
                <!-- Guest users -->
                    <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>
`;

const loggedUserNavigation = (email) => html `
            <!-- Logged-in users -->
            <div id="user">
                <span>Welcome, ${email}</span>
                <a class="button" href="/myBooks">My Books</a>
                <a class="button" href="/add">Add Book</a>
                <a class="button" href="/logout">Logout</a>
            </div>
`;

const navigationTemplate = (user) => html `
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/">Dashboard</a>
                ${user
                    ? loggedUserNavigation(user.email)
                    : guestUserNavigation()
                }
                </section>
            </nav>
`;

export const renderNavigation = ({ user }) => {

    return navigationTemplate(user);
};