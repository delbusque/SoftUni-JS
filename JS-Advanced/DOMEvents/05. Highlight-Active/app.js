function focused() {
    let inputElements = document.querySelectorAll('input');

    for (let input of inputElements) {

        input.addEventListener('focus', (e)=>{
            input.parentNode.classList.add('focused');      
        });

        input.addEventListener('blur', (e)=>{
            input.parentNode.classList.remove('focused');
        })
    }
}