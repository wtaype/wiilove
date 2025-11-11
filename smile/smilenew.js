import $ from 'jquery';
import './biwin.js'; 
import { db } from '../firebase/init.js';
import { collection, getDocs, setDoc, deleteDoc, doc, serverTimestamp, Timestamp, query, orderBy } from 'firebase/firestore';
import { Notificacion, Mensaje, savels, getls, Tiempo } from './widev.js';
import { abrirModal, cerrarModal, confirmarModal } from './wimodal.js';
import { wi } from './smile.js';

// =============================================
// VARIABLES GLOBALES
// =============================================
let modoEdicion = false;
let festividadesCache = [];

// =============================================
// CARGAR Y RENDERIZAR FESTIVIDADES
// =============================================
export async function festividades() {
  try {
    const cache = getls('wiFestividades');
    if (cache && !modoEdicion) return renderizarFestividades(cache);

    const snap = await getDocs(query(collection(db, 'festividades'), orderBy('orden')));
    festividadesCache = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    
    savels('wiFestividades', festividadesCache, 24);
    renderizarFestividades(festividadesCache);
  } catch (e) {
    console.error('Error festividades:', e);
    Notificacion('Error al cargar festividades', 'error');
  }
}

// =============================================
// RENDERIZAR FESTIVIDADES
// =============================================
function renderizarFestividades(fests) {
  window.festividadesGlobal = fests;
  const html = `
    <main class="miweb miwp">
      <section class="fest_sec">
        <div class="sec_head">
          <h2 class="sec_tit">Elige tu Festividad</h2>
          <p class="sec_sub">Selecciona la ocasión especial y personaliza tu mensaje único</p>
          ${wi ? `<button id="alternarModo" class="wimodal-btn wimodal-btn-${modoEdicion ? 'danger' : 'primary'}" style="margin-top:2vh;">
            <i class="fa-solid fa-${modoEdicion ? 'eye' : 'edit'}"></i>
            ${modoEdicion ? 'Modo Vista' : 'Modo Edición'}
          </button>` : ''}
        </div>

        <div class="fest_grid">
          ${fests.filter(f => f.activo !== false).map((f, idx) => `
            <div class="fest_card anim_up" data-fest="${f.nombreId}" data-id="${f.id}" style="animation-delay:${idx * 0.1}s">
              <div class="card_head">
                <div class="card_ico" ${modoEdicion ? `contenteditable="true" data-field="emoji"` : ''}>${f.emoji}</div>
                <div class="card_tag ${f.tipoColor || f.tipo}">${f.tipo}</div>
                ${modoEdicion ? `
                  <div style="display:flex;gap:1vh;margin-left:auto;">
                    <button class="boton-editar" data-id="${f.id}" style="background:var(--info);color:#fff;border:none;padding:0.8vh 1vw;border-radius:0.8vh;cursor:pointer;">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="boton-eliminar" data-id="${f.id}" style="background:var(--error);color:#fff;border:none;padding:0.8vh 1vw;border-radius:0.8vh;cursor:pointer;">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ` : ''}
              </div>
              <div class="card_cont">
                <h3 class="card_tit" ${modoEdicion ? `contenteditable="true" data-field="nombre"` : ''}>${f.nombre}</h3>
                <p class="card_date" ${modoEdicion ? `contenteditable="true" data-field="fechaTexto"` : ''}>${f.fechaTexto}</p>
                <p class="card_desc" ${modoEdicion ? `contenteditable="true" data-field="descripcion"` : ''}>${f.descripcion}</p>
                <div class="card_tags">
                  ${(f.tags || []).map(tag => {
                    const icono = tag.includes('Primaveral') ? 'sun' : tag.includes('Romántico') ? 'heart' : tag.includes('Audio') ? 'music' : 
                                 tag.includes('Celebración') ? 'birthday-cake' : tag.includes('Sorpresa') ? 'gift' : 'star';
                    return `<span class="tag_item"><i class="fas fa-${icono}"></i>${tag}</span>`;
                  }).join('')}
                </div>
              </div>
              <div class="card_foot">
                <button class="btn_pers">
                  <i class="fas fa-edit"></i>
                  Personalizar Mensaje
                </button>
              </div>
            </div>
          `).join('')}
          
          ${modoEdicion ? `
            <div class="fest_card anim_up" id="botonAgregarFestividad" style="display:flex;align-items:center;justify-content:center;cursor:pointer;border:2px dashed var(--mco);background:rgba(255,255,255,0.5);">
              <div style="text-align:center;">
                <i class="fa-solid fa-plus" style="font-size:4rem;color:var(--mco);margin-bottom:2vh;"></i>
                <h3 style="color:var(--mco);font-weight:700;">Agregar Festividad</h3>
              </div>
            </div>
          ` : ''}
        </div>
      </section>
    </main>
  `;
  
  $('.miweb').replaceWith(html);
}

