import navigation from '../templates/navigationTemplate.js'

export default function(context) {
    console.log(context);
    document.querySelector('.root').innerHTML = navigation();
}