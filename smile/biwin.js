import $ from 'jquery';
import { abrirModal } from './wimodal.js';
import { Mensaje, Notificacion, savels, getls } from './widev.js';

const EMO = {amor:'💕', amistad:'🤝', especial:'✨', gratitud:'🙏', familia:'👨‍👩‍👧‍👦', deseos:'🎉', main:'💌'};
const wc = s => (s||'').trim().split(/\s+/).filter(Boolean).length;

export function abrirBiwin(fest) {
  window.festActual = fest;
  const saved = getls('biwin_draft') || {};
  const msgs = Object.entries(fest.mensajes||{}).filter(([k])=>k!=='main')
    .map(([id,txt],i)=>`
      <label class="msg_card ${i?'':'active'}">
        <input type="radio" name="msg_tipo" value="${id}" ${i?'' :'checked'}>
        <div class="msg_card_ico">${EMO[id]||'💬'}</div>
        <div class="msg_card_txt"><strong>${id}</strong><p class="m_txt">${txt}</p></div>
      </label>`).join('');
  
  const html = `
    <div class="biwin_cont">
      <form id="biwin">
        <div class="form_gr">
          <label class="form_lab"><i class="fas fa-comment-dots"></i> Mensaje</label>
          <div class="msg_grid">
            ${msgs || ''}
            <label class="msg_card">
              <input type="radio" name="msg_tipo" value="custom">
              <div class="msg_card_ico">✏️</div>
              <div class="msg_card_txt"><strong>Personalizado</strong></div>
            </label>
          </div>
          <div id="custom_wrap" style="display:none;margin-top:12px">
            <div id="msg_custom" contenteditable="true" class="msg_custom" data-ph="Escribe tu mensaje... (máx. 180 palabras)"></div>
            <small id="cnt">0 / 180 palabras</small>
          </div>
        </div>

        <div class="form_row">
          <div class="form_gr"><label class="form_lab"><i class="fas fa-user"></i> De</label>
            <input id="inp_de" type="text" minlength="2" maxlength="50" placeholder="Tu nombre" value="${saved.de||''}">
          </div>
          <div class="form_gr"><label class="form_lab"><i class="fas fa-heart"></i> Para</label>
            <input id="inp_para" type="text" minlength="2" maxlength="50" placeholder="Nombre especial" value="${saved.para||''}">
          </div>
        </div>

        <div class="form_gr">
          <label class="form_lab"><i class="fas fa-link"></i> Link</label>
          <div class="link_cont">
            <input id="link_gen" type="text" readonly placeholder="Completa los campos para generar el link...">
            <button type="button" id="btn_ver" class="btn_ico" disabled><i class="fas fa-external-link-alt"></i></button>
          </div>
        </div>

        <div class="share_cont">
          <button type="button" id="btn_ws" class="btn_share btn_ws" disabled><i class="fab fa-whatsapp"></i> WhatsApp</button>
          <button type="button" id="btn_fb" class="btn_share btn_fb" disabled><i class="fab fa-facebook-f"></i> Facebook</button>
          <button type="button" id="btn_cp" class="btn_share btn_copy" disabled><i class="fas fa-copy"></i> Copiar</button>
        </div>
      </form>
      <div class="biwin_footer">Power by <a href="https://github.com/wilderchris" target="_blank">@Wilder</a></div>
    </div>
  `;

  abrirModal({ titulo:`${fest.emoji} Personalizar ${fest.nombre}`, contenido:html, icono:'fa-magic', botones:[], ancho:'88vw', alto:'90vh' });
  bind();
  restore(saved);
  update();
}

