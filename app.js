const query = element => document.querySelector(element)
let quebrada = false

const changeImage = (path) => {
	query('[data-js = "lamp"]').src = path
}

const turnOnLamp = () => {
	if (!quebrada) changeImage('acesa.jpg')	
}

const turnOffLamp = () => {
	if (!quebrada) changeImage('apagada.jpg')
}

const breakLamp = () => {
	quebrada = true
	changeImage('quebrada.jpg')
}

const getAction =  event => {
	const clickedElement = event.target.classList[0]
	const btOn = clickedElement === 'turn-on'
	const btOff = clickedElement === 'turn-off'
	const btBr = clickedElement === 'break'

	if (btOn) { turnOnLamp()}
	if (btOff) {turnOffLamp()}
	if (btBr) {breakLamp()}	
}

query('[data-js="lamp-container"]')
.addEventListener('click', getAction)