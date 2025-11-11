import $ from 'jquery';
import './primavera.css';

export default (fest, de, para, msg, audio) => {
  // Renderizar HTML
  const html = `
    <div class="primavera-container">
      <!-- Partículas de fondo -->
      <div class="particles-bg">
        ${Array(50).fill(0).map((_, i) => `
          <div class="particle" style="
            left:${Math.random()*100}%;
            top:${Math.random()*100}%;
            animation-delay:${Math.random()*5}s;
            font-size:${1 + Math.random()*2}rem;
          ">${['🌻','🌼','🌺','💛','✨','🌸'][Math.floor(Math.random()*6)]}</div>
        `).join('')}
      </div>

      <!-- Flores flotantes con Font Awesome -->
      <div class="floating-flowers">
        <i class="fas fa-seedling flower" style="--delay:0s; --x:10%; --y:20%;"></i>
        <i class="fas fa-leaf flower" style="--delay:0.5s; --x:85%; --y:15%;"></i>
        <i class="fab fa-pagelines flower" style="--delay:1s; --x:20%; --y:80%;"></i>
        <i class="fas fa-seedling flower" style="--delay:1.5s; --x:75%; --y:75%;"></i>
        <i class="fas fa-leaf flower" style="--delay:2s; --x:50%; --y:10%;"></i>
        <i class="fab fa-envira flower" style="--delay:2.5s; --x:5%; --y:50%;"></i>
        <i class="fab fa-pagelines flower" style="--delay:3s; --x:90%; --y:45%;"></i>
      </div>

      <!-- Card principal -->
      <div class="primavera-card">
        <!-- Header -->
        <div class="card-header">
          <div class="date-badge">${fest.fechaTexto}</div>
          <h1 class="card-title">
            <span class="emoji-left">${fest.emoji}</span>
            ${fest.nombre}
            <span class="emoji-right">${fest.emoji}</span>
          </h1>
          <p class="card-subtitle">${fest.descripcion}</p>
        </div>

        <!-- Girasol animado 3D -->
        <div class="sunflower-container">
          <div class="sunflower">
            <div class="sunflower-center">
              <div class="center-detail"></div>
            </div>
            ${Array(12).fill(0).map((_, i) => `
              <div class="petal" style="--index:${i};">
                <div class="petal-inner"></div>
              </div>
            `).join('')}
          </div>
          <div class="sunflower-stem"></div>
          <div class="sunflower-leaf sunflower-leaf-left"></div>
          <div class="sunflower-leaf sunflower-leaf-right"></div>
        </div>

        <!-- Mensaje -->
        <div class="message-box">
          <p class="greeting">
            Hola <span class="highlight-name">${para}</span> ✨
          </p>
          <div class="love-message">
            <div class="quote-left">"</div>
            <p class="message-text">${msg}</p>
            <div class="quote-right">"</div>
          </div>
          <div class="signature-box">
            <p class="signature-text">Con todo mi amor,</p>
            <p class="signature-name">${de}</p>
            <span class="signature-emoji">💛</span>
          </div>
        </div>

        <!-- Botón corazón -->
        <button class="heart-button" id="heartBtn">
          <i class="fas fa-heart heart-icon"></i>
          <span class="btn-text">Abre Mi Corazón</span>
          <div class="btn-shine"></div>
        </button>

        <!-- Botón volver -->
        <a href="/" class="back-button">
          <i class="fas fa-home"></i>
          <span>Crear tu mensaje</span>
        </a>
      </div>

      <!-- Control de música flotante -->
      <div class="music-control">
        <button class="music-btn" id="musicBtn">
          <i class="fas fa-music music-icon"></i>
          <i class="fas fa-pause pause-icon" style="display:none;"></i>
          <div class="music-waves">
            <span class="wave"></span>
            <span class="wave"></span>
            <span class="wave"></span>
          </div>
        </button>
        <span class="music-tooltip">Música</span>
      </div>

      <!-- Audio -->
      <audio id="bgMusic" loop preload="auto">
        <source src="${audio}" type="audio/mpeg">
      </audio>
    </div>
  `;

  // Eventos jQuery después de renderizar
  setTimeout(() => {
    const $music = $('#bgMusic');
    const $musicBtn = $('#musicBtn');
    const $musicIcon = $musicBtn.find('.music-icon');
    const $pauseIcon = $musicBtn.find('.pause-icon');
    const $waves = $musicBtn.find('.music-waves');
    let isPlaying = false;

    // Auto-play música
    $music[0].play().then(() => {
      isPlaying = true;
      $musicBtn.addClass('playing');
      $musicIcon.hide();
      $pauseIcon.show();
      $waves.addClass('active');
    }).catch(e => {
      console.log('Auto-play bloqueado:', e);
    });

    // Toggle música con jQuery
    $musicBtn.on('click', function() {
      if (isPlaying) {
        $music[0].pause();
        $(this).removeClass('playing');
        $musicIcon.show();
        $pauseIcon.hide();
        $waves.removeClass('active');
      } else {
        $music[0].play();
        $(this).addClass('playing');
        $musicIcon.hide();
        $pauseIcon.show();
        $waves.addClass('active');
      }
      isPlaying = !isPlaying;
    });

    // Crear corazones flotantes con jQuery
    $('#heartBtn').on('click', function() {
      const $btn = $(this);
      $btn.addClass('clicked');
      
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          const $heart = $(`<div class="heart-float">${['❤️','💕','💖','💗','💝','💓'][Math.floor(Math.random()*6)]}</div>`);
          $heart.css({
            left: Math.random() * 100 + '%',
            bottom: '0',
            animationDelay: Math.random() * 0.3 + 's',
            fontSize: (1.5 + Math.random()) + 'rem'
          });
          $('body').append($heart);
          setTimeout(() => $heart.remove(), 3000);
        }, i * 80);
      }

      setTimeout(() => $btn.removeClass('clicked'), 600);
    });

    // Efecto parallax con jQuery
    $(window).on('mousemove', function(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      $('.sunflower').css('transform', `translate(-50%, -50%) translate(${x}px, ${y}px)`);
      $('.floating-flowers .flower').each(function(i) {
        $(this).css('transform', `translate(${x * (i + 1) * 0.1}px, ${y * (i + 1) * 0.1}px)`);
      });
    });

    // Animación de entrada de elementos
    $('.card-header, .sunflower-container, .message-box, .heart-button, .back-button').each(function(i) {
      $(this).css({
        animation: 'fadeInUp 0.8s ease-out forwards',
        animationDelay: (i * 0.15) + 's',
        opacity: '0'
      });
    });
  }, 100);

  return html;
};