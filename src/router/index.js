import { onMounted } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("../views/PrincipalPage.vue"),
  },
  {
    path: "/algorithms",
    name: "algorithms",
    component: () => import("../views/AlgorithmsPage.vue"),
  },
  {
    path: "/algorithms/Squares_Midpoint_Algorithm",
    name: "Squares_Midpoint_Algorithm",
    component: () => import("../views/SquaresMidpointAlgorithm.vue"),
  },
  {
    path: "/algorithms/Middle_Products_Algorithm",
    name: "Middle_Products_Algorithm",
    component: () => import("../views/MiddleProductsAlgorithm.vue"),
  },
  {
    path: "/algorithms/Linear_Algorithm",
    name: "Linear_Algorithm",
    component: () => import("../views/LinearAlgorithm.vue"),
  },
  {
    path: "/algorithms/Multiplicative_Algorithm",
    name: "Multiplicative_Algorithm",
    component: () => import("../views/MultiplicativeAlgorithm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
