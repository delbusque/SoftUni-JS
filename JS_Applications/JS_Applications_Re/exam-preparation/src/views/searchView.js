import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as carService from '../services/carService.js';
import { carTemplate } from './templates/carTemplate.js';

const searchTemplate = (onChange, onSearch, cars = []) => html `
<!-- Search Page -->
<section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" @input=${onChange} type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list" @click=${onSearch}>Search</button>
            </div>

            <h2>Results:</h2>
            <div class="listings">

                    ${cars.map(carTemplate)}             

                    <!-- Display if there are no records -->
                    ${cars.length == 0 
                    ?html`<p class="no-cars">No cars in database.</p>`
                    : nothing}
            </div>
        </section>
`;



export const renderSearch = (ctx) => {
    let currentSearch = '';
    
    const onSearchChange = (e) => {
        currentSearch = e.target.value;
    };

    const onSearchClick = (e) => {
        let year = Number(currentSearch);

        carService.getByYear(year).then(cars=>{
            ctx.render(searchTemplate(onSearchChange, onSearchClick, cars));

        });
    }
    ctx.render(searchTemplate(onSearchChange, onSearchClick));
};