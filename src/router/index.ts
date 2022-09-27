import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AppHome from "../views/AppHome.vue";
import TodoList from "../views/TodoList.vue";
import BookList from "../views/book/BookList.vue";
import BookDetail from "../views/book/BookDetail.vue";
import NotFound from "../views/NotFound.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: AppHome,
  },
  {
    path: "/todo",
    component: TodoList,
  },
  {
    path: "/book",
    component: BookList,
  },
  {
    path: "/book/:id",
    component: BookDetail,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
