const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/primavera-CKK-LZQ8.js","assets/biwin-BnDuTAi3.js","assets/biwin-DiF5g45u.css","assets/primavera-C3SFzYtd.css"])))=>i.map(i=>d[i]);
import{$ as a,r as P,t as q,d as S,a as _,i as k,q as E,j,w as $,u as V,m as M,v as B,x as G,s as W,b as Y,M as y,e as x,y as H,z as J,A as Z,p as O,h as F,o as K,l as Q,n as X}from"./biwin-BnDuTAi3.js";function aa(){const t=`
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
</div>`,l=`
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
</div>`,i=`
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
</div>`;a(function(){let e="smiles",m="wiAuthIn",v="wiAuthRol",p="usuario";a(document).on("click",".login",()=>c("loginModal")),a(document).on("click",".registrar",()=>c("registroModal")),a(".crearCuenta").click(()=>{c("registroModal"),u("loginModal")}),a(".conCuenta").click(()=>{c("loginModal"),u("registroModal")}),a(".olvidastePass").click(()=>{c("recuperarModal"),u("loginModal")}),a(".volverLogin").click(()=>{c("loginModal"),u("recuperarModal")}),a(".togglePass").click(function(){const s=a(this).siblings("input"),o=s.attr("type")==="password";s.attr("type",o?"text":"password"),a(this).toggleClass("fa-eye fa-eye-slash")}),a('.miauth input:not([type="checkbox"])').on("click",function(){P(this,a(this).attr("placeholder"))}),a("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){a(this).val(a(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recEmail","#Recuperar"]].forEach(([s,o])=>{a(s).on("input keyup",r=>{a(o).removeClass("inactivo"),r.key==="Enter"&&(a(o).click(),a(o).addClass("inactivo"))})});const w={regEmail:[s=>s.toLowerCase(),s=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(s)||"Correo inválido"],regUsuario:[s=>s.toLowerCase().replace(/[^a-z0-9_]/g,""),s=>s.length>=4||"Usuario 4-20 caracteres"],regNombre:[s=>s.trim(),s=>s.length>0||"Ingrese nombre"],regApellidos:[s=>s.trim(),s=>s.length>0||"Ingrese apellidos"],regPassword:[s=>s,s=>s.length>=6||"Mínimo 6 caracteres"],regPassword1:[s=>s,s=>s===a("#regPassword").val()||"Contraseñas no coinciden"]};a.each(w,function(s,[o,r]){a(`#${s}`).on("blur",function(){const d=o(a(this).val());a(this).val(d);const g=r(d);g!==!0&&P(this,g,"error")})});let h=!1;a("#regUsuario").on("blur focus",async function(){const s=a(this).val();if(s.length>=3)try{const r=(await q(S(_,e,s))).exists();h=!r,P(this,`Usuario ${r?"no disponible":"disponible ✅"}`,r?"error":"success","top",7e3)}catch(o){console.error(o)}});let A=!1;a("#regEmail").on("blur focus",async function(){const s=a(this).val();if(s.length>=3)try{const r=!(await k(E(j(_,e),$("email","==",s)))).empty;A=!r,P(this,`Email ${r?"no disponible":"disponible ✅"}`,r?"error":"success","top",7e3)}catch(o){console.error(o)}}),a("#Registrar").click(async function(){const s=[[h,a("#regUsuario")[0],"Usuario no disponible"],[A,a("#regEmail")[0],"Email no disponible"],...Object.entries(w).map(([o,[r,d]])=>{const g=a(`#${o}`),b=r(g.val()),C=d(b);return[C===!0,g[0],C!==!0?C:""]})];for(const[o,r,d]of s)if(!o&&d&&(P(r,d,"error"),r.focus(),!0))return;try{const o=["regEmail","regUsuario","regNombre","regApellidos","regPassword"],[r,d,g,b,C]=o.map(T=>a("#"+T).val().trim()),{user:z}=await V(M,r,C);await Promise.all([B(z,{displayName:d}),G(z)]),console.log("Registro completo en Auth ✅"+Date());const U=S(_,e,d);await W(U,{usuario:d,email:r,nombre:g,apellidos:b,rol:p,creacion:Y(),uid:z.uid}),console.log("Registro completo en Firestore ✅"+Date()),y("Registro completado! ✅")}catch(o){y({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[o.code]||o.message)||console.error(o)}finally{x(m,"wIn",24),x(v,p,24),setTimeout(()=>H(),3e3),u("registroModal")}}),a("#Login").click(async function(){try{const[s,o]=["#email","#password"].map(b=>a(b).val()),r=s.includes("@"),d=r?null:await q(S(_,e,s));if(!r&&!d.exists())throw new Error("Usuario no encontrado");const g=r?s:d.data().email;await J(M,g,o),x(m,"wIn",24),x(v,d.data().rol,24)}catch(s){y({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[s.code]||s.message,"error"),console.error(s)}finally{u("loginModal")}}),a("#Recuperar").click(async function(){try{const[s,o]=["#recEmail","#recFechaNacimiento"].map(b=>a(b).val()),r=s.includes("@")?s:await(async()=>{const b=await q(S(_,e,s));return b.exists()?b.data().email:null})();if(!r)return y("Usuario no registrado","error");const d=await k(E(j(_,e),$("email","==",r)));if(d.empty)return y("Email incorrecto o no existe","error");if(d.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==o)return y("Fecha de nacimiento incorrecta","error");await Z(M,r),y("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(s){console.error(s)}})}),a("body").append(t+l+i);function n(){const e=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}#recuperarModal *:not(i),#registroModal *:not(i),#loginModal *:not(i){font-family:'Poppins',segoe ui}",m=a(".wiAuthCss");m.length?m.text(e):a("head").append(`<style class="wiAuthCss">${e}</style>`)}const c=e=>{const m=a(`#${e}`).addClass("active");a("body").addClass("modal-open"),setTimeout(()=>{m.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},u=e=>{a(`#${e}`).removeClass("active"),a(".modal.active").length||a("body").removeClass("modal-open")},f=()=>{const e=()=>{a(".modal").removeClass("active"),a("body").removeClass("modal-open")};a(document).off(".authModals").on("click.authModals",".close-modal",e).on("click.authModals",".modal",m=>{a(m.target).is(".modal")&&e()}).on("keydown.authModals",m=>{m.key==="Escape"&&e()})};n(),f()}aa();async function sa(){a(".app").html(`
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
    ${O()}
  `),await ea()}async function ea(){try{const t=F("wisfesti");if(t)return window.festividadesGlobal=t,L(t);const i=(await k(E(j(_,"festividades"),K("orden")))).docs.map(n=>({id:n.id,...n.data()})).filter(n=>n.activo!==!1);window.festividadesGlobal=i,x("wisfesti",i,24),L(i)}catch(t){console.error("Error displayPublico:",t),a("#fest-grid-publico").html('<p style="text-align:center;color:var(--error);font-size:1.2rem;">Error al cargar festividades</p>')}}function L(t){const l=t.map((i,n)=>(i.tags?.includes("Primaveral")||i.tags?.includes("Romántico")||i.tags?.includes("Audio")||i.tags?.includes("Celebración")||i.tags?.includes("Sorpresa")||i.tags?.includes("Paternal")||i.tags?.includes("Maternal")||i.tags?.includes("Navideño")||i.tags?.includes("Renovación"),`
      <div class="fest_card anim_up" data-fest="${i.nombreId}" style="animation-delay:${n*.1}s">
        <div class="card_head">
          <div class="card_ico">${i.emoji}</div>
          <div class="card_tag ${i.tipoColor||i.tipo}">${i.tipo}</div>
        </div>
        <div class="card_cont">
          <h3 class="card_tit">${i.nombre}</h3>
          <p class="card_date">${i.fechaTexto}</p>
          <p class="card_desc">${i.descripcion}</p>
          <div class="card_tags">
            ${(i.tags||[]).map(c=>`<span class="tag_item"><i class="fas fa-${c.includes("Primaveral")?"sun":c.includes("Romántico")?"heart":c.includes("Audio")?"music":c.includes("Celebración")?"birthday-cake":c.includes("Sorpresa")?"gift":c.includes("Paternal")?"male":c.includes("Maternal")?"female":c.includes("Navideño")?"tree":c.includes("Renovación")?"calendar":"star"}"></i>${c}</span>`).join("")}
          </div>
        </div>
        <div class="card_foot">
          <button class="btn_pers biwin">
            <i class="fas fa-edit"></i>
            Personalizar Mensaje
          </button>
        </div>
      </div>
    `)).join("");a("#fest-grid-publico").html(l)}function I(t){y(`Bienvenido ${t.nombre}!`),a(".app").html(`
    <header class="top-header">
      <div class="header-container miwp">
        <div class="header-content">
          <h1><i class="fas fa-trophy"></i> MI DASHBOARD</h1>
        </div>
        <div class="header-right">
          <div class="witemas"></div>
          <div class="user-section">
            <div class="sesion">
              <img src="${t.imagen||"/smile.png"}" alt="${t.nombre}" class="user-avatar">
              <span class="user-name">${t.nombre}</span>
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

        <div class="fest_grid">
          <!-- Card 1: Flores Amarillas -->
          <div class="fest_card anim_up" data-fest="Girasol">
            <div class="card_head">
              <div class="card_ico">🌻</div>
              <div class="card_tag popular">Popular</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Flores Amarillas</h3>
              <p class="card_date">21 de Septiembre</p>
              <p class="card_desc">
                Celebra la llegada de la primavera con hermosos mensajes de girasoles y flores amarillas.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-sun"></i>
                  Primaveral
                </span>
                <span class="tag_item">
                  <i class="fas fa-heart"></i>
                  Romántico
                </span>
                <span class="tag_item">
                  <i class="fas fa-music"></i>
                  Con Audio
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>

          <!-- Card 2: Cumpleaños -->
          <div class="fest_card anim_up" data-fest="cumple">
            <div class="card_head">
              <div class="card_ico">🎂</div>
              <div class="card_tag especial">Especial</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Cumpleaños</h3>
              <p class="card_date">Todo el año</p>
              <p class="card_desc">
                Felicita de manera especial con tarjetas personalizadas para cumpleaños únicos.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-birthday-cake"></i>
                  Celebración
                </span>
                <span class="tag_item">
                  <i class="fas fa-gift"></i>
                  Sorpresa
                </span>
                <span class="tag_item">
                  <i class="fas fa-confetti"></i>
                  Festivo
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>

          <!-- Card 3: Día del Padre -->
          <div class="fest_card anim_up" data-fest="padre">
            <div class="card_head">
              <div class="card_ico">👨‍👧‍👦</div>
              <div class="card_tag amor">Familia</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Día del Padre</h3>
              <p class="card_date">Tercer domingo de Junio</p>
              <p class="card_desc">
                Honra a papá con mensajes emotivos y llenos de cariño en su día especial.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-male"></i>
                  Paternal
                </span>
                <span class="tag_item">
                  <i class="fas fa-heart"></i>
                  Emotivo
                </span>
                <span class="tag_item">
                  <i class="fas fa-family"></i>
                  Familiar
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>

          <!-- Card 4: Día de la Madre -->
          <div class="fest_card anim_up" data-fest="madre">
            <div class="card_head">
              <div class="card_ico">👩‍👧‍👦</div>
              <div class="card_tag amor">Amor</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Día de la Madre</h3>
              <p class="card_date">Segundo domingo de Mayo</p>
              <p class="card_desc">
                Dedica palabras hermosas a mamá con tarjetas llenas de amor y gratitud.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-female"></i>
                  Maternal
                </span>
                <span class="tag_item">
                  <i class="fas fa-rose"></i>
                  Tierno
                </span>
                <span class="tag_item">
                  <i class="fas fa-heart"></i>
                  Amoroso
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>

          <!-- Card 5: Navidad -->
          <div class="fest_card anim_up" data-fest="navidad">
            <div class="card_head">
              <div class="card_ico">🎄</div>
              <div class="card_tag festivo">Festivo</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Navidad</h3>
              <p class="card_date">25 de Diciembre</p>
              <p class="card_desc">
                Comparte la magia navideña con mensajes llenos de paz, amor y alegría.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-tree"></i>
                  Navideño
                </span>
                <span class="tag_item">
                  <i class="fas fa-snowflake"></i>
                  Invernal
                </span>
                <span class="tag_item">
                  <i class="fas fa-gift"></i>
                  Mágico
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>

          <!-- Card 6: Año Nuevo -->
          <div class="fest_card anim_up" data-fest="anio">
            <div class="card_head">
              <div class="card_ico">🎊</div>
              <div class="card_tag nuevo">Nuevo</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Año Nuevo</h3>
              <p class="card_date">1 de Enero</p>
              <p class="card_desc">
                Recibe el nuevo año con mensajes de esperanza, metas y nuevos comienzos.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-calendar"></i>
                  Renovación
                </span>
                <span class="tag_item">
                  <i class="fas fa-star"></i>
                  Esperanza
                </span>
                <span class="tag_item">
                  <i class="fas fa-fireworks"></i>
                  Celebración
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>


    <div id="notifications-container"></div>
    ${O()}
  `)}const ia="modulepreload",ta=function(t){return"/wiilove/"+t},N={},R=function(l,i,n){let c=Promise.resolve();if(i&&i.length>0){let m=function(v){return Promise.all(v.map(p=>Promise.resolve(p).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),e=f?.nonce||f?.getAttribute("nonce");c=m(i.map(v=>{if(v=ta(v),v in N)return;N[v]=!0;const p=v.endsWith(".css"),w=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${w}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":ia,p||(h.as="script"),h.crossOrigin="",h.href=v,e&&h.setAttribute("nonce",e),document.head.appendChild(h),p)return new Promise((A,s)=>{h.addEventListener("load",A),h.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${v}`)))})}))}function u(f){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=f,window.dispatchEvent(e),!e.defaultPrevented)throw f}return c.then(f=>{for(const e of f||[])e.status==="rejected"&&u(e.reason);return l().catch(u)})},oa=(t,l,i)=>{const n=t[l];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((c,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+l+(l.split("/").length!==i?". Note that variables only represent file names one level deep.":""))))})};async function ra(t){const l=t.get("fest"),i=t.get("de"),n=t.get("para"),c=t.get("msg"),u=t.get("txt");if(!l||!i||!n||!c)return window.location.href="/";try{const f=F("wisfesti");let e=f?.find(p=>p.alias===l||p.nombreId===l);if(!e){const p=await k(E(j(_,"festividades"),$("alias","==",l)));p.empty||(e={id:p.docs[0].id,...p.docs[0].data()},x("wisfesti",[...f||[],e],24))}if(!e)return window.location.href="/";const m=c==="custom"&&u?u:e.mensajes?.[c]||e.descripcion,v=await oa(Object.assign({"./parati/anuevo.js":()=>R(()=>Promise.resolve().then(()=>ca),void 0),"./parati/cumple.js":()=>R(()=>Promise.resolve().then(()=>la),void 0),"./parati/navidad.js":()=>R(()=>Promise.resolve().then(()=>na),void 0),"./parati/primavera.js":()=>R(()=>import("./primavera-CKK-LZQ8.js"),__vite__mapDeps([0,1,2,3]))}),`./parati/${e.plantilla||"default"}.js`,3);a(".app").html(v.default(e,i,n,m,e.audioUrl))}catch(f){console.error("Error parati:",f),window.location.href="/"}}const D=new URLSearchParams(window.location.search);D.toString()?ra(D):(Q(M,async t=>{if(!t)return sa();try{const l=F("wiSmile");if(l){I(l);return}const n=(await k(E(j(_,"smiles"),$("usuario","==",t.displayName)))).docs[0]?.data()||{};x("wiSmile",n,450),I(n)}catch(l){console.error(l)}}),a(document).on("click",".bt_salir",async()=>{await X(M),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(l=>localStorage.removeItem(l))}}));const ca=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),la=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),na=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
