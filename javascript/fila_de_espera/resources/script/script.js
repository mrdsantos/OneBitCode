let queue = ["Patricia", "Marcos", "Bento", "Messias"]
let option = ""

do {
	let queueStatus = ""
	for (let i = 0; i < queue.length; i++) {
		queueStatus += (i + 1) + "º " + queue[i] + "\n"
	}
	option = prompt(
		"Gerenciador de Filas\n" +
			"1- Adicionar paciente a fila.\n" +
			"2- Atender paciente (remove da fila).\n" +
			"3- Encerrar o programa.\n" +
			"Status da fila:\n" +
			queueStatus.slice(0, -2) +
			"."
	)
	switch (option) {
		case "1":
			queue.push(
				prompt("Gerenciador de Filas\n" + "Digite o nome do paciente:")
			)
			break
		case "2":
			let pacientAppointed = queue.shift()
			if (typeof pacientAppointed === "string") {
				alert(
					"Gerenciador de Filas\n" +
						"O paciente " +
						pacientAppointed +
						" foi atendido e removido da fila."
				)
			} else {
				alert("A fila de pacientes está vazia.")
			}
			break
		case "3":
			alert("Programa encerrado pelo usuário")
			option = "3"
			break
		case null:
			alert("Operação cancelada pelo usuário")
			return
		default:
			alert("Por favor selecione uma opção válida.")
			break
	}
} while (option !== "3")
