import $ from 'jquery';
import './biwin.js';
import { db } from '../firebase/init.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { footer } from './foo.js';
import { Mensaje, savels, getls } from './widev.js';

// === VISTA PERSONAL (AUTENTICADO) ===
export function personalContenido(wi) {
  Mensaje(`Bienvenido ${wi.nombre}!`);
  
  $('.app').html(`
    <header class="top-header">
      <div class="header-container miwp">
        <div class="header-content">
          <h1><i class="fas fa-trophy"></i> MI DASHBOARD</h1>
        </div>
        <div class="header-right">
          <div class="witemas"></div>
          <div class="user-section">
            <div class="sesion">
              <img src="${wi.imagen || '/smile.png'}" alt="${wi.nombre}" class="user-avatar">
              <span class="user-name">${wi.nombre}</span>
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
    ${footer()}
  `);

  cargarFestividadesPersonal();
}

async function cargarFestividadesPersonal() {
  try {
    // Reusa el mismo caché que público para evitar doble fetch
    const cache = getls('wisfesti');
    if (cache) {
      window.festividadesGlobal = cache;
      return renderPersonal(cache);
    }

    const snap = await getDocs(query(collection(db, 'festividades'), orderBy('orden')));
    const fests = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(f => f.activo !== false);

    window.festividadesGlobal = fests;
    savels('wisfesti', fests, 24);
    renderPersonal(fests);
  } catch (e) {
    console.error('Error cargarFestividadesPersonal:', e);
    $('#fest-grid-personal').html(`<p style="text-align:center;color:var(--error);font-size:1.2rem;">Error al cargar festividades</p>`);
  }
}

function renderPersonal(fests) {
  const html = fests.map((f, idx) => `
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
          ${(f.tags || []).map(tag => `<span class="tag_item"><i class="fas fa-${tagIcon(tag)}"></i>${tag}</span>`).join('')}
        </div>
      </div>
      <div class="card_foot">
        <button class="btn_pers biwin">
          <i class="fas fa-edit"></i>
          Personalizar Mensaje
        </button>
      </div>
    </div>
  `).join('');

  $('#fest-grid-personal').html(html);
}

function tagIcon(tag) {
  if (!tag) return 'star';
  return tag.includes('Primaveral') ? 'sun'
    : tag.includes('Romántico') ? 'heart'
    : tag.includes('Audio') ? 'music'
    : tag.includes('Celebración') ? 'birthday-cake'
    : tag.includes('Sorpresa') ? 'gift'
    : tag.includes('Paternal') ? 'male'
    : tag.includes('Maternal') ? 'female'
    : tag.includes('Navideño') ? 'tree'
    : tag.includes('Renovación') ? 'calendar'
    : 'star';
}