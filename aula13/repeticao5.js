var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Informe a idade\n", function(answer) {
    var resp = answer.split('-');
    
    if (resp.length !== 7) {
        console.log('Você precisa fornecer 7 idades separadas por -')
        leitor.close();
        return
    }

    var ages = resp.map(function (age) {
        return Number(age);
    });

    
    var media = ages.reduce(function (total, age) {
        return total + age;
    }, 0) / ages.length;

    console.log("A média das idades é:", media.toFixed(2));
    
    leitor.close();
});