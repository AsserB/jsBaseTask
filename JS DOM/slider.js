const leftbtn = document.querySelector("#left");
const rightbtn = document.querySelector("#rignt");
const item = document.querySelector("#items")
const computedStyle = getComputedStyle(item)

//let currentRight = 0; //текущая позция списка


leftbtn.addEventListener("click", e =>{ //задаем действие для левой кнопки
    e.preventDefault()//дает команду ссылкам не действовать как ссылки

    let currentRight = parseInt(computedStyle.right);

    if (currentRight > 0) {
        item.style.right = `${currentRight - 100}px`;//увеличиваем на 100 пикселей(сдвигаем напрво)
    }
})

rightbtn.addEventListener("click", e =>{ //задаем действие для правой кнопки
    e.preventDefault()

    let currentRight = parseInt(computedStyle.right);

    if (currentRight < 400) {
        item.style.right = `${currentRight + 100}px`;//увеличиваем на 100 пикселей(сдвигаем напрво)
    }
    
})