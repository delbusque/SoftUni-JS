function createArticle() {
    let titleTextElement = document.getElementById('createTitle');
    let contentTextElement = document.getElementById('createContent');

    let headingElement = document.createElement('h3');
    let textElement = document.createElement('p');

    headingElement.textContent = titleTextElement.value;
    textElement.textContent = contentTextElement.value;

    let articlesElement = document.querySelector('#articles');
    let newArticleElement = document.createElement('article');

    newArticleElement.appendChild(headingElement);
    newArticleElement.appendChild(textElement);

    if (titleTextElement.value !== '' && contentTextElement.value !== '') {
        articlesElement.appendChild(newArticleElement);
    }

    titleTextElement.value = '';
    contentTextElement.value = '';
}