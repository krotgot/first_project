const buttons = document.querySelectorAll('.list-select__list-item')
const blocks = document.querySelectorAll('.list-select__items-block')

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        let index = e.target.dataset.index
        removeActiveClassFromElements (buttons)
        removeActiveClassFromElements (blocks)
        e.target.classList.add('active')
        blocks.forEach(item =>  {
            if (item.dataset.item === index) {
                item.classList.add('active')
            }
        })
    })
    })

    function removeActiveClassFromElements (elem) {
        elem.forEach(item => {
            item.classList.remove('active')
        })
    }