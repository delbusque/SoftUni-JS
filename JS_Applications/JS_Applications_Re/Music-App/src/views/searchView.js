import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';
import { albumTemplate } from './albumTemplate.js';
import { checkAlbumForm } from '../helpers.js';


const searchTemplate = (onChange, onSearch, albums = []) => html `

<section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input @input=${onChange} id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>
            <div class="search-result">
                     ${albums.map(albumTemplate)}             

                     
                     ${albums.length == 0 ? html`<p class="no-result">No result.</p>`: nothing}
               
           </div>

          
        </section>
`;



export const renderSearch = (ctx) => {
    let currentSearch = '';
    
    const onSearchChange = (e) => {
        currentSearch = e.target.value;
    };

    const onSearchClick = (e) => {
        let name = currentSearch;
        let input = document.getElementById('search-input');
        if(input.value){
            albumService.getByName(name).then(albums=>{
                ctx.render(searchTemplate(onSearchChange, onSearchClick, albums));
            });
        }
        else{
            alert('Please fill the empty album name field !')
            return;
        }

        
    }
    ctx.render(searchTemplate(onSearchChange, onSearchClick));
};