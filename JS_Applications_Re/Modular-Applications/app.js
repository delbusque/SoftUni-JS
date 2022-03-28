import page from './node_modules/page/page.mjs'
import { homeView } from './src/views/homeView.js'

import { movieView } from './src/views/movieVew.js'
import { moviesView, myMoviesView } from './src/views/moviesView.js'
import { loginView } from './src/views/loginView.js'
import { registerView } from './src/views/registerView.js'
import { renderMiddleware } from './src/middlewares/renderMiddleware.js'
import { authMiddleware } from './src/middlewares/authMiddleware.js'
import { addMovieView } from './src/views/addMovieView.js'
import { editMovieView } from './src/views/editMovieView.js'
import { deleteMovieView } from './src/views/deleteMovieView.js'
import { querystringMiddleware } from './src/middlewares/querystringMiddleware.js'

page(authMiddleware)
page(renderMiddleware)
page(querystringMiddleware)

page('/', homeView)
page('/home', homeView)

page('/my-movies/:id/edit', editMovieView)
page('/my-movies/:id/delete', deleteMovieView)
page('/my-movies', myMoviesView)
page('/movies/add', addMovieView)

page('/movies/:id', movieView)
page('/movies', moviesView)

page('/login', loginView)
page('/register', registerView)

page.start()