const textAreaInput = document.querySelector("#markdown-input");
const previewOutput = document.querySelector("#preview-output");

function parseToHTML(markdownLine) {
	// Elimina espacios al inicio y fin
	const line = markdownLine.trim();
	// Encabezados: #, ##, ###, etc.
	const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);
	if (headerMatch) {
		const level = headerMatch[1].length;
		const content = headerMatch[2];
		return `<h${level}>${content}</h${level}>`;
	}
	// Si la línea no es encabezado y no está vacía, es un párrafo
	if (line.length > 0) {
		return `<p>${line}</p>`;
	}
	// Si la línea está vacía, retorna cadena vacía
	return "";
}

function renderPreview() {
	const rawInput = textAreaInput.value;
	const markdownLines = rawInput.split("\n"); // arreglo de lineas

	// console.log(rawInput.split("\n"));
	// hola\nmundo\nsoy\nbruno -> split -> ["hola", "mundo", "soy", "bruno"]

	const htmlElements = [];
	for (const markdownLine of markdownLines) {
		const htmlElement = parseToHTML(markdownLine);
		htmlElements.push(htmlElement);
	}

	previewOutput.innerHTML = htmlElements.join("");
}

textAreaInput.addEventListener("keyup", renderPreview);
// keydown -> keypress -> actualiza el value -> "keyup" -> change
