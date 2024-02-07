document.getElementById('comparisonForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    let numberA = parseFloat(document.getElementById('number_a').value.replace(',', '.'));
    let numberB = parseFloat(document.getElementById('number_b').value.replace(',', '.'));

    
    let messageElement = document.getElementById('message');


    if (!isNaN(numberA) && !isNaN(numberB)) {
        
        if (numberB > numberA) {
            
            messageElement.innerText = '* O número B é maior que o número A. Formulário válido.';
            messageElement.style.color = 'blue';
        } else {

            messageElement.innerText = '* O número B deve ser maior que o número A. Formulário inválido.';
            messageElement.style.color = 'red';
        }
    }
});
