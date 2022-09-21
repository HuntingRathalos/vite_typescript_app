<script setup lang="ts">
import AppNavi, { MenuItem } from "./components/AppNavi.vue";

const menuItems: MenuItem[] = [
  {
    title: "Main",
  },
  {
    title: "ToDo",
    url: "/todo",
  },
];
</script>

<template>
  <AppNavi title="Todo App" :menu-items="menuItems"></AppNavi>
</template>
