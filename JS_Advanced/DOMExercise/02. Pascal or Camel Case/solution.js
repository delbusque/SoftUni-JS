function solve() {
  let textElement = document.getElementById('text').value
    .toLowerCase().split(' ');
  let namingConventionElement = document.querySelector('#naming-convention').value;
  

  if (namingConventionElement === 'Pascal Case') {
    textElement = textElement.map(x => x[0].toUpperCase() + x.slice(1));
    document.getElementById('result').textContent = textElement.join('');

  }
  else if (namingConventionElement === 'Camel Case') {
    textElement = textElement.map((x, i) => x = i === 0 ? x : x[0].toUpperCase() + x.slice(1));
    document.getElementById('result').textContent = textElement.join('');
  }
  else {
    document.getElementById('result').textContent = 'Error!';
  }
}