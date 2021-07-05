async function loadRepos() {
    let usernameElement = document.getElementById('username');
    let reposElement = document.getElementById('repos');
    reposElement.innerHTML = '';


    let url = `https://api.github.com/users/${usernameElement.value}/repos`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    data.forEach(repo => {

        let newRepoElement = document.createElement('li');
        let newLinkElement = document.createElement('a');
        newLinkElement.textContent = repo.full_name;
        newLinkElement.setAttribute('href', repo.html_url);
        newRepoElement.appendChild(newLinkElement);
        reposElement.appendChild(newRepoElement);

    })
}