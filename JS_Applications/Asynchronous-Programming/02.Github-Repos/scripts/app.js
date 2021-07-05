function loadRepos() {
	let usernameElement = document.getElementById('username');
	let reposElement = document.getElementById('repos');
	reposElement.innerHTML = '';


	let url = `https://api.github.com/users/${usernameElement.value}/repos`;

	fetch(url)
		.then(response => {
			return response.json()
		})
		.then(data => {

			 data.forEach(repo => {

				let newRepoElement = document.createElement('li');
				let newLinkElement = document.createElement('a');
				newLinkElement.textContent = repo.full_name;
				newLinkElement.setAttribute('href', repo.html_url);
				newRepoElement.appendChild(newLinkElement);
				reposElement.appendChild(newRepoElement);

			})
		})
}