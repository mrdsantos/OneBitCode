let userOption
let positions = []
let applicants = []

const optionPrompt = (input) => {
	userOption = prompt(
		"Sistema de Vagas de Emprego\n" +
			"1- Listar vagas disponíveis.\n" +
			"2- Criar uma nava vaga.\n" +
			"3- Visualizar vagas.\n" +
			"4- Inscrever candidato em uma vaga.\n" +
			"5- Excluir vagas.\n" +
			"6- Sair."
	)
    return userOption
}

const menu = (userInput) => {
	while (userOption !== "6" || false) {
		
		switch (userOption) {
			case null:
				alert("Execução abortada pelo usuário. (Esc)")
				return false
			case "6":
				alert("Programa encerrado pelo usuário")

				break
			case "1":
				break
			case "2":
				positionNew()
                optionPrompt()
				break
			case "3":
				break
			case "4":
				applicantNew()
                optionPrompt()
				break

			case "5":
				break
			default:
				alert("Por favor selecione uma opção válida")
				break
		}
	}
}

const positionNew = () => {
	let posistionListing = {}
	posistionListing.name = prompt("Digite o nome da vaga:")
	posistionListing.description = prompt("Digite a descrição da vaga:")
	posistionListing.duedate = prompt("Digite a data limite:")
	let confirmation = confirm(
		"Deseja salvar esta vaga?\n" +
			posistionListing.name +
			".\n" +
			posistionListing.description +
			".\n" +
			posistionListing.duedate +
			".\n"
	)
	if (confirmation) {
		positions.unshift(posistionListing)
	}
	return
}

const applicantNew = () => {
	let applicantListing = {}
	applicantListing.name = prompt("Digite o nome do candidato:")
	applicantListing.email = prompt("Digite o e-mail do candidato:")
	applicantListing.adress = prompt("Digite o endereço do candidato:")
	let confirmation = confirm(
		"Deseja salvar este canidato?\n" +
			applicantListing.name +
			".\n" +
			applicantListing.email +
			".\n" +
			applicantListing.adress +
			"."
	)
	if (confirmation) {
		applicants.unshift(applicantListing)
	}
}

//---- Under Construction ↓↓↓

const positionList = (positions) => {
	let positionAvailable
	positions.forEach((element) => {})

	alert("Vagas disponíveis:\n")
}

//---- Standby of functions calls so Quokka doesnt go nuts
optionPrompt()
menu()

//---- Templates
// Position Template
// {
//     name: str,
//     description: str,
//     duedate: str,
//     applicants: dynamic
// }

// Applicant Template
// {
//     name: str,
//     email: str,
//     address: str,
// }
