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

// export let wiUsuario = null;

const param = new URLSearchParams(window.location.search);
if (param.toString()) {
  paratiContenido(param);
} else {
  onAuthStateChanged(auth, async user => {
    if (!user) return publicoContenido();
    try {
      const wi = getls('wiSmile');
      if (wi) { personalContenido(wi); return; }

      const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
      const widatos = busq.docs[0]?.data() || {};
      savels('wiSmile', widatos, 450); personalContenido(widatos);
    } catch (e){console.error(e);}
  });

  $(document).on('click', '.bt_salir', async () => {
    await signOut(auth); window.location.href = '/';
    try { localStorage.clear(); } catch (_) { Object.keys(localStorage).forEach(k => localStorage.removeItem(k)); }
  });
}

