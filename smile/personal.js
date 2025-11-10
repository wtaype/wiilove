import $ from 'jquery';
import { footer } from './foo.js';
import { Mensaje } from './widev.js';

// === VISTA PERSONAL (AUTENTICADO) ===
export function personalContenido(wi) {
  Mensaje(`Bienvenido ${wi.nombre}!`);
  
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

    <main class="main-container miwp">
      <div class="welcome-panel">
        <h2><i class="fas fa-smile"></i> Hola ${wi.nombre}!</h2>
      </div>

      <section class="stats-section">
        <div class="stat-card">
          <i class="fas fa-trophy"></i>
          <h3>Mis Logros</h3>
          <p class="stat-value">0</p>
        </div>
      </section>
    </main>

    <div id="notifications-container"></div>
    ${footer()}
  `);
}