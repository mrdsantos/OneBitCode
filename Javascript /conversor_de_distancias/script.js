let medida
function receberMedida() {
	while (true) {
		let medida = prompt("Digite a metragem à ser convertida:")
		if (medida == null) {
			alert("Operação cancelada.")
			return true
		} else if (medida <= 0 || isNaN(medida)) {
			alert("Valor inválido. Por favor insira uma metragem válida.")
		} else {
			return medida
		}
	}
}
medida = receberMedida()

let unidade
function calcularConversao() {
	while (true) {
		let unidade = prompt(
			"Selecione a unidade de conversão:\n" +
				"1 - Milímetros\n" +
				"2 - Centímetros\n" +
				"3 - Decímetros\n" +
				"4 - Decâmetros\n" +
				"5 - Hectômetros\n" +
				"6 - Quilômetros"
		)
		if (unidade == null) {
			alert("Operação cancelada durante a conversão.")
			return true
		} else if (unidade <= 0 || unidade >= 7) {
			alert("Por favor, selecione uma das opções válidas.")
		}
		switch (unidade) {
			case "1":
				alert("O resultado é " + medida * 1000 + " milímetros.")
				return
			case "2":
				alert("O resultado é " + medida * 100 + " centímetros.")
				return
			case "3":
				alert("O resultado é " + medida * 10 + " decímetros.")
				return
			case "4":
				alert("O resultado é " + medida * 0.1 + " decâmetros.")
				return
			case "5":
				alert("O resultado é " + medida / 100 + " hectômetro.")
				return
			case "6":
				alert("O resultado é " + medida / 1000 + " quilômetros.")
				return
		}
	}
}

if (medida == true) {
    
} else {
    calcularConversao()
}