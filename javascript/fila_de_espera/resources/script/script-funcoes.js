let queue = ["Patricia", "Marcos", "Bento", "Messias"]
let option
let queueStatus = ""

const queueDisplay = (array) => {
    queueStatus = []
	for (let i = 0; i < queue.length; i++) {
		queueStatus += queue[i] + ", "
	}
    return queueStatus
}
const optionPrompt = (input) => {
    queueDisplay()
	option = prompt(
		"Gerenciador de Filas\n" +
			"1- Adicionar paciente a fila.\n" +
			"2- Atender paciente (remove da fila).\n" +
			"3- Encerrar o programa.\n" +
			"Status da fila:\n" +
			queueStatus.slice(0, -2) + "."
	)

	return option
}

const menu = (input) => {
	while (option >= 1 || option <= 3 || false || isNaN(option))
		switch (option) {
			case "1":
				queue.push(
					prompt(
						"Gerenciador de Filas\n" + "Digite o nome do paciente:"
					)
				)
				optionPrompt()
				break
			case "2":
				alert("Gerenciador de Filas\n" + "O paciente " +
					queue[0] +
					" foi atendido.")
				queue.shift()
				optionPrompt()
				break
			case "3":
				alert("Programa encerrado pelo usuário")
				return
			case null:
				alert("Operação cancelada pelo usuário.")
				return false
			default:
				alert("Por favor selecione uma opção válida.")
				optionPrompt()
				break
		}
    
	return option
}

optionPrompt()
menu()
