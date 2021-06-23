function deleteByEmail() {
    
    let rowElements = document.querySelectorAll('tbody tr');
    let buttonElement = document.getElementsByTagName('button');
    let inputElement = document.querySelector('input');
    let resultElement = document.getElementById('result');

    for (let row of rowElements) {
        let current = row.querySelectorAll('td');
        
            if(current[1].textContent === inputElement.value){
                row.remove();
                resultElement.textContent = 'Deleted';
            }
            else{
                resultElement.textContent = 'Not found.';
            }
    }
}