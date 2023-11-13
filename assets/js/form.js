//formulario contacto
const form = document.getElementById('form');
const username = document.getElementById('from_name');
const email = document.getElementById('email');
const fono = document.getElementById('phone');
const contacto = document.getElementById('contac');
const mensaje = document.getElementById('message');


const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();//se esta previniendo que el formulario se envie por defecto

        validateInputs();

        //    btn.value = 'Enviando...';

        //    const serviceID = 'default_service';
        //    const templateID = 'template_xhtkiyn';

        //    emailjs.sendForm(serviceID, templateID, this)
        //     .then(() => {
        //       btn.value = 'Correo enviado';
        //       alert('Mensaje Enviado');
        //     }, (err) => {
        //       btn.value = 'Correo enviado';
        //       alert(JSON.stringify(err));
        //     });
    });

    
    form.addEventListener('submit', e => {
        e.preventDefault();
    
        validateInputs();
    });
    
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
    
    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const fonoValue = fono.value.trim();
        const contactoValue = contacto.value.trim();
        const mensajeValue = mensaje.value.trim();
    
        if(usernameValue === '') {
            setError(username, 'Su nombre es requerido');
        } else {
            setSuccess(username);
        }
    
        if(emailValue === '') {
            setError(email, 'Su correo es requerido');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Ingrese una dirección de correo valida');
        } else {
            setSuccess(email);
        }
    
        if(fonoValue === '') {
            setError(fono, 'Ingrese su telefono');
        } else {
            setSuccess(fono);
        }
    
        if(contactoValue === '') {
            setError(contacto, '¿Diganos, desde donde nos contacta?');
        } else {
            setSuccess(contacto);
        }

        if(mensajeValue === '') {
            setError(mensaje, '¿Dejanos un mensaje para conocer tus inquietudes?');
        } else {
            setSuccess(mensaje);
        }
    
    };