<template>
  <div class="container-all">
    <div
      id="carouselCaptions"
      class="carousel slide carousel-fade all-carousel"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner mx-auto">
        <div class="carousel-item active">
          <img
            src="../assets/images/cover_photo.jpg"
            class="d-block w-100"
            alt="Generador de números pseudoaleatorios"
          />
          <div
            class="carousel-caption overflow-y-auto text-white d-md-block bg-black bg-opacity-50 align-content-center align-items-center"
          >
            <p class="px-3">Generador de N&uacute;meros Pseudo-Aleatorios</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/first_algorithm.png"
            class="d-block w-100"
            alt="Algoritmo de Cuadrados Medios"
          />
          <div
            class="carousel-caption overflow-y-auto text-white d-md-block bg-black bg-opacity-50"
          >
            <p class="px-3">
              Método No Congruencial - Algoritmo de Cuadrados Medios
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/second_algorithm.jpg"
            class="d-block w-100"
            alt="Algoritmo de Productos Medios"
          />
          <div
            class="carousel-caption overflow-y-auto text-white d-md-block bg-black bg-opacity-50"
          >
            <p class="px-3">
              Método No Congruencial - Algoritmo de Productos Medios
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/third_algorithm.JPG"
            class="d-block w-100"
            alt="Algoritmo Lineal"
          />
          <div
            class="carousel-caption overflow-y-auto text-white d-md-block bg-black bg-opacity-50"
          >
            <p class="carousel-text px-3">
              Método Congruencial - Algoritmo Lineal
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/fourth_algorithm.png"
            class="d-block w-100"
            alt="Algoritmo Multiplicativo"
          />
          <div
            class="carousel-caption overflow-y-auto text-white d-md-block bg-black bg-opacity-50"
          >
            <p class="px-3">Método Congruencial - Algoritmo Multiplicativo</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="page-text">
      <div class="my-3 mx-2 py-2 px-3 my-md-4 mx-md-5 py-md-3 px-md-5 border border-primary rounded-3">
        <h1>¿Que es un Algoritmo?</h1>
        <p>
          Un algoritmo es un conjunto finito de pasos o reglas definidas y
          ordenadas que describe cómo realizar una tarea o resolver un problema
          en particular. En otras palabras, es una secuencia de instrucciones
          lógicas y bien definidas que se aplican a un conjunto de datos o
          información para obtener un resultado deseado. <br />
          Los algoritmos son fundamentales en el campo de la informática y la
          programación, donde se utilizan para diseñar software y resolver
          problemas computacionales. También son utilizados en diversas
          disciplinas, como las matemáticas, la ingeniería, la inteligencia
          artificial, la criptografía y muchos otros campos. <br />
          Los algoritmos deben ser precisos, claros, y deben llevar a cabo sus
          tareas en un número finito de pasos. Además, un mismo problema puede
          tener varios algoritmos que lo resuelvan, y la eficiencia de un
          algoritmo puede evaluarse en términos de tiempo y espacio requeridos
          para llevar a cabo la tarea. <br />
          En pocas palabras, los algoritmos son instrucciones detalladas que
          describen cómo realizar una tarea específica o resolver un problema.
        </p>
      </div>
      <div class="my-3 mx-2 py-2 px-3 my-md-4 mx-md-5 py-md-3 px-md-5 border border-primary rounded-3">
        <h1>
          ¿Que es el Método No Congruencial - Algoritmo de Cuadrados Medios?
        </h1>
        <p>
          El método de cuadrados medios es un tipo de generador de números
          pseudoaleatorios utilizado para generar secuencias de números
          aparentemente aleatorios. Este método fue propuesto por George W.
          Brown en 1951 y popularizado por John von Neumann. También se conoce
          como el "Algoritmo de Cuadrados Medios". <br> A continuación, se explica
          cómo funciona el método de cuadrados medios: <br><br>
          <ul>
            <li><strong>Paso 1:</strong> Seleccionar una semilla (<math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mn>0</mn></msub></math>) con "D" dígitos tal que "D" sea mayor o igual a 2.</li>
            <li><strong>Paso 2:</strong> Sea <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>Y</mi><mi>i</mi></msub><mo>=</mo><msup><mrow><mo>(</mo><msub><mi>X</mi><mrow><mi>i</mi><mo>-</mo><mn>1</mn></mrow></msub><mo>)</mo></mrow><mn>2</mn></msup></math>
              y Sea <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mi>i</mi></msub></math> los "D" dígitos centrales de <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>Y</mi><mi>i</mi></msub></math>.</li>
            <li><strong>Paso 3:</strong> Sea <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>r</mi><mi>i</mi></msub><mo>=</mo><mfrac><msub><mi>X</mi><mi>i</mi></msub><msup><mn>10</mn><mi>D</mi></msup></mfrac><mo> </mo><mo>∀</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>n</mi></math>,
              siendo n = Cantidad de números aleatorios a generar.</li>
            <li><strong>Paso 4:</strong> Repetir el paso 2 hasta obtener los n números <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>r</mi><mn>i</mn></msub></math> deseados.</li>
          </ul>
          Es importante destacar que el método de cuadrados medios puede tener 
          limitaciones y no ser adecuado para todos los propósitos. Puede sufrir 
          de problemas como la falta de uniformidad en la distribución de los 
          números generados o la tendencia a caer en ciclos repetitivos si no se 
          selecciona la semilla adecuada.
        </p>
      </div>
      <div class="my-3 mx-2 py-2 px-3 my-md-4 mx-md-5 py-md-3 px-md-5 border border-primary rounded-3">
        <h1>
          ¿Que es el Método No Congruencial - Algoritmo de Productos Medios?
        </h1>
        <p>
          El Método de Productos Medios es un método para generar números pseudoaleatorios 
          que pertenece a la categoría de métodos no congruenciales. Fue propuesto por von 
          Neumann y Metropolis en 1947. Aunque no es tan utilizado como otros métodos más 
          modernos, puede ser útil para comprender los conceptos básicos de la generación 
          de números pseudoaleatorios. <br> A continuación, se describen los pasos del 
          algoritmo de Productos Medios: <br><br>
          <ul>
            <li><strong>Paso 1:</strong> Seleccionar dos semillas "<math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mn>0</mn></msub></math>" y "<math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mn>1</mn></msub></math>" con "D" dígitos tal que 
              <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>D</mi><msub><mi>X</mi><mn>0</mn></msub></msub><mo>=</mo><msub><mi>D</mi><msub><mi>X</mi><mn>1</mn></msub></msub></math> y <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mn>0</mn></msub></math> 
              y <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mn>1</mn></msub></math> pertenecen al conjunto de números enteros positivos, con "D" mayor o igual a 2.</li>
            <li><strong>Paso 2:</strong> Sea <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>Y</mi><mi>i</mi></msub><mo>=</mo><msub><mi>X</mi><mi>i</mi></msub><mo>×</mo><msub><mi>X</mi><mrow><mi>i</mi><mo>-</mo><mn>1</mn></mrow></msub></math>; 
              Sea <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mrow><mi>i</mi><mo>+</mo><mn>1</mn></mrow></msub></math> los "D" dígitos centrales de <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>Y</mi><mi>i</mi></msub></math>.</li>
            <li><strong>Paso 3:</strong> Sea <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>r</mi><mi>i</mi></msub><mo>=</mo><mfrac><msub><mi>X</mi><mrow><mi>i</mi><mo>+</mo><mn>1</mn></mrow></msub><msup><mn>10</mn><mi>D</mi></msup></mfrac><mo> </mo><mo>∀</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>n</mi></math>,
              siendo n = Cantidad de números aleatorios a generar.</li>
            <li><strong>Paso 4:</strong> Repetir el paso 2 hasta obtener los n números <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>r</mi><mn>i</mn></msub></math> deseados.</li>
          </ul>
          Es importante tener en cuenta que el Método de Productos Medios también puede 
          tener limitaciones y no ser tan eficiente o adecuado como otros métodos más 
          avanzados. Puede sufrir de problemas como la falta de uniformidad en la 
          distribución de los números generados y la sensibilidad a la elección de las semillas.
        </p>
      </div>
      <div class="my-3 mx-2 py-2 px-3 my-md-4 mx-md-5 py-md-3 px-md-5 border border-primary rounded-3">
        <h1>
          ¿Que es el Método Congruencial - Algoritmo Lineal?
        </h1>
        <p>
          El Método Congruencial Lineal (MCL) es un tipo de generador de números pseudoaleatorios 
          (GNP) ampliamente utilizado. Fue propuesto inicialmente por Derrick Henry Lehmer en 1951. 
          Este método pertenece a la categoría de métodos congruenciales, que generan secuencias 
          de números a través de operaciones de congruencia modular. <br> El algoritmo de MCL 
          sigue una fórmula recursiva para generar una secuencia de números pseudoaleatorios. <br>
          La fórmula general es: <br><br>
        </p>
        <div>
          <p class="text-center overflow-text"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><mo>(</mo><mi>a</mi><mo>×</mo><msub><mi>X</mi><mrow><mi>i</mi><mo>-</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>c</mi><mo>)</mo><mo> </mo><mi>M</mi><mi>O</mi><mi>D</mi><mo> </mo><mo>(</mo><mi>m</mi><mo>)</mo><mo> </mo><mo>∀</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>n</mi></math></p>
          Donde:
            <ul>
              <li>a = Constante multiplicativa.</li>
              <li>c = Constante aditiva.</li>
              <li>m = Modulo.</li>
              <li><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mn>0</mn></msub></math> = Semilla.</li>
            </ul>
          <i class="bi bi-arrow-up">
            Todo esto <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>></mo><mn>0</mn><mo>∧</mo><mo>∈</mo></math> Conjunto de números enteros positivos.
          </i>
        </div>
        <br>
        <p>
          A continuación, se describen los pasos del algoritmo lineal:
          <ul>
            <li><strong>Paso 1:</strong> Generar un número entero con la ecuación recursiva mostrada anteriormente.</li>
            <li><strong>Paso 2:</strong> <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>r</mi><mi>i</mi></msub><mo>=</mo><mfrac><msub><mi>X</mi><mi>i</mi></msub><mrow><mi>m</mi><mo>-</mo><mn>1</mn></mrow></mfrac><mo> </mo><mo>∀</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>n</mi></math>, 
              siendo n = Cantidad de números aleatorios a generar.</li>
            <li><strong>Paso 3:</strong> Regresar al paso 1 hasta generar los n números aleatorios deseados.</li>
          </ul>
          Si se desea lograr el máximo periodo (P) los parámetros deberían cumplir las siguientes condiciones:
          <ul>
            <li><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>m</mi><mo>=</mo><msup><mn>2</mn><mi>g</mi></msup></math></li>
            <li><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>=</mo><mn>1</mn><mo>+</mo><mn>4</mn><mi>K</mi></math> 
              tal que <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>K</mi><mo>∈</mo></math> Conjunto de números enteros positivos.</li>
            <li>c = Relativamente primo a m.</li>
            <li><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>g</mi><mo>∈</mo></math> Conjunto de números enteros positivos.</li>
            <i class="bi bi-arrow-down"></i>
            <li class="overflow-text"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo>=</mo><msup><mn>2</mn><mi>g</mi></msup><mo>→</mo><mi>ln</mi><mfenced><mi>P</mi></mfenced><mo>=</mo><mi>g</mi><mo>×</mo><mi>ln</mi><mfenced><mn>2</mn></mfenced><mo>→</mo><mi>g</mi><mo>=</mo><mfrac><mrow><mi>ln</mi><mfenced><mi>P</mi></mfenced></mrow><mrow><mi>ln</mi><mfenced><mn>2</mn></mfenced></mrow></mfrac></math></li>
          </ul>
          El valor inicial <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mn>0</mn></msub></math> 
          se conoce como la semilla del generador. La elección de la semilla afecta la calidad y la longitud del período de la secuencia generada. <br>
          Es importante tener en cuenta que, aunque los generadores congruenciales lineales son fáciles de implementar y computacionalmente eficientes, 
          tienen limitaciones. Pueden tener propiedades estadísticas insuficientes en comparación con generadores más avanzados, y algunos tienen períodos 
          cortos antes de que la secuencia se repita. <br> Para mejorar la calidad de las secuencias generadas, se utilizan constantes y semillas cuidadosamente 
          seleccionadas. También, se han desarrollado variantes más complejas de generadores congruenciales, como los generadores congruenciales cuadráticos 
          y los generadores congruenciales multiplicativos. Además, en aplicaciones críticas, se prefieren generadores más avanzados, como los basados en 
          técnicas criptográficas o en algoritmos más sofisticados.
        </p>
      </div>
      <div class="my-3 mx-2 py-2 px-3 my-md-4 mx-md-5 py-md-3 px-md-5 border border-primary rounded-3">
        <h1>
          ¿Que es el Método Congruencial - Algoritmo Multiplicativo?
        </h1>
        <p>
          El Método Congruencial Multiplicativo es un tipo de generador de números pseudoaleatorios 
          (GNP) que pertenece a la familia de los generadores congruenciales. Fue propuesto por Lewis, 
          Goodman y Miller en 1969. Este método es una variante del método congruencial lineal y utiliza 
          una fórmula recursiva para generar secuencias de números aparentemente aleatorios. <br> La fórmula 
          general del Método Congruencial Multiplicativo es: <br><br>
        </p>
        <div>
          <p class="text-center overflow-text"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><mo>(</mo><mi>a</mi><mo>×</mo><msub><mi>X</mi><mrow><mi>i</mi><mo>-</mo><mn>1</mn></mrow></msub><mo>)</mo><mo> </mo><mi>M</mi><mi>O</mi><mi>D</mi><mo> </mo><mo>(</mo><mi>m</mi><mo>)</mo><mo> </mo><mo>∀</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>n</mi></math></p>
          Donde:
            <ul>
              <li>a = Constante multiplicativa.</li>
              <li>m = Modulo.</li>
              <li><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mn>0</mn></msub></math> = Semilla.</li>
            </ul>
          <i class="bi bi-arrow-up">
            Todo esto <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>></mo><mn>0</mn><mo>∧</mo><mo>∈</mo></math> Conjunto de números enteros positivos.
          </i>
        </div>
        <br>
        <p>
          A continuación, se describen los pasos del algoritmo multiplicativo:
          <ul>
            <li><strong>Paso 1:</strong> Generar un número entero con la ecuación recursiva mostrada anteriormente.</li>
            <li><strong>Paso 2:</strong> <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>r</mi><mi>i</mi></msub><mo>=</mo><mfrac><msub><mi>X</mi><mi>i</mi></msub><mrow><mi>m</mi><mo>-</mo><mn>1</mn></mrow></mfrac><mo> </mo><mo>∀</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>n</mi></math>, 
              siendo n = Cantidad de números aleatorios a generar.</li>
            <li><strong>Paso 3:</strong> Regresar al paso 1 hasta generar los n números aleatorios deseados.</li>
          </ul>
          Para garantizar el máximo periodo (P) se sugiere:
          <ul>
            <li><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>m</mi><mo>=</mo><msup><mn>2</mn><mi>g</mi></msup></math></li>
            <li><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>=</mo><mn>3</mn><mo>+</mo><mn>8</mn><mi>K</mi></math> ó 
              <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>=</mo><mn>5</mn><mo>+</mo><mn>8</mn><mi>K</mi></math> 
              tal que <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>K</mi><mo>∈</mo></math> Conjunto de números enteros positivos.</li>
            <li><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mn>0</mn></msub></math> Debe ser impar.</li>
            <li><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>g</mi><mo>∈</mo></math> Conjunto de números enteros positivos.</li>
            <i class="bi bi-arrow-down"></i>
            <li class="overflow-text"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo>=</mo><msup><mn>2</mn><mrow><mi>g</mi><mo>-</mo><mn>2</mn></mrow></msup><mo>→</mo><mi>ln</mi><mfenced><mi>P</mi></mfenced><mo>=</mo><mi>g</mi><mo>-</mo><mn>2</mn><mo>×</mo><mi>ln</mi><mfenced><mn>2</mn></mfenced><mo>→</mo><mi>g</mi><mo>=</mo><mfrac><mrow><mi>ln</mi><mfenced><mi>P</mi></mfenced></mrow><mrow><mi>ln</mi><mfenced><mn>2</mn></mfenced></mrow></mfrac><mo>+</mo><mn>2</mn></math></li>
          </ul>
          La semilla inicial, <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mn>0</mn></msub></math>, 
          es un factor importante que afecta la calidad de la secuencia generada. A pesar de su simplicidad y eficiencia 
          computacional, los generadores congruenciales multiplicativos pueden tener limitaciones, como un período 
          relativamente corto y propiedades estadísticas que pueden no ser suficientes para aplicaciones críticas. 
          Por esta razón, en situaciones donde se requiere una mayor calidad en la generación de números pseudoaleatorios, 
          se pueden preferir generadores más avanzados y métodos que cumplen con estándares más estrictos, como los 
          utilizados en criptografía.
        </p>
      </div>
      <hr class="border-4 text-danger">
      <div
        class="author-text d-block d-md-flex my-3 mx-2 py-2 px-3 my-md-4 mx-md-5 py-md-3 px-md-5 border border-primary rounded-3"
      >
        <div>
          <img class="w-100" src="../assets/images/author_photo.jpeg" alt="Foto del autor">
          <p class="text-center pt-3 fw-light">Oscar Alfredo Menacho Silva</p>
          <p class="text-center mb-3 fw-light">Ingeniería de Sistemas</p>
        </div>
        <div class="ms-md-4">
          <h1>Sobre la Página Web</h1>
          <p>
            Mi página web es la plataforma definitiva para la resolución fácil y
            eficiente de algoritmos numéricos, especializándose en los algoritmos
            no congruenciales como Cuadrados Medios y Productos Medios, así como
            en los congruenciales Lineales y Multiplicativos. Esta página web ha
            sido diseñada pensando en la accesibilidad y la simplicidad,
            ofreciendo a los usuarios la capacidad de ingresar valores y recibir
            resultados precisos al instante.
            <br /><br />
            <strong>Características Clave:</strong><br /><br />
            <ul>
              <li><strong>Resolución Instantánea:</strong>
              Con mi página web, resolver algoritmos no congruenciales como
              Cuadrados Medios y Productos Medios, así como los congruenciales
              Lineales y Multiplicativos, es rápido y sencillo. Simplemente ingresa
              tus valores y obtén resultados precisos al instante.</li>
              <li><strong>Interfaz Intuitiva:</strong>
              La interfaz de usuario ha sido diseñada pensando en la facilidad de
              uso. Los usuarios, tanto novatos como expertos, encontrarán que es
              fácil navegar por la plataforma, ingresar datos y comprender los
              resultados generados.</li>
              <li> <strong>Detalles Explicativos:</strong>
              Mi página web no solo proporciona los resultados, sino que también
              ofrece explicaciones detalladas sobre cada paso del algoritmo. Esto es
              especialmente valioso para aquellos que desean entender el proceso y
              la lógica detrás de los resultados.</li>
              <li><strong>Versatilidad:</strong>
              La plataforma es versátil y se adapta a diversas necesidades, ya sea
              que estés resolviendo algoritmos por razones académicas, profesionales
              o personales. mi página web es la herramienta esencial para aquellos
              que buscan eficiencia y precisión en la resolución de algoritmos
              numéricos.</li>
            </ul>
            Con mi página web, desbloquea el potencial de resolver algoritmos
            numéricos de manera rápida y precisa. Ya sea que estés estudiando,
            trabajando en un proyecto o simplemente explorando el mundo de los
            algoritmos, esta plataforma te ofrece la herramienta perfecta para tus
            necesidades. ¡Ingresa tus valores y descubre la magia de la resolución
            de algoritmos de manera eficiente!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-inner {
  width: 60%;
}

.all-carousel {
  background-color: black;
}

.carousel-caption {
  font-family: "Tangerine", serif;
  font-size: 100px;
  text-shadow: 4px 4px 4px #aaa;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.page-text {
  font-family: "Montserrat", serif;
}

.author-text {
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: auto;
}

@media screen and (max-width: 600px) {
  .carousel-inner {
    width: 100%;
  }

  .carousel-caption {
    font-size: 30px;
  }

  .overflow-text {
    overflow-x: auto;
  }
}
</style>
