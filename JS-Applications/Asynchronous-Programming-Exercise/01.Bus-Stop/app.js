function getInfo() {
    let stopInput = document.getElementById('stopId').value;
    let busesElement = document.getElementById('buses');
    let stopElement = document.getElementById('stopName');

    busesElement.innerHTML = '';
    stopElement.innerHTML = '';

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopInput}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {       
        stopElement.textContent = data.name;        
        let busData = Object.keys(data.buses).map((key) => [key, data.buses[key]]);
        busData.forEach(bus => {
            let busNumber = bus[0];
            let busTime = bus[1];
            let currentBus = document.createElement('li');
            currentBus.textContent = `Bus ${busNumber} arrives in ${busTime} minutes`;
            busesElement.appendChild(currentBus);
        })
    })
    .catch(err => {
        stopElement.textContent = 'Error';
    })

}