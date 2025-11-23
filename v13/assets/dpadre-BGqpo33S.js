import{$ as a}from"./biwin-rjDJ6Sx3.js";const y=(d,u,p,m,b)=>{const t=window.innerWidth<768,v=`
    <div class="dpadre_envoltorio">
      <!-- Fondo degradado -->
      <div class="fondo_degradado"></div>
      
      <!-- Partículas flotantes -->
      <div class="particulas">
        ${Array.from({length:t?20:35},(e,s)=>`
          <span class="particula" style="
            left:${Math.random()*100}%;
            animation-delay:${Math.random()*5}s;
            font-size:${t?"4.5vw":"2.2vw"};
          ">${["👔","🎩","⚽","🏆","💙","⭐","🎖️","👨"][Math.floor(Math.random()*8)]}</span>
        `).join("")}
      </div>
      
      <!-- Contenedor principal -->
      <div class="dpadre_contenido">
        <div class="tarjeta_mensaje">
          
          <!-- Imagen -->
          <div class="encabezado_tarjeta">
            <div class="imagen_padre">
              <img src="${d.imagen}" alt="Día del Padre" loading="lazy">
              <div class="medalla_padre">🏆</div>
            </div>
          </div>
          
          <!-- Para -->
          <p class="texto_saludo">
            👔 Para: <span class="nombre_resaltado">${p}</span> 👔
          </p>
          
          <!-- SOBRE INTERACTIVO -->
          <div class="contenedor_sobre" id="contenedorSobre" role="button" tabindex="0" aria-label="Abrir mensaje">
            <div class="sobre_cerrado">
              <div class="sobre_solapa_superior"></div>
              <div class="sobre_cuerpo">
                <div class="sobre_sello">👨‍👦</div>
                <p class="sobre_texto_click">¡Abre tu mensaje!</p>
              </div>
            </div>
            
            <div class="carta_interior">
              <div class="carta_contenido">
                <p class="cuerpo_mensaje">${m}</p>
              </div>
            </div>
          </div>
          
          <!-- De -->
          <div class="firma">
            <span class="etiqueta_firma">Con amor: </span>
            <span class="nombre_firma">${u}</span>
          </div>
          
          <!-- Botón Celebrar -->
          <button class="boton_celebrar" id="botonCelebrar" aria-label="Celebrar día del padre">
            <i class="fas fa-heart"></i>
            <span>¡Feliz Día Papá!</span>
          </button>

          <!-- Fecha -->
          <div class="chip_fecha">${d.fechaTexto}</div>
          
          <!-- Título -->
          <h1 class="titulo_gradiente">Día del Padre</h1>
          
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
        <source src="${b}" type="audio/mpeg">
      </audio>
    </div>
  `;return setTimeout(()=>{const e=a("#musicaFondo")[0],s=a("#botonMusica");let i=!1;const c=async()=>{try{i?(e.pause(),i=!1):(await e.play(),i=!0),s.toggleClass("reproduciendo"),a("#iconoMusica, #iconoPausa").toggle()}catch(o){console.warn("Error audio:",o),s.addClass("error-audio")}};e.play().then(()=>{i=!0,s.addClass("reproduciendo"),a("#iconoMusica").hide(),a("#iconoPausa").show()}).catch(()=>0),s.on("click",c);let r=!1;const l=a("#contenedorSobre"),f=()=>{r=!r,l.toggleClass("abierto"),r&&!i&&c()};l.on("click keydown",o=>{(o.type==="click"||o.type==="keydown"&&["Enter"," "].includes(o.key))&&(o.preventDefault(),f())}),a("#botonCelebrar").on("click",function(){a(this).addClass("clickeado");const o=["💙","👔","🏆","⭐","👨","🎩","⚽","🎖️"],_=t?12:20;for(let n=0;n<_;n++)setTimeout(()=>{a('<div class="efecto_celebracion" aria-hidden="true">').text(o[Math.floor(Math.random()*o.length)]).css({left:Math.random()*100+"%",bottom:"0",animationDuration:2.5+Math.random()*1.2+"s"}).appendTo(".dpadre_envoltorio").delay(3e3).fadeOut(450,function(){a(this).remove()})},n*38);setTimeout(()=>a(this).removeClass("clickeado"),600)}),a(window).on("beforeunload",()=>{e.pause(),e.src=""})},100),v};export{y as default};
