function create(words) {
   
   let contentElement = document.getElementById('content');
   
   for(let section of words){
      let newDiv = document.createElement('div');
      let newP = document.createElement('p', 'display:none');
      newP.textContent = section;
      newP.style.display = 'none';
      newDiv.addEventListener('click', display);

      newDiv.appendChild(newP);
      contentElement.appendChild(newDiv);
   }

   function display(e){
     let currentP = e.target.querySelector('p');
     currentP.style.display = 'block';
   }
}