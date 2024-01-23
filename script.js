// script.js

// btnVoltarAoTopo

document.addEventListener('DOMContentLoaded', function() {
    var btnVoltarAoTopo = document.getElementById('btnVoltarAoTopo');

    btnVoltarAoTopo.addEventListener('click', function() {
        // controle: rolagem botão
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // controle: exibição botão
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            btnVoltarAoTopo.style.display = 'block';
        } else {
            btnVoltarAoTopo.style.display = 'none';
        }
    });
});

//muda a cor do btnVoltarAoTopo if footer ( ou mudar background no css)

$(document).ready(function () {
    var btnVoltarAoTopo = $('#btnVoltarAoTopo');
    var footer = $('#footer');

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > footer.offset().top) {
            btnVoltarAoTopo.css('background-color', '#000000');
        } else {
            btnVoltarAoTopo.css('background-color', '#000000');
        }
    });

    btnVoltarAoTopo.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});


