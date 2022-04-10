window.addEventListener('load', solve);

function solve() {
    let recievedOrdersElement = document.getElementById('received-orders');
    let completedOrdersElement = document.getElementById('completed-orders');
    let clearButtonElement = document.querySelector('#completed-orders button')


    let sendButtonElement = document.querySelector('#right button')

    let typeProductInputElement = document.getElementById('type-product');
    let descriptionInputElement = document.getElementById('description')
    let clientNameInputElement = document.getElementById('client-name')
    let clientPhoneInputElement = document.getElementById('client-phone')


    sendButtonElement.addEventListener('click', (e) => {

        e.preventDefault();

        let divContainer = document.createElement('div')
        divContainer.classList.add('container')

        let productTypeElement = document.createElement('h2')
        productTypeElement.textContent = `Product type to repair: ${typeProductInputElement.value}`;

        let clientInfoElement = document.createElement('h3')
        clientInfoElement.textContent = `Client information: ${clientNameInputElement.value}, ${clientPhoneInputElement.value}`

        let descriptionElement = document.createElement('h4')
        descriptionElement.textContent = `Description of the problem: ${descriptionInputElement.value}`

        let buttonStartRepair = document.createElement('button')
        buttonStartRepair.textContent = 'Start repair'
        buttonStartRepair.classList.add('start-btn')

        let buttonFinishRepair = document.createElement('button')
        buttonFinishRepair.textContent = 'Finish repair'
        buttonFinishRepair.classList.add('finish-btn')
        buttonFinishRepair.disabled = true;
        if (typeProductInputElement.value && descriptionInputElement.value && clientNameInputElement.value && clientPhoneInputElement.value) {
            divContainer.appendChild(productTypeElement)
            divContainer.appendChild(clientInfoElement)
            divContainer.appendChild(descriptionElement)
            divContainer.appendChild(buttonStartRepair)
            divContainer.appendChild(buttonFinishRepair)

            recievedOrdersElement.appendChild(divContainer)

            typeProductInputElement.value = '';
            clientNameInputElement.value = '';
            clientPhoneInputElement.value = '';
            descriptionInputElement.value = '';
        }
        buttonStartRepair.addEventListener('click', (e) => {
            e.preventDefault();
            buttonStartRepair.disabled = true;
            buttonFinishRepair.disabled = false;
        })

        buttonFinishRepair.addEventListener('click', (e) => {
            e.preventDefault();
            recievedOrdersElement.removeChild(divContainer)

            completedOrdersElement.appendChild(divContainer);
            buttonStartRepair.remove()
            buttonFinishRepair.remove()
        })

    })


    clearButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let forRemoval = completedOrdersElement.querySelectorAll('.container');
        forRemoval.forEach(el => el.remove())
    })
}