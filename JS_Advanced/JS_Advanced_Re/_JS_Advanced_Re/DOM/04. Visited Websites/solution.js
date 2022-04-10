function solve() {
    let middledElement = document.getElementsByClassName('middled');

    middledElement[0].addEventListener('click', (e) => {
        let siteElements = e.currentTarget.getElementsByClassName('link-1');
        for (const site of siteElements) {

            let spanElements = site.querySelectorAll('a>span');

            if (spanElements[0] == e.target || spanElements[1] == e.target) {
                let clicksElement = site.querySelector('p');
                let clicksArr = clicksElement.textContent.split(' ');
                let clicks = Number(clicksArr[1]);
                ++clicks;
                clicksElement.textContent = `visited ${clicks} times`;
            };
        }
    })
}