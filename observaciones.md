# Observaciones

Stefi, felicitaciones por su trabajo. Estoy muy contenta recorriendo tu TP. El funcionamiento es prácticamente impecable, y se nota muchísimo la atención al detalle en el código. Todo es claro, fácil de leer y entender. Las funciones están muy bien resueltas y es evidente que hubo mucho esfuerzo en hacer código claro y comprensible. Este es un trabajo para compartir, publicar, mostrarle a potenciales empleadores y del que estar muy, muy orgullosa. 

Lamentablemente tengo poco para decirte, porque este trabajo es excelente y hay poco para aportar de mi lado. Mantené este excelente nivel! 

## Estructura correcta de documento HTML

Correcta. Noto que dejas tus funciones de JS ahi en el HTML. No lo comenté en clase, pero esto no es correcto. Viola el principio de separación de responsabilidades: nuestro HTML se encarga de la estructura, JS se encarga de las funcionalidades. Si ponés la ejecución de las funciones en HTML, ahora HTML tambien se ocupa de las funcionalidades, y el código se vuelve más dificil de mantener. 

## Respeta el diseño dado

Cumplido, me encantó como lo dejaste! 

## Respeta el funcionamiento

Un detalle: el boton de restablecer filtros no modifica la imagen, vuelve los filtros a su posicion original pero no tiene efecto sobre la imagen. Vas a necesitar ejecutar la funcion actualizarFiltros ademas de un mero reset en tu form. 

## Responsive funciona correctamente

Cumplidisimo.

## Buena estructura de proyecto

Cumplido.

## Código bien indentado

Cumplido. 

## Comentarios que permiten mejorar la legibilidad del código

Cumplido. 

## Uso correcto de etiquetas semánticas

No acuerdo con usar titulos en lugar de label. Los lectores de pantalla necesitan el label. 

## Buenos nombres de clases

Cumplido. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Cumplido

## Funciones pequeñas

Cumplido

## Accesibilidad

Cumplido a medias, hay dos decisiones aquí que impactan muy negativamente en la accesibilidad de tu sitio. 

- Le diste "outline: none" a todos tus inputs, urls y botones. Despues lo arreglaste con otra cosa pero **no en todos**. Especialmente los filtros de imagen están inusables. No puedo insistir lo suficiente en lo pernicioso que es esto: le quitaste a tus usuarios la posibilidad de navegar tu web por teclado. Cualquier persona que por dificultades motrices no pueda usar el mouse, no va a poder navegar tu web. No quiero ser dramática, pero es nuestro deber y responsabilidad como desarrolladoras web permitir que todos puedan usar nuestros sitios. Quitar el outline que viene por defecto es como comprar un edificio que tiene rampas para sillas de ruedas y reemplazarlas a todas por escaleras. Nunca, nunca, nunca quitamos el outline **a menos** que lo reemplacemos con una alternativa clara toda vez que un elemento está en foco. Ante la duda, mejor dejar el outline que viene por defecto. 

Un label ayuda en terminos de accesibilidad para describir un elemento de formulario como un input al lector de pantalla y para aumentar el espacio de cliqueo en dispositivos moviles.  
Para que el lector de pantalla y el navegador puedan saber que un label y un elemento de formulario estan relacionados, el label debe 
- o bien rodear al elemento
- o bien contar con un atributo "for" que haga referencia al **id** del elemento. 
En muchisimas ocasiones esto no se cumple en tu trabajo y eso impacta en la accesibilidad. 


## Commits con mensajes adecuados

Cumplido.

# Nota final: 9