// =============================================
// EVENTOS DELEGADOS
// =============================================
$(document).on('click', '#alternarModo', function() {
  modoEdicion = !modoEdicion;
  festividades();
  Mensaje(modoEdicion ? 'Modo Edición activado ✏️' : 'Modo Vista activado 👁️');
});

$(document).on('click', '#botonAgregarFestividad', () => abrirModalFestividad());

$(document).on('click', '.boton-editar', function() {
  const fest = festividadesCache.find(f => f.id === $(this).data('id'));
  if (fest) abrirModalFestividad(fest);
});

$(document).on('click', '.boton-eliminar', async function() {
  const id = $(this).data('id');
  const fest = festividadesCache.find(f => f.id === id);
  
  confirmarModal({
    titulo: '¿Eliminar Festividad?',
    mensaje: `¿Estás seguro de eliminar "${fest?.nombre}"? Esta acción no se puede deshacer.`,
    tipo: 'danger',
    textoConfirmar: 'Eliminar',
    onConfirmar: async () => {
      try {
        await deleteDoc(doc(db, 'festividades', id));
        festividadesCache = festividadesCache.filter(f => f.id !== id);
        savels('wiFestividades', festividadesCache, 24);
        festividades();
        Mensaje('Festividad eliminada ✅');
      } catch (e) {
        console.error('Error eliminando:', e);
        Notificacion('Error al eliminar', 'error');
      }
    }
  });
});

// Guardar cambios inline (contenteditable)
$(document).on('blur', '[contenteditable="true"]', async function() {
  if (!modoEdicion) return;
  
  const $card = $(this).closest('.fest_card');
  const id = $card.data('id');
  const field = $(this).data('field');
  const valor = $(this).text().trim();
  
  if (!id || !field) return;
  
  try {
    const fest = festividadesCache.find(f => f.id === id);
    if (!fest) return;
    
    fest[field] = valor;
    
    await setDoc(doc(db, 'festividades', id), {
      [field]: valor,
      actualizado: serverTimestamp()
    }, { merge: true });
    
    savels('wiFestividades', festividadesCache, 24);
    Notificacion(`${field} actualizado ✅`, 'success', 2000);
  } catch (e) {
    console.error('Error guardando inline:', e);
    Notificacion('Error al guardar', 'error');
  }
});

