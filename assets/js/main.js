$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$(document).ready(function () {
    $('.section-teams-slides').slick({
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 2
  });
});

