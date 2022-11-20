let userOption
let positions = [
	{
		name: "Diarista",
		description: "Cuidar da casa",
		duedate: "22/07/2022",
		applicants: "dynamic",
	},
    {
		name: "Pedreiro",
		description: "Trabalhar na obra",
		duedate: "22/07/2022",
		applicants: "dynamic",
	},
    {
		name: "Churrasqueiro",
		description: "Assar carne",
		duedate: "22/07/2022",
		applicants: "dynamic",
	}
]
let applicants = [
	{
		adress: "rua frente, 15, marilia.",
		email: "mariagostin12@email.com",
		name: "Maria Pimpola",
	}
]

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



const posistionsList = (arr = []) => {
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
	return result
	
}

const positionDetails = (input, arr=[]) => {
	input = prompt("Digite a ID da vaga para visualizar os detalhes")
	let result = "Vagas disponíveis:\n"
	let counter = 0
	arr.reduce((acc, value) => {
		if (value.name) {
			result += "Vaga: " + value.name + ". ID: " + counter + ".\n"
			counter++
		}

	})
	if (input == arr[input]) {
		alert(arr[input])
	}
	else {
		alert("O ID de vaga inserido não existe.")
	}
}

//---- Under Construction ↓↓↓

const applicantList = (arr = []) => {
	let result = ""
	let counter = 0
	arr.reduce( (acc, value)=> {
		if (value.name) {
			result += "Candidato: " + value.name + ". ID: " + counter + ".\n"
			counter++
		}
		
	}, [])
	result += "Lista de candidatos cadstrados: \n"
}
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
