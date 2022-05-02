import navigation from '../templates/navigationTemplate.js'
import booksData from '../services/books.js'
import bookTemplate from '../templates/bookTemplate.js'

export default function(context) {
    let rootElement = document.querySelector('.root')
    rootElement.innerHTML = navigation();
    booksData().then(data => {
        Object.values(data).forEach(book => {
            rootElement.innerHTML += bookTemplate(book);
        })
    })
}