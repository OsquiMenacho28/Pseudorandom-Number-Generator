<template>
  <div>
    <button
      type="button"
      class="btn btn-info rounded-circle border-primary bi bi-arrow-up"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      data-bs-custom-class="custom-tooltip"
      data-bs-title="Ir arriba."
      @click="scrollToTop"
      v-show="showScrollTopButton"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showScrollTopButton: false,
    };
  },
  mounted() {
    this.setupScrollEvent();
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  },
  methods: {
    scrollToTop() {
      this.scrollTo(0);
    },
    scrollToBottom() {
      this.scrollTo(1000);
    },
    scrollTo(position) {
      window.scrollTo({ top: position, behavior: "smooth" });
    },
    handleScroll() {
      this.showScrollTopButton = window.scrollY > 0;
    },
    setupScrollEvent() {
      window.addEventListener("scroll", this.handleScroll);
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.btn {
  font-size: 2em;
  position: fixed;
  bottom: 2%;
  right: 1%;
  z-index: 2;
}
</style>
