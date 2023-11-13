//formulario contacto
document.addEventListener('DOMContentLoaded', function () {
    //const formulario = document.getElementById('form');

    const form = document.getElementById('form');
    const username = document.getElementById('from_name');
    const email = document.getElementById('email');
    const fono = document.getElementById('phone');
    const contacto = document.getElementById('contac');
    const mensaje = document.getElementById('message');

    const btn = document.getElementById('button');

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');

    };

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    var validarNombre = function (e) {
        if (username.value.length == 0) {
            setError(username, 'Su nombre es requerido');
            return false;
        } else {
            setSuccess(username);
            return true;
        }
    };

    var validarCorreo = function () {
        if (email.value.length == 0) {
            setError(email, 'Su correo es requerido');
            return false;
            //} else if (!isValidEmail(email)) {
            //setError(email, 'Ingrese una dirección de correo valida');
        } else {
            setSuccess(email);
            return true;
        }
    };

    var validarTelefono = function () {
        if (fono.value == "") {
            setError(fono, 'Ingrese su telefono');
            return false;
        } else {
            setSuccess(fono);
            return true;
        }
    };

    var validarContacto = function () {
        if (contacto.value == "") {
            setError(contacto, '¿Diganos, desde donde nos contacta?');
            return false;
        } else {
            setSuccess(contacto);
            return true;
        }
    };

    var validarMensaje = function () {
        if (mensaje.value.length == 0) {
            setError(mensaje, '¿Dejanos un mensaje para conocer tus inquietudes?');
            return false;
        } else {
            setSuccess(mensaje);
            return true;
        }
    };

    var validar = function () {
        return validarNombre() &&
            validarCorreo() &&
            validarTelefono() &&
            validarContacto() &&
            validarMensaje();
    };


    form.addEventListener('submit', function (event) {
    event.preventDefault();//se esta previniendo que el formulario se envie por defecto

    if (validar() == true) { 

        btn.value = 'Enviando...';

            const serviceID = 'default_service';
            const templateID = 'template_xhtkiyn';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert('Gracias por contactarte con nosotros. En breve nos estaremos comunicando');
                    this.reset();
                    location.href = location.href;
                }, (err) => {
                    btn.value = 'Información enviada';
                    alert(JSON.stringify(err));
                });

     }

});


});