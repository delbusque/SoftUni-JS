import { navigationMiddleware } from './middlewares/navigationMiddleware.js'
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

import page from '../node_modules/page/page.mjs'
import { renderLogin } from './views/loginView.js';
import { renderRegister } from './views/registerView.js';
import { renderLogout } from './views/logoutView.js';
import { renderOrphelp } from './views/orphelpView.js';
import { renderCreateOrph } from './views/createOrphView.js';
import { renderOrphDetails } from './views/detailsOrphView.js';
import { renderEditOrph } from './views/editOrphView.js';
import { renderDeleteOrph } from './views/deleteOrphView.js';
import { renderMyOrphs } from './views/myOrphsView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware)

page('/login', renderLogin)
page('/register', renderRegister)
page('/logout', renderLogout)
page('/', renderOrphelp)
page('/create', renderCreateOrph)
page('/orphs/:orphId', renderOrphDetails)
page('/orphs/:orphId/edit', renderEditOrph)
page('/orphs/:orphId/delete', renderDeleteOrph)
page('/myOrphs', renderMyOrphs)


page.start();