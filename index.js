document.addEventListener('DOMContentLoaded', function() {
    const guessForm = document.getElementById('guessForm');
    const guessInput = document.getElementById('guessInput');
    const resultDiv = document.getElementById('result');

    // Função para gerar um novo número aleatório
    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    // Variável para armazenar o número aleatório
    let randomNumber = generateRandomNumber();

    guessForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const guessValue = guessInput.value.trim();

        try {
            if (guessValue === '') {
                throw new Error('Por favor, insira um número.');
            }

            const guessNumber = parseInt(guessValue, 10);

            if (isNaN(guessNumber)) {
                throw new Error('Por favor, insira apenas números.');
            }

            if (guessNumber < 1 || guessNumber > 10) {
                throw new Error('O palpite deve estar entre 1 e 10.');
            }

            if (guessNumber === randomNumber) {
                resultDiv.innerHTML = '<p>Parabéns! Você acertou!</p>';
                // Gerar um novo número para a próxima tentativa
                randomNumber = generateRandomNumber();
            } else if (guessNumber < randomNumber) {
                resultDiv.innerHTML = '<p>O número escolhido pelo computador é maior.</p>';
            } else {
                resultDiv.innerHTML = '<p>O número escolhido pelo computador é menor.</p>';
            }

            guessInput.value = ''; 
        } catch (error) {
            resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
        }
    });
});
