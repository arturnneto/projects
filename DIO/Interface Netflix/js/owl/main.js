$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function assistirId() {
    window.open('https://www.youtube.com/watch?v=wq3VOElmzTk'),
    '_blank';
}

function infoId() {
    window.open('https://www.themoviedb.org/tv/40424-initial-d'),
    '_blank';
}