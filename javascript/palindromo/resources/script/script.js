let word = ""
let result = ""

const getWord = (input) => {
	word = prompt(
		"Checador de Palíndromos\n" +
			"Digite uma palavra para checar se é um palíndromo"
	)
	return
}

const checkPalindrome = (string) => {
	for (let i = word.length - 1; i >= 0; i--) {
		result += word[i]
	}
	return
}

getWord()
checkPalindrome()

document.write(
	"<h1>Checador de Palíndromos</h1>" +
		"<h2> A palavra digitada é: " +
		word +
		".</h2>"
)

if (word == result) {
	document.write("<h3>A palavra é um Palíndromo</h3>")
} else {
	document.write(
		"<h3>A palavra não é um Palíndromo" +
			"<p>" +
			word +
			"<br>" +
			result +
			"</p>"
	)
}
