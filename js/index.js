const scrollGrid = (selector) => {
    if (selector) {
        const bodyHeight = document.body.offsetHeight
        const mainHeight = document.querySelector('main').offsetHeight
        const cards = document.querySelector(selector)
        const transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100;

        cards.style.setProperty('--scrollGrid', transY + '%');
    } else {
        console.log('selector not founded');
    }
}

window.addEventListener("scroll", () => scrollGrid('.grid-cards'));

/* const scrollTest = (selector) => {
    if (selector) {
        const mainElem = document.querySelector(selector)
        const bodyHeight = document.body.offsetHeight
        const transY = (window.pageYOffset / (mainElem.offsetHeight - bodyHeight)) * -100

        mainElem.style.setProperty("--scrollGrid", transY + "%")
    } else {
        console.log('selector not founded');
    }
}

window.addEventListener('scroll', () => scrollTest('.main')); */