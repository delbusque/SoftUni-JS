import homePage from "./home.js";
import loginPage from "./login.js";
import signUpPage from "./signUp.js";

let views = {
    'home': homePage.getView,
    'login': loginPage.getView,
    'signUp': signUpPage.getView
}

function initialize() {
    let allNavLinks = document.querySelectorAll('.nlink');
    allNavLinks.forEach(l => l.addEventListener('click', viewHandler))
};

function viewHandler(e) {
    let route = e.target.dataset.route;
    if (views.hasOwnProperty(route)) {
        let view = views[route]();
        let mainElement = document.querySelector('main');
        mainElement.querySelectorAll('.view').forEach(v => v.remove());
        mainElement.appendChild(view);
    }
};

let viewFinder = {
    initialize,
};

export default viewFinder;