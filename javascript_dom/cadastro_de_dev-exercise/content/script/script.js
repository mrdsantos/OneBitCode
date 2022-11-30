let developer = []

let devRegisterForm = document.getElementById("devRegisterForm")
devRegisterForm.addEventListener("submit", (ev) => {
	ev.preventDefault()
})

let btnDetails = document.getElementById("btnDevDetails")
btnDetails.addEventListener("click", (ev) => {
	btnDetails.disabled = true
	let formChildren = document.getElementById("formChildren")
	formChildren.append(devStackInput(), inputDevExperience(), confirmation())
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
	btnRmvInputStack.addEventListener("click", (ev) => {
		let childElement = document.getElementById("btnRmvInputStack")
		childElement.parentElement.remove()
	})

	div.append(labelInputStack, inputStack, btnRmvInputStack)

	return div
}

const inputDevExperience = () => {
	let div = document.createElement("div")

	let titleDevExperience = document.createElement("h4")
	titleDevExperience.textContent = "Experiência"

	let devExperienceRadio1 = document.createElement("input")
	devExperienceRadio1.type = "radio"
	devExperienceRadio1.id = "inputDevExperience1"
	devExperienceRadio1.name = "inputDevExperience"
	devExperienceRadio1.value = "0-2 years"

	let labelDevExperienceRadio1 = document.createElement("label")
	labelDevExperienceRadio1.setAttribute("for", "inputDevExperience1")
	labelDevExperienceRadio1.textContent = "0-2 Anos"
	labelDevExperienceRadio1.className = "checkable inline-block"

	let devExperienceRadio2 = document.createElement("input")
	devExperienceRadio2.type = "radio"
	devExperienceRadio2.id = "inputDevExperience2"
	devExperienceRadio2.name = "inputDevExperience"
	devExperienceRadio2.value = "3-4 years"

	let labelDevExperienceRadio2 = document.createElement("label")
	labelDevExperienceRadio2.setAttribute("for", "inputDevExperience2")
	labelDevExperienceRadio2.textContent = "3-4 Anos"
	labelDevExperienceRadio2.className = "checkable inline-block"

	let devExperienceRadio3 = document.createElement("input")
	devExperienceRadio3.type = "radio"
	devExperienceRadio3.id = "inputDevExperience3"
	devExperienceRadio3.name = "inputDevExperience"
	devExperienceRadio3.value = "5+ years"

	let labelDevExperienceRadio3 = document.createElement("label")
	labelDevExperienceRadio3.setAttribute("for", "inputDevExperience3")
	labelDevExperienceRadio3.textContent = "5+ Anos"
	labelDevExperienceRadio3.className = "checkable inline-block"

	let btnRmvInputExperience = btnRmvInput.cloneNode(true)
	btnRmvInputExperience.id = "btnRmvInputExperience"
	btnRmvInputExperience.addEventListener("click", (ev) => {
		let childElement = document.getElementById("btnRmvInputExperience")
		childElement.parentElement.remove()
	})

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

const confirmation = () => {
	let div = document.createElement("div")
	let btnSave = document.createElement("button")
	btnSave.textContent = "Salvar"
	btnSave.id = "btnSave"
	btnSave.className = "green"
	btnSave.addEventListener("click", (ev) => {
		saveData()
		btnDetails.disabled = false
		resetInput()
		let formChildren = document.getElementById("formChildren")
		while (formChildren.firstChild) {
			formChildren.removeChild(formChildren.firstChild)
		}
	})

	let btnCancel = document.createElement("button")
	btnCancel.textContent = "Cancelar"
	btnCancel.id = "btnCancel"
	btnCancel.className = "red"
	btnCancel.addEventListener("click", (ev) => {
		btnDetails.disabled = false
		resetInput()
		let formChildren = document.getElementById("formChildren")
		while (formChildren.firstChild) {
			formChildren.removeChild(formChildren.firstChild)
		}
	})

	div.append(btnCancel, btnSave)
	return div
}

const resetInput = () => {
	let resetInput = document.getElementById("inputDevName")
	resetInput.value = ""
}

const saveData = () => {
	let newDeveloper = {}
	newDeveloper.name = document.querySelector(
		`input[name="inputDevName"]`
	).value
	newDeveloper.stack = document.querySelector(
		`input[name="inputDevStack"]`
	).value
	newDeveloper.experience = document.querySelector(
		`input[name="inputDevExperience"]:checked`
	).value

	developer.push(newDeveloper)

	return
}
