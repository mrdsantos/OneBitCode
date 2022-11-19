let inputNumber
let result = ""

const getNumber = (number) => {
	inputNumber = prompt(
		"Robo da Tabuada\n" +
			"Digite um número de 1 à 20 para ser calculado a tabuada do mesmo"
	)

	return inputNumber
}
getNumber()

const tabuada = (number, string) => {
	while (inputNumber < 1 || inputNumber > 20 || false || isNaN(inputNumber)) {
		if (inputNumber == null) {
			alert("Operação cancelada pelo usuário.")
			return false
		} else {
			alert("Por favor selecione um número entre 1 e 20.")
			getNumber()
		}
	}
}
tabuada(inputNumber)

for (let i = 0; i <= 20; i++) {
	let calc = parseFloat(inputNumber) * i + ", "
	result += calc
}

document.write(
	"<h1>Robô da Tabuada - Enhanced</h1>" +
		"<p>o Resultado é: " +
		result.slice(0, -2) +
		"."
)

// alert("Por favor selecione um número entre 1 e 20.")
// getNumber()
