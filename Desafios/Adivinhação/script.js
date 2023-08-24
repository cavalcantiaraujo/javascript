var min = 1
var max = 100
var numSorteado = Math.floor(Math.random() * (max - min)) + min
console.log(numSorteado);
function jogar() {
    var num = Number(window.prompt('Qual seu palpite: '))
    var palpite = document.getElementById('palpite')

    if (num < numSorteado) {
        palpite.innerHTML += `<p>Você digitou ${num}. Meu numero é <strong>MAIOR</strong></p>`
    } else if (num > numSorteado) {
        palpite.innerHTML += `<p>Você digitou ${num}. Meu numero é <strong>MENOR</strong></p>`
    } else {
        palpite.innerHTML += `<p><strong>PARABENS!</strong> Você acertou! Eu tinha sorteado o valor ${numSorteado}!</p>`
    }
}