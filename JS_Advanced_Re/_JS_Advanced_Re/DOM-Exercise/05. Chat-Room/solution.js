function solve() {
    let messagesElement = document.getElementById('chat_messages');
    let sendButtonElement = document.getElementById('send');

    sendButtonElement.addEventListener('click', (e) => {
        let chatInputElement = document.getElementById('chat_input');


        let newMessage = document.createElement('div');
        newMessage.setAttribute('class', 'message my-message');
        newMessage.textContent = chatInputElement.value;
        messagesElement.appendChild(newMessage);

        chatInputElement.value = '';
    })
}