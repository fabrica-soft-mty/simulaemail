//variables****************
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const reset = document.getElementById('resetBtn');
//event listener****************
eventListener();

function eventListener() {
    //inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);
    //validar el campo
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    btnEnviar.addEventListener('click', enviarEmail);
    reset.addEventListener('click', resetearFrm);

}
//funciones****************
function inicioApp() {
    //deshabilitar el envio
    btnEnviar.disabled = true;
}
//validar capo tenga algo escrito
function validarCampo() {
    //valida longitudo del texto y no este vacio
    validarLongitud(this);
    //validar la funcion email
    if (this.type === 'email') {
        validarEmail(this);
    }
    let errores = document.querySelectorAll('.error');
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length == 0) {
            btnEnviar.disabled = false;
        }

    }
}

//enviar Email
function enviarEmail(e) {
    e.preventDefault();
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block'
        //GIF que envi el email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';
    //quitar el spinener y mostrar enviado gifs
    setTimeout(() => {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(() => {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);

}

function resetearFrm(e) {
    e.preventDefault();
    formularioEnviar.reset();
}
//valida longitud
function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}
//validar el campo de email
function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}