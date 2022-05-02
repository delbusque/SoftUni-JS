function solve() {

    let movieListElement = document.querySelector('#movies>ul');

    let inputMovieElement = document.getElementById('container');
    let onScreenButton = inputMovieElement.querySelector('button');
    onScreenButton.type = 'button';
    let movieData = inputMovieElement.querySelectorAll('input');

    let archiveListElement = document.querySelector('#archive>ul');
    let clearArchiveButton = document.querySelector('#archive>button');

    function addMovie() {
        let movie = {};
        if (movieData[0].value !== '' && movieData[1].value !== '') {
            if (!isNaN(Number(movieData[2].value))) {
                movie['name'] = movieData[0].value;
                movie['hall'] = movieData[1].value;
                movie['price'] = Number(movieData[2].value);
                movieData[0].value = '';
                movieData[1].value = '';
                movieData[2].value = '';
                let newMovieListElement = document.createElement('li');

                let newNameElement = document.createElement('span');
                newNameElement.textContent = movie.name;
                let newHallElement = document.createElement('strong');
                newHallElement.textContent = `Hall: ${movie.hall}`;
                newMovieListElement.appendChild(newNameElement);
                newMovieListElement.appendChild(newHallElement);

                let newDivMovieElement = document.createElement('div');
                let newPriceElement = document.createElement('strong');
                newPriceElement.textContent = movie.price.toFixed(2);

                let newTicketsSoldElement = document.createElement('input');
                newTicketsSoldElement.placeholder = 'Tickets Sold';
                let newArchiveButtonElement = document.createElement('button');
                newArchiveButtonElement.type = 'button';
                newArchiveButtonElement.textContent = 'Archive';
                newDivMovieElement.appendChild(newPriceElement);
                newDivMovieElement.appendChild(newTicketsSoldElement);
                newDivMovieElement.appendChild(newArchiveButtonElement);
                newMovieListElement.appendChild(newDivMovieElement);

                movieListElement.appendChild(newMovieListElement);

            }
        }
    }

    function archiveMovie(e) {
        if (e.target.type == 'button') {
            let currentMovieElement = e.target.parentNode.parentNode;
            let currentPriceElement = e.target.parentNode;
            let ticketsToArchive = currentPriceElement.querySelector('input').value;

            if (!isNaN(ticketsToArchive) && ticketsToArchive !== '') {

                let archiveMovieElement = document.createElement('li');

                let archiveNameElement = document.createElement('span');
                archiveNameElement.textContent = currentMovieElement.querySelector('span').textContent;

                let archiveTotalAmountElement = document.createElement('strong');
                let priceToArchive = currentPriceElement.querySelector('strong').textContent;
                archiveTotalAmountElement.textContent = `Total amount: ${(Number(ticketsToArchive) 
                    * Number(priceToArchive)).toFixed(2)}`;

                let deleteButtonElement = document.createElement('button');
                deleteButtonElement.textContent = 'Delete';
                deleteButtonElement.type = 'button';

                archiveMovieElement.appendChild(archiveNameElement);
                archiveMovieElement.appendChild(archiveTotalAmountElement);
                archiveMovieElement.appendChild(deleteButtonElement);
                archiveListElement.appendChild(archiveMovieElement);

                currentMovieElement.remove();

            }
        }
    }

    function deleteArchive(e) {
        if (e.target.type == 'button') {
            let archivedMovieElement = e.target.parentNode;
            archivedMovieElement.remove();
        }
    }

    onScreenButton.addEventListener('click', addMovie);
    movieListElement.addEventListener('click', archiveMovie);
    archiveListElement.addEventListener('click', deleteArchive)
    clearArchiveButton.addEventListener('click', (e) => {
        archiveListElement.innerHTML = '';
    })
}