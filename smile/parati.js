import $ from 'jquery';
import { db } from '../firebase/init.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getls, savels } from './widev.js';

// =============================================
// CONTENIDO PARA TI (ULTRA COMPACTO)
// =============================================
export async function paratiContenido(params) {
  const alias = params.get('fest');
  const de = params.get('de');
  const para = params.get('para');
  const msgId = params.get('msg');
  const msgCustom = params.get('txt');
  
  if (!alias || !de || !para || !msgId) return window.location.href = '/';
  
  try {
    // Cache first, Firebase second
    const cache = getls('wisfesti');
    let fest = cache?.find(f => f.alias === alias || f.nombreId === alias);
    
    if (!fest) {
      const snap = await getDocs(query(collection(db, 'festividades'), where('alias', '==', alias)));
      if (!snap.empty) {
        fest = { id: snap.docs[0].id, ...snap.docs[0].data() };
        savels('wisfesti', [...(cache || []), fest], 24);
      }
    }
    
    if (!fest) return window.location.href = '/';
    
    const msg = msgId === 'custom' && msgCustom ? msgCustom : fest.mensajes?.[msgId] || fest.descripcion;
    
    const plantilla = await import(`./parati/${fest.plantilla || 'default'}.js`);
    $('.app').html(plantilla.default(fest, de, para, msg, fest.audioUrl));
  } catch (e) {
    console.error('Error parati:', e);
    window.location.href = '/';
  }
}