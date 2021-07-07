function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const mainElement = document.getElementById('main');
    mainElement.innerHTML = '';

    fetch(url).then(response => response.json())
        .then(data => {
            let usersData = Object.keys(data).map((key) => [key, data[key]]);

            usersData.forEach((user, i) => {
                let username = user[1].username;
                let email = user[1].email;
                let age = user[1].age;
                profileFactory(username, email, age, i);
            });

            const profileElements = document.querySelectorAll('.profile');
            profileElements.forEach((profile, ix) => {
                let button = profile.querySelector('button');
                let lock = profile.querySelectorAll('input');                                
                let hiddenElement = profile.querySelector(`#user${ix + 1}HiddenFields`);
                if(hiddenElement.id == 'user4HiddenFields' || hiddenElement.id == 'user5HiddenFields'){
                    button.textContent = 'Hide it';
                }
                
                lock[1].addEventListener('click', (e) =>{
                    if(e.target.value == 'unlock'){
                        e.target.value = 'lock';
                        lock[0].value = 'unlock';
                    }
                });
                lock[0].addEventListener('click', (e) =>{
                    if(e.target.value == 'unlock'){
                        e.target.value = 'lock';
                        lock[1].value = 'unlock';
                    }
                });
               
                profile.addEventListener('click', (e) => {

                    if(e.target == button && lock[1].value == 'lock'){
                        if(button.textContent == 'Show more'){
                            button.textContent = 'Hide it';
                            hiddenElement.style.display = "block";
                        }else{
                            button.textContent = 'Show more';
                            hiddenElement.style.display = "none";
                        }
                    }
                })
            });

            function profileFactory(username, email, age, i) {
                const divContainer = document.createElement('div');
                divContainer.classList.add('profile');
                const image = document.createElement('img');
                image.src = './iconProfile2.png';
                image.classList.add('userIcon');

                const labelLock = document.createElement('label');
                labelLock.textContent = 'Lock'
                const radioLock = document.createElement('input');
                radioLock.setAttribute('type', 'radio');
                radioLock.setAttribute('name', `user${i + 1}Locked`);
                radioLock.setAttribute('value', `lock`);
                radioLock.setAttribute('checked', true);

                const br = document.createElement('br');
                const hr = document.createElement('hr');

                const labelUnlock = document.createElement('label');
                labelUnlock.textContent = 'Unlock'
                const radioUnlock = document.createElement('input');
                radioUnlock.setAttribute('type', 'radio');
                radioUnlock.setAttribute('name', `user${i + 1}Locked`);
                radioUnlock.setAttribute('value', `unlock`);

                const usernameLabel = document.createElement('label');
                usernameLabel.textContent = 'Username';
                const usernameElement = document.createElement('input');
                usernameElement.setAttribute('type', 'text');
                usernameElement.setAttribute('name', `user${i + 1}Username`);
                usernameElement.setAttribute('value', `${username}`);
                usernameElement.setAttribute('disabled', true);
                usernameElement.setAttribute('readonly', true);

                let userDiv = document.createElement('div');
                userDiv.setAttribute('id', `user${i + 1}HiddenFields`);

                const hr2 = document.createElement('hr');
                const emailLabel = document.createElement('label');
                emailLabel.textContent = 'Email:';
                const emailElement = document.createElement('input');
                emailElement.setAttribute('type', 'email');
                emailElement.setAttribute('name', `user${i + 1}Email`);
                emailElement.setAttribute('value', `${email}`);
                emailElement.setAttribute('disabled', true);
                emailElement.setAttribute('readonly', true);

                const ageLabel = document.createElement('label');
                ageLabel.textContent = 'Age:';
                const ageElement = document.createElement('input');
                ageElement.setAttribute('type', 'email');
                ageElement.setAttribute('name', `user${i + 1}Age`);
                ageElement.setAttribute('value', `${age}`);
                ageElement.setAttribute('disabled', true);
                ageElement.setAttribute('readonly', true);

                const buttonMoreLess = document.createElement('button');
                buttonMoreLess.textContent = 'Show more';

                divContainer.appendChild(image);
                divContainer.appendChild(labelLock);
                divContainer.appendChild(radioLock);
                divContainer.appendChild(labelUnlock);
                divContainer.appendChild(radioUnlock);
                divContainer.appendChild(br);
                divContainer.appendChild(hr);
                divContainer.appendChild(usernameLabel);
                divContainer.appendChild(usernameElement);
                divContainer.appendChild(userDiv);
                divContainer.appendChild(buttonMoreLess);

                userDiv.appendChild(hr2);
                userDiv.appendChild(emailLabel);
                userDiv.appendChild(emailElement);
                userDiv.appendChild(ageLabel);
                userDiv.appendChild(ageElement);

                mainElement.appendChild(divContainer);
            }
        });
}