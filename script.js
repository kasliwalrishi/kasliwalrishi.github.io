const dynamicText = document . querySelector ( "h1 span") ;
const words = ["Rishi Kasliwal ","I Love C,C++","I Love Java,Dart","I Love Python","I Love Web Dev", "I Love App Dev", "Started Learning Flutter","Hip-Hop listener 🎧","Thank you for reading :)"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
const currentWord = words [wordIndex];
const currentChar = currentWord. substring(0, charIndex);
dynamicText .textContent = currentChar;
dynamicText.classList.add("stop-blinking");

if(!isDeleting && charIndex< currentWord.length){
    charIndex++;
     setTimeout(typeEffect,100);
} else if(isDeleting && charIndex>0){
    charIndex--;
    setTimeout(typeEffect,50);
} else{
    isDeleting=!isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex=!isDeleting ? (wordIndex+1) % words.length : wordIndex;
    setTimeout(typeEffect,1200);
}
}
typeEffect();
