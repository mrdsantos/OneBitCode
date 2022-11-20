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
		applicants: [],
	}
]
let applicants = [
	{
		adress: "rua frente, 15, marilia.",
		email: "mariagostin12@email.com",
		name: "Maria Pimpola",
	}
]

// Call the menu and receive input
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

// Execute menu's options
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

				optionPrompt()
				break
			case "2":
				positionAdd()
				optionPrompt()
				break
			case "3":
				break
			case "4":
				applicantAdd()
				optionPrompt()
				break
			case "5":

				optionPrompt()
				break
			default:
				alert("Por favor selecione uma opção válida")
				optionPrompt()
				break
		}
	}
}

// Add new positions
const positionAdd = () => {
	let positionListing = {}
	posistionListing.name = prompt("Digite o nome da vaga:")
	positionListing.description = prompt("Digite a descrição da vaga:")
	positionListing.duedate = prompt("Digite a data limite:")
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
		positions.unshift(positionListing)
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

// list positions in a formated string
const positionsList = (arr = []) => {
	let result = ""
	let counter = 0
	arr.reduce( (acc, value)=> {
		if (value.name) {
			result += "Vaga: " + value.name + ". ID: " + counter + ".\n"
			counter++
		}
		
	},)
	result += "\nQuantidade total de Candidatos cadastrados: " + applicants.length + "."
	// I did really tried to get the element index dynamically instead of using a counter
	// If you do know how please let me know
}

// Show details of given position
const positionDetails = (input, arr=[]) => {
	let message = "Vagas disponíveis:\n"
	let counter = 0
	arr.reduce((acc, value) => {
		if (value.name) {
			message += "Vaga: " + value.name + ". ID: " + counter + ".\n"
			counter++
		}
		return message
	})
	input = parseFloat(prompt("Digite a ID da vaga para visualizar os detalhes\n" +
	message  + "\nInsira m para voltar ao menu."))
	if (input == arr[input]) {
		alert(arr[input])
//--------------------alerts need to be concatenated properly.
	}
	else if (input == "m") {
		menu()		
	}
	else {
		alert("O ID de vaga inserido não existe.")
	}
}

const applicantEnlist = (arr1=[], arr2=[]) => {
	let counter = 0
	let message = "Vagas disponíveis:\n"
	let positionId 
	arr.reduce((acc, value) => {
		if (value.name) {
			message += "Vaga: " + value.name + ". ID: " + counter + ".\n"
			counter++
		}
	return message
	})
	positionId = parseFloat(prompt("Digite a ID da vaga que deseja cadastrar o candidato:\n" +
	message))
	if (positionId == arr[input]) {
		let counter = 0
		let message = "Candidatos disponíveis:\n"
		let applicantId 
		applicants.reduce((acc, value) => {
			message += "Candidato: " + value.name + ". ID: " + counter + ".\n"
			counter ++
		},)
		applicantId = parseFloat(prompt("Insira a ID do candidato que deseja cadastrar a vaga:"))
		if (applicantId == applicants.length) {
			positions[positionId].applicants.push(applicants[applicantId.name])

		}
	}
	else {
		alert("O ID de candidato inserido não existe.")
	}
}

const positionDelete = (input, arr) => {
	let message = "Vagas disponíveis:\n"
	let counter = 0
	arr.reduce((acc, value) => {
		if (value.name) {
			message += "Vaga: " + value.name + ". ID: " + counter + ".\n"
			counter++
		}
	})
	input = parseFloat(prompt("Digite o ID da vaga à ser excluída:" +
	message))
	if (input == positions[input]) {
		positions.pop(position[input])
	}
	else {
		alert("O ID de candidato inserido não existe.")
	}
}

//---- Under Construction ↓↓↓


// ---- Standby of functions calls so Quokka doesnt go nuts
// optionPrompt()
// menu()

// ---- Templates
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
