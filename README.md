# Weather App con Class Components y Styled Componentes

Está basado en la app de Henry, pero no usa function components ni hooks

## Sobre Styled Components

Funciona creando labels personalizados a los que les puedes dar estilos de CSS, cada uno tiene una clase única, por lo que los estilos no se cruzan a menos que sean heredados desde un elemento padre. Por ejemplo mi archivo GlobalCss.jsx sustituye el div ="app" con Global className="App" dentro de App.jsx. Por ello los demás divs heredan la fuente personalizada Roboto. A grandes rasgos funciona como CSS normal, pero da mejor control sobre los estilos de cada componente 

## Estructura de la app

- App.jsx e Index.jsx se mantienen dentro de src como están por default.

- Los componentes propios (Cards.jsx, Nav.jsx, etc.) se encuentran en la carpeta de /components.

- Los estilos creados con styled components comparten la teminación Css para especificar lo que hacen, ademas estan en la carpeta de styles para evitar revolver componentes con estilos .

- CardStyles contiene estilos de elementos hijo del card, pero tamién se pudieron declarar todos en el archivo CardCss.jsx usando exports para cada tag.

## Completado

- App manda correctamente los props a nav y cards.

- Nav manda correctaente la funcion onSearch al searchBar.

- Cards recibe correctamente el arreglo de ciudades para renderizar la lista de cards, tambien manda correctamente la funcion onClose a Card.

- onClose recibe correctamente el id de la card que hay que filtrar. Hasta el momento solo sirve con un console.log(id) para comprobar que el id sí llega hasta App.jsx (donde la función es declarada y bindeada al objeto.

## Errores

- Al ejecutarse la función onClose, no acepta el arreglo de ciudades (this.state.cities) para actualizarlo, crashea la app y marca el siguiente error:

TypeError: Cannot read properties of undefined (reading 'cities')
onClose