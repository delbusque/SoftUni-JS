function validate() {
    let inputElement = document.querySelector('input');
    inputElement.addEventListener('change', onChange);

    function onChange(e) {

        if (!/^[a-z]+@[a-z]+\.[a-z]+$/.test(e.target.value)) {
            e.target.classList.add('error');    
        }
        else{
            e.target.classList.remove('error');    
        }
    }
}