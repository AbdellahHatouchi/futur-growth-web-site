const btnToggle = document.getElementById("menu-btn")
const navItems = document.getElementById("nav-items")
btnToggle.addEventListener('click',()=>{
    navItems.classList.toggle('open')
})


// create circle text with animation :
const elementsCircle = document.querySelectorAll('.circle-data-text');
const circleData = (element)=>{
    element.innerHTML = element.innerHTML.split('').map(
        (char, i) => (
            `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
        )
    ).join("")
}
Array.from(elementsCircle).forEach((element)=>circleData(element))
// end

// animation number 
const elementNumber = document.getElementById('num');
const interval = 2000;
let activete = false;
const incrementNumber = () => {
    activete = true;
    let startValue = 0;
    let endValue = +elementNumber.dataset.val
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        elementNumber.innerHTML = `+${startValue}.`
        if (startValue === endValue) {
            clearInterval(counter);
            activete=false;
        }
    }, duration)
}
function handleScroll() {
    const scrollPosition = window.scrollY;

    if (elementNumber.offsetTop - elementNumber.offsetHeight -200 <= scrollPosition && !activete) {
        incrementNumber();
        // window.removeEventListener('scroll', handleScroll);
    }
}



// accordion
const accordion = (elements,className)=>{
    Array.from(elements).forEach((element)=>{
        element.addEventListener('click',function(){
            this.classList.toggle(className)
        })
    })
}
const prentElement = document.querySelector('.list-items');
const childrenElement = prentElement.children
accordion(childrenElement,'open');
// accordion 2:
const prentElementTwo = document.getElementById('accordion');
const childrenElementTwo = prentElementTwo.children 
accordion(childrenElementTwo,'show');
// accordion 3:
const prentElementThree = document.getElementById('accordion-three');
const childrenElementThree = prentElementThree.children 
accordion(childrenElementThree,'show');
// create content of text as tape with animation
const textContainer = document.querySelectorAll('.text-container');
const repeatingText = document.querySelector('.repeating-text');

function repeatText() {
    const containerWidth = textContainer[0].offsetWidth;
    const textWidth = repeatingText.offsetWidth;
    const repetitions = Math.ceil(containerWidth / (textWidth == 0 ? 1 : textWidth));
    let repeatedText = '';
    for (let i = 0; i < repetitions; i++) {
        repeatedText += `<div class="repeating-text">${repeatingText.innerHTML}</div>`;
    }
    Array.from(textContainer).forEach((_, i) => {
        textContainer[i].innerHTML = repeatedText;
    });

}

window.addEventListener('resize', repeatText);
repeatText();

// animation 
const elements1 = document.querySelectorAll('.animate-on-scroll');
const elements2 = document.querySelectorAll('.animate-on-scrollX');
const elements3 = document.querySelectorAll('.animate-on-scroll-X');
const elements4 = document.querySelectorAll('.animate-on-scroll-Y');
const elements = [...elements1,...elements2,...elements3,...elements4]
function animateOnScroll() {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementPosition = element.getBoundingClientRect();

        if (elementPosition.top <= window.innerHeight && elementPosition.bottom >= 0) {
            element.classList.add('animated');
        } else {
            element.classList.remove('animated');
        }
    }
}

animateOnScroll();

window.addEventListener('scroll', ()=>{
    animateOnScroll();
    handleScroll();
});