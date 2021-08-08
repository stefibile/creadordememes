let header = document.getElementById ("header")
let botonModoOscuro = document.getElementById ("light-mode")
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


    for (let i = 0; i <= todosLosHeadings.length; i++) {
        headings[i].classList.toggle ("light-text")
    }

}



asideTextButton.onclick = () => {
    asideText.classList.remove ("ocultar")
    asideImage.classList.add ("ocultar")
}

asideImageButton.onclick = () => {
    asideText.classList.add ("ocultar")
    asideImage.classList.remove ("ocultar")
}




//    let aside = document.getElementById ("text-aside")
//   let botonDeCambio = document.getElementById ("shown-aside")

//    let mostrarAsideTexto = () => {
//        aside.style.display = "block"
//   }

//   botonDeCambio.onclick = mostrarAsideTexto

//   let asideImagen = document.getElementById ("form-text")
//    let botonDeCambioImagen = document.getElementById ("mostrar-imagen")

//   let mostrarImagen = () => {
//        asideImagen.style.display = "none"
//   }

//   botonDeCambioImagen.onclick = mostrarImagen

//  let abrirAsideTexto = document.getElementById("mostrar-imagen")
//  let imageAside = document.querySelector(".image-aside")

// abrirAsideTexto.onclick = () => {
//      imageAside.classList.toggle("ocultar")
//  }



