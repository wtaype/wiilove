import $ from 'jquery';
import './cumple.css';

export default (fest, de, para, msg, audio) => {
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 20 : 40;
  
  const html = `
    <div class="cumple_envoltorio">
      <div class="fondo_degradado"></div>
      
      <div class="particulas">
        ${Array.from({length: particleCount}, (_, i) => `
          <span class="particula" style="
            left:${Math.random()*100}%;
            animation-delay:${Math.random()*5}s;
            font-size:${isMobile ? '5vw' : '2.5vw'};
          ">${['🎂','🎈','🎉','🎁','🥳','✨','🍰','🎊'][Math.floor(Math.random()*8)]}</span>
        `).join('')}
      </div>
      
      <div class="confeti">
        ${Array.from({length: isMobile ? 30 : 50}, (_, i) => `
          <div class="confeti_pieza" style="
            left:${Math.random()*100}%;
            animation-delay:${Math.random()*4}s;
            background:hsl(${Math.random()*360}, 80%, 60%);
          "></div>
        `).join('')}
      </div>
      
      <div class="cumple_contenido">
        <div class="tarjeta_mensaje">
          <div class="encabezado_tarjeta">
            <div class="imagen_cumple">
              <img src="${fest.imagen}" alt="Cumpleaños" loading="lazy">
              <div class="circulo_pulso"></div>
            </div>
          </div>
          
          <p class="texto_saludo">
            🎉 Para: <span class="nombre_resaltado">${para}</span> 🎉
          </p>
          
          <div class="contenedor_sobre" id="contenedorSobre" role="button" tabindex="0" aria-label="Abrir mensaje">
            <div class="sobre_cerrado">
              <div class="sobre_solapa_superior"></div>
              <div class="sobre_cuerpo">
                <div class="sobre_sello">🎂</div>
                <p class="sobre_texto_click">¡Abre tu regalo!</p>
              </div>
            </div>
            
            <div class="carta_interior">
              <div class="carta_contenido">
                <p class="cuerpo_mensaje">${msg}</p>
              </div>
            </div>
          </div>
          
          <div class="firma">
            <span class="etiqueta_firma">Con cariño: </span>
            <span class="nombre_firma">${de}</span>
          </div>
          
          <button class="boton_celebrar" id="botonCelebrar" aria-label="Celebrar cumpleaños">
            <i class="fas fa-birthday-cake"></i>
            <span>¡Sopla la vela!</span>
          </button>

          <div class="chip_fecha">${fest.fechaTexto}</div>
          <h1 class="titulo_gradiente">${fest.nombre}</h1>
        </div>
      </div>
      
      <footer class="pie_pagina">
        <a href="/" class="texto_pie">Personaliza para ti</a>
      </footer>
      
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

    musica.play().then(() => {
      reproduciendo = true;
      botonMus.addClass('reproduciendo');
      $('#iconoMusica').hide();
      $('#iconoPausa').show();
    }).catch(() => 0);

    botonMus.on('click', toggleMusica);

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

    $('#botonCelebrar').on('click', function() {
      $(this).addClass('clickeado');
      
      const emojis = ['🎂','🎉','🎈','🎁','✨','🎊','🥳','🍰'];
      const count = isMobile ? 12 : 20;
      
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          $('<div class="efecto_celebracion" aria-hidden="true">')
            .text(emojis[Math.floor(Math.random() * emojis.length)])
            .css({
              left: Math.random() * 100 + '%',
              bottom: '0',
              animationDuration: (2 + Math.random() * 1.5) + 's'
            })
            .appendTo('.cumple_envoltorio')
            .delay(2500)
            .fadeOut(400, function() { $(this).remove(); });
        }, i * 35);
      }
      
      setTimeout(() => $(this).removeClass('clickeado'), 600);
    });

    $(window).on('beforeunload', () => {
      musica.pause();
      musica.src = '';
    });
  }, 100);

  return html;
};