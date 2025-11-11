import{$ as s}from"./biwin-BnDuTAi3.js";const w=(t,p,v,m,u)=>{const h=`
    <div class="primavera-container">
      <!-- Partículas de fondo -->
      <div class="particles-bg">
        ${Array(50).fill(0).map((n,e)=>`
          <div class="particle" style="
            left:${Math.random()*100}%;
            top:${Math.random()*100}%;
            animation-delay:${Math.random()*5}s;
            font-size:${1+Math.random()*2}rem;
          ">${["🌻","🌼","🌺","💛","✨","🌸"][Math.floor(Math.random()*6)]}</div>
        `).join("")}
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
          <div class="date-badge">${t.fechaTexto}</div>
          <h1 class="card-title">
            <span class="emoji-left">${t.emoji}</span>
            ${t.nombre}
            <span class="emoji-right">${t.emoji}</span>
          </h1>
          <p class="card-subtitle">${t.descripcion}</p>
        </div>

        <!-- Girasol animado 3D -->
        <div class="sunflower-container">
          <div class="sunflower">
            <div class="sunflower-center">
              <div class="center-detail"></div>
            </div>
            ${Array(12).fill(0).map((n,e)=>`
              <div class="petal" style="--index:${e};">
                <div class="petal-inner"></div>
              </div>
            `).join("")}
          </div>
          <div class="sunflower-stem"></div>
          <div class="sunflower-leaf sunflower-leaf-left"></div>
          <div class="sunflower-leaf sunflower-leaf-right"></div>
        </div>

        <!-- Mensaje -->
        <div class="message-box">
          <p class="greeting">
            Hola <span class="highlight-name">${v}</span> ✨
          </p>
          <div class="love-message">
            <div class="quote-left">"</div>
            <p class="message-text">${m}</p>
            <div class="quote-right">"</div>
          </div>
          <div class="signature-box">
            <p class="signature-text">Con todo mi amor,</p>
            <p class="signature-name">${p}</p>
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
        <source src="${u}" type="audio/mpeg">
      </audio>
    </div>
  `;return setTimeout(()=>{const n=s("#bgMusic"),e=s("#musicBtn"),c=e.find(".music-icon"),d=e.find(".pause-icon"),r=e.find(".music-waves");let o=!1;n[0].play().then(()=>{o=!0,e.addClass("playing"),c.hide(),d.show(),r.addClass("active")}).catch(a=>{console.log("Auto-play bloqueado:",a)}),e.on("click",function(){o?(n[0].pause(),s(this).removeClass("playing"),c.show(),d.hide(),r.removeClass("active")):(n[0].play(),s(this).addClass("playing"),c.hide(),d.show(),r.addClass("active")),o=!o}),s("#heartBtn").on("click",function(){const a=s(this);a.addClass("clicked");for(let i=0;i<20;i++)setTimeout(()=>{const l=s(`<div class="heart-float">${["❤️","💕","💖","💗","💝","💓"][Math.floor(Math.random()*6)]}</div>`);l.css({left:Math.random()*100+"%",bottom:"0",animationDelay:Math.random()*.3+"s",fontSize:1.5+Math.random()+"rem"}),s("body").append(l),setTimeout(()=>l.remove(),3e3)},i*80);setTimeout(()=>a.removeClass("clicked"),600)}),s(window).on("mousemove",function(a){const i=(a.clientX/window.innerWidth-.5)*20,l=(a.clientY/window.innerHeight-.5)*20;s(".sunflower").css("transform",`translate(-50%, -50%) translate(${i}px, ${l}px)`),s(".floating-flowers .flower").each(function(f){s(this).css("transform",`translate(${i*(f+1)*.1}px, ${l*(f+1)*.1}px)`)})}),s(".card-header, .sunflower-container, .message-box, .heart-button, .back-button").each(function(a){s(this).css({animation:"fadeInUp 0.8s ease-out forwards",animationDelay:a*.15+"s",opacity:"0"})})},100),h};export{w as default};
