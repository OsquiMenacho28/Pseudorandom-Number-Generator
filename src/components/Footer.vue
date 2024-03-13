<template>
  <footer class="bg-body-tertiary text-center">
    <div class="container p-4">
      <section class="mb-4">
        <a
          data-mdb-ripple-init
          class="btn text-white rounded-circle m-1"
          style="background-color: #3b5998"
          href="https://www.facebook.com/oscar.menacho.3"
          role="button"
          target="_blank"
          ><i class="bi bi-facebook"></i
        ></a>
        <a
          data-mdb-ripple-init
          class="btn text-white rounded-circle m-1"
          style="background-color: #ac2bac"
          href="https://www.instagram.com/osqui_menacho/"
          role="button"
          target="_blank"
          ><i class="bi bi-instagram"></i
        ></a>
        <a
          data-mdb-ripple-init
          class="btn text-white rounded-circle m-1"
          style="background-color: #0082ca"
          href="https://www.linkedin.com/in/oscar-alfredo-menacho-silva-a39bba283/"
          role="button"
          target="_blank"
          ><i class="bi bi-linkedin"></i
        ></a>
        <a
          data-mdb-ripple-init
          class="btn text-white rounded-circle m-1"
          style="background-color: #333333"
          href="https://github.com/OsquiMenacho28"
          role="button"
          target="_blank"
          ><i class="bi bi-github"></i
        ></a>
      </section>

      <section class="row">
        <div class="col-md-8 mb-2">
          <p>
            ¡Descubre la magia de los algoritmos en mi página web especializada!
            Se resuelven problemas de generación de números pseudoaleatorios
            mediante algoritmos no congruenciales como cuadrados medios y
            productos medios, y congruenciales como lineal y multiplicativo.
            Ingresa tus valores y deja que mi plataforma te proporcione
            resultados precisos. ¡Explora la ciencia detrás de la aleatoriedad
            con facilidad y eficacia!
          </p>
        </div>
        <div class="col-md-3 mb-md-0">
          <h5 class="text-uppercase fw-bold">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <router-link class="link" to="/home"> Inicio </router-link>
            </li>
            <li>
              <router-link class="link" to="/algorithms">
                Algoritmos
              </router-link>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <div class="copyright text-center p-3">
      &copy; 2024 Copyright:
      <a
        class="link fw-bold text-decoration-none"
        href="https://github.com/OsquiMenacho28"
        target="_blank"
      >
        Oscar Alfredo Menacho Silva
      </a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  color: black;
}

.link:hover {
  color: cornflowerblue;
}

.row {
  font-family: "Montserrat", serif;
}

.copyright {
  background-color: rgba(0, 0, 0, 0.05);
  font-family: "Montserrat", serif;
}
</style>
