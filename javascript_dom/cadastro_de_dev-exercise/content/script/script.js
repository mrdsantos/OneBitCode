let developer = []

let devRegisterForm = document.getElementById("devRegisterForm")
devRegisterForm.addEventListener("submit", (ev) => {
	ev.preventDefault()
})

let devExperienceRow = 0

let formChildren = document.getElementById("formChildren")

// function templates for creating elements
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

const createDiv = (id, className) => {
	let element = document.createElement("div")
	element.id = id
	element.className = className

	return element
}

const createBtnRmvTech = (id, className) => {
	let button = document.createElement("button")
	button.textContent = "-"
	button.className = className
	button.id = id
	button.addEventListener("click", (ev) => {
		let elementId = document.getElementById(button.id)
		elementId.parentElement.remove()
	})
	return button
}

const createBtnAddTech = (id, className) => {
	let button = document.createElement("button")
	button.textContent = "+"
	button.id = id
	button.className = className
	button.type = "button"
	button.addEventListener("click", (ev) => {
		let element = document.getElementById("formChildren")
		element.append(devTechAdd())
	
	})
	return button
}

// append elements functions

//devTechAdd receive a conditional paramenter. If the parameter is == 1
//doenst append btnRmvTech and append the Technologies Title Element
//ued to append the first tech input without appending that said button

const devTechAdd = (conditional) => {
	let rowIndex = devExperienceRow
	let div = createDiv("devTechRow" + rowIndex, "devTech")
	let techTitle = document.createElement("h3")
	techTitle.textContent = "Tecnologias"

	let techNameInput = createInput(
		"text",
		"devTechInput",
		"Digite a tecnologia conhecida",
		"",
		"devTechInput" + rowIndex,
		""
	)

	let br = document.createElement("br")

	let devExperienceLabel0 = createLabel(
		"devExperienceRadio" + rowIndex + "-0",
		"0-2 Anos",
		"checkable inline-block"
	)
	let devExperienceLabel1 = createLabel(
		"devExperienceRadio" + rowIndex + "-1",
		"3-4 Anos",
		"checkable inline-block"
	)
	let devExperienceLabel2 = createLabel(
		"devExperienceRadio" + rowIndex + "-2",
		"5+ Anos",
		"checkable inline-block"
	)

	let devExperienceRadio0 = createInput(
		"radio",
		"devExperience" + rowIndex,
		"",
		"devExperienceRadio ",
		"devExperienceRadio" + rowIndex + "-0",
		"0-2 years"
	)
	let devExperienceRadio1 = createInput(
		"radio",
		"devExperience" + rowIndex,
		"",
		"devExperienceRadio ",
		"devExperienceRadio" + rowIndex + "-1",
		"3-4 years"
	)
	let devExperienceRadio2 = createInput(
		"radio",
		"devExperience" + rowIndex,
		"",
		"devExperienceRadio ",
		"devExperienceRadio" + rowIndex + "-2",
		"5+ years"
	)

	devExperienceRow++

	if (conditional == 1) {
		div.append(
			techTitle,
			techNameInput,
			createBtnAddTech("btnAddrow" + rowIndex, "btnTech"),
			br,
			devExperienceRadio0,
			devExperienceLabel0,
			devExperienceRadio1,
			devExperienceLabel1,
			devExperienceRadio2,
			devExperienceLabel2
		)
		return div
	}
	div.append(
			techNameInput,
			createBtnAddTech("btnAddrow" + rowIndex, "btnTech"),
			createBtnRmvTech("btnRmvRow" + rowIndex, "btnTech red"),
			br,
			devExperienceRadio0,
			devExperienceLabel0,
			devExperienceRadio1,
			devExperienceLabel1,
			devExperienceRadio2,
			devExperienceLabel2
		)

	return div
}

// dom manipulation functions
formChildren.append(devTechAdd(1))

const confirmation = () => {
	let div = createDiv()
	let btnSave = document.createElement("button")
	btnSave.textContent = "Salvar"
	btnSave.id = "btnSave"
	btnSave.className = "green"
	btnSave.addEventListener("click", (ev) => {
		saveData()
		resetInput()
		btnSave.blur()
	})

	let btnCancel = document.createElement("button")
	btnCancel.textContent = "Cancelar"
	btnCancel.id = "btnCancel"
	btnCancel.className = "red"
	btnCancel.addEventListener("click", (ev) => {
		resetInput()
		btnCancel.blur()		
	})

	div.append(btnCancel, btnSave)
	return div
}

const resetInput = () => {
	let element = document.getElementById("formChildren")
	while (element.hasChildNodes()) {
		element.lastChild.remove()
	}
	formChildren.append(devTechAdd(1))
}

const saveData = () => {
	let fullName = document.getElementById("devNameInput").value

	let technologies = []
	let tech = document.querySelectorAll(".devTech")
	tech.forEach((element ) => {
		let techName = document.querySelector("#" + element.id + " input[name='devTechInput']").value
		let techExp = 	document.querySelector("#" + element.id + " input[type='radio']:checked").value																
		technologies.push({technologies: techName, Exp: techExp})
	})

	let newDeveloper = {Name: fullName, Technologies: technologies}

	developer.push(newDeveloper)
}

//append confirmation() after the Developer Techs
{
	let elementConfirmation = document.getElementById("devRegisterForm")
	elementConfirmation.append(confirmation())
}
