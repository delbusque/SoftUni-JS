//import { html } from '../../node_modules/lit-html/lit-html.js'
//
//export default ({
//    title,
//    description,
//    img,
//    isOwn,
//}) => html `
//<div class="card" style="width: 18rem;">
//  <img src="${img}" class="card-img-top" alt="${title}">
//  <div class="card-body">
//    <h5 class="card-title">${title}</h5>
//    <p class="card-text">${description}</p>
//    <a href="/movies" class="btn btn-success">Back</a>
//    ${isOwn
//? html`<a href="/movies/${movies._id}/edit" class="btn btn-danger">Edit</a>`
//: html`<a class="btn btn-primary">Up</a><a class="btn btn-primary">Down</a>`}
//  </div>
//</div>
//</div>
//</div>
//`