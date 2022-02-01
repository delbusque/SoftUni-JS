function getArticleGenerator(articles) {
    let contentElement = document.querySelector('#content');

    function action() {
        if (articles.length > 0) {
            let articleElement = document.createElement('article');
            articleElement.textContent = articles.splice(0, 1);
            contentElement.appendChild(articleElement);
        }
    }

    return action;
}