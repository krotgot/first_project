//урок

const numberInput = document.getElementById('number-input')
const cont = document.getElementById('container')
const colorInput = document.getElementById('color-input')

numberInput.addEventListener('input', (e) => {
    let value = e.target.value
    let container = ''

    for (let i = 0; i < value; i++) {
        let div = document.createElement('div')
        div.className = 'num'
        div.innerText = i + 1
        container += div.outerHTML
    }
    cont.innerHTML = container
})

let isEven = true

colorInput.addEventListener('input', (e) => {  //change - изменения цвета по клику
    let clr = e.target.value
    let elems = cont.children
    isEven = !isEven
    // if (isEven === true) {
    //     isEven = false
    // }
    // else {
    //     isEven = true
    // }

    for (let i = 0; i < elems.length; i++) {

        if (isEven && i % 2 === 0) {
            elems[i].style.background = clr
        }
        if (!isEven && i % 2 !== 0) {
            elems[i].style.background = clr
        }
    }
})
