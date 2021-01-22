const scrollTest = (selector = 'main') => {
    if (selector == 'main') {
        let bodyHeight = document.body.offsetHeight
        let mainHeight = document.querySelector(selector)
        let transY = (window.pageYOffset / (mainHeight.offsetHeight - bodyHeight)) * -100

        mainHeight.style.setProperty("--scrollGrid", transY + "%")
    } else {
        console.log('selector not founded');
    }
}

window.addEventListener('scroll', () => scrollTest('main'));