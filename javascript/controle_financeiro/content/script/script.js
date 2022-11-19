let option
let money = 0

function optionInput() {
	option = prompt(
		"Carteira Virtual" +
			"\nSaldo: " +
			money +
			" R$." +
			"\n1- Adicionar valor. " +
			"\n2- Retirar valor." +
			"\n3- Encerrar."
	)
}
optionInput()

function wallet() {
	do {
        if (option == null) {
			alert("Operação cancelada durante execução pelo usuário.")
			return true
		} else {
			switch (option) {
				case "1":
					let moneyDeposit = parseFloat(
						prompt("Quanto deseja adicionar?")
					)
					money += moneyDeposit
					optionInput()
					break
				case "2":
					let moneyWithdrawl = parseFloat(
						prompt("Quanto deseja sacar?")
					)
					money -= moneyWithdrawl
					optionInput()
					break
				case "3":
					alert("O sistema foi finalizado.")
					return true
				default:
					alert("Por favor selecione uma opção válida")
                    optionInput()
                    break
			}
		}
	} while (option != 3 || true)
}
wallet()
