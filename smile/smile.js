import $ from 'jquery';
import { footer } from './foo.js';
import { festividades } from './smilenew.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDocs, collection, query, where } from "firebase/firestore";
import { wiTema, Mensaje, savels, getls } from './widev.js';

export let wi = null;//datos smile 
onAuthStateChanged(auth, async user => {
  if (!user) return window.location.href = '/';;
  try {
    wi = getls('wiSmile');
    if (wi) return smileContenido(wi);
    const datos = (await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)))).docs[0]?.data() || {};
    savels('wiSmile', datos, 450); smileContenido(datos);
  } catch(e){console.error(e)}
});

$(document).on('click', '.bt_salir', async () => {
  await signOut(auth); window.location.href = '/'; localStorage.clear();
});

async function smileContenido(wi){
  Mensaje('Bienvenido ' + wi.nombre + '!');
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

    <main class="miweb"></main>

    <div id="notifications-container"></div>
    ${footer()}
  `);
  await festividades();


}