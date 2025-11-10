// import $ from 'jquery';
// import { wiAuth } from './wiauth.js'; //Para autenticación login, registro y Restablecer
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { auth, db } from '../firebase/init.js';
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { getFirestore, doc, setDoc, getDoc, getDocs, deleteDoc, onSnapshot, collection, query, where, writeBatch, serverTimestamp, limit} from "firebase/firestore";

// import { wiTema, Capi, Mensaje, Notificacion, savels, getls, removels, accederRol, gosaves, getsaves, adtm, infoo} from './widev.js';

// // 🔐 GESTIÓN DE AUTENTICACIÓN EN DASHBOARD
// onAuthStateChanged(auth, async user => {
//   if(!user) return window.location.href = '/'; // Seguridad default 
//   try{
//     const wi = getls('wiSmile');
//     if(wi) return smileContenido(wi); // Cache primero 

//     const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
//     const widt = busq.docs[0].data(); savels('wiSmile', widt, 450); smileContenido(widt); // Desde Online 
//   }catch(e){console.error(e)}
// });
// $(document).on('click', '.bt_salir', async () => {
//   await signOut(auth); window.location.href = '/';   // Cierra la sesión + Envia al inicio 
//   try{localStorage.clear();}catch(_){Object.keys(localStorage).forEach(k=>localStorage.removeItem(k));} //Limpieza de localStorage
// });
// $(document).on('click','.bt_cargar',()=>{
//   const pattern=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+)$/;
//   Object.keys(localStorage).filter(k=>pattern.test(k)).forEach(k=>localStorage.removeItem(k));
//   Mensaje('Actualizado'); setTimeout(()=>location.reload(),800);
// }); // Actualizar la parte de imagen 


// // DIOS SIEMPRE ES BUENO Y YO AMO A DIOS [START]
// function smileContenido(wi){
//   console.log(wi.nombre);
//   Mensaje('Bienvenido ' + wi.nombre + '!');
// // HTML CONTENIDO [Start] 
//   $('.app').html(`
//     <h1>Hola mundo </h1>

//   <footer class='foo hwb txc'>
//   <p>Creado con<i class="fa fa-heart"></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class="wty"></span><span class="abw tm11042025" id="101542394703517594">| Acerca del app | Actualizado</span><span class="wtu"></span></p>
//   </footer>
    
// `); // HTML CONTENIDO [End] 
  