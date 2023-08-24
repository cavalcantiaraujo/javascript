function jogar() {
  var num1 = Number(window.prompt("Pirmeiro valor:"));
  var num2 = Number(window.prompt("Segundo valor:"));
  var operacao = window.prompt(
    `Valores informados: ${num1} e ${num2}.
Qual operação deseja realizar?
[1] Somar
[2] Subtrair
[3] Multiplicar
[4] Dividir`
  );
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (operacao == 1) {
    var soma = num1 + num2;
    resultado.innerHTML += `<p>${num1} + ${num2} = <strong>${soma}</strong></p>`;
  } else if (operacao == 2) {
    var subtracao = num1 - num2;
    resultado.innerHTML += `<p>${num1} - ${num2} = <strong>${subtracao}</strong></p>`;
  } else if (operacao == 3) {
    var multiplicacao = num1 * num2;
    resultado.innerHTML += `<p>${num1} x ${num2} = <strong>${multiplicacao}</strong></p>`;
  } else if (operacao == 4) {
    var divisao = num1 / num2;
    resultado.innerHTML += `<p>${num1} / ${num2} = <strong>${divisao}</strong></p>`;
  } else {
    resultado.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles.</p>`;
  }
}
