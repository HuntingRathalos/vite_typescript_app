<script setup lang="ts">
import DetailItem from "../../components/book/DetailItem.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { useBookStore } from "../../store/book";

const store = useBookStore();
const route = useRoute();
const router = useRouter();
const { book } = storeToRefs(store);
onMounted(() => {
  store.setBook(route.params.id as string);
});
</script>
<template>
  <div class="max-w-2xl mx-auto pt-10">
    <DetailItem :book="book"></DetailItem>
  </div>
</template>
