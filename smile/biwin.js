import $ from 'jquery';
import { abrirModal, cerrarModal } from './wimodal.js';
import { Mensaje, Notificacion } from './widev.js';

// =============================================
// MENSAJES PREDEFINIDOS POR FESTIVIDAD
// =============================================
const mensajesPorFest = {
  flores_amarillas: [
    { id: 'amor', texto: '🌻 Como estas flores amarillas iluminan mi día, tú iluminas mi vida cada momento. ¡Feliz día de las flores amarillas! 💛' },
    { id: 'amistad', texto: '🌻 En este día tan especial, quiero regalarte estas flores amarillas que representan nuestra hermosa amistad. ¡Eres increíble! 🌟' },
    { id: 'especial', texto: '🌻 Las flores amarillas son símbolo de alegría y esperanza, igual que tú en mi vida. ¡Feliz 21 de septiembre! ✨' }
  ],
  dia_padre: [
    { id: 'amor', texto: '👨‍👧‍👦 Papá, eres mi héroe y mi ejemplo a seguir. Gracias por todo tu amor y dedicación. ¡Feliz Día del Padre! 💙' },
    { id: 'gratitud', texto: '👨‍👧‍👦 Gracias papá por cada consejo, cada abrazo y cada momento compartido. Eres el mejor padre del mundo. Te amo! ❤️' },
    { id: 'especial', texto: '👨‍👧‍👦 En este día tan especial quiero decirte que eres mi mayor inspiración. ¡Feliz día papá! 🎉' }
  ],
  dia_madre: [
    { id: 'amor', texto: '👩‍👧‍👦 Mamá, tu amor incondicional es mi mayor tesoro. Gracias por ser mi guía y mi luz. ¡Feliz Día de la Madre! 💕' },
    { id: 'gratitud', texto: '👩‍👧‍👦 Gracias mamá por cada sacrificio, cada sonrisa y cada palabra de aliento. Eres mi superhéroe. Te adoro! 🌹' },
    { id: 'especial', texto: '👩‍👧‍👦 No hay palabras suficientes para expresar lo mucho que te amo mamá. ¡Feliz día! 🌸' }
  ],
  navidad: [
    { id: 'amor', texto: '🎄 Que esta Navidad esté llena de amor, paz y alegría. Gracias por ser parte de mi vida. ¡Feliz Navidad! 🎁' },
    { id: 'familia', texto: '🎄 En esta época navideña quiero desearte lo mejor junto a tus seres queridos. ¡Felices fiestas! ⭐' },
    { id: 'especial', texto: '🎄 Que la magia de la Navidad ilumine tu camino y te llene de bendiciones. ¡Feliz Navidad! 🌟' }
  ],
  ano_nuevo: [
    { id: 'amor', texto: '🎊 Que este nuevo año traiga a tu vida mucha felicidad, éxitos y amor. ¡Feliz Año Nuevo! 🎉' },
    { id: 'deseos', texto: '🎊 Brindo por un año lleno de oportunidades y sueños cumplidos. ¡Feliz 2025! 🥂' },
    { id: 'especial', texto: '🎊 Que cada día del nuevo año sea una aventura maravillosa. ¡Feliz Año Nuevo! 🎆' }
  ],
  default: [
    { id: 'amor', texto: '❤️ Quiero que sepas lo especial que eres para mí. Este mensaje es para celebrar nuestra conexión única. 💕' },
    { id: 'amistad', texto: '⭐ Eres una persona increíble y quiero celebrar contigo este día especial. ¡Gracias por existir! 🌟' },
    { id: 'especial', texto: '✨ En este día tan especial quiero enviarte todo mi cariño y buenos deseos. ¡Eres genial! 🎉' }
  ]
};

