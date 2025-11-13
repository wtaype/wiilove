import $ from 'jquery';
import { db } from '../firebase/init.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getls, savels } from './widev.js';

// =============================================
// CONTENIDO PARA TI (ULTRA COMPACTO)
// =============================================
export async function paratiContenido(params) {
  // Detectar URL corta: ?primavera o /?primavera
  let alias = params.get('fest') || window.location.search.replace('?', '').split('&')[0];
  
  // Si no hay parámetros normales, usar valores por defecto
  const de = params.get('de') || 'Amigos';
  const para = params.get('para') || 'Amiga';
  const msgId = params.get('msg') || 'main';
  const msgCustom = params.get('txt');
  
  // Validar que al menos tengamos alias
  if (!alias || alias.includes('=')) return window.location.href = '/';
  
  try {
    // Cache first, Firebase second
    const cache = getls('wisfesti');
    let fest = cache?.find(f => f.plantilla === alias);
    
    if (!fest) {
      const snap = await getDocs(query(collection(db, 'festividades'), where('plantilla', '==', alias)));
      if (!snap.empty) {
        fest = { id: snap.docs[0].id, ...snap.docs[0].data() };
        savels('wisfesti', [...(cache || []), fest], 24);
      }
    }
    
    if (!fest) return window.location.href = '/';
    
    // Buscar mensaje: custom > mensajes[msgId] > mensajes.main > descripcion
    const msg = msgId === 'custom' && msgCustom 
      ? msgCustom 
      : fest.mensajes?.[msgId] || fest.mensajes?.main;
    
    const plantilla = await import(`./parati/${fest.plantilla || 'default'}.js`);
    $('.app').html(plantilla.default(fest, de, para, msg, fest.audioUrl));
  } catch (e) {
    console.error('Error parati:', e);
    window.location.href = '/';
  }
}