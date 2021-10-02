const openButton = document.querySelector("#openOverley");
const body = document.body;

openButton.addEventListener("click", e =>{
    const overleyElement = document.createElement("div");
    overleyElement.classList.add("overley");

    const containerElement = document.createElement("div")
    containerElement.classList.add("modal__container")

    const contentElement = document.createElement("div")
    contentElement.classList.add("content")

    const closeElement = document.createElement("a")
    closeElement.classList.add("close")
    closeElement.textContent="Х"
    closeElement.href = "#"

    closeElement.addEventListener("click", e =>{
        e.preventDefault();
        body.removeChild(overleyElement)
    })

    contentElement.innerHTML = "Hello <b>World</b>"

    overleyElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);
    body.appendChild(overleyElement);


})