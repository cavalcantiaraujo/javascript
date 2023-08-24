function calcularMedia() {
    var media = Number(window.prompt('Digite a média:'))
    var nota1 = Number(window.prompt('Digite a primeira nota:'))
    var nota2 = Number(window.prompt('Digite a segunda nota:'))
    let result = document.getElementById('situacao')

    var mediaFinal = (nota1 + nota2) / 2

    result.innerHTML = `<p>Calculando a média final: ${media}</p>`
    result.innerHTML += `<p>As notas obtidas foram: <mark>${nota1}</mark> e <mark>${nota2}</mark></p>`
    result.innerHTML += `<p>A média final é: <strong>${mediaFinal}</strong></p>`

    if (mediaFinal >= media) {
        result.innerHTML += 'Você está aprovado'
    } else {
        result.innerHTML += 'Você está reprovado'
    }
}