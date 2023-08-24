function calcularIdade() {
    let year = Number(window.prompt('Em que ano você nasceu?'))
    let currentYear = new Date().getFullYear()
    let idade = currentYear - year

    let resposta = document.querySelector('#resposta')

    resposta.innerHTML = `<p>Quem nasceu em ${year} vai completar ${idade} anos em ${currentYear}</p>`
}