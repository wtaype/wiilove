import $ from 'jquery';

export function paratiContenido(nombre) {
  $('body').html(`
    <div class="parati_wrap">
      <div class="parati_cont">
        <div class="parati_ico">💖</div>
        <h1 class="parati_tit">Hola ${nombre}</h1>
        <p class="parati_sub">Alguien especial tiene un mensaje para ti</p>
        <div class="parati_corazon">
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </div>
  `);

  // CSS
  $('style').append(`
    .parati_wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Poppins', sans-serif;
    }

    .parati_cont {
      text-align: center;
      animation: fadeIn 1s ease-out;
    }

    .parati_ico {
      font-size: 8rem;
      animation: float 3s ease-in-out infinite;
      filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
    }

    .parati_tit {
      font-size: clamp(2rem, 5vw, 4rem);
      color: #fff;
      font-weight: 900;
      text-shadow: 0 4px 20px rgba(0,0,0,0.3);
      margin: 2vh 0;
      animation: slideUp 0.8s ease-out 0.2s both;
    }

    .parati_sub {
      font-size: clamp(1rem, 2vw, 1.5rem);
      color: rgba(255,255,255,0.9);
      font-weight: 500;
      animation: slideUp 0.8s ease-out 0.4s both;
    }

    .parati_corazon {
      margin-top: 4vh;
      animation: slideUp 0.8s ease-out 0.6s both;
    }

    .parati_corazon i {
      font-size: 3rem;
      color: #ff3849;
      animation: latido 1.5s ease-in-out infinite;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    @keyframes latido {
      0%, 100% { transform: scale(1); }
      25% { transform: scale(1.2); }
      50% { transform: scale(1); }
      75% { transform: scale(1.1); }
    }
  `);
}