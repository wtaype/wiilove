import{$ as e,M as b,c as L,s as F,d as y,a as p,b as f,e as u,N as c,f as U,T as q,g as R,h as M,i as _,q as E,j as N,o as P,k as B,l as G,w as H,m as A,n as V,p as W}from"./biwin-BnDuTAi3.js";let l=!1,r=[];async function g(){try{const a=M("wiFestividades");if(a&&!l)return x(a);r=(await _(E(N(p,"festividades"),P("orden")))).docs.map(i=>({id:i.id,...i.data()})),u("wiFestividades",r,24),x(r)}catch(a){console.error("Error festividades:",a),c("Error al cargar festividades","error")}}function x(a){window.festividadesGlobal=a;const t=`
    <main class="miweb miwp">
      <section class="fest_sec">
        <div class="sec_head">
          <h2 class="sec_tit">Elige tu Festividad</h2>
          <p class="sec_sub">Selecciona la ocasión especial y personaliza tu mensaje único</p>
          ${m?`<button id="alternarModo" class="wimodal-btn wimodal-btn-${l?"danger":"primary"}" style="margin-top:2vh;">
            <i class="fa-solid fa-${l?"eye":"edit"}"></i>
            ${l?"Modo Vista":"Modo Edición"}
          </button>`:""}
        </div>

        <div class="fest_grid">
          ${a.filter(i=>i.activo!==!1).map((i,n)=>`
            <div class="fest_card anim_up" data-fest="${i.nombreId}" data-id="${i.id}" style="animation-delay:${n*.1}s">
              <div class="card_head">
                <div class="card_ico" ${l?'contenteditable="true" data-field="emoji"':""}>${i.emoji}</div>
                <div class="card_tag ${i.tipoColor||i.tipo}">${i.tipo}</div>
                ${l?`
                  <div style="display:flex;gap:1vh;margin-left:auto;">
                    <button class="boton-editar" data-id="${i.id}" style="background:var(--info);color:#fff;border:none;padding:0.8vh 1vw;border-radius:0.8vh;cursor:pointer;">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="boton-eliminar" data-id="${i.id}" style="background:var(--error);color:#fff;border:none;padding:0.8vh 1vw;border-radius:0.8vh;cursor:pointer;">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                `:""}
              </div>
              <div class="card_cont">
                <h3 class="card_tit" ${l?'contenteditable="true" data-field="nombre"':""}>${i.nombre}</h3>
                <p class="card_date" ${l?'contenteditable="true" data-field="fechaTexto"':""}>${i.fechaTexto}</p>
                <p class="card_desc" ${l?'contenteditable="true" data-field="descripcion"':""}>${i.descripcion}</p>
                <div class="card_tags">
                  ${(i.tags||[]).map(s=>`<span class="tag_item"><i class="fas fa-${s.includes("Primaveral")?"sun":s.includes("Romántico")?"heart":s.includes("Audio")?"music":s.includes("Celebración")?"birthday-cake":s.includes("Sorpresa")?"gift":"star"}"></i>${s}</span>`).join("")}
                </div>
              </div>
              <div class="card_foot">
                <button class="btn_pers">
                  <i class="fas fa-edit"></i>
                  Personalizar Mensaje
                </button>
              </div>
            </div>
          `).join("")}
          
          ${l?`
            <div class="fest_card anim_up" id="botonAgregarFestividad" style="display:flex;align-items:center;justify-content:center;cursor:pointer;border:2px dashed var(--mco);background:rgba(255,255,255,0.5);">
              <div style="text-align:center;">
                <i class="fa-solid fa-plus" style="font-size:4rem;color:var(--mco);margin-bottom:2vh;"></i>
                <h3 style="color:var(--mco);font-weight:700;">Agregar Festividad</h3>
              </div>
            </div>
          `:""}
        </div>
      </section>
    </main>
  `;e(".miweb").replaceWith(t)}e(document).on("click","#alternarModo",function(){l=!l,g(),b(l?"Modo Edición activado ✏️":"Modo Vista activado 👁️")});e(document).on("click","#botonAgregarFestividad",()=>z());e(document).on("click",".boton-editar",function(){const a=r.find(t=>t.id===e(this).data("id"));a&&z(a)});e(document).on("click",".boton-eliminar",async function(){const a=e(this).data("id"),t=r.find(i=>i.id===a);L({titulo:"¿Eliminar Festividad?",mensaje:`¿Estás seguro de eliminar "${t?.nombre}"? Esta acción no se puede deshacer.`,tipo:"danger",textoConfirmar:"Eliminar",onConfirmar:async()=>{try{await B(y(p,"festividades",a)),r=r.filter(i=>i.id!==a),u("wiFestividades",r,24),g(),b("Festividad eliminada ✅")}catch(i){console.error("Error eliminando:",i),c("Error al eliminar","error")}}})});e(document).on("blur",'[contenteditable="true"]',async function(){if(!l)return;const t=e(this).closest(".fest_card").data("id"),i=e(this).data("field"),n=e(this).text().trim();if(!(!t||!i))try{const s=r.find(o=>o.id===t);if(!s)return;s[i]=n,await F(y(p,"festividades",t),{[i]:n,actualizado:f()},{merge:!0}),u("wiFestividades",r,24),c(`${i} actualizado ✅`,"success",2e3)}catch(s){console.error("Error guardando inline:",s),c("Error al guardar","error")}});function z(a=null){const t=a!==null,i=o=>o?.toDate?new Date(o.toDate().getTime()-o.toDate().getTimezoneOffset()*6e4).toISOString().split("T")[0]:"",n=o=>o?JSON.stringify(o,null,2):"{}",s=`
    <form id="wimodal-form-fest">
      <div class="wimodal-form-grid" style="grid-template-columns:1fr 1fr;gap:2vh;">
        
        <!-- COLUMNA 1: INFORMACIÓN BÁSICA -->
        <div class="wimodal-form-group">
          <label data-witip="Nombre completo de la festividad"><i class="fa-solid fa-signature"></i> Nombre</label>
          <input type="text" id="wi-nombre" placeholder="Ej: Flores Amarillas" required value="${a?.nombre||""}">
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Alias corto para URL (ej: primavera)"><i class="fa-solid fa-link"></i> Alias (URL)</label>
          <input type="text" id="wi-alias" placeholder="primavera" required pattern="[a-z0-9]+" value="${a?.alias||""}">
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Selecciona un emoji representativo"><i class="fa-solid fa-smile"></i> Emoji</label>
          <div style="display:flex;gap:1vh;">
            <input type="text" id="wi-emoji" readonly placeholder="Selecciona emoji" value="${a?.emoji||""}" style="cursor:pointer;flex:1;" required>
            <button type="button" id="wi-emoji-picker" class="wimodal-btn wimodal-btn-primary"><i class="fa-solid fa-icons"></i></button>
          </div>
          <div id="wi-emoji-grid" style="display:none;grid-template-columns:repeat(8,1fr);gap:0.5vh;margin-top:1vh;max-height:20vh;overflow-y:auto;padding:1vh;background:var(--bg);border-radius:1vh;"></div>
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Tipo de festividad"><i class="fa-solid fa-tag"></i> Tipo</label>
          <select id="wi-tipo" required style="width:100%;padding:1.2vh;border:2px solid var(--bdr);border-radius:1vh;outline:none;background:#fff;font-family:var(--ff_P);font-weight:500;">
            ${["popular","especial","amor","festivo","nuevo"].map(o=>`<option value="${o}" ${a?.tipo===o?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("")}
          </select>
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Fecha legible (Ej: 21 de Septiembre)"><i class="fa-solid fa-calendar"></i> Fecha Texto</label>
          <input type="text" id="wi-fecha-texto" placeholder="21 de Septiembre" required value="${a?.fechaTexto||""}">
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Fecha numérica para ordenar"><i class="fa-solid fa-calendar-day"></i> Fecha (dd/mm/yyyy)</label>
          <input type="date" id="wi-fecha-num" required value="${i(a?.fechaNum)}">
        </div>
        
        <div class="wimodal-form-group" style="grid-column:1/-1;">
          <label data-witip="Descripción breve de la festividad"><i class="fa-solid fa-align-left"></i> Descripción</label>
          <textarea id="wi-descripcion" rows="2" placeholder="Celebra la llegada de la primavera..." required>${a?.descripcion||""}</textarea>
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Tags separados por coma"><i class="fa-solid fa-tags"></i> Tags</label>
          <input type="text" id="wi-tags" placeholder="Primaveral, Romántico, Con Audio" value="${a?.tags?.join(", ")||""}">
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Orden de aparición (número)"><i class="fa-solid fa-sort"></i> Orden</label>
          <input type="number" id="wi-orden" min="1" placeholder="1" value="${a?.orden||r.length+1}">
        </div>
        
        <!-- COLUMNA 2: MULTIMEDIA Y MENSAJES -->
        <div class="wimodal-form-group">
          <label data-witip="URL del audio MP3 principal"><i class="fa-solid fa-music"></i> Audio URL</label>
          <input type="url" id="wi-audio-url" placeholder="https://ejemplo.com/audio.mp3" value="${a?.audioUrl||""}">
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Nombre del archivo de plantilla (sin .js)"><i class="fa-solid fa-file-code"></i> Plantilla JS</label>
          <input type="text" id="wi-plantilla" placeholder="primavera" value="${a?.plantilla||""}">
        </div>
        
        <div class="wimodal-form-group" style="grid-column:1/-1;">
          <label data-witip="Mensajes predefinidos en formato JSON"><i class="fa-solid fa-comment-dots"></i> Mensajes (JSON)</label>
          <textarea id="wi-mensajes" rows="6" placeholder='{"amor": "Texto...", "amorbonito": "Texto..."}' style="font-family:monospace;font-size:0.9rem;">${n(a?.mensajes)}</textarea>
          <small style="color:var(--txs);">Formato: {"amor": "Mensaje 1", "amorbonito": "Mensaje 2"}</small>
        </div>
        
        <div class="wimodal-form-group" style="grid-column:1/-1;">
          <label data-witip="Audios alternativos en formato JSON"><i class="fa-solid fa-headphones"></i> Música Alternativa (JSON)</label>
          <textarea id="wi-musica" rows="4" placeholder='{"paz": "url1.mp3", "dulce": "url2.mp3"}' style="font-family:monospace;font-size:0.9rem;">${n(a?.musica)}</textarea>
          <small style="color:var(--txs);">Formato: {"paz": "https://...", "dulce": "https://..."}</small>
        </div>
        
      </div>
      
      <button type="submit" class="wimodal-btn wimodal-btn-primary" style="width:100%;display:flex;align-items:center;justify-content:center;gap:1vh;margin-top:2vh;">
        <i class="fa-solid fa-save"></i>
        ${t?"Actualizar Festividad":"Guardar Festividad"}
      </button>
    </form>
  `;U({titulo:t?"✏️ Editar Festividad":"➕ Nueva Festividad",contenido:s,botones:[]}),Y(a)}function Y(a){const t=["🌻","🎂","👨‍👧‍👦","👩‍👧‍👦","🎄","🎊","💐","🎁","🎈","🎉","❤️","💕","🌹","⭐","🌙","☀️","🌈","🎵","🎶","✨","🎯","🏆","🎓","💍","👑","🌺","🌸","🦋","🐶","🐱","🦄","🌟"];e("#wi-emoji-picker").on("click",function(){const i=e("#wi-emoji-grid");i.is(":visible")?i.slideUp(200):(i.children().length||i.html(t.map(n=>`<div style="font-size:2rem;cursor:pointer;text-align:center;padding:0.5vh;border-radius:0.5vh;transition:all 0.2s;" class="emoji-item">${n}</div>`).join("")),i.slideDown(200))}),e(document).on("click",".emoji-item",function(){e("#wi-emoji").val(e(this).text()),e("#wi-emoji-grid").slideUp(200)}),e("#wi-nombre").on("input",function(){if(!a){const i=e(this).val().toLowerCase().replace(/\s+/g,"").replace(/[áäâà]/g,"a").replace(/[éëêè]/g,"e").replace(/[íïîì]/g,"i").replace(/[óöôò]/g,"o").replace(/[úüûù]/g,"u").replace(/ñ/g,"n").replace(/[^a-z0-9]/g,"");e("#wi-alias").val(i)}}),e("[data-witip]").on("mouseenter",function(){const i=e(this).data("witip");e(this).attr("title",i)}),e("#wimodal-form-fest").on("submit",async function(i){i.preventDefault();const n=e("#wi-nombre").val().trim(),s=e("#wi-alias").val().trim().toLowerCase(),o=n.toLowerCase().replace(/\s+/g,"_").replace(/[áäâà]/g,"a").replace(/[éëêè]/g,"e").replace(/[íïîì]/g,"i").replace(/[óöôò]/g,"o").replace(/[úüûù]/g,"u").replace(/ñ/g,"n"),v=a?.id||`${o}_${Date.now()}`,C=e("#wi-fecha-num").val(),[T,D,O]=C.split("-").map(Number),h=new Date,k=new Date(T,D-1,O,h.getHours(),h.getMinutes(),h.getSeconds()),I=q.fromDate(k);let $={},j={};try{const d=e("#wi-mensajes").val().trim();d&&($=JSON.parse(d))}catch{return c("JSON de mensajes inválido","error")}try{const d=e("#wi-musica").val().trim();d&&(j=JSON.parse(d))}catch{return c("JSON de música inválido","error")}const w={nombre:n,nombreId:o,alias:s,emoji:e("#wi-emoji").val(),descripcion:e("#wi-descripcion").val().trim(),creadoPor:m?.usuario||m?.nombre||"admin",tipo:e("#wi-tipo").val(),tipoColor:e("#wi-tipo").val(),fechaTexto:e("#wi-fecha-texto").val().trim(),fechaNum:I,imagen:"",audioUrl:e("#wi-audio-url").val().trim(),plantilla:e("#wi-plantilla").val().trim()||s,mensajes:$,musica:j,tags:e("#wi-tags").val().split(",").map(d=>d.trim()).filter(Boolean),orden:parseInt(e("#wi-orden").val())||r.length+1,activo:!0,...a?{actualizado:f()}:{fechaCreacion:f(),actualizado:f()}};try{if(await F(y(p,"festividades",v),w,{merge:!0}),a){const d=r.findIndex(J=>J.id===v);r[d]={id:v,...w}}else r.push({id:v,...w});u("wiFestividades",r,24),g(),R(),b(a?"Festividad actualizada ✅":"Festividad creada ✅")}catch(d){console.error("Error guardando:",d),c("Error al guardar festividad","error")}})}let m=null;G(A,async a=>{if(!a)return window.location.href="/";try{if(m=M("wiSmile"),m)return S(m);const t=(await _(E(N(p,"smiles"),H("usuario","==",a.displayName)))).docs[0]?.data()||{};u("wiSmile",t,450),S(t)}catch(t){console.error(t)}});e(document).on("click",".bt_salir",async()=>{await V(A),window.location.href="/",localStorage.clear()});async function S(a){b("Bienvenido "+a.nombre+"!"),e(".app").html(`
    <header class="top-header">
      <div class="header-container miwp">
        <div class="header-content">
          <h1><i class="fas fa-trophy"></i> MI DASHBOARD</h1>
        </div>
        <div class="header-right">
          <div class="witemas"></div>
          <div class="user-section">
            <div class="sesion">
              <img src="${a.imagen||"/smile.png"}" alt="${a.nombre}" class="user-avatar">
              <span class="user-name">${a.nombre}</span>
            </div>
            <button class="logout-btn bt_salir">
              <i class="fas fa-sign-out-alt"></i> Salir
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="miweb"></main>

    <div id="notifications-container"></div>
    ${W()}
  `),await g()}
