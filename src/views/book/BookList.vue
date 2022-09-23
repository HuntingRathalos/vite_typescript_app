<script setup lang="ts">
import { reactive } from "vue";
import ListItem from "../../components/book/ListItem.vue";
import { Book } from "../../models/book";

const books: Book[] = reactive([
  {
    id: "1",
    title: "タイトル",
    description: "内容",
    link: "",
    image: "",
  },
  {
    id: "2",
    title: "タイトル2",
    description: "内容2",
    link: "",
    image: "",
  },
]);
</script>
<template>
  <div v-for="book in books" class="max-w-2xl mx-auto pt-10">
    <ListItem :book="book"></ListItem>
  </div>
</template>
