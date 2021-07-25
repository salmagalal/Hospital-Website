//animation 
const text = document.querySelector(".fancy  ");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 70);
function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null;
}
function finalizeAndCleanUp (event) {
    if (event.propertyName == 'opacity') {
        this.style.opacity = '0'
        this.removeEventListener('transitionend', finalizeAndCleanUp)
    }
}
// to fix the error of space between words 
element.style.transition = 'opacity 2s'
element.style.opacity = '0'
element.addEventListener('transitionend', finalizeAndCleanUp)
// next line's important but there's no need to store the value
element.offsetHeight
element.style.opacity = '1'