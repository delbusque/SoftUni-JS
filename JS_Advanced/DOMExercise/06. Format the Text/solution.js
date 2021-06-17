function solve() {
  let textAreaElement = document.getElementById('input');
  let textBySentences = textAreaElement.value
  .split('.').filter(x => x !== '').map(x => x + '.');

  let paragraphCount = Math.ceil(textBySentences.length / 3);

  let outputDivElement = document.getElementById('output');

  for (let index = 0; index < paragraphCount; index++) {
    
    outputDivElement.innerHTML += `<p>${textBySentences.splice(0,3).join('')}</p>`;
  }
}