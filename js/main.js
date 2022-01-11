$(function () {
    $('.header__bottom').vide('video/video.mp4');
    $('.header__bottom').vide('video/video.mp4', {
        muted: true,
        loop: true,
        autoplay: true,
    });

    $('.caorusel__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 951,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 681,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    let clock;
    clock = $('.clock').FlipClock({
        autoStart: true,
        countdown: true,
        language: 'ru-ru',
        clockFace: 'MinuteCounter',
    });

    clock.setTime(1800);
    clock.setCountdown(true);
    clock.start();
});

let label1 = document.getElementById('1');
let label2 = document.getElementById('2');
let userInput = document.getElementById('username');
let phoneInput = document.getElementById('phone');

userInput.onfocus = () => {
    label1.style.display = 'block';
}

userInput.focusout = () => {
    label1.style.display = 'none';
}

phoneInput.onfocus = () => {
    label2.style.display = 'block';
}

phoneInput.focusout = () => {
    label2.style.display = 'none';
}