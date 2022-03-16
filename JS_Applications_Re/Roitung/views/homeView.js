import navigation from '../templates/navigationTemplate.js'

export default function(context) {
    document.querySelector('.root').innerHTML = navigation();
}