let userOption = "0"

const optionPrompt = (userOption) => {
	UserOption = prompt(
		"Sistema de Vagas de Emprego\n" +
			"1- Listar vagas disponíveis.\n" +
			"2- Criar uma nava vaga.\n" +
			"3- Visualizar vagas.\n" +
			"4- Inscrever candidato em uma vaga.\n" +
			"5- Excluir vagas.\n" +
			"6- Sair."
	)
}



const menu = () => {
    while (userOption !== "6" || false) {
        switch (userOption) {
            case null:
                alert("Execução abortada pelo usuário. (Esc)")
                return false
            case "6":
                alert("Programa encerrado pelo usuário")
                break;
        
            default:
                alert("Por favor selecione uma opção válida")
                break;
        }

    }
}

// userMenu()
// optionPrompt()