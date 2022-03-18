import { html } from '../../node_modules/lit-html/lit-html.js'

export default (movie) => html `
<div class="card" style="width: 18rem;">
  <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">${movie.description}</p>
    <button ?disabled=${movie.isDisabled} @click=${movie.detailsClick} class="btn btn-primary">Show details</button>
  </div>
</div>
`