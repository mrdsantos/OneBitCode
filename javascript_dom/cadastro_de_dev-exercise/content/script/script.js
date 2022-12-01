let developer = []

let devRegisterForm = document.getElementById("devRegisterForm")
devRegisterForm.addEventListener("submit", (ev) => {
	ev.preventDefault()
})

let devStackBtnAdd = document.getElementById("devStackBtnAdd")
devStackBtnAdd.addEventListener("click", (ev) => {
	// devStackBtnAdd.disabled = true
	let devRegisterForm = document.getElementById("devRegisterForm")
	devRegisterForm.append(devStacksPlus())
})

let devExperienceRow = 1

const devStacksPlus = () => {
	let div = createDiv("","")
    
    let stackNameInput = createInput("text","devStackInput","Digite a tecnologia conhecida", "devStackTechs", "", "")
    
    let devStackBtnAdd = document.getElementById("devStackBtnAdd")

    let br = document.createElement("br")
    
    
    let rowindex = devExperienceRow

    let devExperienceLabel0 = createLabel("devExperienceRadio" + rowindex + "-0","0-2 Anos", "checkable inline-block")
    let devExperienceLabel1 = createLabel("devExperienceRadio" + rowindex + "-1","3-4 Anos", "checkable inline-block")
    let devExperienceLabel2 = createLabel("devExperienceRadio" + rowindex + "-2","3-4 Anos", "checkable inline-block")

    
    let devExperienceRadio0 = createInput("radio", "devExperience" + rowindex + "-0","","devExperienceRadio", "devExperienceRadio" + rowindex + "-0","0-2 years")
    let devExperienceRadio1 = createInput("radio", "devExperience" + rowindex + "-1","","devExperienceRadio", "devExperienceRadio" + rowindex + "-1","3-4 years")
    let devExperienceRadio2 = createInput("radio", "devExperience" + rowindex + "-2","","devExperienceRadio", "devExperienceRadio" + rowindex + "-2","5+ years")
    


    devExperienceRow++

    div.append(stackNameInput, devStackBtnAdd.cloneNode(true), br, devExperienceRadio0, devExperienceLabel0, devExperienceRadio1, devExperienceLabel1, devExperienceRadio2, devExperienceLabel2)

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
		let formChildren = document.getElementById("formCh ildren")
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
}

const createLabel = (forName, textContent, className) => {
	let element = document.createElement("label")
	element.htmlFor = forName
	element.textContent = textContent
	element.className = className

	return element
}

const createInput = (type, name, placeholder, className, id, value) => {
	let element = document.createElement("input")
	element.type = type
	element.name = name
	element.placeholder = placeholder
	element.className = className
	element.id = id
	element.value = value

	return element
}

const createDiv = () => {
	let element = document.createElement("div")

	return element
}

let btnRmvInput = document.createElement("button")
btnRmvInput.textContent = "-"
btnRmvInput.className = "btnDetails red"
