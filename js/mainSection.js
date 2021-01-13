const nav = document.querySelector(".header-nav-ul");
const navObject = document.querySelectorAll(".header-nav-li-font");
const navPopObject = document.querySelectorAll(".header-nav-pop-container");
console.log(navPopObject);

function navMouseOver(event) {
    const mouseOverObject = event.srcElement.innerText;

    switch(mouseOverObject) {
        case "예매":
            navObject[0].classList.add("js-nav-mouseover");
            navPopObject[0].classList.remove("js-nav-pop");
            break;
        case "영화":
            navObject[1].classList.add("js-nav-mouseover");
            navPopObject[1].classList.remove("js-nav-pop");
            break;
        case "영화관":
            navObject[2].classList.add("js-nav-mouseover");
            navPopObject[2].classList.remove("js-nav-pop");
            break;
        case "이벤트":
            navObject[3].classList.add("js-nav-mouseover");
            navPopObject[3].classList.remove("js-nav-pop");
            break;
        case "스토어":
            navObject[4].classList.add("js-nav-mouseover");
            navPopObject[4].classList.remove("js-nav-pop");
            break; 
    }

}

function navMouseOut(event) {
    const mouseOutObject = event.srcElement.innerText;

    switch(mouseOutObject) {
        case "예매":
            navObject[0].classList.remove("js-nav-mouseover");
            navPopObject[0].classList.add("js-nav-pop");
            break;
        case "영화":
            navObject[1].classList.remove("js-nav-mouseover");
            navPopObject[1].classList.add("js-nav-pop");
            break;
        case "영화관":
            navObject[2].classList.remove("js-nav-mouseover");
            navPopObject[2].classList.add("js-nav-pop");
            break;
        case "이벤트":
            navObject[3].classList.remove("js-nav-mouseover");
            navPopObject[3].classList.add("js-nav-pop");
            break;
        case "스토어":
            navObject[4].classList.remove("js-nav-mouseover");
            navPopObject[4].classList.add("js-nav-pop");
            break; 
    }

}

function init() {
    nav.addEventListener("mouseover", navMouseOver);
    nav.addEventListener("mouseout", navMouseOut);
}


init();
