document.title = "Escalação do Time"

document.body.appendChild(
	Object.assign(document.createElement("h1"), {
		textContent: "Escalação do time",
	})
)
document.body.appendChild(Object.assign(document.createElement("hr")))

//creates main container and columns
document.body.appendChild(
	Object.assign(document.createElement("div"), { id: "containerMain" })
)

document
	.getElementById("containerMain")
	.append(
		Object.assign(
			document.createElement("div"),
			{ className: "column" },
			{ id: "playerAddCol" }
		)
	)
document
	.getElementById("containerMain")
	.append(
		Object.assign(
			document.createElement("div"),
			{ className: "column" },
			{ id: "playerRmvCol" }
		)
	)
document
	.getElementById("containerMain")
	.append(
		Object.assign(
			document.createElement("div"),
			{ className: "column" },
			{ id: "playerListCol" }
		)
	)
document
	.getElementById("playerAddCol")
	.append(
		Object.assign(document.createElement("div"), { id: "playerAddColLeft" }),
		Object.assign(document.createElement("div"), { id: "playerAddColRight" })
	)

// create forms of left column inside playerAddColumn
document
	.getElementById("playerAddColLeft")
	.append(
		Object.assign(
			document.createElement("label"),
			{ for: "playerNameAdd" },
			{ textContent: "Digite o nome do jogador" }
		)
	)

document
	.getElementById("playerAddColLeft")
	.append(
		document.createElement(
			Object.assign("input"),
			{ type: "text" },
			{ placeholder: "Digite o nome do jogador" },
			{ name: "playerNameAdd" }
		)
	)

// create buttons
document
	.getElementById("playerAddColLeft")
	.append(
		Object.assign(
			document.createElement("button"),
			{ id: "btnAdd" },
			{ textContent: "Adicionar Jogador" }
		)
	)

document
	.getElementById("playerRmvCol")
	.append(
		Object.assign(
			document.createElement("button"),
			{ id: "btnRmv" },
			{ textContent: "Remover Jogador" }
		)
	)

// placeholder
document
	.getElementById("playerListCol")
	.append(
		Object.assign(document.createElement("p"), { textContent: "some text" })
	)
