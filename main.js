$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    });
    $('.menu-hbg').click(function(){
        $('nav').slideToggle();
    })
});

