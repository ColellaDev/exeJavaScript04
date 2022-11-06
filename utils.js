export function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
   }

export function notANumber (value) {
    return isNaN(value) || value == "";
}

export const AlertError = {
    message: document.querySelector('.error'),
    open() {
        AlertError.message.classList.add('open')
    },
    close() {
        AlertError.message.classList.remove('open')
    }
}