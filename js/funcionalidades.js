function logear() {
    var usuario = document.getElementById("user").value;
    var contrasena = document.getElementById("password").value;
    
    // Verificar que se hayan ingresado datos
    if (usuario === "" || contrasena === "") {
        alert("Por favor, complete todos los campos");
        return;
    }
    
    // Verificar la seguridad de la contraseña
    if (!verificarSeguridadContrasena(contrasena)) {
        alert("La contraseña no cumple con los requisitos de seguridad");
        return;
    }
    
    // Lógica para iniciar sesión
    
    // Almacenar datos en variables
    
    // Redirigir al usuario a la página principal
  }
  
  function registrar() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmar-contrasena").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    
    // Verificar que se hayan ingresado datos en todos los campos
    if (nombre === "" || email === "" || contrasena === "" || confirmarContrasena === "" || fechaNacimiento === "") {
        alert("Por favor, complete todos los campos");
        return;
    }
    
    // Verificar la seguridad de la contraseña
    if (!verificarSeguridadContrasena(contrasena)) {
        alert("La contraseña no cumple con los requisitos de seguridad");
        return;
    }
    
    // Verificar que las contraseñas coincidan
    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden");
        return;
    }
    
    // Lógica para registrar al usuario
    
    // Almacenar datos en variables
    
    // Redirigir al usuario a la página de inicio de sesión
  }
  
  function verificarSeguridadContrasena(contrasena) {
    // Definir los requisitos de seguridad de la contraseña
    var longitudMinima = 8;
    var requiereCaracteresEspeciales = true;
    var requiereMayusculasMinisculas = true;
    var requiereNumeros = true;
    
    // Verificar la longitud mínima
    if (contrasena.length < longitudMinima) {
      return false;
    }
    
    // Verificar la inclusión de caracteres especiales
    if (requiereCaracteresEspeciales && !/[!@#$%^&*(),.?":{}|<>]/.test(contrasena)) {
      return false;
    }
    
    // Verificar la inclusión de mayúsculas y minúsculas
    if (requiereMayusculasMinisculas && (!/[a-z]/.test(contrasena) || !/[A-Z]/.test(contrasena))) {
      return false;
    }
    
    // Verificar la inclusión de números
    if (requiereNumeros && !/\d/.test(contrasena)) {
      return false;
    }
    
    // La contraseña cumple con los requisitos de seguridad
    return true;
  }
  
  function mostrarRegistro() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
  }
  
  function mostrarLogin() {
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
  }
  
  function mostrarContrasena(elementId) {
    var input = document.getElementById(elementId);
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
  



  function playVideo(videoId) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.width = '560px';
    iframe.style.height = '315px';
    document.body.appendChild(iframe);
  }
  
  
  
  
  // Función para agrandar la imagen y mostrar el trailer al pasar el mouse
  function mostrarTrailer() {
    const thumbnails = document.querySelectorAll('.movie-thumbnails');
    
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('mouseenter', () => {
        thumbnail.classList.add('active');
      });
    
      thumbnail.addEventListener('mouseleave', () => {
        thumbnail.classList.remove('active');
      });
    });
  }
  
  // Función para mover las secciones hacia la dere.
  
  // Función para mover las secciones hacia la derecha de forma lenta
  function moverSecciones() {
    const movieSections = document.querySelectorAll('.movie-section');
  
    movieSections.forEach((section) => {
      let position = 0;
      const interval = setInterval(() => {
        if (position === 200) {
          clearInterval(interval);
        } else {
          position++;
          section.style.transform = `translateX(${position}px)`;
        }
      }, 10);
    });
  }
  
  // Función para reproducir el trailer al hacer clic en el botón de reproducción
  function reproducirTrailer() {
    const playButtons = document.querySelectorAll('.play-button');
  
    playButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Lógica para reproducir el trailer
        // Puedes abrir un modal o mostrar el video en la misma página
      });
    });
  }
  
  // Evento de carga del DOM
  document.addEventListener('DOMContentLoaded', () => {
    mostrarTrailer();
    moverSecciones();
    reproducirTrailer();
  });
  // Función para reproducir el video emergente
  function playVideo(videoId) {
    var videoContainer = document.createElement("div");
    videoContainer.className = "video-container";
  
    var video = document.createElement("video");
    video.src = "https://www.youtube.com/embed/" + videoId;
    video.autoplay = true;
    video.controls = true;
  
    var closeButton = document.createElement("span");
    closeButton.className = "close-button";
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", function () {
      videoContainer.remove();
    });
  
    videoContainer.appendChild(video);
    videoContainer.appendChild(closeButton);
  
    document.body.appendChild(videoContainer);
  }
  