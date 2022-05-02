function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener('click', encode);
    let encodedText = '';
    let decodedText = '';

    function encode(e) {
        if (e.target.tagName == 'BUTTON' && e.target.textContent == 'Encode and send it') {

            let textareaElement = e.target.parentNode.querySelector('textarea');
            let text = textareaElement.value;
            decodedText = '';
            for (let i = 0; i < text.length; i++) {
                let code = (text.charCodeAt([i])) + 1;
                let char = String.fromCharCode(code);
                decodedText += char;
            }

            let recievedTextareaElement = e.currentTarget.querySelector('textarea[disabled]');
            if (text !== '') {
                recievedTextareaElement.value = decodedText;
                textareaElement.value = '';
            }
        }

        if (e.target.tagName == 'BUTTON' && e.target.textContent == 'Decode and read it') {

         
            let decodedTextareaElement = e.target.parentNode.querySelector('textarea');
            let recievedText = decodedTextareaElement.value;

            if(decodedText === recievedText){
                encodedText = '';

                for (let i = 0; i < recievedText.length; i++) {
                    let code = (recievedText.charCodeAt([i])) - 1;
                    let char = String.fromCharCode(code);
                    encodedText += char;
                }
    
                decodedTextareaElement.value = encodedText;
    
            }
        }
    }
}