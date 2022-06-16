// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 1
//         },
//         1000: {
//             items: 1
//         }
//     }
// })

$(document).ready(function () {
    $('.section-teams-slides').slick({
        infinite: true,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                    // infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
  });
});

$(document).ready(function () {
    $('.section-depositions, .section-premium-area, .banner-slide').slick({
        infinite: true,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1

    });
});