//use of documentFragment() in favor of innertext

let developer = {
	name: "",
	stack: "",
	experience: Number,
}

let devRegisterForm = document.getElementById("devRegisterForm")
devRegisterForm.addEventListener("submit", (ev) => {
	ev.preventDefault()
})

let btnDetails = document.getElementById("btnDevDetails")

btnDetails.addEventListener("click", (ev) => {
	let labelInputStack = document.createElement("label")
	labelInputStack.setAttribute("for", "inputDevStack")
	labelInputStack.textContent = "Tecnologia"

	let inputStack = document.createElement("input")
	inputStack.id = "inputDevStack"
	inputStack.placeholder = "Digite a tecnologia conhecida"
	inputStack.type = "text"
	inputStack.name = "inputDevStack"

	let button = document.createElement("button")
	button.textContent = "-"
	button.className = "btnDetails red"

    let titleRadioExperiece = document.createElement("h4")
    titleRadioExperiece.textContent = "Experiência"

    let radioExperience = document.createElement("radio")
    radioExperience.id = "radioExperience"
    radioExperience.type = "radio"
    radioExperience.name = "radioExperience"
    


	devRegisterForm.append(labelInputStack, inputStack, button, titleRadioExperiece, radioExperience, button.cloneNode(true))
})