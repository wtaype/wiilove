import{$ as a}from"./biwin-tt5_yjcm.js";const y=(n,u,p,m,v)=>{const t=window.innerWidth<768,b=`
    <div class="cumple_envoltorio">
      <!-- Fondo degradado -->
      <div class="fondo_degradado"></div>
      
      <!-- Partículas flotantes -->
      <div class="particulas">
        ${Array.from({length:t?20:40},(e,s)=>`
          <span class="particula" style="
            left:${Math.random()*100}%;
            animation-delay:${Math.random()*5}s;
            font-size:${t?"5vw":"2.5vw"};
          ">${["🎂","🎈","🎉","🎁","🥳","✨","🍰","🎊"][Math.floor(Math.random()*8)]}</span>
        `).join("")}
      </div>
      
      <!-- Confeti -->
      <div class="confeti">
        ${Array.from({length:t?30:50},(e,s)=>`
          <div class="confeti_pieza" style="
            left:${Math.random()*100}%;
            animation-delay:${Math.random()*4}s;
            background:hsl(${Math.random()*360}, 80%, 60%);
          "></div>
        `).join("")}
      </div>
      
      <!-- Contenedor principal -->
      <div class="cumple_contenido">
        <div class="tarjeta_mensaje">
          
          <!-- Imagen -->
          <div class="encabezado_tarjeta">
            <div class="imagen_cumple">
              <img src="${n.imagen}" alt="Cumpleaños" loading="lazy">
              <div class="circulo_pulso"></div>
            </div>
          </div>
          
          <!-- Para -->
          <p class="texto_saludo">
            🎉 Para: <span class="nombre_resaltado">${p}</span> 🎉
          </p>
          
          <!-- SOBRE INTERACTIVO -->
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
                <p class="cuerpo_mensaje">${m}</p>
              </div>
            </div>
          </div>
          
          <!-- De -->
          <div class="firma">
            <span class="etiqueta_firma">Con cariño: </span>
            <span class="nombre_firma">${u}</span>
          </div>
          
          <!-- Botón Celebrar -->
          <button class="boton_celebrar" id="botonCelebrar" aria-label="Celebrar cumpleaños">
            <i class="fas fa-birthday-cake"></i>
            <span>¡Sopla la vela!</span>
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
        <source src="${v}" type="audio/mpeg">
      </audio>
    </div>
  `;return setTimeout(()=>{const e=a("#musicaFondo")[0],s=a("#botonMusica");let i=!1;const r=async()=>{try{i?(e.pause(),i=!1):(await e.play(),i=!0),s.toggleClass("reproduciendo"),a("#iconoMusica, #iconoPausa").toggle()}catch(o){console.warn("Error audio:",o),s.addClass("error-audio")}};e.play().then(()=>{i=!0,s.addClass("reproduciendo"),a("#iconoMusica").hide(),a("#iconoPausa").show()}).catch(()=>0),s.on("click",r);let c=!1;const d=a("#contenedorSobre"),f=()=>{c=!c,d.toggleClass("abierto"),c&&!i&&r()};d.on("click keydown",o=>{(o.type==="click"||o.type==="keydown"&&["Enter"," "].includes(o.key))&&(o.preventDefault(),f())}),a("#botonCelebrar").on("click",function(){a(this).addClass("clickeado");const o=["🎂","🎉","🎈","🎁","✨","🎊","🥳","🍰"],_=t?12:20;for(let l=0;l<_;l++)setTimeout(()=>{a('<div class="efecto_celebracion" aria-hidden="true">').text(o[Math.floor(Math.random()*o.length)]).css({left:Math.random()*100+"%",bottom:"0",animationDuration:2+Math.random()*1.5+"s"}).appendTo(".cumple_envoltorio").delay(2500).fadeOut(400,function(){a(this).remove()})},l*35);setTimeout(()=>a(this).removeClass("clickeado"),600)}),a(window).on("beforeunload",()=>{e.pause(),e.src=""})},100),b};export{y as default};
