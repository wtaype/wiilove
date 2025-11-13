import $ from 'jquery';
import './primavera.css';

export default (fest, de, para, msg, audio) => {
  const html = `
    <div class="primavera_envoltorio">
      <!-- Fondo degradado -->
      <div class="fondo_degradado"></div>
      
      <!-- Partículas flotantes -->
      <div class="particulas">
        ${Array(50).fill(0).map((_, i) => `
          <span class="particula" style="
            left:${Math.random()*100}vw;
            animation-delay:${Math.random()*8}s;
            font-size:${1.2 + Math.random()*2.5}vw;
          ">${['🌻','🌼','💛','✨','🌸'][Math.floor(Math.random()*5)]}</span>
        `).join('')}
      </div>
      
      <!-- Contenedor principal -->
      <div class="primavera_contenido">
        
        <!-- CARD DEL MENSAJE -->
        <div class="tarjeta_mensaje">
          
          <!-- Imagen de Flores -->
          <div class="encabezado_tarjeta">
            <div class="imagen_girasol">
              <img src="https://i.postimg.cc/KxTKnSvJ/image.png" alt="Girasol">
            </div>
          </div>
          
          <!-- Para -->
          <p class="texto_saludo">
            Para ti: <span class="nombre_resaltado">${para}</span> 💛
          </p>
          
          <!-- SOBRE INTERACTIVO -->
          <div class="contenedor_sobre" id="contenedorSobre">
            <div class="sobre_cerrado">
              <div class="sobre_solapa_superior"></div>
              <div class="sobre_cuerpo">
                <div class="sobre_sello">✨</div>
                <p class="sobre_texto_click">Haz clic para abrir</p>
              </div>
            </div>
            
            <div class="carta_interior">
              <div class="carta_contenido">
                <p class="cuerpo_mensaje">${msg}</p>
              </div>
            </div>
          </div>
          
          <!-- De -->
          <div class="firma">
            <span class="etiqueta_firma">De parte: </span>
            <span class="nombre_firma">${de}</span>
          </div>
          
          <!-- Botón Enviar Amor -->
          <button class="boton_corazon" id="botonCorazon">
            <i class="fas fa-heart"></i>
            <span>Enviar Amor</span>
          </button>

          <!-- Fecha -->
          <div class="chip_fecha">${fest.fechaTexto}</div>
          
          <!-- Título -->
          <h1 class="titulo_gradiente">${fest.nombre}</h1>
          
        </div>
        
      </div>
      
      <!-- FOOTER -->
      <footer class="pie_pagina">
        <a href="/" class="texto_pie">Personaliza para ti</a>
      </footer>
      
      <!-- Botón música esquina inferior derecha -->
      <button class="boton_musica_flotante" id="botonMusica">
        <i class="fas fa-music" id="iconoMusica"></i>
        <i class="fas fa-pause" id="iconoPausa" style="display:none;"></i>
        <span class="onda_musica"><i></i><i></i><i></i></span>
      </button>
      
      <audio id="musicaFondo" loop preload="auto">
        <source src="${audio}" type="audio/mpeg">
      </audio>
    </div>
  `;

  setTimeout(() => {
    const musica = $('#musicaFondo')[0];
    const botonMus = $('#botonMusica');
    let reproduciendo = false;

    // Intentar reproducir automáticamente
    musica.play().then(() => {
      reproduciendo = true;
      botonMus.addClass('reproduciendo');
      $('#iconoMusica').hide();
      $('#iconoPausa').show();
    }).catch(() => 0);

    // Control de música
    botonMus.on('click', () => {
      if (reproduciendo) {
        musica.pause();
      } else {
        musica.play();
      }
      botonMus.toggleClass('reproduciendo');
      $('#iconoMusica, #iconoPausa').toggle();
      reproduciendo = !reproduciendo;
    });

    // Interacción del sobre (abrir/cerrar con hover y click)
    let sobreAbierto = false;
    const $sobre = $('#contenedorSobre');
    
    $sobre.on('click', function() {
    sobreAbierto = !sobreAbierto;
    $(this).toggleClass('abierto');
    
    if (sobreAbierto) {
      musica.currentTime = 0;
      musica.play();
      reproduciendo = true;
      botonMus.addClass('reproduciendo');
      $('#iconoMusica').hide();
      $('#iconoPausa').show();
    }
  });

    // Botón corazones
    $('#botonCorazon').on('click', function() {
      $(this).addClass('clickeado');
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          $('<div class="corazon_flotante">').text(['❤️','💕','💖','💗','💝','💛'][Math.floor(Math.random()*6)])
            .css({left: Math.random()*100+'vw', bottom: 0})
            .appendTo('.primavera_envoltorio')
            .delay(3000).fadeOut(600, function() {$(this).remove();});
        }, i * 50);
      }
      setTimeout(() => $(this).removeClass('clickeado'), 600);
    });
  }, 100);

  return html;
};