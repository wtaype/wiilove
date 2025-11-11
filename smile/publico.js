import $ from 'jquery';
import './biwin.js'; 
import { db } from '../firebase/init.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { footer } from './foo.js';
import { Mensaje, savels, getls, removels } from './widev.js';

// === VISTA PÚBLICA ===
export async function publicoContenido() {
  $('.app').html(`
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
    ${footer()}
  `);
  
  await displayPublico();
}

async function displayPublico() {
  try {
    const cache = getls('wisfesti');
    if (cache) {
      window.festividadesGlobal = cache; // ✅ Guardar en global
      return renderPublico(cache);
    }

    const snap = await getDocs(query(collection(db, 'festividades'), orderBy('orden')));
    const fests = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(f => f.activo !== false);
    
    window.festividadesGlobal = fests; // ✅ Guardar en global
    savels('wisfesti', fests, 24);
    renderPublico(fests);
  } catch (e) {
    console.error('Error displayPublico:', e);
    $('#fest-grid-publico').html(`<p style="text-align:center;color:var(--error);font-size:1.2rem;">Error al cargar festividades</p>`);
  }
}

function renderPublico(fests) {
  const html = fests.map((f, idx) => {
    const icono = f.tags?.includes('Primaveral') ? 'sun' : 
                  f.tags?.includes('Romántico') ? 'heart' : 
                  f.tags?.includes('Audio') ? 'music' : 
                  f.tags?.includes('Celebración') ? 'birthday-cake' : 
                  f.tags?.includes('Sorpresa') ? 'gift' : 
                  f.tags?.includes('Paternal') ? 'male' : 
                  f.tags?.includes('Maternal') ? 'female' : 
                  f.tags?.includes('Navideño') ? 'tree' : 
                  f.tags?.includes('Renovación') ? 'calendar' : 'star';
    
    return `
      <div class="fest_card anim_up" data-fest="${f.nombreId}" style="animation-delay:${idx * 0.1}s">
        <div class="card_head">
          <div class="card_ico">${f.emoji}</div>
          <div class="card_tag ${f.tipoColor || f.tipo}">${f.tipo}</div>
        </div>
        <div class="card_cont">
          <h3 class="card_tit">${f.nombre}</h3>
          <p class="card_date">${f.fechaTexto}</p>
          <p class="card_desc">${f.descripcion}</p>
          <div class="card_tags">
            ${(f.tags || []).map(tag => {
              const ico = tag.includes('Primaveral') ? 'sun' : 
                         tag.includes('Romántico') ? 'heart' : 
                         tag.includes('Audio') ? 'music' : 
                         tag.includes('Celebración') ? 'birthday-cake' : 
                         tag.includes('Sorpresa') ? 'gift' : 
                         tag.includes('Paternal') ? 'male' : 
                         tag.includes('Maternal') ? 'female' : 
                         tag.includes('Navideño') ? 'tree' : 
                         tag.includes('Renovación') ? 'calendar' : 'star';
              return `<span class="tag_item"><i class="fas fa-${ico}"></i>${tag}</span>`;
            }).join('')}
          </div>
        </div>
        <div class="card_foot">
          <button class="btn_pers biwin">
            <i class="fas fa-edit"></i>
            Personalizar Mensaje
          </button>
        </div>
      </div>
    `;
  }).join('');
  
  $('#fest-grid-publico').html(html);
}

