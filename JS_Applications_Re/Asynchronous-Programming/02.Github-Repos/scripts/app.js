function loadRepos() {
    const reposDisplay = document.getElementById('repos');
    reposDisplay.innerHTML = '';
    const usernameDisplay = document.getElementById('username');

    let url = `https://api.github.com/users/${usernameDisplay.value}/repos`;

    let errData = {};

    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            errData.message = data.message;
            data.forEach(repo => {
                let newLiElement = document.createElement('li');
                let newAnchorElement = document.createElement('a');
                newAnchorElement.setAttribute('href', repo.html_url);
                newAnchorElement.textContent = repo.full_name;

                newLiElement.appendChild(newAnchorElement);
                reposDisplay.appendChild(newLiElement);
            });
        })
        .catch(() => {
            reposDisplay.textContent = errData.message;
        })
}