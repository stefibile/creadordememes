
// Modo Oscuro
const lightModeButton = document.getElementById ("light-mode")
const body = document.getElementById ("body")
const label = document.getElementById ("toggle-label")

lightModeButton.onclick = () => {
    body.classList.toggle ("light-mode")
    if (body.className === "light-mode") {
        label.innerHTML = "Modo oscuro"
    }
    else {
        label.innerHTML = "Modo claro"
    }
}

// Asides desplegables
const aside = document.getElementById ("aside")
const asideText = document.getElementById ("text-aside")
const asideImage = document.getElementById ("image-aside")
const asideTextButton = document.getElementById ("asideTextButton")
const asideImageButton = document.getElementById ("asideImageButton")

asideTextButton.onclick = () => {
    aside.style.display = "block"
    asideText.classList.remove ("hide")
    asideImage.classList.add ("hide")
    asideTextButton.classList.add ("active")
    asideImageButton.classList.remove ("active")
}

asideImageButton.onclick = () => {
    aside.style.display = "block"
    asideText.classList.add ("hide")
    asideImage.classList.remove ("hide")
    asideImageButton.classList.add ("active")
    asideTextButton.classList.remove ("active")
}


// Filtros de imagen

const image = document.getElementById ("figure")

const inputUrlImagen = document.getElementById ("input-url-imagen")

inputUrlImagen.onchange = () => {
    urlImagen = inputUrlImagen.value
    image.style.backgroundImage = ("url(" + urlImagen + ")")
}

const actualizarFiltros = () => {
    brillo = document.getElementById ("brillo").value
    opacidad = document.getElementById ("opacidad").value
    contraste = document.getElementById ("contraste").value
    desenfoque = document.getElementById ("desenfoque").value
    escalaDeGrises = document.getElementById ("escala-de-grises").value
    sepia = document.getElementById ("sepia").value
    hue = document.getElementById ("hue").value
    saturado = document.getElementById ("saturado").value
    negativo = document.getElementById ("negativo").value

    image.style.filter = "brightness(" + brillo + "%)" + "opacity(" + opacidad + "%)" +
    "contrast(" + contraste + "%)" + "blur(" + desenfoque + "px)" + "grayscale(" + escalaDeGrises + "%)" +
    "sepia(" + sepia + "%)" + "hue-rotate(" + hue + "deg)" + "saturate(" + saturado + "%)" + "invert(" + negativo + ")"
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
    colorBackgroundImage = document.getElementById ("figure")
    colorBackgroundImage.style.backgroundColor = inputImageBackgroundcolor
    figureColorValue = document.getElementById ("figure-color-value")
    figureColorValue.innerHTML = inputImageBackgroundcolor
}

// ocultar cajas de texto en meme

const hideTopBox = () => {
    topBox = document.getElementById ("top-box")
    topBox.classList.toggle ("hide")
}

const ocultarParteInferior = () => {
    bottomBox = document.getElementById("bottom-box")
    bottomBox.classList.toggle ("hide")
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

// Guardado de imágenes

const downloadMeme = () => {
    const meme = document.getElementById ("meme")
    
    domtoimage.toBlob(meme)
    .then(function (blob) {
        window.saveAs(blob, "el-meme-mas-buenardo.png");
    });
}

//cerrar aside en responsive 

const closeAside = () => {
    aside.style.display = "none"
}

// Aclarar u oscurecer fondo imagen 

const backgroungColorChanger = () => {
    blendModeSelected = document.getElementById ("input-layer").value
    layer = document.getElementById ("figure")
    layer.style.backgroundBlendMode = blendModeSelected
}