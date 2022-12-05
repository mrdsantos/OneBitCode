let userOption

function areaTriangle (base, height) {
    let result = (base * height) / 2
    alert("A área do triângulo é: " + result + ".")
    return result
}

function areaRectangle (base, height) {
    let result = base * height
    alert("A área do retângulo é: " + result + ".")
    return result
}

function areaSquare (side) {
    let result = Math.pow(side, 2)
    alert("A área do quadrado é: " + result + ".")
    return result
}

function areaTrapezoid (basea, baseb, height) {
    let result = ((basea + baseb) * height) / 2
    alert("A área do trapézio é: " + result + ".")
    return result
}


function areaCircle (radius) {
    let result = 3.14 * Math.pow(radius, 2)
    alert("A área do círculo é: " + result + ".")
    return result
}


function calculadoraDeAreas (input) {    
    do {
    userOption = prompt("Calculadora Geométrica\n" +
    "Escolha a forma da área a ser calculada:\n" +
    "1- Área do triângulo\n" +
    "2- Área do retãngulo\n" +
    "3- Área do quadrado\n" +
    "4- Área do trapézio\n" +
    "5- Área do círculo\n" +
    "6- Sair")

    switch (userOption) {
        case "1":
            areaTriangle(parseFloat(prompt("Digite a base:")), parseFloat(prompt("Digite a altura:")))
            break
        case "2":
            areaRectangle(parseFloat(prompt("Digite a base:")), parseFloat(prompt("Digite a altura:")))
            break
        case "3":
            areaSquare(parseFloat(prompt("Digite o lado:")))
            break
        case "4":
        areaTrapezoid(parseFloat(prompt("Digite a base maior:")), parseFloat(prompt("Digite a base menor:")), parseFloat(prompt("Digite a altura:")))
            break
        case "5":
            areaCircle(parseFloat(prompt("Digite o raio:")))
        case "6":
            alert("Programa encerrado pelo usuário.")
            break
        case null:
            alert("Execução cancelada pelo usuário. (Esc)")
            return
        default:
                alert("Digite uma opção válida.")
        }
    }
    while (userOption !== "6")
}

calculadoraDeAreas()