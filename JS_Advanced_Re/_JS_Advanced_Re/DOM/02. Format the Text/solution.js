function solve() {
    let inputTextElement = document.getElementById('input');
    let sentencesArr = inputTextElement.textContent.split('.');
    let outputElement = document.getElementById('output');
    let outputStr = '';
    let filledParagraph = document.createElement('p');

    for (let i = 1; i <= sentencesArr.length; i++) {
        let currSentence = sentencesArr[i] + '.';

        if (sentencesArr[i] > 0) {
            outputStr += currSentence;

        };

        if (i % 3 === 0) {

            filledParagraph.textContent = outputStr;
            outputElement.appendChild(filledParagraph);
            console.log(outputStr);
            //outputStr = '';
        };
        //filledParagraph.textContent = '';
    }


}