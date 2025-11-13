import $ from 'jquery';
import './dmadre.css';

export default (fest, de, para, msg, audio) => {
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 20 : 35;
  
  const html = `
    <div class="dmadre_envoltorio">
      <!-- Fondo degradado -->
      <div class="fondo_degradado"></div>
      
      <!-- Partículas flotantes -->
      <div class="particulas">
        ${Array.from({length: particleCount}, (_, i) => `
          <span class="particula" style="
            left:${Math.random()*100}%;
            animation-delay:${Math.random()*5}s;
            font-size:${isMobile ? '4.5vw' : '2.2vw'};
          ">${['🌸','💐','🌹','💕','💗','🦋','🌺','👩'][Math.floor(Math.random()*8)]}</span>
        `).join('')}
      </div>
      
      <!-- Contenedor principal -->
      <div class="dmadre_contenido">
        <div class="tarjeta_mensaje">
          
          <!-- Imagen -->
          <div class="encabezado_tarjeta">
            <div class="imagen_madre">
              <img src="${fest.imagen}" alt="Día de la Madre" loading="lazy">
              <div class="flor_decorativa">🌸</div>
            </div>
          </div>
          
          <!-- Para -->
          <p class="texto_saludo">
            🌹 Para: <span class="nombre_resaltado">${para}</span> 🌹
          </p>
          
          <!-- SOBRE INTERACTIVO -->
          <div class="contenedor_sobre" id="contenedorSobre" role="button" tabindex="0" aria-label="Abrir mensaje">
            <div class="sobre_cerrado">
              <div class="sobre_solapa_superior"></div>
              <div class="sobre_cuerpo">
                <div class="sobre_sello">👩‍👧</div>
                <p class="sobre_texto_click">¡Abre tu mensaje!</p>
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
            <span class="etiqueta_firma">Con amor: </span>
            <span class="nombre_firma">${de}</span>
          </div>
          
          <!-- Botón Celebrar -->
          <button class="boton_celebrar" id="botonCelebrar" aria-label="Celebrar día de la madre">
            <i class="fas fa-heart"></i>
            <span>¡Feliz Día Mamá!</span>
          </button>

          <!-- Fecha -->
          <div class="chip_fecha">${fest.fechaTexto}</div>
          
          <!-- Título -->
          <h1 class="titulo_gradiente">Día de la Madre</h1>
          
        </div>
      </div>
      
      <!-- FOOTER -->
      <footer class="pie_pagina">
        <a href="/" class="texto_pie">Personaliza para ti</a>
      </footer>
      
      <!-- Botón música -->
      <button class="boton_musica_flotante" id="botonMusica" aria-label="Controlar música">
        <i class="fas fa-music" id="iconoMusica"></i>
        <i class="fas fa-pause" id="iconoPausa" style="display:none;"></i>
        <span class="onda_musica"><i></i><i></i><i></i></span>
      </button>
      
      <audio id="musicaFondo" loop preload="metadata">
        <source src="${audio}" type="audio/mpeg">
      </audio>
    </div>
  `;

  setTimeout(() => {
    const musica = $('#musicaFondo')[0];
    const botonMus = $('#botonMusica');
    let reproduciendo = false;

    const toggleMusica = async () => {
      try {
        if (reproduciendo) {
          musica.pause();
          reproduciendo = false;
        } else {
          await musica.play();
          reproduciendo = true;
        }
        botonMus.toggleClass('reproduciendo');
        $('#iconoMusica, #iconoPausa').toggle();
      } catch (error) {
        console.warn('Error audio:', error);
        botonMus.addClass('error-audio');
      }
    };

    // Autoplay
    musica.play().then(() => {
      reproduciendo = true;
      botonMus.addClass('reproduciendo');
      $('#iconoMusica').hide();
      $('#iconoPausa').show();
    }).catch(() => 0);

    botonMus.on('click', toggleMusica);

    // Sobre interactivo
    let sobreAbierto = false;
    const $sobre = $('#contenedorSobre');
    
    const toggleSobre = () => {
      sobreAbierto = !sobreAbierto;
      $sobre.toggleClass('abierto');
      if (sobreAbierto && !reproduciendo) toggleMusica();
    };

    $sobre.on('click keydown', (e) => {
      if (e.type === 'click' || (e.type === 'keydown' && ['Enter', ' '].includes(e.key))) {
        e.preventDefault();
        toggleSobre();
      }
    });

    // Botón celebración
    $('#botonCelebrar').on('click', function() {
      $(this).addClass('clickeado');
      
      const emojis = ['💗','🌸','💐','🌹','💕','🦋','🌺','✨'];
      const count = isMobile ? 12 : 20;
      
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          $('<div class="efecto_celebracion" aria-hidden="true">')
            .text(emojis[Math.floor(Math.random() * emojis.length)])
            .css({
              left: Math.random() * 100 + '%',
              bottom: '0',
              animationDuration: (2.5 + Math.random() * 1.2) + 's'
            })
            .appendTo('.dmadre_envoltorio')
            .delay(3000)
            .fadeOut(450, function() { $(this).remove(); });
        }, i * 38);
      }
      
      setTimeout(() => $(this).removeClass('clickeado'), 600);
    });

    // Cleanup
    $(window).on('beforeunload', () => {
      musica.pause();
      musica.src = '';
    });
    
  }, 100);

  return html;
};