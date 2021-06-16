function search() {
   let inputTextElement = document.getElementById('searchText');
   let townsListElement = document.querySelectorAll('#towns > li');
   let resultTextElement = document.getElementById('result');

   let sum = 0;

   for (const town of townsListElement) {
      if(town.textContent.toLowerCase().includes(inputTextElement.value.toLowerCase())){
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         sum++;

      }
      else{
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }

   resultTextElement.textContent = `${sum} matches found`;

}
