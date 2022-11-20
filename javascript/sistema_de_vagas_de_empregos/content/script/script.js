let userOption
let positions = [
	{
		name: "Diarista",
		description: "Cuidar da casa",
		duedate: "22/07/2022",
		applicants: [],
	},
	{
		name: "Pedreiro",
		description: "Trabalhar na obra",
		duedate: "22/07/2022",
		applicants: [],
	},
	{
		name: "Churrasqueiro",
		description: "Assar carne",
		duedate: "22/07/2022",
		applicants: ["Jordy", "Mario", "Paolo"],
	},
	{
		name: "Médico ",
		description: "Consultar Pacientes",
		duedate: "22/11/2023",
		applicants: [],
	},
	{
		name: "Enfermeira",
		description: "Cuidar dos doentes",
		duedate: "14/08/2023",
		applicants: [],
	},
]
let applicants = [
	{
		name: "Maria Pimpola",
		email: "mariagostin12@email.com",
		adress: "rua frente, 15, marilia.",
	},
	{
		name: "Fernando Magal",
		email: "fernandomagal@email.com",
		adress: "rua 12, 115, centro.",
	},
	{
		name: "Juliana Loyola",
		email: "loyolaju@email.com",
		adress: "Av cacilds, 227, Santo Agostinho.",
	},
]

// Call the menu and receive input
const optionPrompt = () => {
	userOption = prompt(
		"Sistema de Vagas de Emprego\n" +
			"1- Listar vagas disponíveis.\n" +
			"2- Criar uma nova vaga.\n" +
			"3- Visualizar vagas.\n" +
			"4- Cadastrar um novo candidato.\n" +
			"5- Inscrever um candidato em uma vaga.\n" +
			"6- Excluir vagas.\n" +
			"7- Sair."
	)
	return userOption
}

// Execute menu's options
const menu = () => {
	do {
		switch (userOption) {
			case "1":
				positionsList(positions)
				optionPrompt()
				break
			case "2":
				positionAdd()
				optionPrompt()
				break
			case "3":
				positionDisplay(positions)
				optionPrompt()
				break
			case "4":
				applicantAdd()
				optionPrompt()
				break
			case "5":
				applicantEnlist(positions, applicants)
				optionPrompt()
				break
			case "6":
				positionDelete(positions)
				optionPrompt()
				break
			case "7":
				alert("Programa encerrado pelo usuário")
				return false
			case null:
				alert("Execução abortada pelo usuário. (Esc)")
				return false
			default:
				alert("Por favor selecione uma opção válida")
				optionPrompt()
		}

	} while (userOption != "7")
}

// Add new positions
const positionAdd = () => {
	let positionListing = {}
	positionListing.name = prompt("Digite o nome da vaga:")
	positionListing.description = prompt("Digite a descrição da vaga:")
	positionListing.duedate = prompt("Digite a data limite:")
	positionListing.applicants = []
	let confirmation = confirm(
		"Deseja salvar esta vaga?\n" +
			positionListing.name +
			".\n" +
			positionListing.description +
			".\n" +
			positionListing.duedate +
			".\n"
	)
	if (confirmation) {
		positions.push(positionListing)
	}
	return
}
// Add new applicant
const applicantAdd = () => {
	let applicantListing = {}
	applicantListing.name = prompt("Digite o nome do candidato:")
	applicantListing.email = prompt("Digite o e-mail do candidato:")
	applicantListing.adress = prompt("Digite o endereço do candidato:")
	let confirmation = confirm(
		"Deseja salvar este candidato?\n" +
			applicantListing.name +
			".\n" +
			applicantListing.email +
			".\n" +
			applicantListing.adress +
			"."
	)
	if (confirmation) {
		applicants.push(applicantListing)
	}
}

// list positions in a formated string
const positionsList = (arr = []) => {
	let message = "Vagas disponíveis:\n"
	let counter = 0
	arr.reduce((acc, value) => {
		if (value.name) {
			message += "Vaga: " + value.name + ". ID: " + counter + ".\n"
			counter++
		}
	}, [])
	message +=
		"\nQuantidade total de Candidatos cadastrados: " +
		applicants.length +
		"."
	// I did really tried to get the element index dynamically instead of using a counter
	// If you do know how please let me know
	alert(message)
	return message
}

// Show details of given position
const positionDisplay = (arr = []) => {
	let message = "Vagas disponíveis:\n"
	let counter = 0
	arr.reduce((acc, value) => {
		if (value.name) {
			message += "Vaga: " + value.name + ". ID: " + counter + ".\n"
			counter++
		}
		return message
	}, [])
	let input = prompt(
		"Digite a ID da vaga para visualizar os detalhes\n" +
			message +
			"\nInsira m para voltar ao menu principal."
	)
	if (input == "m") {
		alert("Voltando ao menu principal.")
		return
	} else if (parseFloat(input) >= 0 && parseFloat(input) <= counter) {
		let positionDetails = ""
		positionDetails +=
			"Nome da vaga: " +
			arr[input].name +
			".\n" +
			"Descrição: " +
			arr[input].description +
			".\n" +
			"Data limite: " +
			arr[input].duedate +
			".\n"
		if (arr[input].applicants.length > 0) {
			positionDetails +=
				"Candidatos Inscritos: " +
				arr[input].applicants.join(", ") +
				"."
		}
		return alert(positionDetails)
	} else {
		alert("O ID de vaga inserido não existe.")
	}
}

const applicantEnlist = (arr1 = [], arr2 = []) => {
	let message = "Vagas disponíveis:\n"
	let counter = 0
	arr1.reduce((acc, value) => {
		if (value.name) {
			message += "Vaga: " + value.name + ". ID: " + counter + ".\n"
			counter++
		}
		return message
	}, [])

	let positionId = prompt(
		"Digite a ID da vaga que deseja cadastrar o candidato:\n" + message
	)
	if (parseFloat(positionId) >= 0 && parseFloat(positionId) <= counter) {
		let message = "Candidatos disponíveis:\n"
		let counter = 0
		arr2.reduce((acc, value) => {
			if (value.name) {
				message +=
					"Candidato: " + value.name + ". ID: " + counter + ".\n"
				counter++
			}
			return message
		}, [])

		let applicantId = parseFloat(
			prompt(
				"Insira a ID do candidato que deseja cadastrar a vaga:\n" +
					message
			)
		)

		if (applicantId >= 0 && applicantId <= counter) {
			confirm(
				"Confirmar o cadastro de " +
					arr2[applicantId].name +
					" na vaga " +
					arr1[positionId].name +
					"?"
			)
			arr1[positionId].applicants.push(arr2[applicantId].name)
		} else {
			alert("O ID de candidato inserido não é válido")
		}
	} else {
		alert("O ID de vaga inserido é válido.")
	}
}

const positionDelete = (arr) => {
	let message = "Vagas disponíveis:\n"
	let counter = 0
	arr.reduce((acc, value) => {
		if (value.name) {
			message += "Vaga: " + value.name + ". ID: " + counter + ".\n"
			counter++
		}
	}, [])
	let deleteId = parseFloat(
		prompt("Digite o ID da vaga à ser excluída:\n" + message)
	)
	if (deleteId >= 0 && deleteId <= counter) {
		arr.splice(deleteId, 1)
	} else {
		alert("O ID de candidato inserido não existe.")
	}
}

optionPrompt()
menu()