# Mundo Tazas💕


## Descripcion👀

Este es mi proyecto final para el curso de ReacJS de Coder House (2022).
La aplicacion trata de una tienda de tazas y accesorios basadas en los personajes de disney.
La aplicacion permite visualizar todos los productos en su inicio, navegar a sus detalles desde el navbar, ver productos por categoria, agregarlos al carrito y poder acceder al mismo para simular la compra completando los datos del cliente y generar una orden en firebase.
Mi codigo esta basado segun lo comprendido en las clases y la doc. complementaria, ademas tuve que investigar por cuenta popia y recurrir a la asesoria de coderAsk ya que en las clases se daba mucha teoria y la poca actividad practiva no ayudaba a comprender como luego volcarlo al poryecto.

## Componentes Principales✍ 

**Navbar**🖱
 - Logo el cual al cliquear te lleva al inicio de la web
 - Links de inicio, tazas y accesorios, para poder acceder al menu completo desde el inicio, a la seccion de solo tazas o a la seccion de solo accesorios.
 - Carrito para poder acceder al mismo.
 - Menu desplegable, el mismo aparece al llegar a un diametro de 600px, al colocar el cursor sobre el icono del menu desplegable se despliegan los link de acceso rapido (inicio, tazas, accesorios).

**Inicio**📱
 - Titulo para que el usuario sepa en donde esta.
 - Lista de todos los productos disponible renderizando el **ItemList**

**Cart**🛒
 - Titulo para que el usuario sepa en donde esta.
 - Cuanta con un if para que nos muestre si el carrito tiene o no productos:
 - Si el carrito **no tiene** productos aparece un mensaje y un boton para ir a comprar.
 - Si el carrito **tiene** productos se muestra el **ItemCart** cada producto con sus detalles (titulo, cantidad, precio por unidad, subtotal) y el total de la compra general, mas un boton para generar la orden de compra y un boton por producto para elimiarlo.

**ItemDetailContainer**📑
- Hooks para lograr renderizar los productos desde la base de Firebase y mostrar su detalle desde el **ItemDetail** donde se encuentra el formato y se puede visualizar la foto, titulo, precio, detalle, contador para elegir el numero de unidades a comprar el cual se trae del **ItemCount** y 2 botones, uno para añadir el producto  y otro para finalizra la compra.

**ItemListContainer**🧾
- Hooks para lograr renderizar los productos desde la base de Firebase y mostrar los productos segun su categoria trayendo la lista de **ItemList** 

**CartContext**📌
- Cuanta con toda la logica para renderizar las funcionalidades del carrito
- Funcionalidad de añadir al carrito
- Funcionalidad de borrar el producto del carrito
- Funcionalidad para sumar la cantidad de producto iguales sin duplicarlos visualmente
- Mostrar total de compra
- Mostrar la cantidad de productos añadidos al carrito

**FinCompra**👍
- Este componente lo añadi yo ya que por cuetiones de tiempo no pude llegar a hacer uno de los puntos del poryecto (feedback del número de orden generado en firebase) por lo que genere este componente que al dar click en finalizar compra te muestra un texto de "Gracias por la compra" para darle un cierre al proyecto.

**Tecnologías y librerías**📚

- Interfaz realizada con **ReactJS - Create React App**
- Estilos con **ReactCSS**
- Iconos con **BoxIcon**
- Ruteo con **React Router Dom**
- Backend con **Firebase**
- Utilizacion de **Context** para el flujo de datos

**Faltantes**😣
Lamentablemente con el poco tiempo brindado para poder realizar la entrega del proyecto final y mi carga horaria laboral no logre realizar 2 puntos de lo solcitado:
- Lógica de repetir el email 2 veces
- Feedback del número de orden
