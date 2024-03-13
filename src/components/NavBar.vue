<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link
          class="navbar-brand ms-md-5 fw-bold text-wrap text-center"
          to="/home"
        >
          N&uacute;meros Pseudo-Aleatorios
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse text-center ms-md-4"
          id="navbarToggler"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-md-4">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">
                Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/algorithms">
                Algoritmos
              </router-link>
            </li>
          </ul>
        </div>
        <div class="text-white">
          <i class="bi bi-shuffle me-2"></i>
          <i class="bi bi-0-square"></i>
          <i class="bi bi-1-square"></i>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.nav-link:hover {
  background-color: rgb(100, 160, 240);
  transition: 0.5s;
}

.bi {
  font-size: 1.5em;
}
</style>
