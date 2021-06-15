function sumTable() {

    let tdCostElements = Array.from(document.querySelectorAll('td:nth-child(2)'));

    let sumElements = tdCostElements.pop();
    let sum = 0;

    for (const el of tdCostElements) {
        sum += Number(el.textContent);
    }

    sumElements.textContent = sum;
}