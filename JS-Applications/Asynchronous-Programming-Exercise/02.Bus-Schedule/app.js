function solve() {
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    let nextStopURL = `http://localhost:3030/jsonstore/bus/schedule/depot`
    let infoElement = document.getElementById('info');

    let currentStop = '';
    let nextStop = '';

    function depart() {
        departButton.disabled = true;
        arriveButton.disabled = false;
        fetch(nextStopURL).then(response => response.json())
            .then(data => {

                currentStop = data.name;
                nextStop = data.next;
                infoElement.textContent = `Next stop ${currentStop}`;
                nextStopURL = `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`
            })
            .catch(err => {
                infoElement.textContent = `Error`;
                departButton.disabled = true;
                arriveButton.disabled = true;

            })
    }

    function arrive() {
        departButton.disabled = false;
        arriveButton.disabled = true;
        fetch(nextStopURL).then(response => response.json())
            .then(data => {
                infoElement.textContent = `Arriving at ${currentStop}`;
                currentStop = data.name;
                nextStop = data.next;
                nextStopURL = `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`
            })
            .catch(err => {
                infoElement.textContent = `Error`;
                departButton.disabled = true;
                arriveButton.disabled = true;

            })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();