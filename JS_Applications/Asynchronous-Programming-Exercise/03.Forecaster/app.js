function attachEvents() {

    const submitButton = document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');
    let errorDivElement = document.createElement('div');
    errorDivElement.classList.add('label', 'bl');
    forecastElement.appendChild(errorDivElement);           


    let url = 'http://localhost:3030/jsonstore/forecaster/locations';

    submitButton.addEventListener('click', async () => {     
        try {
            errorDivElement.textContent = '';
            const currentFcastDivElement = document.getElementById('current');
            Array.from(currentFcastDivElement.querySelectorAll('div'))
                .forEach((a, i) => {
                    i != 0 ? a.remove() : a;
                })
            const upcomingDivElement = document.getElementById('upcoming');
            Array.from(upcomingDivElement.querySelectorAll('div'))
                .forEach((a, i) => {
                    i != 0 ? a.remove() : a;
                })

            forecastElement.style.display = 'block';
         
            let location = document.getElementById('location').value;
            let response = await fetch(url);
            let data = await response.json();
            let currentLocation = '';
            data.forEach(loc => {
                if (loc.name === location) {
                    currentLocation = loc.code;
                }
            });

            const currentForecatsURL = `http://localhost:3030/jsonstore/forecaster/today/` + currentLocation;
            let currentConditionsResponse = await fetch(currentForecatsURL);
            let currentConditions = await currentConditionsResponse.json();

            let currOverall = currentConditions.forecast.condition;
            let currLow = currentConditions.forecast.low;
            let currHigh = currentConditions.forecast.high;
            let currLocationName = currentConditions.name;


            let forecastCurrent = document.createElement('div');
            forecastCurrent.classList.add('forecasts');
            let symbolCurrent = document.createElement('span');
            symbolCurrent.classList.add('condition');
            symbolCurrent.classList.add('symbol');

            let dataCurrent = document.createElement('span');
            dataCurrent.classList.add('condition');

            let currLocation = document.createElement('span');
            currLocation.classList.add('forecast-data');
            currLocation.textContent = currLocationName;

            let currTemperature = document.createElement('span');
            currTemperature.classList.add('forecast-data');
            currTemperature.textContent = `${currLow}°/${currHigh}`;

            let currAll = document.createElement('span');
            currAll.classList.add('forecast-data');
            currAll.textContent = currOverall;

            dataCurrent.appendChild(currLocation);
            dataCurrent.appendChild(currTemperature);
            dataCurrent.appendChild(currAll);

            if (currOverall == 'Sunny') {
                symbolCurrent.innerHTML = '&#x2600;';
            }
            else if (currOverall == "Partly sunny") {
                symbolCurrent.innerHTML = '&#x26C5;';
            }
            else if (currOverall == "Overcast") {
                symbolCurrent.innerHTML = '&#x2601;';
            }
            else if (currOverall == "Rain") {
                symbolCurrent.innerHTML = '&#x2614;';
            }
            forecastCurrent.appendChild(symbolCurrent);
            forecastCurrent.appendChild(dataCurrent);
            currentFcastDivElement.appendChild(forecastCurrent);


            const upcomingForecastURL = `http://localhost:3030/jsonstore/forecaster/upcoming/` + currentLocation;
            let upcomingResponse = await fetch(upcomingForecastURL);
            let upcomingWeather = await upcomingResponse.json();

            let weatherDivElement = document.createElement('div');
            weatherDivElement.classList.add('forecast-info');

            upcomingWeather.forecast.forEach(day => {
                let overallWeather = day.condition;
                let lowTemperature = day.low;
                let highTemperature = day.high;

                let weatherSpanElement = document.createElement('span');
                weatherSpanElement.classList.add('upcoming');


                let symbolElement = document.createElement('span');
                symbolElement.classList.add('symbol');
                if (overallWeather == 'Sunny') {
                    symbolElement.innerHTML = '&#x2600;';
                }
                else if (overallWeather == "Partly sunny") {
                    symbolElement.innerHTML = '&#x26C5;';
                }
                else if (overallWeather == "Overcast") {
                    symbolElement.innerHTML = '&#x2601;';
                }
                else if (overallWeather == "Rain") {
                    symbolElement.innerHTML = '&#x2614;';
                }

                let weatherTemperatureElement = document.createElement('span');
                weatherTemperatureElement.classList.add('forecast-data');
                weatherTemperatureElement.textContent = `${lowTemperature}°/${highTemperature}`;

                let weatherAllElement = document.createElement('span');
                weatherAllElement.classList.add('forecast-data');
                weatherAllElement.textContent = overallWeather;

                weatherSpanElement.appendChild(symbolElement);
                weatherSpanElement.appendChild(weatherTemperatureElement);
                weatherSpanElement.appendChild(weatherAllElement);
                weatherDivElement.appendChild(weatherSpanElement);
                upcomingDivElement.appendChild(weatherDivElement);
            })
        }
        catch (err) {
            errorDivElement.textContent = 'Error';
        }
    });
}

attachEvents();