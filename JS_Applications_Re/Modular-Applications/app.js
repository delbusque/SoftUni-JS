import page from './node_modules/page/page.mjs'
import { movieView } from './src/views/movieVew.js'
import { moviesView, myMoviesView } from './src/views/moviesView.js'
import { homeView } from './src/views/homeView.js'
import { loginView } from './src/views/loginView.js'
import { registerView } from './src/views/registerView.js'
import { renderMiddleware } from './src/middlewares/renderMiddleware.js'
import { authMiddleware } from './src/middlewares/authMiddleware.js'
import { addMoviewView } from './src/views/addMovieView.js'

page(authMiddleware)
page(renderMiddleware)

page('/', homeView)
page('/home', homeView)

page('/my-movies/:id/edit', movieView)
page('/my-movies', myMoviesView)
page('/movies/add', addMoviewView)

page('/movies/:id', movieView)
page('/movies', moviesView)

page('/login', loginView)
page('/register', registerView)

page.start()