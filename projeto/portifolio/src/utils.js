export function displayDialog(text,onDisplayEnd){
    const dialogueUi = document.getElementById('textbox-container');
    const dialogue = document.getElementById('dialogue');
    dialogue.style.display = 'block';

    let index = 0
    let currentText = ""
    const intervalRef = setInterval(() =>{
        if(index < text.length) {
            currentText += text[index]
            dialogue.innerHTML = currentText
            index++;
            return;
        }
        clearInterval(intervalRef);
    },5)

    const closeBtn = document.getElementById('close')
    function onCloseBtnClick(){
        onDisplayEnd();
        dialogueUi.style.display = 'none'
        dialogue.innerHTML = ""
        clearInterval(intervalRef)
        closeBtn.removeEventListener('click', onCloseBtnClick);
    }
    closeBtn.addEventListener('click', onCloseBtnClick)
}