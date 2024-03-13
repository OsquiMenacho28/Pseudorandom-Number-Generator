<template>
  <div class="container">
    <h1 class="my-4">Algoritmos</h1>
    <p class="mb-4">Elije el algoritmo que desees desarrollar:</p>
    <div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
      <div class="col">
        <div class="card border-success text-center">
          <div class="card-header">Algoritmo de Cuadrados Medios</div>
          <img
            src="../assets/card_images/first_algorithm_equation.png"
            class="card-img-top w-50 mx-auto"
            alt="Algoritmo de Cuadrados Medios"
          />
          <div class="card-body">
            <h5 class="card-title">Algoritmo de Cuadrados Medios</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              Método No Congruencial
            </h6>
            <p class="card-text">
              Generador de números pseudoaleatorios que utiliza el cuadrado de
              números iniciales para obtener una secuencia.
            </p>
            <router-link
              to="/algorithms/Squares_Midpoint_Algorithm"
              class="btn btn-primary"
            >
              Comenzar
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-success text-center">
          <div class="card-header">Algoritmo de Productos Medios</div>
          <img
            src="../assets/card_images/second_algorithm_equation.png"
            class="card-img-top w-50 mx-auto py-3"
            alt="Algoritmo de Productos Medios"
          />
          <div class="card-body">
            <h5 class="card-title">Algoritmo de Productos Medios</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              Método No Congruencial
            </h6>
            <p class="card-text">
              Generador de números pseudoaleatorios que utiliza el producto de
              dos números iniciales para generar una secuencia.
            </p>
            <router-link
              to="/algorithms/Middle_Products_Algorithm"
              class="btn btn-primary"
            >
              Comenzar
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-warning text-center">
          <div class="card-header">Algoritmo Lineal</div>
          <img
            src="../assets/card_images/third_algorithm_equation.png"
            class="card-img-top w-75 mx-auto py-2"
            alt="Algoritmo Lineal"
          />
          <div class="card-body">
            <h5 class="card-title">Algoritmo Lineal</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              Método Congruencial
            </h6>
            <p class="card-text">
              Generador de números pseudoaleatorios que emplea una fórmula
              lineal recursiva basada en congruencias modulares.
            </p>
            <router-link
              to="/algorithms/Linear_Algorithm"
              class="btn btn-primary"
            >
              Comenzar
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-warning text-center">
          <div class="card-header">Algoritmo Multiplicativo</div>
          <img
            src="../assets/card_images/fourth_algorithm_equation.png"
            class="card-img-top w-75 mx-auto"
            alt="Algoritmo Multiplicativo"
          />
          <div class="card-body">
            <h5 class="card-title">Algoritmo Multiplicativo</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              Método Congruencial
            </h6>
            <p class="card-text">
              Variante del método congruencial lineal, utiliza una fórmula
              multiplicativa para generar secuencias pseudoaleatorias.
            </p>
            <router-link
              to="/algorithms/Multiplicative_Algorithm"
              class="btn btn-primary"
            >
              Comenzar
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  font-family: "Montserrat", serif;
}
</style>