// =============================================
// MODAL DE FESTIVIDAD (FORMULARIO COMPLETO)
// =============================================
function abrirModalFestividad(fest = null) {
  const esEdicion = fest !== null;
  
  // Helper: Timestamp a fecha local
  const getFechaLocal = (ts) => ts?.toDate ? new Date(ts.toDate().getTime() - ts.toDate().getTimezoneOffset() * 60000).toISOString().split('T')[0] : '';
  
  // Helper: Object a JSON pretty
  const objToJson = (obj) => obj ? JSON.stringify(obj, null, 2) : '{}';
  
  const contenido = `
    <form id="wimodal-form-fest">
      <div class="wimodal-form-grid" style="grid-template-columns:1fr 1fr;gap:2vh;">
        
        <!-- COLUMNA 1: INFORMACIÓN BÁSICA -->
        <div class="wimodal-form-group">
          <label data-witip="Nombre completo de la festividad"><i class="fa-solid fa-signature"></i> Nombre</label>
          <input type="text" id="wi-nombre" placeholder="Ej: Flores Amarillas" required value="${fest?.nombre || ''}">
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Alias corto para URL (ej: primavera)"><i class="fa-solid fa-link"></i> Alias (URL)</label>
          <input type="text" id="wi-alias" placeholder="primavera" required pattern="[a-z0-9]+" value="${fest?.alias || ''}">
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Selecciona un emoji representativo"><i class="fa-solid fa-smile"></i> Emoji</label>
          <div style="display:flex;gap:1vh;">
            <input type="text" id="wi-emoji" readonly placeholder="Selecciona emoji" value="${fest?.emoji || ''}" style="cursor:pointer;flex:1;" required>
            <button type="button" id="wi-emoji-picker" class="wimodal-btn wimodal-btn-primary"><i class="fa-solid fa-icons"></i></button>
          </div>
          <div id="wi-emoji-grid" style="display:none;grid-template-columns:repeat(8,1fr);gap:0.5vh;margin-top:1vh;max-height:20vh;overflow-y:auto;padding:1vh;background:var(--bg);border-radius:1vh;"></div>
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Tipo de festividad"><i class="fa-solid fa-tag"></i> Tipo</label>
          <select id="wi-tipo" required style="width:100%;padding:1.2vh;border:2px solid var(--bdr);border-radius:1vh;outline:none;background:#fff;font-family:var(--ff_P);font-weight:500;">
            ${['popular','especial','amor','festivo','nuevo'].map(t => `<option value="${t}" ${fest?.tipo === t ? 'selected' : ''}>${t.charAt(0).toUpperCase() + t.slice(1)}</option>`).join('')}
          </select>
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Fecha legible (Ej: 21 de Septiembre)"><i class="fa-solid fa-calendar"></i> Fecha Texto</label>
          <input type="text" id="wi-fecha-texto" placeholder="21 de Septiembre" required value="${fest?.fechaTexto || ''}">
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Fecha numérica para ordenar"><i class="fa-solid fa-calendar-day"></i> Fecha (dd/mm/yyyy)</label>
          <input type="date" id="wi-fecha-num" required value="${getFechaLocal(fest?.fechaNum)}">
        </div>
        
        <div class="wimodal-form-group" style="grid-column:1/-1;">
          <label data-witip="Descripción breve de la festividad"><i class="fa-solid fa-align-left"></i> Descripción</label>
          <textarea id="wi-descripcion" rows="2" placeholder="Celebra la llegada de la primavera..." required>${fest?.descripcion || ''}</textarea>
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Tags separados por coma"><i class="fa-solid fa-tags"></i> Tags</label>
          <input type="text" id="wi-tags" placeholder="Primaveral, Romántico, Con Audio" value="${fest?.tags?.join(', ') || ''}">
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Orden de aparición (número)"><i class="fa-solid fa-sort"></i> Orden</label>
          <input type="number" id="wi-orden" min="1" placeholder="1" value="${fest?.orden || festividadesCache.length + 1}">
        </div>
        
        <!-- COLUMNA 2: MULTIMEDIA Y MENSAJES -->
        <div class="wimodal-form-group">
          <label data-witip="URL del audio MP3 principal"><i class="fa-solid fa-music"></i> Audio URL</label>
          <input type="url" id="wi-audio-url" placeholder="https://ejemplo.com/audio.mp3" value="${fest?.audioUrl || ''}">
        </div>
        
        <div class="wimodal-form-group">
          <label data-witip="Nombre del archivo de plantilla (sin .js)"><i class="fa-solid fa-file-code"></i> Plantilla JS</label>
          <input type="text" id="wi-plantilla" placeholder="primavera" value="${fest?.plantilla || ''}">
        </div>
        
        <div class="wimodal-form-group" style="grid-column:1/-1;">
          <label data-witip="Mensajes predefinidos en formato JSON"><i class="fa-solid fa-comment-dots"></i> Mensajes (JSON)</label>
          <textarea id="wi-mensajes" rows="6" placeholder='{"amor": "Texto...", "amorbonito": "Texto..."}' style="font-family:monospace;font-size:0.9rem;">${objToJson(fest?.mensajes)}</textarea>
          <small style="color:var(--txs);">Formato: {"amor": "Mensaje 1", "amorbonito": "Mensaje 2"}</small>
        </div>
        
        <div class="wimodal-form-group" style="grid-column:1/-1;">
          <label data-witip="Audios alternativos en formato JSON"><i class="fa-solid fa-headphones"></i> Música Alternativa (JSON)</label>
          <textarea id="wi-musica" rows="4" placeholder='{"paz": "url1.mp3", "dulce": "url2.mp3"}' style="font-family:monospace;font-size:0.9rem;">${objToJson(fest?.musica)}</textarea>
          <small style="color:var(--txs);">Formato: {"paz": "https://...", "dulce": "https://..."}</small>
        </div>
        
      </div>
      
      <button type="submit" class="wimodal-btn wimodal-btn-primary" style="width:100%;display:flex;align-items:center;justify-content:center;gap:1vh;margin-top:2vh;">
        <i class="fa-solid fa-save"></i>
        ${esEdicion ? 'Actualizar Festividad' : 'Guardar Festividad'}
      </button>
    </form>
  `;
  
  abrirModal({
    titulo: esEdicion ? '✏️ Editar Festividad' : '➕ Nueva Festividad',
    contenido,
    botones: []
  });
  
  inicializarEventosModal(fest);
}

