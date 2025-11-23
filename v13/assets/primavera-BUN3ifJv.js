import{$ as a}from"./biwin-rjDJ6Sx3.js";const m=(r,n,c,d,l)=>{const p=`
    <div class="primavera_envoltorio">
      <!-- Fondo degradado -->
      <div class="fondo_degradado"></div>
      
      <!-- Partículas flotantes -->
      <div class="particulas">
        ${Array(50).fill(0).map((o,s)=>`
          <span class="particula" style="
            left:${Math.random()*100}vw;
            animation-delay:${Math.random()*8}s;
            font-size:${1.2+Math.random()*2.5}vw;
          ">${["🌻","🌼","💛","✨","🌸"][Math.floor(Math.random()*5)]}</span>
        `).join("")}
      </div>
      
      <!-- Contenedor principal -->
      <div class="primavera_contenido">
        
        <!-- CARD DEL MENSAJE -->
        <div class="tarjeta_mensaje">
          
          <!-- Imagen de Flores -->
          <div class="encabezado_tarjeta">
            <div class="imagen_girasol">
              <img src="https://i.postimg.cc/KxTKnSvJ/image.png" alt="Girasol">
            </div>
          </div>
          
          <!-- Para -->
          <p class="texto_saludo">
            Para ti: <span class="nombre_resaltado">${c}</span> 💛
          </p>
          
          <!-- SOBRE INTERACTIVO -->
          <div class="contenedor_sobre" id="contenedorSobre">
            <div class="sobre_cerrado">
              <div class="sobre_solapa_superior"></div>
              <div class="sobre_cuerpo">
                <div class="sobre_sello">✨</div>
                <p class="sobre_texto_click">Haz clic para abrir</p>
              </div>
            </div>
            
            <div class="carta_interior">
              <div class="carta_contenido">
                <p class="cuerpo_mensaje">${d}</p>
              </div>
            </div>
          </div>
          
          <!-- De -->
          <div class="firma">
            <span class="etiqueta_firma">De parte: </span>
            <span class="nombre_firma">${n}</span>
          </div>
          
          <!-- Botón Enviar Amor -->
          <button class="boton_corazon" id="botonCorazon">
            <i class="fas fa-heart"></i>
            <span>Enviar Amor</span>
          </button>

          <!-- Fecha -->
          <div class="chip_fecha">${r.fechaTexto}</div>
          
          <!-- Título -->
          <h1 class="titulo_gradiente">${r.nombre}</h1>
          
        </div>
        
      </div>
      
      <!-- FOOTER -->
      <footer class="pie_pagina">
        <a href="/" class="texto_pie">Personaliza para ti</a>
      </footer>
      
      <!-- Botón música esquina inferior derecha -->
      <button class="boton_musica_flotante" id="botonMusica">
        <i class="fas fa-music" id="iconoMusica"></i>
        <i class="fas fa-pause" id="iconoPausa" style="display:none;"></i>
        <span class="onda_musica"><i></i><i></i><i></i></span>
      </button>
      
      <audio id="musicaFondo" loop preload="auto">
        <source src="${l}" type="audio/mpeg">
      </audio>
    </div>
  `;return setTimeout(()=>{const o=a("#musicaFondo")[0],s=a("#botonMusica");let i=!1;o.play().then(()=>{i=!0,s.addClass("reproduciendo"),a("#iconoMusica").hide(),a("#iconoPausa").show()}).catch(()=>0),s.on("click",()=>{i?o.pause():o.play(),s.toggleClass("reproduciendo"),a("#iconoMusica, #iconoPausa").toggle(),i=!i});let e=!1;a("#contenedorSobre").on("click",function(){e=!e,a(this).toggleClass("abierto"),e&&(o.currentTime=0,o.play(),i=!0,s.addClass("reproduciendo"),a("#iconoMusica").hide(),a("#iconoPausa").show())}),a("#botonCorazon").on("click",function(){a(this).addClass("clickeado");for(let t=0;t<20;t++)setTimeout(()=>{a('<div class="corazon_flotante">').text(["❤️","💕","💖","💗","💝","💛"][Math.floor(Math.random()*6)]).css({left:Math.random()*100+"vw",bottom:0}).appendTo(".primavera_envoltorio").delay(3e3).fadeOut(600,function(){a(this).remove()})},t*50);setTimeout(()=>a(this).removeClass("clickeado"),600)})},100),p};export{m as default};
