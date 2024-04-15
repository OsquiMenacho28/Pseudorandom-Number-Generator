<template>
  <div class="container">
    <h1 class="my-4">Algoritmo Multiplicativo</h1>
    <p>Ingrese los valores requeridos:</p>
    <div class="mb-md-5">
      <div class="d-md-flex d-block justify-content-center gap-5 mb-4 mb-md-5">
        <div class="mb-3 mb-md-0">
          <label for="periodValue" class="form-label">
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi></math>:
          </label>
          <input
            type="text"
            class="form-control d-block text-center w-100"
            name="periodValue"
            id="periodValue"
            v-model="userInput.period"
            @input="validateUserInput"
            placeholder="Ingresar Periodo"
            autofocus
          />
        </div>
        <div class="mb-3 mb-md-0">
          <label for="x0SeedValue" class="form-label">
            <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mi>0</mi></msub></math>:
          </label>
          <input
            type="text"
            class="form-control d-block text-center w-100"
            name="x0SeedValue"
            id="x0SeedValue"
            v-model="userInput.x0Seed"
            @input="validateUserInput"
            placeholder="Ingresar Semilla"
            autofocus
          />
        </div>
        <div class="mb-4 mb-md-0">
          <label for="kValue" class="form-label">
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>K</mi></math>:
          </label>
          <input
            type="text"
            class="form-control d-block text-center"
            name="kValue"
            id="kValue"
            v-model="userInput.kValue"
            @input="validateUserInput"
            placeholder="Ingresar K"
          />
        </div>
      </div>
      <div class="mb-4 mb-md-0 text-center">
        <p>"a" (Constante Multiplicativa) va a ser igual a:</p>
        <input type="radio" class="btn-check" name="options-outlined" id="select38k" autocomplete="off" value="3 + 8k" v-model="userInput.aEquation" :disabled="resultsView">
        <label class="btn btn-outline-primary me-4" for="select38k">3 + 8k</label>
        <input type="radio" class="btn-check" name="options-outlined" id="select58k" autocomplete="off" value="5 + 8k" v-model="userInput.aEquation" :disabled="resultsView">
        <label class="btn btn-outline-success" for="select58k">5 + 8k</label>
      </div>
      <p class="text-center mt-4">a = {{ userInput.aEquation }}</p>
      <div class="d-md-flex d-block justify-content-center gap-4 mt-md-5 mb-4">
        <div class="mb-3 mb-md-0 text-center">
          <p>Acciones:</p>
          <button type="button" class="btn btn-success me-4" @click="generatePseudorandomNumbers" :disabled="resultsView || userInput.period === '' || userInput.x0Seed === '' || userInput.kValue === '' || parseInt(userInput.x0Seed) % 2 === 0 || userInput.aEquation === ''">
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
          class="alert alert-success alert-dismissible fade show d-flex align-items-center"
          role="alert"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Success:">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
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
                <th scope="col"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>Operación</mi></math></th>
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
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 text-center">
          <button type="button" class="btn btn-primary" @click="downloadData">
            Descargar Tabla
          </button>
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
import { exportArrayToExcel } from "../export_data/index.js";

