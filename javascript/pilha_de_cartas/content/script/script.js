let cardStack = []
let userOption


do {
	userOption = prompt(
		"Pilha de Cartas\n" +
			"1- Adicionar uma carta.\n" +
			"2- Puxar uma carta.\n" +
			"3- Sair.\n\n" +
			"A quantidade de cartas no baralho é:\n" +
			cardStack.length
	)
	switch (userOption) {
		case "1":
			cardStack.unshift(
				prompt(
					"Pilha de Cartas\n" +
						"Digite o nome da carta que deseja adicionar:"
				)
			)
			alert(
				"Pilha de Cartas\n" +
					"A carta " +
					cardStack[0] +
					" foi adicionar ao topo do baralho."
			)
			break
		case "2":
			let cardRemoved = cardStack.shift()
			if (typeof cardRemoved === "string") {
				alert(
					"Pilha de Cartas\n" +
						"A carta " +
						cardRemoved +
						" foi retirada do topo do baralho."
				)
			} else {
				alert("A lista de cartas está vazia.")
			}
			break
		case "3":
			alert("Aplicação encerrada pelo usuário.")
			break
		case null:
			alert("Execução abortada pelo usuário")
		default:
			alert("Por favor selecione uma opção válida.")
	}
} while (userOption !== "3")
