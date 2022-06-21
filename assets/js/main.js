// Configuração do menu móvel
window.onload = function () {
    document.querySelector(".menuMobile img").addEventListener("click", function () {
        if (document.querySelector(".menu nav ").style.display == 'flex') {
            document.querySelector(".menu nav ").style.display = 'none';
        } else {
            document.querySelector(".menu nav ").style.display = 'flex';
        }
    })

}

window.addEventListener('resize', function () {
    var largura = window.innerWidth;

    if (largura >= 800)
        document.querySelector(".menu nav ").removeAttribute('style');
});

// Configuração do slide do banner

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
        ]
  });
});

// Configuração dos demais slides

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