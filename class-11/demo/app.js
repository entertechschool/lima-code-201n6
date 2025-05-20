console.log("Clase 11");

function ejecutarOperacion(a, b, operacion) {
	if (isNaN(a) || isNaN(b)) {
		console.error("a o b No son numeros. Revisa!");
		return;
	}
	if (a <= 0 || b <= 0) {
		console.error("a o b Tienen un valor menor o igual a 0. Revisa!");
		return;
	}
	if (!Number.isInteger(a) || !Number.isInteger(b)) {
		console.error("a o b No son enteros. Revisa!");
		return;
	}
	// Mostrar el resultado de la operacion con los numeros a y b:
	const resultado = operacion(a, b); // Al invocar a la funciona, se usan ().
	console.log(resultado);
}

function suma(a, b) {
	return a + b;
}

function multiplicacion(a, b) {
	return a * b;
}

function potencia(a, b) {
	return Math.pow(a, b);
}

ejecutarOperacion(1, 3, suma); // al pasar una funcion, NO se usan los ().
ejecutarOperacion(5, 4, multiplicacion); // 15
ejecutarOperacion(5, 3, potencia); // 125

// ------------------------------
// Repaso punto 2:

function aplicarEstilo(selector, callback) {
	const elemento = document.querySelector(selector);
	callback(elemento);
}

function mayusculas(el) {
	const contenido = el.textContent;
	el.textContent = contenido.toUpperCase();
}

function convertirARojo(el) {
	el.style.color = "red";
}

function agrandarTexto(el) {
	el.style.fontSize = "40px";
}

aplicarEstilo("#subtitulo", mayusculas);
aplicarEstilo("#titulo", convertirARojo);
aplicarEstilo("p", agrandarTexto);
aplicarEstilo("div p span", convertirARojo);

// ---- Ejemplo de Eventos:
// Cuando le doy click al párrafo, el texto del contenido debe decir: "click"
const parrafo = document.querySelector("p");

// Si la voy a reutilizar, esta bien definirla:
function transformarParrafo(evento) {
	console.log(evento);
	evento.target.textContent = evento.target.textContent.slice(0, -1);
}

parrafo.addEventListener("click", transformarParrafo); // la estas usando como CallBack.

const titulo = document.querySelector("h1");
titulo.addEventListener("click", transformarParrafo);

// Si no voy a reutilizar una funcion callback, entonces la creo como anónima:
const subtitulo = document.querySelector("#subtitulo");
subtitulo.addEventListener("click", (evento) => (evento.target.style.color = "blue"));

// Input al escribir:
const input = document.querySelector("input");
input.addEventListener("change", (evento) => console.log("4 change!"));
input.addEventListener("keyup", (evento) => console.log("3 keyup!"));
input.addEventListener("keypress", (evento) => console.log("2 keypress!"));
input.addEventListener("keydown", (evento) => console.log("1 keydown!"));