export default {
  data() {
    return {
      resultsView: false,
      cleanResults: false,
      userInput: {
        period: "",
        x0Seed: "",
        kValue: "",
        aEquation: "",
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
      if (this.userInput.period !== "" && this.userInput.x0Seed !== "" && this.userInput.kValue !== "" && this.userInput.aEquation !== "") {
        this.resultsView = !this.resultsView;
      } else return;
      this.algorithmParameters.xList.push(parseInt(this.userInput.x0Seed));
      const period = parseInt(this.userInput.period);
      const kValue = parseInt(this.userInput.kValue);
      const g = (Math.log(period) / Math.log(2)) + 2;
      const m = Math.pow(2, g);
      var multiplicativeConstant;
      if (this.userInput.aEquation === "3 + 8k") {
        multiplicativeConstant = 3 + (8 * kValue);
      } else if (this.userInput.aEquation === "5 + 8k") {
        multiplicativeConstant = 5 + (8 * kValue);
      }
      const a = multiplicativeConstant;
      var i = this.algorithmParameters.i;
      if (a > 0 && m > 0 && parseInt(this.userInput.x0Seed) > 0) {
        for (i; i <= period + 1; i++) {
          const xi = (a * this.algorithmParameters.xList[i - 1]) % (m);
          this.algorithmParameters.xList.push(xi);
          const ri = xi / (m - 1);
          this.algorithmParameters.listOfLists.push([i, `(${a} * ${this.algorithmParameters.xList[i - 1]}) MOD (${m})`, xi, ri]);
        }
      } else return;
      this.alert.alertText = `El periodo es ${period}, k = ${kValue}, g = ${g}, m = 2^g = ${m}, a = ${this.userInput.aEquation} = ${a} (Constante Multiplicativa).`;
      // console.log(this.algorithmParameters.listOfLists);
    },
    cleanResultsContainer() {
      location.reload();
    },
    increaseDecimals() {
      if (this.decimals < 10) {
        this.decimals += 1;
        this.algorithmParameters.listOfLists.forEach((result, index) => {
          result[3] = this.algorithmParameters.originalRiValues[index];
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
        originalValues.push(result[3]);
        const roundedRi = result[3].toFixed(this.decimals);
        result[3] = parseFloat(roundedRi);
      });
      this.algorithmParameters.originalRiValues = originalValues;
    },
    validateUserInput() {
      this.userInput.period = this.userInput.period.replace(/[^0-9]/g, "");
      this.userInput.x0Seed = this.userInput.x0Seed.replace(/[^0-9]/g, "");
      this.userInput.kValue = this.userInput.kValue.replace(/[^0-9]/g, "");
    },
  },
  computed: {
    algorithmSolution() {
      var result = "";
      const period = parseInt(this.userInput.period);
      const kValue = parseInt(this.userInput.kValue);
      const g = (Math.log(period) / Math.log(2)) + 2;
      const m = Math.pow(2, g);
      var multiplicativeConstant;
      if (this.userInput.aEquation === "3 + 8k") {
        multiplicativeConstant = 3 + (8 * kValue);
      } else if (this.userInput.aEquation === "5 + 8k") {
        multiplicativeConstant = 5 + (8 * kValue);
      }
      const a = multiplicativeConstant;
      var i = this.algorithmParameters.i;
      result += `
      <hr class="border-3 text-danger w-50 mx-auto">
      <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo>=</mo><mn>${period}</mn><mo> </mo><mo>,</mo><mo> </mo><msub><mi>X</mi><mn>0</mn></msub><mo>=</mo><mn>${parseInt(this.userInput.x0Seed)}</mn></math></p>
      <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>g</mi><mo>=</mo><mfrac><mrow><mi>ln</mi><mfenced><mi>P</mi></mfenced></mrow><mrow><mi>ln</mi><mfenced><mn>2</mn></mfenced></mrow></mfrac><mo>+</mo><mn>2</mn><mo>=</mo><mfrac><mrow><mi>ln</mi><mfenced><mn>${period}</mn></mfenced></mrow><mrow><mi>ln</mi><mfenced><mn>2</mn></mfenced></mrow></mfrac><mo>+</mo><mn>2</mn><mo>=</mo><mn>${g}</mn></math></p>
      <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>m</mi><mo>=</mo><msup><mn>2</mn><mi>g</mi></msup><mo>=</mo><msup><mn>2</mn><mn>${g}</mn></msup><mo>=</mo><mn>${m}</mn></math></p>
      <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>k</mi><mo>=</mo><mn>${kValue}</mn></math></p>
      <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>=</mo><mn>${this.userInput.aEquation}</mn><mo>=</mo><mn>${this.userInput.aEquation.substring(0, 5)}</mn><mo>×</mo><mn>${kValue}</mn><mo>=</mo><mn>${a}</mn></math></p>
      <hr class="border-3 text-danger w-50 mx-auto">
      `;
      if (a > 0 && m > 0 && parseInt(this.userInput.x0Seed) > 0) {
        for (i; i <= period + 1; i++) {
          const xi = (a * this.algorithmParameters.xList[i - 1]) % (m);
          const ri = xi / (m - 1);
          result += `
          <hr class="border-3 text-primary w-50 mx-auto">
          <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>i</mi><mo>=</mo><mn>${i}</mn></math></p>
          <p><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>X</mi><mi>${i}</mi></msub><mo>=</mo><mo>(</mo><mn>${a}</mn><mo>×</mo><mn>${this.algorithmParameters.xList[i - 1]}</mn><mo>)</mo><mo> </mo><mi>M</mi><mi>O</mi><mi>D</mi><mo> </mo><mo>(</mo><mn>${m}</mn><mo>)</mo><mo>=</mo><mo>(</mo><mn>${(a * this.algorithmParameters.xList[i - 1])}</mn><mo>)</mo><mo> </mo><mi>M</mi><mi>O</mi><mi>D</mi><mo> </mo><mo>(</mo><mn>${m}</mn><mo>)</mo><mo>=</mo><mn>${xi}</mn></math></p>
          <p><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>r</mi><mi>${i}</mi></msub><mo>=</mo><mfrac><mn>${xi}</mn><mrow><mn>${m}</mn><mo>-</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>${ri}</mn></math></p>
          <hr class="border-3 text-primary w-50 mx-auto">
          `;
        }
      } else return;
      return result;
    },
    downloadData() {
      this.$swal.fire({
        title: "Guardar archivo",
        text: "Ingrese el nombre con el que desee guardar el archivo.",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Guardar",
        allowOutsideClick: false,
        preConfirm: (fileName) => {
          try {
            if (this.algorithmParameters.listOfLists.length > 0) {
              exportArrayToExcel(this.algorithmParameters.listOfLists, fileName);
              return { success: true, fileName: fileName };
            } else {
              throw new Error(`El archivo ${fileName} no se pudo guardar.`);
            }
          } catch (error) {
            throw new Error(error);
          }
        },
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown",
        }
      }).then((result) => {
        if (result.isConfirmed && result.value.success) {
          this.$swal.fire({
            title: "Éxito!",
            text: `El archivo ${result.value.fileName} se guardó correctamente.`,
            icon: "success",
            showConfirmButton: false,
            timer: 3500,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutDown",
            }
          });
        } else if (result.isConfirmed && !result.value.success) {
          this.showSimpleAlert(
            "Error",
            `El archivo ${result.value.fileName} no se pudo guardar.`,
            "error"
          )
        }
      }).catch(error => {
        console.error("Error:", error);
        this.showSimpleAlert(
          "Error",
          "Hubo un problema al guardar el archivo.",
          "error"
        )
      });
    },
    showSimpleAlert(alertTitle, alertText, alertIcon) {
      this.$swal.fire({
        title: alertTitle,
        text: alertText,
        icon: alertIcon,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown",
        }
      });
    },
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

.bi-check-circle-fill {
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
  .bi-check-circle-fill {
    width: 20%;
  }
}
</style>