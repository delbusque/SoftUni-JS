async function solution() {
    const titleURL = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const contentURL = `http://localhost:3030/jsonstore/advanced/articles/details/`;

    let titleResponse = await fetch(titleURL);
    let titleData = await titleResponse.json();

    titleData.forEach(title => {
        const accordionElement = document.createElement('div');
        accordionElement.classList.add('accordion');
        const headElement = document.createElement('div');
        headElement.classList.add('head');
        const spanElement = document.createElement('span');
        spanElement.textContent = title.title;
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('button');
        buttonElement.setAttribute('id', `${title._id}`);
        buttonElement.textContent = 'More';

        const extraElement = document.createElement('div');
        extraElement.classList.add('extra');       
        const contentElement = document.createElement('p');

        fetch(contentURL + title._id)
        .then(response => response.json())
        .then(data => {
            contentElement.textContent = data.content;
        });

        buttonElement.addEventListener('click', (e) => {
            if(buttonElement.textContent == 'More')
            {
                buttonElement.textContent = 'Less';
                extraElement.style.display = 'block'
            }else{
                buttonElement.textContent = 'More';
                extraElement.style.display = 'none';
            }
        });

        headElement.appendChild(spanElement);
        headElement.appendChild(buttonElement);
        accordionElement.appendChild(headElement);                
        extraElement.appendChild(contentElement);
        accordionElement.appendChild(extraElement);

        document.getElementById('main').appendChild(accordionElement);
    });

}
solution();