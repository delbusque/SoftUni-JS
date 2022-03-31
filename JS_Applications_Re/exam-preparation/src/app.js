import { navigationMiddleware } from './middlewares/navigationMiddleware.js'
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import page from '../node_modules/page/page.mjs'

import { renderLogin } from './views/loginView.js'
import { renderRegister } from './views/registerView.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderLogout } from './views/logoutView.js';
import { renderHome } from './views/homeView.js';
import { renderListing } from './views/listingView.js';


page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', renderHome)
page('/login', renderLogin)
page('/register', renderRegister)
page('/logout', renderLogout)
page('/listing', renderListing)



page.start();