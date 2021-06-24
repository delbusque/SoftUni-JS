function solve() {
  let shoppingCartElement = document.querySelector('.shopping-cart');
  shoppingCartElement.addEventListener('click', addToBasket);
  shoppingCartElement.addEventListener('click', checkOut);


  let textareaElement = document.querySelector('textarea');
  textareaElement.setAttribute('disabled', false);
  let sum = 0;
  let boughtTypes = new Set();

  function addToBasket(e){
     if(e.target.tagName == 'BUTTON' && e.target.className == 'add-product'){
      let productName = e.target.parentNode.parentNode.querySelector('.product-title').textContent;
      let productPrice = e.target.parentNode.parentNode.querySelector('.product-line-price').textContent;
      productPrice = Number(productPrice);
      sum += productPrice;
      boughtTypes.add(productName);
      textareaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
     }
  }

  function checkOut(e){
   if(e.target.tagName == 'BUTTON' && e.target.className == 'checkout'){
      let arr = [];
      for(let item of boughtTypes){
         arr.push(item);
      }
      textareaElement.textContent += `You bought ${arr.join(', ')} for ${sum.toFixed(2)}.`;
      e.target.disabled = 'true';

      let addButtons = e.target.parentNode.querySelectorAll('.add-product');
      for(let button of addButtons){
         button.disabled = 'true';
      }
   }
  }
}