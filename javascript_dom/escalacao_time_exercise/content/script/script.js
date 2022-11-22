document.title = "Escalação do Time"

document.body.appendChild(
	Object.assign(document.createElement("h1"), {
		textContent: "Escalação do time",
	})
)
document.body.appendChild(Object.assign(document.createElement("hr")))

document.body
	// create a div
	.appendChild(
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
document.getElementById("playerListCol").append(
	Object.assign(
		document.createElement("p"),
		{textContent: "some text"}
	)
)