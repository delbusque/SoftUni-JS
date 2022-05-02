function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';

    let loadButton = document.getElementById('btnLoadPosts');
    const selectElement = document.getElementById('posts');
    let postsBackup = [];

    loadButton.addEventListener('click', async (e) => {
        selectElement.innerHTML = '';
        document.getElementById('post-body').innerHTML = '';
        document.getElementById('post-comments').innerHTML = '';
        document.getElementById('post-title').textContent = 'Post Details';


        let postsResponse = await fetch(postsURL);
        let postsData = await postsResponse.json();
        let posts = Object.keys(postsData).map((key) => [key, postsData[key]]);
        posts.forEach(post => {
            postsBackup.push(post);
            const optionElement = document.createElement('option');
            optionElement.setAttribute('value', `${post[0]}`);
            optionElement.textContent = `${post[1].title}`;
            selectElement.appendChild(optionElement);
        });
    });

    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments/';

    let viewButton = document.getElementById('btnViewPost');
    viewButton.addEventListener('click', async (e) => {

        let selectedId = selectElement.options[selectElement.selectedIndex].value;
        let selectedName = selectElement.options[selectElement.selectedIndex].textContent;

        let commentsResponse = await fetch(commentsURL);
        let commentsData = await commentsResponse.json();
        let comments = Object.keys(commentsData).map((key) => [key, commentsData[key]]);

        let commentSearch = comments.find(c => c[1].postId == selectedId);
        let postSearch = postsBackup.find(p => p[1].id == commentSearch[1].postId)


        comments.forEach(comment => {
            if (selectedId == comment[1].postId) {
                document.getElementById('post-title').textContent = selectedName;
                document.getElementById('post-body').innerHTML = '';
                document.getElementById('post-comments').innerHTML = '';
                const postParagraph = document.createElement('p');
                postParagraph.textContent = postSearch[1].body;
                document.getElementById('post-body').appendChild(postParagraph);

                comments.forEach(comment => {
                    if (comment[1].postId == selectedId) {
                        const commentLiElement = document.createElement('li');
                        commentLiElement.textContent = comment[1].text;
                        document.getElementById('post-comments').appendChild(commentLiElement);
                    }
                })
            }
        });


    });
}

attachEvents();