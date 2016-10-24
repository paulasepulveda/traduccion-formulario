(function translate(){
	var titulo =document.getElementById('form-signin-heading');
	titulo.innerHTML="Por favor, inicia sesion";

	var correo =document.getElementById('inputEmail');
	correo.placeholder="Por favor ingresa tu correo";

	var clave =document.getElementById('inputPassword');
	clave.placeholder="Contraseña";

	var recordar=document.querySelector('.checkbox span');
	recordar.innerHTML="Recuérdame";

	var iniciar = document.getElementsByTagName('button')[0];
        iniciar.innerHTML = "Iniciar Sesión";
} ) ();
