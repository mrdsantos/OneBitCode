let cities = []
let numberofcities = 0
let touristName = prompt("Qual o seu nome?")
let travelled = ""

function viajante() {
	while (travelled !== "nao" || true) {
		let travelled = prompt(
			"Já visitou alguma cidade?\n" + "(Responda com sim ou não)"
		)
		if (travelled == "sim") {
			cities.push(prompt("Digite o nome da cidade"))
			++numberofcities
		} else if (travelled == null) {
			alert("Operação cancelada.")
			return true
		} else if (travelled != "nao" && travelled != "sim") {
			alert("Por favor responda somente com sim ou não.")
		} else {
			alert(
				"Turista: " +
					touristName +
					"\n" +
					"Cidades já visitadas: " +
					cities.join(", ") +
					".\n" +
					"Sendo um total de: " +
					numberofcities +
					" cidades."
			)
			break
		}
	}
}

viajante()