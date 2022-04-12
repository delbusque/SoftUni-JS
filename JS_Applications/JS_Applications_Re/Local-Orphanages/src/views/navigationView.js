import { html } from '../../node_modules/lit-html/lit-html.js';

const guestUserNavigation = () => html `
    <!-- Guest users -->
         <div id="guest">
             <a href="/login">Login</a>
             <a href="/register">Register</a>
         </div>
`;

const loggedUserNavigation = () => html `
    <!-- Logged-in users -->
        <div id="user">
                <a href="/myOrphs">My Posts</a>
                <a href="/create">Create Post</a>
                <a href="/logout">Logout</a>
            </div>
`;

const navigationTemplate = (user) => html `
    <!-- Navigation -->
        <h1><a href="/">Orphelp</a></h1>

        <nav>
            <a href="/">Dashboard</a>
        ${user ? loggedUserNavigation(): guestUserNavigation()}

`;

export const renderNavigation = ({ user }) => {

    return navigationTemplate(user);
};