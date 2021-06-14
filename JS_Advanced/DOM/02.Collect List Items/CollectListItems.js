function extractText() {
    let listElements = document.querySelectorAll('#items li');
    let result = '';

    for (const element of listElements) {
        result += element.textContent.trim() + '\n';
    }
    
    let textAreaElement = document.getElementById('result');
    textAreaElement.textContent = result.trim();
}