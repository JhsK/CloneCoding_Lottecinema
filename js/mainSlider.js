const bg = document.querySelector(".main-slider-container");
const leftBtn = document.querySelector(".main-slider-left-btn");
const rightBtn = document.querySelector(".main-slider-right-btn");

// 배경 이미지 이름 정의
const movieGod = "AlongWithTheGods_1920774.jpg";
const movieFather = "DadOfLight_1920774.jpg";
const movieWolf = "DancesWithWolves_1920774.jpg";
const movieTrue = "JtLeroy_1920774.jpg";
const movieCollection = "MortuaryCollection_1920774.jpg";
const movieSoul = "Soul_1920774.jpg";
const movieSister = "ThreeSisters_1920774.jpg";

const movieArray = [movieGod, movieFather, movieWolf, movieTrue, movieCollection, movieSoul, movieSister];

let index = 0;

function clickLeftBtn() {
    if(index === 0) {
        index = movieArray.length - 1;
    } else {
        index = index - 1;
    }
    bg.style.backgroundImage = `url('./image/${movieArray[index]}')`;
}

function clickRightBtn() {
    if(index === 6) {
        index = 0;
    } else {
        index = index + 1;
    }
    bg.style.backgroundImage = `url('./image/${movieArray[index]}')`;
}

function init() {
    leftBtn.addEventListener("click", clickLeftBtn);
    rightBtn.addEventListener("click", clickRightBtn);
}

init();
