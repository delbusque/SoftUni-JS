function lockedProfile() {

    let mainElement = document.getElementById('main').addEventListener('click', showMore);

    function showMore(e) {
        if (e.target.tagName === 'BUTTON') {
            let isLocked = e.target.parentNode.querySelector('input[type=radio]:checked').value === 'lock';
        
            if(isLocked){
               return;
            }

            let currentDiv = e.target.parentNode.querySelector('div');
            let isVisible = currentDiv.style.display === 'block';
            currentDiv.style.display = isVisible ? 'none' : 'block';
            e.target.textContent = !isVisible ? 'Hide it' : 'Show more'; 

        }
    }
    
}