function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const tableRowsElement = document.querySelectorAll('tbody tr');

   function onClick() {
      let searchInputElement = document.querySelector('#searchField').value.toLowerCase();
      

      for (let row of tableRowsElement) {
         if(row.textContent.toLowerCase().includes(searchInputElement)){
            row.setAttribute('class', 'select');
            console.log(row);
         }
         else{
            row.removeAttribute('class');
         }      
      }
   }
}