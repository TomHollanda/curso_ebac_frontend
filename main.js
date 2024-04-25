$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    });
    $('.menu-hbg').click(function(){
        $('nav').slideToggle();
    })
    $('#fone').mask ('(00) 00000-0000', {
        placeholder: '(99) 9 9999-9999'
    })
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            fone: {
                required: true
            },
            mensagem: {
                required:true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um email válido',
            fone: 'Por favor, insira um número de telefone válido',
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

});

