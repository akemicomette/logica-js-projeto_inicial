alert('Boas vindas ao jogo do número secreto!');
let maxNumber = 100;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
let guess;
let attempt = 1;

while (guess != secretNumber) {
    guess = prompt(`Escolha um número entre 1 e ${maxNumber}`);
    if (guess == secretNumber) { 
        break;
    } else {
        if (guess > secretNumber) {
            alert(`O número secreto é menor que ${guess}`);
        } else {
            alert(`O número secreto é maior que ${guess}`);
        }
        attempt++;
    }
}

let wordAttempt = attempt > 1 ? 'attempt' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${attempt} ${wordAttempt}.`);