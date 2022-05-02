window.addEventListener('load', solution);

function solution() {
  let divElement = document.getElementById('form');

  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let postcodeElement = document.getElementById('code');

  let info = [];

  let submitButtonElement = document.getElementById('submitBTN')
    .addEventListener('click', (e) => {

      if (fullNameElement.value && emailElement.value) {

        let fullNameLiElement = document.createElement('li');
        fullNameLiElement.textContent = `Full Name: ${fullNameElement.value}`;
        info.push(fullNameElement.value);
        fullNameElement.value = '';

        let emailLiElement = document.createElement('li');
        emailLiElement.textContent = `Email: ${emailElement.value}`;
        info.push(emailElement.value);
        emailElement.value = '';

        let phoneLiElement = document.createElement('li');
        phoneLiElement.textContent = `Phone Number: ${phoneElement.value}`;
        info.push(phoneElement.value);
        phoneElement.value = '';

        let addressLiElement = document.createElement('li');
        addressLiElement.textContent = `Address: ${addressElement.value}`;
        info.push(addressElement.value);
        addressElement.value = '';

        let postcodeLiElement = document.createElement('li');
        postcodeLiElement.textContent = `Postal Code: ${postcodeElement.value}`;
        info.push(postcodeElement.value);
        postcodeElement.value = '';

        let infoPreviewElement = document.getElementById('infoPreview');
        infoPreviewElement.appendChild(fullNameLiElement);
        infoPreviewElement.appendChild(emailLiElement);
        infoPreviewElement.appendChild(phoneLiElement);
        infoPreviewElement.appendChild(addressLiElement);
        infoPreviewElement.appendChild(postcodeLiElement);

        e.target.disabled = true;
        let editButtonElement = document.querySelector('#editBTN');
        editButtonElement.disabled = false;
        let continueButtonElement = document.querySelector('#continueBTN');
        continueButtonElement.disabled = false;

        editButtonElement.addEventListener('click', (ev) => {
          fullNameElement.value = info[0];
          emailElement.value = info[1];
          phoneElement.value = info[2];
          addressElement.value = info[3];
          postcodeElement.value = info[4];
          ev.target.disabled = true;
          continueButtonElement.disabled = true;
          e.target.disabled = false;

          let infoPreviewElementChildLi = document.querySelectorAll('li');
          for(let li of infoPreviewElementChildLi){
            infoPreviewElement.removeChild(li);
          }
        })

        continueButtonElement.addEventListener('click', () => {
          let blockElement = document.getElementById('block');
          blockElement.innerHTML = '';
          let h3DoneElement = document.createElement('h3');
          h3DoneElement.textContent = 'Thank you for your reservation!';

          blockElement.appendChild(h3DoneElement);

        })
      }
    });
}
