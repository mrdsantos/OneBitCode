let userOption
let properties = [
	{ owner: "Lucas", rooms: "2", bathrooms: "1", garage: "Sim" },
	{ owner: "Marco", rooms: "3", bathrooms: "1", garage: "sim" },
]

do {
	//Menu do Usuário
	userOption = prompt(
		"Imobiliária\n" +
			"Quantidade de imóveis cadastrados: " +
			properties.length +
			".\n" +
			"1- Incluir imóvel.\n" +
			"2- Remover imóvel.\n" +
			"3- Listar imóveis disponíveis.\n" +
			"4- Sair"
	)

	//Gerador de lista de imóveis

	switch (userOption) {
		case "1":
			let propertyListing = {}
			propertyListing.owner = prompt(
				"Cadastro de Imóveis\n" + "Nome do proprietário(a):"
			)
			propertyListing.rooms = prompt(
				"Cadastro de Imóveis\n" + "Quantidade de Quartos:"
			)
			propertyListing.bathrooms = prompt(
				"Cadastro de Imóveis\n" + "Quantidade de Banheiros"
			)
			propertyListing.garage = prompt(
				"Cadastro de Imóveis\n" + "Possui garagem? (sim/não)"
			)

			let confirmation = confirm(
				"Deseja salvar este imóvel?\n" +
					"Proprietário(a): " +
					propertyListing.owner +
					".\n" +
					"Número de quartos: " +
					propertyListing.rooms +
					".\n" +
					"Número de banheiros: " +
					propertyListing.bathrooms +
					".\n" +
					"Possui Garagem: " +
					propertyListing.garage +
					".\n"
			)

			if (confirmation) {
				properties.unshift(propertyListing)
			}

			break
		case "2":
			let propertyDeleted = properties[0]
			properties.shift()
			alert(
				"O imóvel " +
					JSON.stringify(propertyDeleted) +
					" foi deletado com sucesso."
			)
			break
		case "3":
			for (let i = 0; i < properties.length; i++) {
				alert(
					"Dono(a) do imóvel: " +
						properties[i].owner +
						".\n" +
						"Quantidade de quartos: " +
						properties[i].rooms +
						".\n" +
						"Quantidade de banheiros: " +
						properties[i].bathrooms +
						".\n" +
						"Possui garagem? " +
						properties[i].garage +
						".\n"
				)
			}
			break
		case "4":
			alert("Seção encerrada pelo usuário.")
			break
		default:
			alert("Por favor selecione uma opção válida")
			break
	}
} while (userOption !== "4")