// =============================================
// ABRIR MODAL DE PERSONALIZACIÓN
// =============================================
export function abrirBiwin(festividad) {
  const fest = festividad;
  const mensajes = mensajesPorFest[fest.nombreId] || mensajesPorFest.default;
  
  const contenido = `
    <form id="wimodal-form-biwin">
      <div class="wimodal-form-grid">
        
        <!-- MENSAJE PREDEFINIDO -->
        <div class="wimodal-form-group" style="grid-column: 1 / -1;">
          <label><i class="fa-solid fa-comment-dots"></i> Mensaje Predefinido</label>
          <div class="mensaje-selector" style="display:grid;gap:1vh;margin-top:1vh;">
            ${mensajes.map((m, idx) => `
              <label class="mensaje-option" style="display:flex;align-items:start;gap:1vh;padding:1.5vh;border:2px solid var(--bdr);border-radius:1vh;cursor:pointer;transition:all 0.3s;">
                <input type="radio" name="mensaje-tipo" value="${m.id}" data-texto="${m.texto}" ${idx === 0 ? 'checked' : ''} 
                       style="margin-top:0.5vh;">
                <div style="flex:1;">
                  <strong style="text-transform:capitalize;color:var(--mco);">${m.id}</strong>
                  <p style="margin:0.5vh 0 0 0;font-size:0.9rem;color:var(--txs);">${m.texto}</p>
                </div>
              </label>
            `).join('')}
            <label class="mensaje-option" style="display:flex;align-items:start;gap:1vh;padding:1.5vh;border:2px solid var(--bdr);border-radius:1vh;cursor:pointer;transition:all 0.3s;">
              <input type="radio" name="mensaje-tipo" value="custom" data-texto="">
              <div style="flex:1;">
                <strong style="color:var(--mco);">✏️ Mensaje Personalizado</strong>
                <textarea id="wi-mensaje-custom" placeholder="Escribe tu mensaje aquí (máx. 500 caracteres)..." 
                          rows="3" maxlength="500" disabled
                          style="width:100%;margin-top:0.5vh;padding:1vh;border:2px solid var(--bdr);border-radius:0.8vh;outline:none;resize:vertical;font-family:var(--ff_P);"></textarea>
                <small class="char-count" style="color:var(--txs);font-size:0.85rem;">0 / 500 caracteres</small>
              </div>
            </label>
          </div>
        </div>
        
        <!-- DE -->
        <div class="wimodal-form-group">
          <label><i class="fa-solid fa-user"></i> De:</label>
          <input type="text" id="wi-de" placeholder="Tu nombre" required minlength="2" maxlength="50">
        </div>
        
        <!-- PARA -->
        <div class="wimodal-form-group">
          <label><i class="fa-solid fa-heart"></i> Para:</label>
          <input type="text" id="wi-para" placeholder="Nombre especial" required minlength="2" maxlength="50">
        </div>
        
        <!-- AUDIO (opcional) -->
        <div class="wimodal-form-group" style="grid-column: 1 / -1;">
          <label><i class="fa-solid fa-music"></i> Audio (URL MP3 - opcional)</label>
          <input type="url" id="wi-audio" placeholder="https://ejemplo.com/audio.mp3" 
                 value="${fest.audioUrl || ''}" pattern="https?://.+\.mp3$">
          <small style="color:var(--txs);font-size:0.85rem;">Deja vacío para usar audio por defecto</small>
        </div>
        
      </div>
      
      <!-- BOTONES -->
      <div style="display:flex;gap:1vh;margin-top:2vh;">
        <button type="submit" class="wimodal-btn wimodal-btn-primary" style="flex:1;">
          <i class="fa-solid fa-link"></i> Generar Link
        </button>
      </div>
      
      <!-- RESULTADO (oculto inicialmente) -->
      <div id="resultado-link" style="display:none;margin-top:2vh;padding:2vh;background:var(--bg);border-radius:1vh;border:2px solid var(--success);">
        <label style="display:block;margin-bottom:1vh;font-weight:600;color:var(--success);">
          <i class="fa-solid fa-check-circle"></i> ¡Link generado!
        </label>
        <div style="display:flex;gap:1vh;margin-bottom:1vh;">
          <input type="text" id="link-generado" readonly 
                 style="flex:1;padding:1vh;border:2px solid var(--bdr);border-radius:0.8vh;background:#fff;font-family:monospace;font-size:0.85rem;">
          <button type="button" id="btn-copiar" class="wimodal-btn wimodal-btn-secondary">
            <i class="fa-solid fa-copy"></i> Copiar
          </button>
        </div>
        <div style="display:flex;gap:1vh;">
          <button type="button" class="btn-compartir wimodal-btn wimodal-btn-success" data-red="whatsapp" style="flex:1;">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </button>
          <button type="button" class="btn-compartir wimodal-btn wimodal-btn-primary" data-red="facebook" style="flex:1;">
            <i class="fab fa-facebook"></i> Facebook
          </button>
        </div>
      </div>
    </form>
  `;
  
  abrirModal({
    titulo: `${fest.emoji} Personalizar ${fest.nombre}`,
    contenido,
    icono: 'fa-edit',
    botones: []
  });
  
  inicializarEventos(fest);
}

