import { navigationMiddleware } from './middlewares/navigationMiddleware.js'
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

import page from '../node_modules/page/page.mjs'

import { renderLogin } from './views/loginView.js'
import { renderRegister } from './views/registerView.js';
import { renderLogout } from './views/logoutView.js';
import { renderHome } from './views/homeView.js';
import { renderListing } from './views/listingView.js';
import { renderCreateCar } from './views/createCarView.js';
import { renderCarDetails } from './views/detailsCarView.js';
import { renderEditCar } from './views/editCarView.js';
import { renderDeleteCar } from './views/deleteCarView.js';
import { renderMyListing } from './views/myListingView.js';
import { renderSearch } from './views/searchView.js';


page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('/logout', renderLogout);
page('/listing', renderListing);
page('/profile', renderMyListing);
page('/create', renderCreateCar);
page('/listing/:carId', renderCarDetails);
page('/listing/:carId/edit', renderEditCar);
page('/listing/:carId/delete', renderDeleteCar);
page('/search', renderSearch);


page.start();