// =============================================
// INICIALIZAR EVENTOS DEL MODAL
// =============================================
function inicializarEventosModal(fest) {
  const emojis = ['🌻','🎂','👨‍👧‍👦','👩‍👧‍👦','🎄','🎊','💐','🎁','🎈','🎉','❤️','💕','🌹','⭐','🌙','☀️','🌈','🎵','🎶','✨','🎯','🏆','🎓','💍','👑','🌺','🌸','🦋','🐶','🐱','🦄','🌟'];
  
  // Emoji Picker
  $('#wi-emoji-picker').on('click', function() {
    const $grid = $('#wi-emoji-grid');
    $grid.is(':visible') ? $grid.slideUp(200) : ($grid.children().length || $grid.html(emojis.map(e => `<div style="font-size:2rem;cursor:pointer;text-align:center;padding:0.5vh;border-radius:0.5vh;transition:all 0.2s;" class="emoji-item">${e}</div>`).join('')), $grid.slideDown(200));
  });
  
  $(document).on('click', '.emoji-item', function() {
    $('#wi-emoji').val($(this).text());
    $('#wi-emoji-grid').slideUp(200);
  });
  
  // Auto-generar alias desde nombre
  $('#wi-nombre').on('input', function() {
    if (!fest) { // Solo auto-generar en modo creación
      const alias = $(this).val().toLowerCase().replace(/\s+/g, '').replace(/[áäâà]/g, 'a').replace(/[éëêè]/g, 'e').replace(/[íïîì]/g, 'i').replace(/[óöôò]/g, 'o').replace(/[úüûù]/g, 'u').replace(/ñ/g, 'n').replace(/[^a-z0-9]/g, '');
      $('#wi-alias').val(alias);
    }
  });
  
  // Tooltips con data-witip
  $('[data-witip]').on('mouseenter', function() {
    const tip = $(this).data('witip');
    $(this).attr('title', tip);
  });
  
  // Submit
  $('#wimodal-form-fest').on('submit', async function(e) {
    e.preventDefault();
    
    const nombre = $('#wi-nombre').val().trim();
    const alias = $('#wi-alias').val().trim().toLowerCase();
    const nombreId = nombre.toLowerCase().replace(/\s+/g, '_').replace(/[áäâà]/g, 'a').replace(/[éëêè]/g, 'e').replace(/[íïîì]/g, 'i').replace(/[óöôò]/g, 'o').replace(/[úüûù]/g, 'u').replace(/ñ/g, 'n');
    const id = fest?.id || `${nombreId}_${Date.now()}`;
    
    // Convertir fecha manteniendo hora actual
    const fechaInput = $('#wi-fecha-num').val();
    const [year, month, day] = fechaInput.split('-').map(Number);
    const ahora = new Date();
    const fechaLocal = new Date(year, month - 1, day, ahora.getHours(), ahora.getMinutes(), ahora.getSeconds());
    const fechaNum = Timestamp.fromDate(fechaLocal);
    
    // Parsear JSON de mensajes y música
    let mensajes = {};
    let musica = {};
    try {
      const mensajesStr = $('#wi-mensajes').val().trim();
      if (mensajesStr) mensajes = JSON.parse(mensajesStr);
    } catch (e) {
      return Notificacion('JSON de mensajes inválido', 'error');
    }
    try {
      const musicaStr = $('#wi-musica').val().trim();
      if (musicaStr) musica = JSON.parse(musicaStr);
    } catch (e) {
      return Notificacion('JSON de música inválido', 'error');
    }
    
    const datos = {
      nombre,
      nombreId,
      alias,
      emoji: $('#wi-emoji').val(),
      descripcion: $('#wi-descripcion').val().trim(),
      creadoPor: wi?.usuario || wi?.nombre || 'admin',
      tipo: $('#wi-tipo').val(),
      tipoColor: $('#wi-tipo').val(),
      fechaTexto: $('#wi-fecha-texto').val().trim(),
      fechaNum,
      imagen: '',
      audioUrl: $('#wi-audio-url').val().trim(),
      plantilla: $('#wi-plantilla').val().trim() || alias,
      mensajes,
      musica,
      tags: $('#wi-tags').val().split(',').map(t => t.trim()).filter(Boolean),
      orden: parseInt($('#wi-orden').val()) || festividadesCache.length + 1,
      activo: true,
      ...(fest ? { actualizado: serverTimestamp() } : { fechaCreacion: serverTimestamp(), actualizado: serverTimestamp() })
    };
    
    try {
      await setDoc(doc(db, 'festividades', id), datos, { merge: true });
      
      if (fest) {
        const idx = festividadesCache.findIndex(f => f.id === id);
        festividadesCache[idx] = { id, ...datos };
      } else {
        festividadesCache.push({ id, ...datos });
      }
      
      savels('wiFestividades', festividadesCache, 24);
      festividades();
      cerrarModal();
      Mensaje(fest ? 'Festividad actualizada ✅' : 'Festividad creada ✅');
    } catch (e) {
      console.error('Error guardando:', e);
      Notificacion('Error al guardar festividad', 'error');
    }
  });
}