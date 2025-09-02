/* El const hace el llamado para nuestra variable, y se iguala a document.getElementById, se encierra entre parentecis la id asignada al boton, y en el caso de correo y mensaje es el id que trae el propio bootstrap*/

const botonEnviar = document.getElementById("btn_enviar");
const inputCorreo = document.getElementById("exampleFormControlInput1");
const inputMensaje = document.getElementById("exampleFormControlTextarea1");

botonEnviar.addEventListener("click", () => {
    alert("Tu mensaje a sido enviado con éxito!");
    inputCorreo.value = "";
    inputMensaje.value = "";
});

/* Llamamos a la variable boton y le agregamos el addEventListener entre parentesis con la funcion click, junto a l afuncion de flecha ( () => {} ), el entre parentesis " {} " adentro se crea la alerta para el mensaje, y se le coloca al input del correo y del mensaje un valor 0 o nulo, tambien pueden ser comillas vacias ("") */