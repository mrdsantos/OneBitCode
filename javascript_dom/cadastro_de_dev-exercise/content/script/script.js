//use of documentFragment() in favor of innertext

let developer = {
	name: "",
	stack: "",
	experience: "",
}

let devRegisterForm = document.getElementById("devRegisterForm")
devRegisterForm.addEventListener("submit", (ev) => {
	ev.preventDefault()
})

let btnDetails = document.getElementById("btnDevDetails")

btnDetails.addEventListener("click", (ev) => {
	devRegisterForm.append(devStackInput(), devExperienceInput())
})

let btnRmvInput = document.createElement("button")
btnRmvInput.textContent = "-"
btnRmvInput.className = "btnDetails red"

const devStackInput = () => {
	let div = document.createElement("div")
	let labelInputStack = document.createElement("label")
	labelInputStack.setAttribute("for", "inputDevStack")
	labelInputStack.textContent = "Tecnologia"

	let inputStack = document.createElement("input")
	inputStack.id = "inputDevStack"
	inputStack.placeholder = "Digite a tecnologia conhecida"
	inputStack.type = "text"
	inputStack.name = "inputDevStack"

	let btnRmvInputStack = btnRmvInput.cloneNode(true)
	btnRmvInputStack.id = "btnRmvInputStack"
	div.append(labelInputStack, inputStack, btnRmvInputStack)

	return div
}

const devExperienceInput = () => {
	let div = document.createElement("div")

	let titleDevExperience = document.createElement("h4")
	titleDevExperience.textContent = "Experiência"

	let devExperienceRadio1 = document.createElement("input")
	devExperienceRadio1.type = "radio"
	devExperienceRadio1.id = "devExperienceInput1"
	devExperienceRadio1.name = "devExperienceInput"
	devExperienceRadio1.value = "0-2 years"

	let labelDevExperienceRadio1 = document.createElement("label")
	labelDevExperienceRadio1.setAttribute("for", "devExperienceInput1")
	labelDevExperienceRadio1.textContent = "0-2 Anos"
	labelDevExperienceRadio1.className = "checkable inline-block"

	let devExperienceRadio2 = document.createElement("input")
	devExperienceRadio2.type = "radio"
	devExperienceRadio2.id = "devExperienceInput2"
	devExperienceRadio2.name = "devExperienceInput"
	devExperienceRadio2.value = "3-4 years"

	let labelDevExperienceRadio2 = document.createElement("label")
	labelDevExperienceRadio2.setAttribute("for", "devExperienceInput2")
	labelDevExperienceRadio2.textContent = "3-4 Anos"
	labelDevExperienceRadio2.className = "checkable inline-block"

	let devExperienceRadio3 = document.createElement("input")
	devExperienceRadio3.type = "radio"
	devExperienceRadio3.id = "devExperienceInput3"
	devExperienceRadio3.name = "devExperienceInput"
	devExperienceRadio3.value = "5+ years"

	let labelDevExperienceRadio3 = document.createElement("label")
	labelDevExperienceRadio3.setAttribute("for", "devExperienceInput3")
	labelDevExperienceRadio3.textContent = "5+ Anos"
	labelDevExperienceRadio3.className = "checkable inline-block"


    let btnRmvInputExperience = btnRmvInput.cloneNode(true)
	btnRmvInputExperience.id = "btnRmvInputExperience"
	div.append(
		titleDevExperience,
		devExperienceRadio1,
		labelDevExperienceRadio1,
		devExperienceRadio2,
        labelDevExperienceRadio2,
        devExperienceRadio3,
        labelDevExperienceRadio3,
		btnRmvInputExperience
	)

	return div
}
