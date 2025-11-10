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

<main class="miweb miwp">
      <section class="fest_sec">
        <div class="sec_head">
          <h2 class="sec_tit">Elige tu Festividad</h2>
          <p class="sec_sub">Selecciona la ocasión especial y personaliza tu mensaje único</p>
        </div>

        <div class="fest_grid">
          <!-- Card 1: Flores Amarillas -->
          <div class="fest_card anim_up" data-fest="Girasol">
            <div class="card_head">
              <div class="card_ico">🌻</div>
              <div class="card_tag popular">Popular</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Flores Amarillas</h3>
              <p class="card_date">21 de Septiembre</p>
              <p class="card_desc">
                Celebra la llegada de la primavera con hermosos mensajes de girasoles y flores amarillas.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-sun"></i>
                  Primaveral
                </span>
                <span class="tag_item">
                  <i class="fas fa-heart"></i>
                  Romántico
                </span>
                <span class="tag_item">
                  <i class="fas fa-music"></i>
                  Con Audio
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>

          <!-- Card 2: Cumpleaños -->
          <div class="fest_card anim_up" data-fest="cumple">
            <div class="card_head">
              <div class="card_ico">🎂</div>
              <div class="card_tag especial">Especial</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Cumpleaños</h3>
              <p class="card_date">Todo el año</p>
              <p class="card_desc">
                Felicita de manera especial con tarjetas personalizadas para cumpleaños únicos.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-birthday-cake"></i>
                  Celebración
                </span>
                <span class="tag_item">
                  <i class="fas fa-gift"></i>
                  Sorpresa
                </span>
                <span class="tag_item">
                  <i class="fas fa-confetti"></i>
                  Festivo
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>

          <!-- Card 3: Día del Padre -->
          <div class="fest_card anim_up" data-fest="padre">
            <div class="card_head">
              <div class="card_ico">👨‍👧‍👦</div>
              <div class="card_tag amor">Familia</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Día del Padre</h3>
              <p class="card_date">Tercer domingo de Junio</p>
              <p class="card_desc">
                Honra a papá con mensajes emotivos y llenos de cariño en su día especial.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-male"></i>
                  Paternal
                </span>
                <span class="tag_item">
                  <i class="fas fa-heart"></i>
                  Emotivo
                </span>
                <span class="tag_item">
                  <i class="fas fa-family"></i>
                  Familiar
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>

          <!-- Card 4: Día de la Madre -->
          <div class="fest_card anim_up" data-fest="madre">
            <div class="card_head">
              <div class="card_ico">👩‍👧‍👦</div>
              <div class="card_tag amor">Amor</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Día de la Madre</h3>
              <p class="card_date">Segundo domingo de Mayo</p>
              <p class="card_desc">
                Dedica palabras hermosas a mamá con tarjetas llenas de amor y gratitud.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-female"></i>
                  Maternal
                </span>
                <span class="tag_item">
                  <i class="fas fa-rose"></i>
                  Tierno
                </span>
                <span class="tag_item">
                  <i class="fas fa-heart"></i>
                  Amoroso
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>

          <!-- Card 5: Navidad -->
          <div class="fest_card anim_up" data-fest="navidad">
            <div class="card_head">
              <div class="card_ico">🎄</div>
              <div class="card_tag festivo">Festivo</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Navidad</h3>
              <p class="card_date">25 de Diciembre</p>
              <p class="card_desc">
                Comparte la magia navideña con mensajes llenos de paz, amor y alegría.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-tree"></i>
                  Navideño
                </span>
                <span class="tag_item">
                  <i class="fas fa-snowflake"></i>
                  Invernal
                </span>
                <span class="tag_item">
                  <i class="fas fa-gift"></i>
                  Mágico
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>

          <!-- Card 6: Año Nuevo -->
          <div class="fest_card anim_up" data-fest="anio">
            <div class="card_head">
              <div class="card_ico">🎊</div>
              <div class="card_tag nuevo">Nuevo</div>
            </div>
            <div class="card_cont">
              <h3 class="card_tit">Año Nuevo</h3>
              <p class="card_date">1 de Enero</p>
              <p class="card_desc">
                Recibe el nuevo año con mensajes de esperanza, metas y nuevos comienzos.
              </p>
              <div class="card_tags">
                <span class="tag_item">
                  <i class="fas fa-calendar"></i>
                  Renovación
                </span>
                <span class="tag_item">
                  <i class="fas fa-star"></i>
                  Esperanza
                </span>
                <span class="tag_item">
                  <i class="fas fa-fireworks"></i>
                  Celebración
                </span>
              </div>
            </div>
            <div class="card_foot">
              <button class="btn_pers">
                <i class="fas fa-edit"></i>
                Personalizar Mensaje
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>


    <div id="notifications-container"></div>
    ${footer()}
  `);
}