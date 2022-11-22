document.title = "Escalação do Time"

document.body.appendChild(
	Object.assign(document.createElement("h1"), {
		textContent: "Escalação do time"
	})
)
document.body.appendChild(Object.assign(document.createElement("hr")))

document.body
	// create a div
	.appendChild(Object.assign(document.createElement("div")))
	// append an ul to the div
	.appendChild(Object.assign(document.createElement("ul"),
	{className: "clean"}
	))
	// append 2x li to ul
	.append(Object.assign(document.createElement("li"),
	{id: "li-btnAdd"}
	),Object.assign(document.createElement("li"),
	{id: "li-btnRmv"}))

	document.getElementById("li-btnAdd").append(Object.assign(document.createElement("button"
	),
	{id: "btnAdd"},
	{textContent: "Adicionar Jogador"}))

	document.getElementById("li-btnRmv").append(Object.assign(document.createElement("button"),
	{id: "btnRmv"},
	{textContent: "Remover Jogador"}))
