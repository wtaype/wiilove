const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/anuevo-RZekLDLe.js","assets/biwin-tt5_yjcm.js","assets/biwin-DiF5g45u.css","assets/anuevo-D6y8rE1J.css","assets/cumple-C9-d3NMk.js","assets/cumple-D3-l_xvC.css","assets/default-BdEvQ70U.js","assets/default-DRGYHYyP.css","assets/dmadre-CaSzd15m.js","assets/dmadre-DtQgCKEH.css","assets/dpadre-DYpqD0Ap.js","assets/dpadre-CJUVEOdh.css","assets/navidad-BObxbljF.js","assets/navidad-DY2FckPT.css","assets/primavera-7wAn0UrC.js","assets/primavera-DF34mVJt.css"])))=>i.map(i=>d[i]);
import{$ as a,w as $,g as q,d as j,a as w,b as E,q as P,c as C,e as S,f as G,h as R,u as W,s as Y,i as H,j as Z,M as x,k as _,l as J,m as K,n as Q,o as T,p as L,r as z,t as X,v as aa}from"./biwin-tt5_yjcm.js";function ea(){const i=`
<div id="loginModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Login</h2>
      
      <form id="loginForm" class="dfd">
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Email o usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Recordar mis datos</label>
        </div>
        <button type="button" id="Login" class="inactivo btn-auth">Iniciar Sesión</button>
      </form>
      
      <div class="auth-links">
        <span class="olvidastePass">¿Olvidaste tu contraseña?</span>
        <span class="crearCuenta">Crear cuenta</span>
      </div>
    </div>
  </div>
</div>`,c=`
<div id="registroModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Crear Cuenta</h2>
      
      <form id="registroForm" class="dfd">
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-envelope"></i>
            <input type="email" id="regEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user"></i>
            <input type="text" id="regUsuario" placeholder="Crear usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regNombre" placeholder="Nombre" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regApellidos" placeholder="Apellidos" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword1" placeholder="Confirmar Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <button type="button" id="Registrar" class="inactivo btn-auth">Registrarme</button>
      </form>
      
      <div class="auth-links">
        <span class="conCuenta">Ya tengo cuenta</span>
      </div>
    </div>
  </div>
</div>`,s=`
<div id="recuperarModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Restablecer Contraseña</h2>
      <form id="recuperarForm" class="dfd">
        <p class="auth-text">Ingresa tu Correo o usuario:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="recEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <p class="auth-text">Valida tu fecha de nacimiento:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-cake-candles"></i>
            <input type="date" id="recFechaNacimiento" placeholder="Fecha Nacimiento" class="datepicker" required>
          </div>
        </div>
        <button type="button" id="Recuperar" class="inactivo btn-auth">Restablecer Contraseña</button>
      </form>
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;a(function(){let o="smiles",p="wiAuthIn",m="wiAuthRol",v="usuario";a(document).on("click",".login",()=>r("loginModal")),a(document).on("click",".registrar",()=>r("registroModal")),a(".crearCuenta").click(()=>{r("registroModal"),u("loginModal")}),a(".conCuenta").click(()=>{r("loginModal"),u("registroModal")}),a(".olvidastePass").click(()=>{r("recuperarModal"),u("loginModal")}),a(".volverLogin").click(()=>{r("loginModal"),u("recuperarModal")}),a(".togglePass").click(function(){const e=a(this).siblings("input"),t=e.attr("type")==="password";e.attr("type",t?"text":"password"),a(this).toggleClass("fa-eye fa-eye-slash")}),a('.miauth input:not([type="checkbox"])').on("click",function(){$(this,a(this).attr("placeholder"))}),a("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){a(this).val(a(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recEmail","#Recuperar"]].forEach(([e,t])=>{a(e).on("input keyup",n=>{a(t).removeClass("inactivo"),n.key==="Enter"&&(a(t).click(),a(t).addClass("inactivo"))})});const y={regEmail:[e=>e.toLowerCase(),e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)||"Correo inválido"],regUsuario:[e=>e.toLowerCase().replace(/[^a-z0-9_]/g,""),e=>e.length>=4||"Usuario 4-20 caracteres"],regNombre:[e=>e.trim(),e=>e.length>0||"Ingrese nombre"],regApellidos:[e=>e.trim(),e=>e.length>0||"Ingrese apellidos"],regPassword:[e=>e,e=>e.length>=6||"Mínimo 6 caracteres"],regPassword1:[e=>e,e=>e===a("#regPassword").val()||"Contraseñas no coinciden"]};a.each(y,function(e,[t,n]){a(`#${e}`).on("blur",function(){const d=t(a(this).val());a(this).val(d);const g=n(d);g!==!0&&$(this,g,"error")})});let f=!1;a("#regUsuario").on("blur focus",async function(){const e=a(this).val();if(e.length>=3)try{const n=(await q(j(w,o,e))).exists();f=!n,$(this,`Usuario ${n?"no disponible":"disponible ✅"}`,n?"error":"success","top",7e3)}catch(t){console.error(t)}});let A=!1;a("#regEmail").on("blur focus",async function(){const e=a(this).val();if(e.length>=3)try{const n=!(await E(P(C(w,o),S("email","==",e)))).empty;A=!n,$(this,`Email ${n?"no disponible":"disponible ✅"}`,n?"error":"success","top",7e3)}catch(t){console.error(t)}}),a("#Registrar").click(async function(){const e=[[f,a("#regUsuario")[0],"Usuario no disponible"],[A,a("#regEmail")[0],"Email no disponible"],...Object.entries(y).map(([t,[n,d]])=>{const g=a(`#${t}`),b=n(g.val()),M=d(b);return[M===!0,g[0],M!==!0?M:""]})];for(const[t,n,d]of e)if(!t&&d&&($(n,d,"error"),n.focus(),!0))return;try{const t=["regEmail","regUsuario","regNombre","regApellidos","regPassword"],[n,d,g,b,M]=t.map(B=>a("#"+B).val().trim()),{user:I}=await G(R,n,M);await Promise.all([W(I,{displayName:d}),Y(I)]),console.log("Registro completo en Auth ✅"+Date());const V=j(w,o,d);await H(V,{usuario:d,email:n,nombre:g,apellidos:b,rol:v,creacion:Z(),uid:I.uid}),console.log("Registro completo en Firestore ✅"+Date()),x("Registro completado! ✅")}catch(t){x({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[t.code]||t.message)||console.error(t)}finally{_(p,"wIn",24),_(m,v,24),setTimeout(()=>J(),3e3),u("registroModal")}}),a("#Login").click(async function(){try{const[e,t]=["#email","#password"].map(b=>a(b).val()),n=e.includes("@"),d=n?null:await q(j(w,o,e));if(!n&&!d.exists())throw new Error("Usuario no encontrado");const g=n?e:d.data().email;await K(R,g,t),_(p,"wIn",24),_(m,d.data().rol,24)}catch(e){x({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[e.code]||e.message,"error"),console.error(e)}finally{u("loginModal")}}),a("#Recuperar").click(async function(){try{const[e,t]=["#recEmail","#recFechaNacimiento"].map(b=>a(b).val()),n=e.includes("@")?e:await(async()=>{const b=await q(j(w,o,e));return b.exists()?b.data().email:null})();if(!n)return x("Usuario no registrado","error");const d=await E(P(C(w,o),S("email","==",n)));if(d.empty)return x("Email incorrecto o no existe","error");if(d.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==t)return x("Fecha de nacimiento incorrecta","error");await Q(R,n),x("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(e){console.error(e)}})}),a("body").append(i+c+s);function l(){const o=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}#recuperarModal *:not(i),#registroModal *:not(i),#loginModal *:not(i){font-family:'Poppins',segoe ui}",p=a(".wiAuthCss");p.length?p.text(o):a("head").append(`<style class="wiAuthCss">${o}</style>`)}const r=o=>{const p=a(`#${o}`).addClass("active");a("body").addClass("modal-open"),setTimeout(()=>{p.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},u=o=>{a(`#${o}`).removeClass("active"),a(".modal.active").length||a("body").removeClass("modal-open")},h=()=>{const o=()=>{a(".modal").removeClass("active"),a("body").removeClass("modal-open")};a(document).off(".authModals").on("click.authModals",".close-modal",o).on("click.authModals",".modal",p=>{a(p.target).is(".modal")&&o()}).on("keydown.authModals",p=>{p.key==="Escape"&&o()})};l(),h()}ea();async function ia(){a(".app").html(`
    <header class="top-header">
      <div class="header-container miwp">
        <div class="header-content">
          <h1><i class="fas fa-heart"></i> WiiLove</h1>
        </div>
        <div class="header-right">
          <div class="witemas"></div>
          <div class="user-section">
            <div class="sesion">
              <span class="registrar">Registrate</span>
            </div>
            <div class="sesion">
              <span class="login">Login</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="miweb miwp">
      <section class="fest_sec">
        <div class="sec_head">
          <h2 class="sec_tit">Elige tu Festividad</h2>
          <p class="sec_sub">Selecciona la ocasión especial y personaliza tu mensaje único</p>
        </div>

        <div class="fest_grid" id="fest-grid-publico">
          <!-- Se carga desde displayPublico() -->
        </div>
      </section>
    </main>

    <div id="notifications-container"></div>
    ${T()}
  `),await sa()}async function sa(){try{const i=L("wisfesti");if(i)return window.festividadesGlobal=i,F(i);const s=(await E(P(C(w,"festividades"),z("orden")))).docs.map(l=>({id:l.id,...l.data()})).filter(l=>l.activo!==!1);window.festividadesGlobal=s,_("wisfesti",s,24),F(s)}catch(i){console.error("Error displayPublico:",i),a("#fest-grid-publico").html('<p style="text-align:center;color:var(--error);font-size:1.2rem;">Error al cargar festividades</p>')}}function F(i){const c=i.map((s,l)=>(s.tags?.includes("Primaveral")||s.tags?.includes("Romántico")||s.tags?.includes("Audio")||s.tags?.includes("Celebración")||s.tags?.includes("Sorpresa")||s.tags?.includes("Paternal")||s.tags?.includes("Maternal")||s.tags?.includes("Navideño")||s.tags?.includes("Renovación"),`
      <div class="fest_card anim_up" data-fest="${s.nombreId}" style="animation-delay:${l*.1}s">
        <div class="card_head">
          <div class="card_ico">${s.emoji}</div>
          <div class="card_tag ${s.tipoColor||s.tipo}">${s.tipo}</div>
        </div>
        <div class="card_cont">
          <h3 class="card_tit">${s.nombre}</h3>
          <p class="card_date">${s.fechaTexto}</p>
          <p class="card_desc">${s.descripcion}</p>
          <div class="card_tags">
            ${(s.tags||[]).map(r=>`<span class="tag_item"><i class="fas fa-${r.includes("Primaveral")?"sun":r.includes("Romántico")?"heart":r.includes("Audio")?"music":r.includes("Celebración")?"birthday-cake":r.includes("Sorpresa")?"gift":r.includes("Paternal")?"male":r.includes("Maternal")?"female":r.includes("Navideño")?"tree":r.includes("Renovación")?"calendar":"star"}"></i>${r}</span>`).join("")}
          </div>
        </div>
        <div class="card_foot">
          <button class="btn_pers biwin">
            <i class="fas fa-edit"></i>
            Personalizar Mensaje
          </button>
        </div>
      </div>
    `)).join("");a("#fest-grid-publico").html(c)}function U(i){x(`Bienvenido ${i.nombre}!`),a(".app").html(`
    <header class="top-header">
      <div class="header-container miwp">
        <div class="header-content">
          <h1><i class="fas fa-trophy"></i> MI DASHBOARD</h1>
        </div>
        <div class="header-right">
          <div class="witemas"></div>
          <div class="user-section">
            <div class="sesion">
              <img src="${i.imagen||"/smile.png"}" alt="${i.nombre}" class="user-avatar">
              <span class="user-name">${i.nombre}</span>
            </div>
            <button class="logout-btn bt_salir">
              <i class="fas fa-sign-out-alt"></i> Salir
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="miweb miwp">
      <section class="fest_sec">
        <div class="sec_head">
          <h2 class="sec_tit">Elige tu Festividad</h2>
          <p class="sec_sub">Selecciona la ocasión especial y personaliza tu mensaje único</p>
        </div>

        <div class="fest_grid" id="fest-grid-personal">
          <!-- Se carga desde cargarFestividadesPersonal() -->
        </div>
      </section>
    </main>

    <div id="notifications-container"></div>
    ${T()}
  `),oa()}async function oa(){try{const i=L("wisfesti");if(i)return window.festividadesGlobal=i,N(i);const s=(await E(P(C(w,"festividades"),z("orden")))).docs.map(l=>({id:l.id,...l.data()})).filter(l=>l.activo!==!1);window.festividadesGlobal=s,_("wisfesti",s,24),N(s)}catch(i){console.error("Error cargarFestividadesPersonal:",i),a("#fest-grid-personal").html('<p style="text-align:center;color:var(--error);font-size:1.2rem;">Error al cargar festividades</p>')}}function N(i){const c=i.map((s,l)=>`
    <div class="fest_card anim_up" data-fest="${s.nombreId}" style="animation-delay:${l*.1}s">
      <div class="card_head">
        <div class="card_ico">${s.emoji}</div>
        <div class="card_tag ${s.tipoColor||s.tipo}">${s.tipo}</div>
      </div>
      <div class="card_cont">
        <h3 class="card_tit">${s.nombre}</h3>
        <p class="card_date">${s.fechaTexto}</p>
        <p class="card_desc">${s.descripcion}</p>
        <div class="card_tags">
          ${(s.tags||[]).map(r=>`<span class="tag_item"><i class="fas fa-${ta(r)}"></i>${r}</span>`).join("")}
        </div>
      </div>
      <div class="card_foot">
        <button class="btn_pers biwin">
          <i class="fas fa-edit"></i>
          Personalizar Mensaje
        </button>
      </div>
    </div>
  `).join("");a("#fest-grid-personal").html(c)}function ta(i){return i?i.includes("Primaveral")?"sun":i.includes("Romántico")?"heart":i.includes("Audio")?"music":i.includes("Celebración")?"birthday-cake":i.includes("Sorpresa")?"gift":i.includes("Paternal")?"male":i.includes("Maternal")?"female":i.includes("Navideño")?"tree":i.includes("Renovación")?"calendar":"star":"star"}const ra="modulepreload",na=function(i){return"/wiilove/"+i},D={},k=function(c,s,l){let r=Promise.resolve();if(s&&s.length>0){let p=function(m){return Promise.all(m.map(v=>Promise.resolve(v).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),o=h?.nonce||h?.getAttribute("nonce");r=p(s.map(m=>{if(m=na(m),m in D)return;D[m]=!0;const v=m.endsWith(".css"),y=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${y}`))return;const f=document.createElement("link");if(f.rel=v?"stylesheet":ra,v||(f.as="script"),f.crossOrigin="",f.href=m,o&&f.setAttribute("nonce",o),document.head.appendChild(f),v)return new Promise((A,e)=>{f.addEventListener("load",A),f.addEventListener("error",()=>e(new Error(`Unable to preload CSS for ${m}`)))})}))}function u(h){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=h,window.dispatchEvent(o),!o.defaultPrevented)throw h}return r.then(h=>{for(const o of h||[])o.status==="rejected"&&u(o.reason);return c().catch(u)})},la=(i,c,s)=>{const l=i[c];return l?typeof l=="function"?l():Promise.resolve(l):new Promise((r,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+c+(c.split("/").length!==s?". Note that variables only represent file names one level deep.":""))))})};async function ca(i){let c=i.get("fest")||window.location.search.replace("?","").split("&")[0];const s=i.get("de")||"Amigos",l=i.get("para")||"Amiga",r=i.get("msg")||"main",u=i.get("txt");if(!c||c.includes("="))return window.location.href="/";try{const h=L("wisfesti");let o=h?.find(v=>v.plantilla===c);if(!o){const v=await E(P(C(w,"festividades"),S("plantilla","==",c)));v.empty||(o={id:v.docs[0].id,...v.docs[0].data()},_("wisfesti",[...h||[],o],24))}if(!o)return window.location.href="/";const p=r==="custom"&&u?u:o.mensajes?.[r]||o.mensajes?.main,m=await la(Object.assign({"./parati/anuevo.js":()=>k(()=>import("./anuevo-RZekLDLe.js"),__vite__mapDeps([0,1,2,3])),"./parati/cumple.js":()=>k(()=>import("./cumple-C9-d3NMk.js"),__vite__mapDeps([4,1,2,5])),"./parati/default.js":()=>k(()=>import("./default-BdEvQ70U.js"),__vite__mapDeps([6,1,2,7])),"./parati/dmadre.js":()=>k(()=>import("./dmadre-CaSzd15m.js"),__vite__mapDeps([8,1,2,9])),"./parati/dpadre.js":()=>k(()=>import("./dpadre-DYpqD0Ap.js"),__vite__mapDeps([10,1,2,11])),"./parati/navidad.js":()=>k(()=>import("./navidad-BObxbljF.js"),__vite__mapDeps([12,1,2,13])),"./parati/primavera.js":()=>k(()=>import("./primavera-7wAn0UrC.js"),__vite__mapDeps([14,1,2,15]))}),`./parati/${o.plantilla||"default"}.js`,3);a(".app").html(m.default(o,s,l,p,o.audioUrl))}catch(h){console.error("Error parati:",h),window.location.href="/"}}const O=new URLSearchParams(window.location.search);O.toString()?ca(O):(X(R,async i=>{if(!i)return ia();try{const c=L("wiSmile");if(c){U(c);return}const l=(await E(P(C(w,"smiles"),S("usuario","==",i.displayName)))).docs[0]?.data()||{};_("wiSmile",l,450),U(l)}catch(c){console.error(c)}}),a(document).on("click",".bt_salir",async()=>{await aa(R),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(c=>localStorage.removeItem(c))}}));
