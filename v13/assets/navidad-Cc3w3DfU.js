import{$ as a}from"./biwin-rjDJ6Sx3.js";const y=(n,u,v,p,m)=>{const e=window.innerWidth<768,b=`
    <div class="navidad_envoltorio">
      <!-- Fondo degradado -->
      <div class="fondo_degradado"></div>
      
      <!-- Copos de nieve -->
      <div class="copos_nieve">
        ${Array.from({length:e?25:50},(i,s)=>`
          <div class="copo" style="
            left:${Math.random()*100}%;
            animation-delay:${Math.random()*5}s;
            animation-duration:${8+Math.random()*7}s;
            opacity:${.4+Math.random()*.6};
            font-size:${e?"0.8rem":.5+Math.random()*1.5+"rem"};
          ">❄</div>
        `).join("")}
      </div>
      
      <!-- Partículas navideñas -->
      <div class="particulas">
        ${Array.from({length:e?15:30},(i,s)=>`
          <span class="particula" style="
            left:${Math.random()*100}%;
            animation-delay:${Math.random()*6}s;
            font-size:${e?"4vw":"2vw"};
          ">${["🎄","⭐","🎅","🎁","🔔","🕯️","🦌"][Math.floor(Math.random()*7)]}</span>
        `).join("")}
      </div>
      
      <!-- Contenedor principal -->
      <div class="navidad_contenido">
        <div class="tarjeta_mensaje">
          
          <!-- Imagen -->
          <div class="encabezado_tarjeta">
            <div class="imagen_navidad">
              <img src="${n.imagen}" alt="Navidad" loading="lazy">
              <div class="estrella_brillo">⭐</div>
            </div>
          </div>
          
          <!-- Para -->
          <p class="texto_saludo">
            🎄 Para: <span class="nombre_resaltado">${v}</span> 🎄
          </p>
          
          <!-- SOBRE INTERACTIVO -->
          <div class="contenedor_sobre" id="contenedorSobre" role="button" tabindex="0" aria-label="Abrir mensaje navideño">
            <div class="sobre_cerrado">
              <div class="sobre_solapa_superior"></div>
              <div class="sobre_cuerpo">
                <div class="sobre_sello">🎅</div>
                <p class="sobre_texto_click">¡Abre tu mensaje!</p>
              </div>
            </div>
            
            <div class="carta_interior">
              <div class="carta_contenido">
                <p class="cuerpo_mensaje">${p}</p>
              </div>
            </div>
          </div>
          
          <!-- De -->
          <div class="firma">
            <span class="etiqueta_firma">Con amor: </span>
            <span class="nombre_firma">${u}</span>
          </div>
          
          <!-- Botón Celebrar -->
          <button class="boton_celebrar" id="botonCelebrar" aria-label="Celebrar navidad">
            <i class="fas fa-gifts"></i>
            <span>¡Feliz Navidad!</span>
          </button>

          <!-- Fecha -->
          <div class="chip_fecha">${n.fechaTexto}</div>
          
          <!-- Título -->
          <h1 class="titulo_gradiente">${n.nombre}</h1>
          
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
        <source src="${m}" type="audio/mpeg">
      </audio>
    </div>
  `;return setTimeout(()=>{const i=a("#musicaFondo")[0],s=a("#botonMusica");let t=!1;const c=async()=>{try{t?(i.pause(),t=!1):(await i.play(),t=!0),s.toggleClass("reproduciendo"),a("#iconoMusica, #iconoPausa").toggle()}catch(o){console.warn("Error audio:",o),s.addClass("error-audio")}};i.play().then(()=>{t=!0,s.addClass("reproduciendo"),a("#iconoMusica").hide(),a("#iconoPausa").show()}).catch(()=>0),s.on("click",c);let d=!1;const l=a("#contenedorSobre"),f=()=>{d=!d,l.toggleClass("abierto"),d&&!t&&c()};l.on("click keydown",o=>{(o.type==="click"||o.type==="keydown"&&["Enter"," "].includes(o.key))&&(o.preventDefault(),f())}),a("#botonCelebrar").on("click",function(){a(this).addClass("clickeado");const o=["🎄","⭐","🎁","❄️","🔔","🎅","🦌","✨"],_=e?15:25;for(let r=0;r<_;r++)setTimeout(()=>{a('<div class="efecto_celebracion" aria-hidden="true">').text(o[Math.floor(Math.random()*o.length)]).css({left:Math.random()*100+"%",bottom:"0",animationDuration:2.5+Math.random()*1+"s"}).appendTo(".navidad_envoltorio").delay(3e3).fadeOut(500,function(){a(this).remove()})},r*40);setTimeout(()=>a(this).removeClass("clickeado"),600)}),a(window).on("beforeunload",()=>{i.pause(),i.src=""})},100),b};export{y as default};
