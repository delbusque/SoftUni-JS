import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as carService from '../services/carService.js';
import { carTemplate } from './templates/carTemplate.js';

const listingTemplate = (cars = []) => html `
<!-- All Listings Page -->
<section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                <!-- Display all records -->
                ${cars.map(carTemplate)}          

                <!-- Display if there are no records -->
                ${cars.length == 0 
                ?html`<p class="no-cars">No cars in database.</p>`
                : nothing}
            </div>
        </section>
`;

export const renderListing = (ctx) => {
    carService.getAll().then(cars => {
        ctx.render(listingTemplate(cars))
    })
};