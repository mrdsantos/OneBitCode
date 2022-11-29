const playerAdd = () => {
	let playerName = document.getElementById("playerName").value
	let playerPosition = document.getElementById("playerPosition").value
	let playerNumber = document.getElementById("playerNumber").value

	if (!isNaN(playerName) || !isNaN(playerPosition || isNaN(playerNumber))) {
		alert("Por favor, confira os dados digitados")
		return
	} else if (
		confirm(
			"Confirmar a Escalação do Jogador\n" +
				playerNumber +
				"- " +
				playerName +
				"\n" +
				playerPosition +
				"."
		)
	) {
		let listSection = document.getElementById("playerListCol")
		let playerCard = document.createElement("div")
		playerCard.id = playerNumber
		let playerCardP = document.createElement("p")
		playerCardP.setAttribute(
			"style",
			"white-space: pre;font-weight: bold; margin-auto;"
		)
		playerCardP.textContent = playerNumber + "- " + playerName + "\r\n"
		playerCardP.textContent += "Posição: " + playerPosition + "."
		playerCard.append(playerCardP)
		listSection.append(playerCard)
	}
}

const playerRmv = () => {
	let input = document.getElementById("playerNumberRmv").value
	let playerIdRmv = document.getElementById(input)

	if (isNaN(input)) {
		alert("Por favor, confira os dados digitados")
		return
	} else if (
		confirm("Confirmar a Remoção do Jogador\n" + playerIdRmv.textContent)
	) {
		playerIdRmv.remove()
	}
}

const resetInputs = () => {
	let playerName = document.getElementById("playerName")
	let playerPosition = document.getElementById("playerPosition")
	let playerNumber = document.getElementById("playerNumber")
	let playerNumberRmv = document.getElementById("playerNumberRmv")
	playerName.value = ""
	playerPosition.value = ""
	playerNumber.value = ""
	playerNumberRmv.value = ""
}

let btnPlayeradd = document.getElementById("btnPlayerAdd")
btnPlayeradd.addEventListener("click", () => {
	playerAdd()
	resetInputs()
})

let btnPlayerRmv = document.getElementById("btnPlayerRmv")
btnPlayerRmv.addEventListener("click", () => {
	playerRmv()
	resetInputs()
})
