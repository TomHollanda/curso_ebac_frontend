// script.js

document.addEventListener('DOMContentLoaded', function() {
    var btnVoltarAoTopo = document.getElementById('btnVoltarAoTopo');

    btnVoltarAoTopo.addEventListener('click', function() {
        // Rolagem suave para o topo da página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Exibe ou oculta o botão com base na posição de rolagem
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            btnVoltarAoTopo.style.display = 'block';
        } else {
            btnVoltarAoTopo.style.display = 'none';
        }
    });
});