// =============================================
// INICIALIZAR EVENTOS DEL MODAL
// =============================================
function inicializarEventos(fest) {
  
  // Activar/desactivar textarea custom
  $('input[name="mensaje-tipo"]').on('change', function() {
    const isCustom = $(this).val() === 'custom';
    $('#wi-mensaje-custom').prop('disabled', !isCustom);
    if (isCustom) $('#wi-mensaje-custom').focus();
  });
  
  // Contador de caracteres
  $('#wi-mensaje-custom').on('input', function() {
    const len = $(this).val().length;
    $(this).siblings('.char-count').text(`${len} / 500 caracteres`);
  });
  
  // Estilo activo en opciones
  $('.mensaje-option').on('click', function() {
    $('.mensaje-option').css('border-color', 'var(--bdr)');
    $(this).css('border-color', 'var(--mco)');
  });
  
  // Submit del formulario
  $('#wimodal-form-biwin').on('submit', function(e) {
    e.preventDefault();
    
    const de = $('#wi-de').val().trim();
    const para = $('#wi-para').val().trim();
    const tipoMensaje = $('input[name="mensaje-tipo"]:checked');
    const mensajeTipo = tipoMensaje.val();
    const mensajeTexto = mensajeTipo === 'custom' ? $('#wi-mensaje-custom').val().trim() : tipoMensaje;
    const audioUrl = $('#wi-audio').val().trim();
    
    // Validaciones
    if (de.length < 2) return Notificacion('El nombre "De" debe tener al menos 2 caracteres', 'error');
    if (para.length < 2) return Notificacion('El nombre "Para" debe tener al menos 2 caracteres', 'error');
    if (mensajeTipo === 'custom' && mensajeTexto.length < 10) return Notificacion('El mensaje personalizado debe tener al menos 10 caracteres', 'error');
    
    // Generar URL
    const link = generarLink(fest, de, para, mensajeTexto, audioUrl);
    
    // Mostrar resultado
    $('#link-generado').val(link);
    $('#resultado-link').slideDown(300);
    
    Mensaje('¡Link generado exitosamente! 🎉');
  });
  
  // Copiar al portapapeles
  $(document).on('click', '#btn-copiar', function() {
    const link = $('#link-generado').val();
    navigator.clipboard.writeText(link).then(() => {
      Mensaje('¡Link copiado al portapapeles! 📋');
      $(this).html('<i class="fa-solid fa-check"></i> Copiado').prop('disabled', true);
      setTimeout(() => {
        $(this).html('<i class="fa-solid fa-copy"></i> Copiar').prop('disabled', false);
      }, 2000);
    }).catch(() => {
      Notificacion('Error al copiar', 'error');
    });
  });
  
  // Compartir en redes
  $(document).on('click', '.btn-compartir', function() {
    const red = $(this).data('red');
    const link = $('#link-generado').val();
    const texto = `${fest.emoji} ¡Te envío un mensaje especial! ${fest.nombre}`;
    
    let url;
    if (red === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(texto + '\n' + link)}`;
    } else if (red === 'facebook') {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
  });
}

// =============================================
// GENERAR LINK PERSONALIZADO
// =============================================
function generarLink(fest, de, para, mensaje, audio) {
  const base = window.location.origin + window.location.pathname;
  const params = new URLSearchParams();
  
  params.set('fest', fest.nombreId);
  params.set('de', de);
  params.set('para', para);
  
  // Si es mensaje predefinido, solo pasar el ID
  if (['amor', 'amistad', 'especial', 'gratitud', 'familia', 'deseos'].includes(mensaje)) {
    params.set('msg', mensaje);
  } else {
    // Mensaje custom completo
    params.set('msg', 'custom');
    params.set('txt', mensaje);
  }
  
  if (audio) params.set('audio', audio);
  
  return `${base}?${params.toString()}`;
}

// =============================================
// EVENTO CLICK EN BOTONES .biwin
// =============================================
$(document).on('click', '.btn_pers', function() {
  const $card = $(this).closest('.fest_card');
  const festId = $card.data('id');
  const festNombreId = $card.data('fest');
  
  // Si tenemos el ID de Firestore, buscar en cache
  if (window.festividadesGlobal) {
    const fest = window.festividadesGlobal.find(f => f.id === festId || f.nombreId === festNombreId);
    if (fest) {
      abrirBiwin(fest);
    } else {
      Notificacion('Festividad no encontrada', 'error');
    }
  } else {
    // Fallback: crear objeto mínimo desde el DOM
    const fest = {
      nombreId: festNombreId,
      nombre: $card.find('.card_tit').text(),
      emoji: $card.find('.card_ico').text(),
      audioUrl: ''
    };
    abrirBiwin(fest);
  }
});