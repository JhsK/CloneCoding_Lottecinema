const poster = document.getElementsByClassName("main-poster-hover-container");


function postersMouseenter(event) {
    const eventPoster = event.target.nextElementSibling;
    
    eventPoster.removeAttribute('id', 'js-none');
}

function postersMouseleave(event) {
    const eventPoster = event.target.nextElementSibling;

    eventPoster.setAttribute('id', 'js-none');
}

Array.from(poster).forEach(posters => {
    posters.addEventListener("mouseenter", postersMouseenter);
    posters.addEventListener("mouseleave", postersMouseleave);
});





