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

// Reemplazo de textos

const getTopText = () => {
    topText = document.getElementById ("input-top-text").value
    topTextContainer = document.getElementById ("top-text-container")
    topTextContainer.innerHTML = topText
}

const getBottomText = () => {
    bottomText = document.getElementById ("input-bottom-text").value
    bottomTextContainer = document.getElementById ("bottom-text-container")
    bottomTextContainer.innerHTML = bottomText
}

// Reemplazo de color de texto y fondo textos

const getBackgroundColor = () => {
    inputColorPicker = document.getElementById ("background-color-picker").value.toUpperCase()
    textContainers = document.querySelectorAll (".meme-text")
    textBackgroundValue = document.getElementById ("background-color-value")
    for (let i = 0; i < textContainers.length; i++) {
        textContainers[i].style.backgroundColor = inputColorPicker
    }
    textBackgroundValue.innerHTML = inputColorPicker
}

const getColorText = () => {
    inputColorPickerText = document.getElementById ("text-color-picker").value.toUpperCase()
    textColors = document.querySelectorAll (".box-text-color")
    textColorValue = document.getElementById ("text-color-value")
    for (let i = 0; i < textColors.length; i++) {
        textColors[i].style.color = inputColorPickerText
    }
    textColorValue.innerHTML = inputColorPickerText
}

// reemplazo color de fondo imagen 

const getImageBackgroundColor = () => {
    inputImageBackgroundcolor = document.getElementById ("image-color-picker").value.toUpperCase()
    colorBackgroundImage = document.getElementById ("figure-color")
    colorBackgroundImage.style.backgroundColor = inputImageBackgroundcolor
    figureColorValue = document.getElementById ("figure-color-value")
    figureColorValue.innerHTML = inputImageBackgroundcolor
}

// ocultar cajas de texto en meme

const ocultarParteSuperior = () => {
    topBox = document.getElementById ("top-box")
    topBox.classList.toggle ("ocultar")
}

const ocultarParteInferior = () => {
    bottomBox = document.getElementById("bottom-box")
    bottomBox.classList.toggle ("ocultar")
}

// cambiar tipografias

const selectFont = () => {
    fontSelector = document.getElementById ("input-select").value
    memeText = document.querySelectorAll ("#top-text-container, #bottom-text-container")
    for (let i = 0; i < memeText.length; i++) {
        memeText[i].style.fontFamily = fontSelector
    }
}

// fondo transparente 

const selectTransparent = () => {
    textBox = document.querySelectorAll ("#top-box, #bottom-box")
    for (let i = 0; i < textBox.length; i++) {
        textBox[i].classList.toggle ("transparent-selector")
    }
}

// tamaño de fuente 

const fontSizeSelector = () => {
    fontValue = document.getElementById ("input-font-size").value
    fontSizeBox = document.querySelectorAll ("#top-text-container, #bottom-text-container")
    for (let i = 0; i < fontSizeBox.length; i++) {
        fontSizeBox[i].style.fontSize = (fontValue + "px")
    }
}

//espaciado de texto

const fontSpacing = () => {
    fontSpacingValue = document.getElementById("input-text-spacing").value
    spacingOfText = document.querySelectorAll ("#top-text-container, #bottom-text-container") 
    for (let i = 0; i < spacingOfText.length; i++) {
        spacingOfText[i].style.letterSpacing = (fontSpacingValue + "px")
    }
}

// alineado de textos

const alignToLeft = () => {
    fontAlign = document.querySelectorAll ("#top-text-container, #bottom-text-container")
    for (let i = 0; i < fontAlign.length; i++) {
        fontAlign[i].style.textAlign = "left"
    }
}

const alignToCenter = () => {
    fontAlign = document.querySelectorAll ("#top-text-container, #bottom-text-container")
    for (let i = 0; i < fontAlign.length; i++) {
        fontAlign[i].style.textAlign = "center"
    }
}

const alignToRight = () => {
    fontAlign = document.querySelectorAll ("#top-text-container, #bottom-text-container")
    for (let i = 0; i < fontAlign.length; i++) {
        fontAlign[i].style.textAlign = "right"
    }
}

// cambiar interlineado

const lineSpacingValue = () => {
    lineSpacingSelector = document.getElementById ("input-line-spacing").value
    fontSpacingSelector = document.querySelectorAll ("#top-text-container, #bottom-text-container")
    for (let i = 0; i < fontSpacingSelector.length; i++) {
        fontSpacingSelector[i].style.lineHeight = lineSpacingSelector
    }
}

// cambiar contorno tipografias 

const textShadowNone = () => {
    textShadowValue = document.querySelectorAll ("#top-text-container, #bottom-text-container")
    for (let i = 0; i < textShadowValue.length; i++) {
        textShadowValue[i].style.textShadow = "none"
    }
}

const textShadowLight = () => {
    textShadowValue = document.querySelectorAll ("#top-text-container, #bottom-text-container")
    for (let i = 0; i < textShadowValue.length; i++) {
        textShadowValue[i].style.textShadow = "1px 1px 1.5px"
    }
}

const textShadowDark = () => {
    textShadowValue = document.querySelectorAll ("#top-text-container, #bottom-text-container")
    for (let i = 0; i < textShadowValue.length; i++) {
        textShadowValue[i].style.textShadow = "3px 3px 3px"
    }
}



