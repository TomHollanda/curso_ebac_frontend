$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    });
    
    $('.menu-hbg').click(function(){
        $('nav').slideToggle();
    })

    $('#fone').mask ('(00) 00000-0000')

    $('#cpf').mask ('000.000.000.-00')

    $('#cep').mask('00000-000').blur(function () {
        const vl = this.value;

        $.get('https://viacep.com.br/ws/'+vl+'/json/', function(dados){
            $('#rua').val(dados.logradouro);
            $('#bairro').val(dados.bairro);
            $('#cidade').val(dados.localidade);
            $('#uf').val(dados.uf);
        });
    });

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

    $('.listaVeiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoDeInteresse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 800)
    })

    $(document).ready(function() {
        $('.chat').click(function() {
            alert("OLÁ! NOSSO HORÁRIO DE ATENDIMENTO VIA CHAT É DAS 8H30 ÀS 21H45 DE SEGUNDA A SEXTA-FEIRA (HORÁRIO DE BRASÍLIA - EXCETO FERIADOS).\n\nVOCÊ PODE FALAR COM A GENTE TAMBÉM PELO 0800 E POR E-MAIL POR INTERMÉDIO DA OPÇÃO 'FALE CONOSCO'.\n\nAGRADECEMOS A SUA COMPREENSÃO!");
        });
    });

});


