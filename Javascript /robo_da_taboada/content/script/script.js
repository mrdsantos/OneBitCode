let inputNumber
inputNumber = parseFloat(prompt("Robo da Tabuada\n" +
"Digite um número de 1 à 20 para ser calculado a tabuada do mesmo"))

let result = ""

for (let i = 1; i <= 20; i++) {
    let calc = inputNumber * i +", "
    result += calc
}

document.write("<h1>Robô da Tabuada</h1>" +
 "<p>o Resultado é: " + result.slice(0, -2) + "." );
