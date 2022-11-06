import { IMC, notANumber, AlertError } from "./utils.js"

const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const btnImc = document.querySelector('.btnImc')

const result = {
    wrapper: document.querySelector('.result-wrapper'),
    message: document.querySelector('.result h3'),
    btnClose: document.querySelector('.close'),
    open() {
        result.wrapper.classList.add('open')
    },
    close() {
        result.wrapper.classList.remove('open')
    },
}

btnImc.onclick = () => {

const weight = inputWeight.value
const height = inputHeight.value

const resultImc = IMC(weight, height)

const showErrorMessage = notANumber(weight) + notANumber(height)
if (showErrorMessage) {
    AlertError.open()
    return
}

AlertError.close()
result.open()
result.message.innerText = `Seu IMC é de ${resultImc}`
}

result.btnClose.onclick = () => {
    result.wrapper.classList.remove('open')
}

document.onkeydown = function(e) {
    if(e.key === 'Escape') {
        result.close()
    }
  }

  inputWeight.oninput = () => AlertError.close()
  inputHeight.oninput = () => AlertError.close()
  



