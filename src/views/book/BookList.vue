<script setup lang="ts">
import { ref } from "vue";
import ListItem from "../../components/book/ListItem.vue";
import { storeToRefs } from "pinia";
import { useBookStore } from "../../store/book";

const store = useBookStore();
const { filteredBooks } = storeToRefs(store);
const query = ref("");
const search = (e: Event) => {
  if (query.value !== "") {
    e.preventDefault();
    store.search(query.value);
  }
};
</script>
<template>
  <form class="max-w-2xl mx-auto">
    <div class="flex pt-3">
      <input
        v-model="query"
        type="text"
        id="keyword"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="検索キーワードを入力してね"
        required
      />
      <button
        @click="search"
        class="bg-gray-700 hover:bg-gray-600 text-white rounded px-4 py-2"
      >
        検索
      </button>
    </div>
  </form>
  <div v-for="book in filteredBooks" class="max-w-2xl mx-auto pt-10">
    <ListItem :book="book"></ListItem>
  </div>
</template>
