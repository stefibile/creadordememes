let header = document.getElementById ("header")
let botonModoOscuro = document.getElementById ("light-mode")
const image = document.getElementById ("meme-image")
const main = document.getElementById ("main")
const todosLosHeadings = document.querySelectorAll("h1, h3, h4, h5, h6, label, .icon")
const headings = Array.from(todosLosHeadings)
const aside = document.getElementById ("aside")
const asideText = document.getElementById ("text-aside")
const asideImage = document.getElementById ("image-aside")
const asideTextButton = document.getElementById ("asideTextButton")
const asideImageButton = document.getElementById ("asideImageButton")
const botonReset = document.getElementById ("button-reset")
const inputUrlImagen = document.getElementById ("input-url-imagen")
const inputBg = document.getElementById ("input-bg")
const inputLayer = document.getElementById ("input-layer")
const inputTopText = document.getElementById ("input-top-text")
const inputBottomText = document.getElementById ("input-bottom-text")
const inputSelect = document.getElementById ("input-select")
const inputFontSize = document.getElementById ("input-font-size")
const alignLeft = document.getElementById ("align-left")
const alignCenter = document.getElementById ("align-center")
const alignRight = document.getElementById ("align-right")
const inputColor = document.getElementById ("input-color")
const inputBgColor = document.getElementById ("input-bgcolor")
const inputNoneContorn = document.getElementById ("input-none-contorn")
const inputLightContorn = document.getElementById ("input-light-contorn")
const inputDarkContorn = document.getElementById ("input-dark-contorn")
const inputTextSpacing = document.getElementById ("input-text-spacing")
const inputLineSpacing = document.getElementById ("input-line-spacing")
const memeImage = document.getElementById("meme-image")

// Modo Oscuro

botonModoOscuro.onclick = () => {
    header.classList.toggle ("light-mode")
    main.classList.toggle ("light-main")
    aside.classList.toggle ("light-aside")
    botonReset.classList.toggle ("bg-white")
    inputUrlImagen.classList.toggle ("bg-white")
    inputBg.classList.toggle ("bg-white")
    inputLayer.classList.toggle ("bg-white")
    inputTopText.classList.toggle ("bg-white")
    inputBottomText.classList.toggle ("bg-white")
    inputSelect.classList.toggle ("bg-white")
    inputFontSize.classList.toggle ("bg-white")
    alignLeft.classList.toggle ("bg-white")
    alignCenter.classList.toggle ("bg-white")
    alignRight.classList.toggle ("bg-white")
    inputColor.classList.toggle ("bg-white")
    inputBgColor.classList.toggle ("bg-white")
    inputNoneContorn.classList.toggle ("bg-white")
    inputLightContorn.classList.toggle ("bg-white")
    inputDarkContorn.classList.toggle ("bg-white")
    inputTextSpacing.classList.toggle ("bg-white")
    inputLineSpacing.classList.toggle ("bg-white")


    for (let i = 0; i < todosLosHeadings.length; i++) {
        headings[i].classList.toggle ("light-text")
    }

}

// Asides desplegables

asideTextButton.onclick = () => {
    asideText.classList.remove ("ocultar")
    asideImage.classList.add ("ocultar")
}

asideImageButton.onclick = () => {
    asideText.classList.add ("ocultar")
    asideImage.classList.remove ("ocultar")
}


// Filtros de imagen

inputUrlImagen.onchange = () => {
    memeImage.setAttribute("src", inputUrlImagen.value)
}

const darBrillo = () => {
    brillo = document.getElementById ("brillo").value
    image.style.filter = "brightness(" + brillo + "%)"
}

const darOpacidad = () => {
    opacidad = document.getElementById ("opacidad").value
    image.style.filter = "opacity(" + opacidad + "%)"
}

const darContraste = () => {
    contraste = document.getElementById ("contraste").value
    image.style.filter = "contrast(" + contraste + "%)"
}

const darDesenfoque = () => {
    desenfoque = document.getElementById ("desenfoque").value
    image.style.filter = "blur(" + desenfoque + "px)"
}

const darEscalaDeGrises = () => {
    escalaDeGrises = document.getElementById ("escala-de-grises").value
    image.style.filter = "grayscale(" + escalaDeGrises + "%)"
}

const darSepia = () => {
    sepia = document.getElementById ("sepia").value
    image.style.filter = "sepia(" + sepia + "%)"
}

const darHue = () => {
    hue = document.getElementById ("hue").value
    image.style.filter = "hue-rotate(" + hue + "deg)"
}

const darSaturado = () => {
    saturado = document.getElementById ("saturado").value
    image.style.filter = "saturate(" + saturado + "%)"
}

const darNegativo = () => {
    negativo = document.getElementById ("negativo").value
    image.style.filter = "invert(" + negativo + ")"
}