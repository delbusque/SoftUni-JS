window.addEventListener("load", solve);

function solve() {

    let reviewListElement = document.getElementById('review-list');
    let uploadedPostsElement = document.getElementById('published-list');
    let publishButtonElement = document.getElementById('publish-btn');
    let clearButtonElement = document.getElementById('clear-btn');

    publishButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let titleInput = document.getElementById('post-title');
        let categoryInput = document.getElementById('post-category');
        let contentInput = document.getElementById('post-content');

        if (titleInput.value && categoryInput.value && contentInput.value) {

            let liElement = document.createElement('li');
            liElement.classList.add('rpost');

            let articleElement = document.createElement('article');

            let titleElement = document.createElement('h4');
            let categoryelement = document.createElement('p');
            let contentElement = document.createElement('p');

            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('action-btn', 'edit');
            //editButton.classList.add('edit');

            let approveButton = document.createElement('button');
            approveButton.textContent = 'Approve';
            approveButton.classList.add('action-btn', 'approve');
            //approveButton.classList.add('approve');


            titleElement.textContent = titleInput.value;
            categoryelement.textContent = `Category: ${categoryInput.value}`;
            contentElement.textContent = `Content: ${contentInput.value}`;

            articleElement.appendChild(titleElement);
            articleElement.appendChild(categoryelement);
            articleElement.appendChild(contentElement);

            liElement.appendChild(articleElement);
            liElement.appendChild(approveButton);
            liElement.appendChild(editButton);

            reviewListElement.appendChild(liElement);

            titleInput.value = '';
            categoryInput.value = '';
            contentInput.value = '';

            editButton.addEventListener('click', (e) => {
                e.preventDefault();
                titleInput.value = titleElement.textContent;
                categoryInput.value = categoryelement.textContent;
                contentInput.value = contentElement.textContent;

                e.target.parentNode.remove();
            })

            approveButton.addEventListener('click', (e) => {
                e.preventDefault();
                uploadedPostsElement.appendChild(e.target.parentNode);
                e.target.nextElementSibling.remove();
                e.target.remove();
            })

            clearButtonElement.addEventListener('click', (e) => {
                //uploadedPostsElement.innerHTML = '';

                while (uploadedPostsElement.lastElementChild) {
                    uploadedPostsElement.removeChild(uploadedPostsElement.lastElementChild);
                }
            })
        }
    })
}