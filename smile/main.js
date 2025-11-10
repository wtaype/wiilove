import $ from 'jquery';
import './wiauth.js';
import { footer } from './foo.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { wiTema, Mensaje, savels, getls } from './widev.js';
import { publicoContenido } from './publico.js';
import { personalContenido } from './personal.js';
import { paratiContenido } from './parati.js';

// === VARIABLE GLOBAL ===
export let wiUsuario = null;

// === VERIFICAR URL PARAMS ===
const params = new URLSearchParams(window.location.search);
const parati = params.get('parati');

if (parati) {
  // Mostrar pantalla personalizada
  paratiContenido(parati);
} else {
  // === AUTH NORMAL ===
  onAuthStateChanged(auth, async user => {
    if (!user) return publicoContenido();
    wiUsuario = user;
    try {
      const wi = getls('wiSmile');
      if (wi) return personalContenido(wi), wiTema(db, wiUsuario);

      const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
      const widt = busq.docs[0].data();
      savels('wiSmile', widt, 450); personalContenido(widt); wiTema(db, wiUsuario);

    } catch (e) {console.error(e);}
  });

  // === CERRAR SESIÓN ===
  $(document).on('click', '.bt_salir', async () => {
    await signOut(auth); window.location.href = '/';
    try { localStorage.clear(); } catch (_) { Object.keys(localStorage).forEach(k => localStorage.removeItem(k)); }
  });
}