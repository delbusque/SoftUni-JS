import addMovie from "./scr/add.js";
import detailsPage from "./scr/details.js";
import editMovie from "./scr/edit.js";
import homePage from "./scr/home.js";
import loginPage from "./scr/login.js";
import signUpPage from "./scr/signUp.js";
import viewFinder from "./scr/viewFinder.js";

let main = document.querySelector('main');

setUp();


function setUp() {
    addMovie.initialize(document.getElementById('add-movie'));
    detailsPage.initialize(document.getElementById('movie-details'));
    editMovie.initialize(document.getElementById('edit-movie'));
    homePage.initialize(document.getElementById('home-page'));
    loginPage.initialize(document.getElementById('form-login'));
    signUpPage.initialize(document.getElementById('form-sign-up'));

    document.querySelectorAll('.view').forEach(v => v.remove());

    viewFinder.initialize();
};