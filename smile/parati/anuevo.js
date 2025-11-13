import $ from 'jquery';
import './anuevo.css';

export default (fest, de, para, msg, audio) => {
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 15 : 30;
  
  const html = `
    <div class="anuevo_envoltorio">
      <!-- Fondo degradado -->
      <div class="fondo_degradado"></div>
      
      <!-- Partículas flotantes optimizadas -->
      <div class="particulas">
        ${Array.from({length: particleCount}, (_, i) => `
          <span class="particula" style="
            left:${Math.random()*100}%;
            animation-delay:${Math.random()*6}s;
            font-size:${isMobile ? '4vw' : '2vw'};
          ">${['🎆','✨','🎊','🌟','💫','🎁'][Math.floor(Math.random()*6)]}</span>
        `).join('')}
      </div>
      
      <!-- Contenedor principal -->
      <div class="anuevo_contenido">
        
        <!-- CARD DEL MENSAJE -->
        <div class="tarjeta_mensaje">
          
          <!-- Imagen principal -->
          <div class="encabezado_tarjeta">
            <div class="imagen_festiva">
              <img src="${fest.imagen}" alt="Celebración" loading="lazy">
            </div>
          </div>
          
          <!-- Para -->
          <p class="texto_saludo">
            Para ti: <span class="nombre_resaltado">${para}</span> 🎉
          </p>
          
          <!-- SOBRE INTERACTIVO -->
          <div class="contenedor_sobre" id="contenedorSobre" role="button" tabindex="0" aria-label="Abrir mensaje">
            <div class="sobre_cerrado">
              <div class="sobre_solapa_superior"></div>
              <div class="sobre_cuerpo">
                <div class="sobre_sello">🎆</div>
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
          
          <!-- Botón Celebrar -->
          <button class="boton_celebrar" id="botonCelebrar" aria-label="Celebrar año nuevo">
            <i class="fas fa-sparkles"></i>
            <span>¡Celebrar!</span>
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
      <button class="boton_musica_flotante" id="botonMusica" aria-label="Controlar música">
        <i class="fas fa-music" id="iconoMusica"></i>
        <i class="fas fa-pause" id="iconoPausa" style="display:none;"></i>
        <span class="onda_musica"><i></i><i></i><i></i></span>
      </button>
      
      <audio id="musicaFondo" loop preload="metadata">
        <source src="${audio}" type="audio/mpeg">
        Tu navegador no soporta audio HTML5.
      </audio>
    </div>
  `;

  setTimeout(() => {
    const musica = $('#musicaFondo')[0];
    const botonMus = $('#botonMusica');
    let reproduciendo = false;

    // Control de música con manejo de errores
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
        console.warn('Error al reproducir audio:', error);
        botonMus.addClass('error-audio');
      }
    };

    // Intentar reproducir automáticamente
    musica.play().then(() => {
      reproduciendo = true;
      botonMus.addClass('reproduciendo');
      $('#iconoMusica').hide();
      $('#iconoPausa').show();
    }).catch(() => {
      // Silenciar error - muchos navegadores bloquean autoplay
    });

    botonMus.on('click', toggleMusica);

    // Interacción del sobre mejorada
    let sobreAbierto = false;
    const $sobre = $('#contenedorSobre');
    
    const toggleSobre = () => {
      sobreAbierto = !sobreAbierto;
      $sobre.toggleClass('abierto');
      
      if (sobreAbierto && !reproduciendo) {
        toggleMusica();
      }
    };

    $sobre.on('click keydown', function(e) {
      if (e.type === 'click' || (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))) {
        e.preventDefault();
        toggleSobre();
      }
    });

    // Botón celebración optimizado
    $('#botonCelebrar').on('click', function() {
      $(this).addClass('clickeado');
      
      const celebracionEmojis = ['🎆','🎊','✨','🌟','🎉','💫'];
      const animationCount = isMobile ? 10 : 15;
      
      for (let i = 0; i < animationCount; i++) {
        setTimeout(() => {
          $(`<div class="efecto_celebracion" aria-hidden="true">`)
            .text(celebracionEmojis[Math.floor(Math.random() * celebracionEmojis.length)])
            .css({
              left: Math.random() * 100 + '%',
              bottom: '0'
            })
            .appendTo('.anuevo_envoltorio')
            .delay(2500)
            .fadeOut(500, function() {
              $(this).remove();
            });
        }, i * 40);
      }
      
      setTimeout(() => $(this).removeClass('clickeado'), 600);
    });

    // Cleanup para mejor performance
    $(window).on('beforeunload', () => {
      musica.pause();
      musica.src = '';
    });
    
  }, 100);

  return html;
};