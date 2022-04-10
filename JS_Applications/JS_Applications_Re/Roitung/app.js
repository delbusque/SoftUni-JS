import page from './node_modules/page/page.mjs';
import home from './views/homeView.js'
import books from './views/booksView.js'
import pricing from './views/pricingView.js'

page('/', home)
page('/home', home)
page('/books', books)
page('/pricing', pricing)

page.start()