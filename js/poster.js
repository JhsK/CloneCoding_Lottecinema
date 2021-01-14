const poster = document.getElementsByClassName("main-poster-hover-container");


function postersMouseover(event) {
    const eventPoster = event.target.parentNode.nextElementSibling;
    console.log(eventPoster);
    
    eventPoster.removeAttribute('id', 'js-none');
    console.log(eventPoster);
}

function postersMouseout(event) {
    const eventPoster = event.target.parentNode.nextElementSibling;

    eventPoster.setAttribute('id', 'js-none');
}

Array.from(poster).forEach(posters => {
    posters.addEventListener("mouseover", postersMouseover);
    posters.addEventListener("mouseout", postersMouseout);
});





