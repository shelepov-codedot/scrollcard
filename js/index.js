const scrollTest = (selector) => {
    if (selector) {
        const mainElem = document.querySelector(selector)
        const bodyHeight = document.body.offsetHeight
        const transY = ((window.pageYOffset - 2500) / (mainElem.offsetHeight - bodyHeight)) * -80;

        mainElem.style.setProperty("--scrollGrid", transY + "%")

    } else {
        console.log('selector not founded');
    }
}

window.addEventListener('scroll', () => {
    if (pageYOffset >= 2500)
        window.addEventListener('scroll', () => scrollTest('.main'));
})