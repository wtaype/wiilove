import{$ as a}from"./biwin-tt5_yjcm.js";const y=(o,m,b,v,f)=>{const r=window.innerWidth<768,_=r?20:40,d={popular:["🎉","✨","⭐","💫","🎊","🌟"],especial:["🎁","💝","🎀","💐","🌺","🦋"],amor:["❤️","💕","💖","💗","💘","💝"],festivo:["🎈","🎆","🎇","🥳","🎪","🎭"],nuevo:["🚀","💡","🌈","🔥","⚡","💎"]},n=d[o.tipo]||d.popular,h=`
    <div class="default_envoltorio" data-tipo="${o.tipo||"popular"}">
      <!-- Fondo degradado dinámico -->
      <div class="fondo_degradado"></div>
      
      <!-- Partículas flotantes -->
      <div class="particulas">
        ${Array.from({length:_},(i,s)=>`
          <span class="particula" style="
            left:${Math.random()*100}%;
            animation-delay:${Math.random()*5}s;
            font-size:${r?"4vw":"2.3vw"};
          ">${n[Math.floor(Math.random()*n.length)]}</span>
        `).join("")}
      </div>
      
      <!-- Contenedor principal -->
      <div class="default_contenido">
        <div class="tarjeta_mensaje">
          
          <!-- Imagen -->
          <div class="encabezado_tarjeta">
            <div class="imagen_principal">
              <img src="${o.imagen||"https://via.placeholder.com/200"}" alt="${o.nombre}" loading="lazy">
              <div class="icono_flotante">${o.emoji||"🎉"}</div>
            </div>
          </div>
          
          <!-- Para -->
          <p class="texto_saludo">
            ${o.emoji||"🎉"} Para: <span class="nombre_resaltado">${b}</span> ${o.emoji||"🎉"}
          </p>
          
          <!-- SOBRE INTERACTIVO -->
          <div class="contenedor_sobre" id="contenedorSobre" role="button" tabindex="0" aria-label="Abrir mensaje">
            <div class="sobre_cerrado">
              <div class="sobre_solapa_superior"></div>
              <div class="sobre_cuerpo">
                <div class="sobre_sello">${o.emoji||"✨"}</div>
                <p class="sobre_texto_click">¡Abre tu mensaje!</p>
              </div>
            </div>
            
            <div class="carta_interior">
              <div class="carta_contenido">
                <p class="cuerpo_mensaje">${v}</p>
              </div>
            </div>
          </div>
          
          <!-- De -->
          <div class="firma">
            <span class="etiqueta_firma">Con cariño: </span>
            <span class="nombre_firma">${m}</span>
          </div>
          
          <!-- Botón Celebrar -->
          <button class="boton_celebrar" id="botonCelebrar" aria-label="Celebrar">
            <i class="fas fa-heart"></i>
            <span>¡Celebrar!</span>
          </button>

          <!-- Fecha -->
          <div class="chip_fecha">${o.fechaTexto}</div>
          
          <!-- Título -->
          <h1 class="titulo_gradiente">${o.nombre}</h1>
          
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
        <source src="${f}" type="audio/mpeg">
      </audio>
    </div>
  `;return setTimeout(()=>{const i=a("#musicaFondo")[0],s=a("#botonMusica");let t=!1;const u=async()=>{try{t?(i.pause(),t=!1):(await i.play(),t=!0),s.toggleClass("reproduciendo"),a("#iconoMusica, #iconoPausa").toggle()}catch(e){console.warn("Error audio:",e),s.addClass("error-audio")}};i.play().then(()=>{t=!0,s.addClass("reproduciendo"),a("#iconoMusica").hide(),a("#iconoPausa").show()}).catch(()=>0),s.on("click",u);let c=!1;const p=a("#contenedorSobre"),g=()=>{c=!c,p.toggleClass("abierto"),c&&!t&&u()};p.on("click keydown",e=>{(e.type==="click"||e.type==="keydown"&&["Enter"," "].includes(e.key))&&(e.preventDefault(),g())}),a("#botonCelebrar").on("click",function(){a(this).addClass("clickeado");const e=r?12:20;for(let l=0;l<e;l++)setTimeout(()=>{a('<div class="efecto_celebracion" aria-hidden="true">').text(n[Math.floor(Math.random()*n.length)]).css({left:Math.random()*100+"%",bottom:"0",animationDuration:2.5+Math.random()*1.2+"s"}).appendTo(".default_envoltorio").delay(3e3).fadeOut(450,function(){a(this).remove()})},l*40);setTimeout(()=>a(this).removeClass("clickeado"),600)}),a(window).on("beforeunload",()=>{i.pause(),i.src=""})},100),h};export{y as default};
