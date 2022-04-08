import { navigationMiddleware } from './middlewares/navigationMiddleware.js'
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

import page from '../node_modules/page/page.mjs'
import { renderLogin } from './views/loginView.js';
import { renderRegister } from './views/registerView.js';
import { renderLogout } from './views/logoutView.js';
import { renderCatalog } from './views/catalogView.js';
import { renderHome } from './views/homeView.js';
import { renderAlbumDetails } from './views/detailsAlbumView.js';
import { renderEditAlbum } from './views/editAlbumView.js';
import { renderDeleteAlbum } from './views/deleteAlbumView.js';
import { renderCreateAlbum } from './views/createAlbumView.js';
import { renderSearch } from './views/searchView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', renderHome)
page('/login', renderLogin)
page('/register', renderRegister)
page('/create', renderCreateAlbum)
page('/logout', renderLogout)
page('/catalog/:albumId', renderAlbumDetails)
page('/catalog', renderCatalog)
page('/catalog/:albumId/edit', renderEditAlbum)
page('/catalog/:albumId/delete', renderDeleteAlbum)
page('/search', renderSearch)






page.start();