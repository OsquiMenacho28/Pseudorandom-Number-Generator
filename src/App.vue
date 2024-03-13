<template>
  <div>
    <NavBar />
    <router-view />
    <UpButton />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import UpButton from "./components/UpButton.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    UpButton,
  },
};
</script>
