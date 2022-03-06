function loadRepos() {
    let url = `https://swapi.dev/api`;

    let divDocument = document.getElementById('res');

    fetch(`${url}/people/1`).then(res => res.json()).then(data => {
        divDocument.textContent = JSON.stringify(data.name);
    });




}