function bind(){
  $(document).off('change.biwin click.biwin keyup.biwin input.biwin');

  $(document).on('change.biwin','input[name="msg_tipo"]',e=>{
    $('.msg_card').removeClass('active'); $(e.target).closest('.msg_card').addClass('active');
    const isC = e.target.value==='custom';
    $('#custom_wrap').toggle(isC);
    if (isC) $('#msg_custom').focus(); else $('#msg_custom').text(''), $('#cnt').text('0 / 180 palabras');
    update();
  });

  $(document).on('input.biwin','#msg_custom',e=>{
    let t = $(e.currentTarget).text().trim();
    const words = t.split(/\s+/).filter(Boolean);
    if (words.length>180){ t = words.slice(0,180).join(' '); $(e.currentTarget).text(t); placeCaretEnd(e.currentTarget); }
    $('#cnt').text(`${wc(t)} / 180 palabras`);
    update();
  });

  $(document).on('keyup.biwin input.biwin','#inp_de,#inp_para',update);

  $(document).on('click.biwin','#btn_ver',()=>{
    const link = $('#link_gen').val(); if (!ok(link)) return;
    window.open(link,'_blank'); Mensaje('Abriendo...');
  });

  $(document).on('click.biwin','#btn_ws',()=>{
    const link = $('#link_gen').val(); if (!ok(link)) return;
    const f = window.festActual||{}, txt = `${f.emoji||''} ${f.nombre||'Mensaje especial'}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(txt+'\n\n'+link)}`,'_blank');
  });

  $(document).on('click.biwin','#btn_fb',()=>{
    const link = $('#link_gen').val(); if (!ok(link)) return;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,'_blank');
  });

  $(document).on('click.biwin','#btn_cp',()=>{
    const link = $('#link_gen').val(); if (!ok(link)) return;
    navigator.clipboard.writeText(link).then(()=>Mensaje('¡Copiado!')).catch(()=>Notificacion('No se pudo copiar','error'));
  });
}

function update(){
  const de = $('#inp_de').val()?.trim()||'', para = $('#inp_para').val()?.trim()||'';
  const tipo = $('input[name="msg_tipo"]:checked').val()||'';
  const isC = tipo==='custom', txt = isC ? $('#msg_custom').text().trim() : tipo;
  const valid = de.length>=2 && para.length>=2 && (!isC || wc(txt)>=3);
  if (!valid){
    $('#link_gen').val('Completa los campos para generar el link...'); toggleBtns(true); return;
  }
  const fest = window.festActual||{}, base = location.origin+location.pathname, alias = fest.alias||fest.nombreId||'';
  const p = new URLSearchParams({de,para,msg:isC?'custom':txt}); if (isC) p.set('txt', txt);
  const link = `${base}?${alias}&${p.toString()}`;
  $('#link_gen').val(link); toggleBtns(false);
  savels('biwin_draft',{de,para,msgTipo:tipo,msgTexto:isC?txt:'',audioUrl:''},168);
}

function toggleBtns(dis){ $('#btn_ver,#btn_ws,#btn_fb,#btn_cp').prop('disabled',dis); }
function ok(link){ if (!link || link.includes('Completa')){ Notificacion('Completa los campos','warning'); return false;} return true; }
function placeCaretEnd(el){ const r=document.createRange(); r.selectNodeContents(el); r.collapse(false); const s=window.getSelection(); s.removeAllRanges(); s.addRange(r); }
function restore(s){ if(s.de)$('#inp_de').val(s.de); if(s.para)$('#inp_para').val(s.para); if(s.msgTipo==='custom'&&s.msgTexto){ $('input[name="msg_tipo"][value="custom"]').prop('checked',true).trigger('change'); $('#msg_custom').text(s.msgTexto); $('#cnt').text(`${wc(s.msgTexto)} / 180 palabras`);} }

// Abrir desde tarjetas (compacto)
$(document).on('click','.btn_pers',function(){
  const $c=$(this).closest('.fest_card'); const id=$c.data('id'), nid=$c.data('fest');
  const f = (window.festividadesGlobal||[]).find(x=>x.id===id||x.nombreId===nid) || {
    nombreId:nid, alias:nid, nombre:$c.find('.card_tit').text(), emoji:$c.find('.card_ico').text(),
    fechaTexto:$c.find('.card_date').text(), mensajes:{}, musica:{}
  };
  abrirBiwin(f);
});