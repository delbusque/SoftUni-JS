import page from './node_modules/page/page.mjs'
import { movieView } from './src/views/movieVew.js'
import { moviesView } from './src/views/moviesView.js'
import { homeView } from './src/views/homeView.js'
import { loginView } from './src/views/loginView.js'
import { registerView } from './src/views/registerView.js'
import { renderMiddleware } from './src/middlewares/renderMiddleware.js'

page(renderMiddleware)
page('/', homeView)
page('/home', homeView)
page('/movies', moviesView)
page('/movies/:id', movieView)
page('/login', loginView)
page('/register', registerView)

page.start()