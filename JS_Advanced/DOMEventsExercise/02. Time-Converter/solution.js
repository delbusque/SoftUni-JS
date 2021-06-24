function attachEventsListeners() {

    let mainElement = document.querySelector('main').addEventListener('click', convert);

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    function convert(e) {

        if (e.target.id === 'daysBtn') {
            hoursInput.value = Number(Number(daysInput.value) * 60);
            minutesInput.value = Number(Number(daysInput.value) * 60 * 24);
            secondsInput.value = Number(Number(daysInput.value) * 60 * 60 * 24);
        }
        else if (e.target.id === 'hoursBtn') {
            daysInput.value = (Number(Number(hoursInput.value) / 24));
            minutesInput.value = Number(Number(hoursInput.value) * 60);
            secondsInput.value = Number(Number(hoursInput.value) * 60 * 60);
        }
        else if (e.target.id === 'minutesBtn') {
            daysInput.value = (Number(Number(minutesInput.value) / 60 / 24));
            hoursInput.value = Number(Number(minutesInput.value) / 60);
            secondsInput.value = Number(Number(minutesInput.value) * 60);
        }
        else if (e.target.id === 'secondsBtn') {
            daysInput.value = (Number(Number(secondsInput.value) / 24 / 60 / 60));
            hoursInput.value = Number(Number(secondsInput.value) / 60 / 60);
            minutesInput.value = Number(Number(secondsInput.value) / 60);
        }
    }
}