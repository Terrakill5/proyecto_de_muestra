<template>
  <header>
    <!-- Parte negra sobre el encabezado -->
    <nav id="top-bar" class="bienvenida">
      <div class="bienvenida-pad">
        <h4 class="bienvenida_enunciado">Bienvenidos a Games Center</h4>
        <div class="float-end inline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-credit-card-2-front-fill padding-bajo"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
            />
          </svg>
          <a href="#">Medios de pago </a>
          <a href="#">| </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-question-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
            />
          </svg>
          <a href="#">Preguntas frecuentes</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
            />
          </svg>
        </div>
      </div>
    </nav>
    <!-- Parte donde esta la imagen  -->
    <section class="encabezado-principal d-flex">
      <div>
        <img
          src="../../img/logo_gamecenter.png"
          alt="Imagen principal de la pagina"
          width="260"
          height="70"
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Buscar Videojuegos, Tarjetas y Mucho Más...!"
        />
        <boton-naranja
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 14"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            /></svg
        ></boton-naranja>
      </div>
      <boton-naranja to="#">Acceder</boton-naranja>
      <boton-naranja to="#">Carrito</boton-naranja>
    </section>
    <!-- Parte donde esta el dropdown -->
    <nav class="drop_down d-flex">
      <div class="dropdown">
        <button class="btn btn-dark botones">Inicio</button>
        <button
          class="btn btn-dark dropdown-toggle botones"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Playstation 5
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <button
          class="btn btn-dark dropdown-toggle botones"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Playstation 4
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another asdasdaction</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <button
          class="btn btn-dark dropdown-toggle botones"
          type="button"
          id="dropdownMenuButton3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Playstation 3
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <button
          class="btn btn-dark dropdown-toggle botones"
          type="button"
          id="dropdownMenuButton4"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Fornite
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <button
          class="btn btn-dark dropdown-toggle botones"
          type="button"
          id="dropdownMenuButton5"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Tarjetas
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton5">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <button
          class="btn btn-dark dropdown-toggle botones"
          type="button"
          id="dropdownMenuButton6"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Recargas
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton6">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <button class="btn btn-dark botones">Ofertas Semanales</button>
        <button class="btn btn-dark botones">Opiniones</button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import BotonNaranja from "./ui/BotonNaranja.vue";
</script>

<style scoped>

  header {
    width: 100%;
  }
.bienvenida {
  background-color: black;
}

.bienvenida-pad {
  padding: 2px 30vh;
}
.bienvenida_enunciado {
  margin: 0;
  text-transform: uppercase;
  display: inline-block;
  font-size: 0.8rem;
}

svg {
  padding-right: 2px;
}

svg:hover {
  color: rgb(133, 133, 133);
}
a {
  text-decoration: none;
  color: rgb(165, 162, 162);
  text-transform: uppercase;
  font-size: 0.9rem;
}
nav {
  color: aliceblue;
}

.inline {
  display: inline-block;
}

.padding-derecho-bajo {
  padding-right: 2px;
}

.encabezado-principal {
  justify-content: space-between;
  align-items: center;
  padding: 10px 30vh;
}

.encabezado-principal input {
  width: 500px;
}

.botones {
  background-color: black;
}

.drop_down {
  background-color: black;
  justify-content: center;
}
</style>
