function scrollGridImg() {
    let bodyHeight = document.body.offsetHeight
    let mainHeight = document.querySelector("main").offsetHeight
    let cardList = document.querySelector(".grid-cards")
    let transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100;

    cardList.style.setProperty("--scrollGrid", transY + "%");
}

scrollGridImg();

window.addEventListener("resize", scrollGridImg);
window.addEventListener("scroll", scrollGridImg);