<template>
  <div class="container">
    <h1 class="my-4">Algoritmo de Cuadrados Medios</h1>
    <p>Ingrese los valores requeridos:</p>
    <div class="mb-md-5">
      <div class="d-md-flex d-block justify-content-center gap-5 mb-4">
        <div class="mb-4 mb-md-0">
          <label for="seedValue" class="form-label">
            <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mi>0</mi></msub></math>:
          </label>
          <input
            type="text"
            class="form-control d-block text-center w-100"
            name="seedValue"
            id="seedValue"
            v-model="userInput.x0Seed"
            @input="validateUserInput"
            placeholder="Semilla inicial"
            autofocus
          />
        </div>
        <div>
          <label for="nValue" class="form-label"
            >Total de números a generar:</label
          >
          <input
            type="text"
            class="form-control d-block text-center"
            name="nValue"
            id="nValue"
            v-model="userInput.numbersToGenerate"
            @input="validateUserInput"
            placeholder="limite de números"
          />
        </div>
      </div>
      <div class="d-md-flex d-block justify-content-center gap-4 mt-md-5 mb-4">
        <div class="mb-3 mb-md-0 text-center">
          <p>Acciones:</p>
          <button type="button" class="btn btn-success me-4" @click="generatePseudorandomNumbers" :disabled="resultsView || userInput.x0Seed.length < 2 || userInput.numbersToGenerate.length < 1">
            Generar
          </button>
          <button type="button" class="btn btn-warning" @click="cleanResultsContainer" :disabled="!resultsView">Limpiar</button>
        </div>
        <div class="text-center">
          <p>Decimales después de la coma:</p>
          <button
            type="button"
            @click="increaseDecimals"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-custom-class="custom-tooltip"
            data-bs-title="Aumentar decimales."
            class="btn btn-primary bi bi-arrow-up me-4"
            :disabled="!resultsView || decimals === 8"
          ></button>
          <button
            type="button"
            @click="decreaseDecimals"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-custom-class="custom-tooltip"
            data-bs-title="Disminuir decimales."
            class="btn btn-primary bi bi-arrow-down"
            :disabled="!resultsView || decimals === 2"
          ></button>
        </div>
      </div>
    </div>
    <div class="results-container" v-if="resultsView">
      <div class="my-4">
        <div
          class="alert alert-warning alert-dismissible fade show d-flex align-items-center"
          role="alert"
          v-if="degenerateSequence"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path
              d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          <div v-text="alert.alertText"></div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <h3 class="py-3">Números Aleatorios generados:</h3>
        <div class="table-responsive table-container">
          <table
            class="table table-hover table-bordered border-secondary caption-top text-center"
          >
            <caption class="text-center bg-info-subtle rounded-top-3">
              Resultado de las Operaciones
            </caption>
            <thead class="table-light border-secondary">
              <tr>
                <th scope="col"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>i</mi></math></th>
                <th scope="col"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mrow><mi>i</mi><mo>-</mo><mn>1</mn></mrow></msub></math></th>
                <th scope="col"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>Y</mi><mi>i</mi></msub></math></th>
                <th scope="col"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mi>i</mi></msub></math></th>
                <th scope="col"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>r</mi><mi>i</mi></msub></math></th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="resultList in algorithmParameters.listOfLists" :key="resultList">
                <th>{{ resultList[0] }}</th>
                <td>{{ resultList[1] }}</td>
                <td>{{ resultList[2] }}</td>
                <td>{{ resultList[3] }}</td>
                <td>{{ resultList[4] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-4">
        <h4>Solución:</h4>
        <div class="solution-container border border-info border-3 rounded-5 text-center">
          <div class="px-3" v-html="algorithmSolution"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from "bootstrap";

export default {
  data() {
    return {
      resultsView: false,
      cleanResults: false,
      degenerateSequence: false,
      userInput: {
        x0Seed: "",
        numbersToGenerate: "",
      },
      algorithmParameters: {
        i: 1,
        xList: [],
        listOfLists: [],
        originalRiValues: [],
      },
      alert: {
        alertText: "",
      },
      decimals: 5,
    };
  },
  methods: {
    generatePseudorandomNumbers() {
      if (this.userInput.x0Seed !== "" && this.userInput.numbersToGenerate !== "") {
        this.resultsView = !this.resultsView;
      } else return;
      this.algorithmParameters.xList.push(parseInt(this.userInput.x0Seed));
      const x0Digits = this.userInput.x0Seed.length;
      const n = parseInt(this.userInput.numbersToGenerate);
      var i = this.algorithmParameters.i;
      for (i; i < n + 1; i++) {
        var yi = Math.pow(this.algorithmParameters.xList[i - 1], 2);
        var yiLength = yi.toString().length;
        if ((x0Digits % 2 !== 0 && yiLength % 2 === 0) || (x0Digits % 2 === 0 && yiLength % 2 !== 0)) {
          yi = "0" + yi;
          yi = parseInt(yi);
          yiLength = yi.toString().length;
        } else { yi = yi; }
        var start = Math.floor((yiLength - x0Digits) / 2);
        var centerDigits = yi.toString().substring(start, start + x0Digits);
        const xi = parseInt(centerDigits);
        this.algorithmParameters.xList.push(xi);
        const ri = xi / Math.pow(10, x0Digits);
        this.algorithmParameters.listOfLists.push([i, this.algorithmParameters.xList[i - 1], yi, xi, ri]);
      }
      this.searchDegenerateSequence();
      // console.log(this.algorithmParameters.listOfLists);
    },
    cleanResultsContainer() {
      location.reload();
    },
    searchDegenerateSequence() {
      var flag = false;
      const n = parseInt(this.userInput.numbersToGenerate);
      for (var i = 0; i < n; i++) {
        var x = this.algorithmParameters.listOfLists[i][4];
        for (var j = i + 1; j < n + 1; j++) {
          if (this.algorithmParameters.listOfLists[j] && this.algorithmParameters.listOfLists[j][4]) {
            var y = this.algorithmParameters.listOfLists[j][4];
            if (x === y && !flag) {
              flag = true;
              this.degenerateSequence = !this.degenerateSequence;
              this.alert.alertText = `La secuencia se degenera desde la posición ${this.algorithmParameters.listOfLists[j - 1][0]}: i = ${this.algorithmParameters.listOfLists[i][0]}; ri = ${this.algorithmParameters.listOfLists[i][4]} igual a i = ${this.algorithmParameters.listOfLists[j][0]}; ri = ${this.algorithmParameters.listOfLists[j][4]}.`;
              // console.log(`La secuencia se degenera desde la posición ${this.algorithmParameters.listOfLists[j - 1][0]}: i = ${this.algorithmParameters.listOfLists[i][0]}; ri = ${this.algorithmParameters.listOfLists[i][4]} igual a i = ${this.algorithmParameters.listOfLists[j][0]}; ri = ${this.algorithmParameters.listOfLists[j][4]}.`);
            }
          }
        }
      }
    },
    increaseDecimals() {
      if (this.decimals < 10) {
        this.decimals += 1;
        this.algorithmParameters.listOfLists.forEach((result, index) => {
          result[4] = this.algorithmParameters.originalRiValues[index];
        });
      }
    },
    decreaseDecimals() {
      if (this.decimals > 0) {
        this.decimals -= 1;
        this.updateRiDecimals();
      }
    },
    updateRiDecimals() {
      const originalValues = [];
      this.algorithmParameters.listOfLists.forEach((result) => {
        originalValues.push(result[4]);
        const roundedRi = result[4].toFixed(this.decimals);
        result[4] = parseFloat(roundedRi);
      });
      this.algorithmParameters.originalRiValues = originalValues;
    },
    validateUserInput() {
      this.userInput.x0Seed = this.userInput.x0Seed.replace(/[^0-9]/g, "");
      this.userInput.numbersToGenerate = this.userInput.numbersToGenerate.replace(/[^0-9]/g, "");
    },
  },
  computed: {
    algorithmSolution() {
      const x0Digits = this.userInput.x0Seed.length;
      const n = parseInt(this.userInput.numbersToGenerate);
      var i = this.algorithmParameters.i;
      var result = "";
      for (i; i < n + 1; i++) {
        var yi = Math.pow(this.algorithmParameters.xList[i - 1], 2);
        var yiLength = yi.toString().length;
        if ((x0Digits % 2 !== 0 && yiLength % 2 === 0) || (x0Digits % 2 === 0 && yiLength % 2 !== 0)) {
          yi = "0" + yi;
          yi = parseInt(yi);
          yiLength = yi.toString().length;
        } else { yi = yi; }
        var start = Math.floor((yiLength - x0Digits) / 2);
        var centerDigits = yi.toString().substring(start, start + x0Digits);
        const xi = parseInt(centerDigits);
        const ri = xi / Math.pow(10, x0Digits);
        result += `
        <hr class="border-3 text-primary w-50 mx-auto">
        <p><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mn>${i - 1}</mn></msub><mo>=</mo><mn>${this.algorithmParameters.listOfLists[i - 1][1]}</mn><mo> </mo><mo>;</mo><mo> </mo><mi>D</mi><mo>=</mo><mn>${x0Digits}</mn><mo> </mo><mo>;</mo><mo> </mo><mi>i</mi><mo>=</mo><mn>${i}</mn><mo>.</mo><mo>.</mo><mo>.</mo><mn>${n}</mn></math></p>
        <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>i</mi><mo>=</mo><mn>${i}</mn></math></p>
        <p><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>Y</mi><mi>${i}</mi></msub><mo>=</mo><msup><mrow><mo>(</mo><msub><mi>X</mi><mn>${i - 1}</mn></msub><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo>(</mo><mn>${this.algorithmParameters.listOfLists[i - 1][1]}</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>${yi}</mn></math></p>
        <p><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mi>${i}</mi></msub><mo>=</mo><mn>${xi}</mn></math></p>
        <p><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>r</mi><mi>${i}</mi></msub><mo>=</mo><mfrac><mn>${xi}</mn><msup><mn>10</mn><mn>${x0Digits}</mn></msup></mfrac><mo>=</mo><mn>${ri}</mn></math></p>
        <hr class="border-3 text-primary w-50 mx-auto">
        `;
      }
      return result;
    }
  },
  mounted() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    const alertList = document.querySelectorAll(".alert");
    [...alertList].map((element) => new bootstrap.Alert(element));
  },
};
</script>

<style scoped>
.container {
  font-family: "Montserrat", serif;
}

.bi-exclamation-triangle-fill {
  width: 2.5%;
}

.table-container {
  max-height: 500px;
  overflow-y: auto;
}

caption {
  position: sticky;
  top: 0;
}

thead th {
  position: sticky;
  top: 40px;
}

.solution-container {
  max-height: 500px;
  overflow-y: auto;
}

@media screen and (max-width: 300px) {
  .bi-exclamation-triangle-fill {
    width: 20%;
  }
}
</style>
