import $ from 'jquery';
import { db } from '../firebase/init.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getls, savels } from './widev.js';

export async function paratiContenido(params) {
  let alias = params.get('fest') || window.location.search.replace('?', '').split('&')[0];
  
  const de = params.get('de') || 'Amigos';
  const para = params.get('para') || 'Amiga';
  const msgId = params.get('msg') || 'main';
  const audioId = params.get('audio');
  const msgCustom = params.get('txt');
  
  if (!alias || alias.includes('=')) return window.location.href = '/';
  
  try {
    const cache = getls('wisfesti');
    let fest = cache?.find(f => f.plantilla === alias);
    
    if (!fest) {
      const snap = await getDocs(query(collection(db, 'festividades'), where('plantilla', '==', alias)));
      fest = snap.empty ? null : { id: snap.docs[0].id, ...snap.docs[0].data() };
      if (fest) savels('wisfesti', [...(cache || []), fest], 24);
    }
    
    if (!fest) return window.location.href = '/';
    
    // Mensaje
    const msg = msgCustom || fest.mensajes?.[msgId] || fest.mensajes?.main || fest.descripcion;
    
    // Audio: custom > musica[audioId] > primer elemento musica > audioUrl
    const audio = audioId && fest.musica?.[audioId] 
      ? fest.musica[audioId]
      : fest.musica ? Object.values(fest.musica)[0] : fest.audioUrl || '';
    
    const plantilla = await import(`./parati/${fest.plantilla || 'default'}.js`);
    $('.app').html(plantilla.default(fest, de, para, msg, audio));
  } catch (e) {
    console.error('Error parati:', e);
    window.location.href = '/';
  }
}