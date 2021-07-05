async function loadCommits() {
    let username = document.getElementById('username');
    let repo = document.getElementById('repo');
    let url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;
    
    let commits = document.getElementById('commits');
    let response = await fetch(url);
    let data = await response.json();

    try {
        commits.innerHTML = '';

        data.forEach(commit => {
            let newLiElement = document.createElement('li');
            let result = `${commit.commit.author.name}: ${commit.commit.message}`;
            newLiElement.textContent = result;
            commits.appendChild(newLiElement);
        })
    }
    catch(error) {
        commits.innerHTML = '';
        let newLiElement = document.createElement('li');
        let result = `Error: ${response.status} (Not Found)`;
        newLiElement.textContent = result;
        commits.appendChild(newLiElement);
        console.log(error);
    }
    
}