import{$ as a}from"./biwin-tt5_yjcm.js";const C=(t,u,p,b,v)=>{const n=window.innerWidth<768,m=`
    <div class="anuevo_envoltorio">
      <!-- Fondo degradado -->
      <div class="fondo_degradado"></div>
      
      <!-- Partículas flotantes optimizadas -->
      <div class="particulas">
        ${Array.from({length:n?15:30},(e,s)=>`
          <span class="particula" style="
            left:${Math.random()*100}%;
            animation-delay:${Math.random()*6}s;
            font-size:${n?"4vw":"2vw"};
          ">${["🎆","✨","🎊","🌟","💫","🎁"][Math.floor(Math.random()*6)]}</span>
        `).join("")}
      </div>
      
      <!-- Contenedor principal -->
      <div class="anuevo_contenido">
        
        <!-- CARD DEL MENSAJE -->
        <div class="tarjeta_mensaje">
          
          <!-- Imagen principal -->
          <div class="encabezado_tarjeta">
            <div class="imagen_festiva">
              <img src="${t.imagen}" alt="Celebración" loading="lazy">
            </div>
          </div>
          
          <!-- Para -->
          <p class="texto_saludo">
            Para ti: <span class="nombre_resaltado">${p}</span> 🎉
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
                <p class="cuerpo_mensaje">${b}</p>
              </div>
            </div>
          </div>
          
          <!-- De -->
          <div class="firma">
            <span class="etiqueta_firma">De parte: </span>
            <span class="nombre_firma">${u}</span>
          </div>
          
          <!-- Botón Celebrar -->
          <button class="boton_celebrar" id="botonCelebrar" aria-label="Celebrar año nuevo">
            <i class="fas fa-sparkles"></i>
            <span>¡Celebrar!</span>
          </button>

          <!-- Fecha -->
          <div class="chip_fecha">${t.fechaTexto}</div>
          
          <!-- Título -->
          <h1 class="titulo_gradiente">${t.nombre}</h1>
          
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
        <source src="${v}" type="audio/mpeg">
        Tu navegador no soporta audio HTML5.
      </audio>
    </div>
  `;return setTimeout(()=>{const e=a("#musicaFondo")[0],s=a("#botonMusica");let i=!1;const l=async()=>{try{i?(e.pause(),i=!1):(await e.play(),i=!0),s.toggleClass("reproduciendo"),a("#iconoMusica, #iconoPausa").toggle()}catch(o){console.warn("Error al reproducir audio:",o),s.addClass("error-audio")}};e.play().then(()=>{i=!0,s.addClass("reproduciendo"),a("#iconoMusica").hide(),a("#iconoPausa").show()}).catch(()=>{}),s.on("click",l);let r=!1;const d=a("#contenedorSobre"),f=()=>{r=!r,d.toggleClass("abierto"),r&&!i&&l()};d.on("click keydown",function(o){(o.type==="click"||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&(o.preventDefault(),f())}),a("#botonCelebrar").on("click",function(){a(this).addClass("clickeado");const o=["🎆","🎊","✨","🌟","🎉","💫"],_=n?10:15;for(let c=0;c<_;c++)setTimeout(()=>{a('<div class="efecto_celebracion" aria-hidden="true">').text(o[Math.floor(Math.random()*o.length)]).css({left:Math.random()*100+"%",bottom:"0"}).appendTo(".anuevo_envoltorio").delay(2500).fadeOut(500,function(){a(this).remove()})},c*40);setTimeout(()=>a(this).removeClass("clickeado"),600)}),a(window).on("beforeunload",()=>{e.pause(),e.src=""})},100),m};export{C as default};
