export default (data) => /*javascript*/ `
<section class='book-section'>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.author}</h6>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="card-link">Title link</a>
    <a href="#" class="card-link">Author link</a>
  </div>
</div>
</section>
`