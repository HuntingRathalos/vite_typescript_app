<script setup lang="ts">
import { computed } from "vue";
import { Book } from "../../models/book";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps<{ book: Book }>();

const d = computed(() => {
  return props.book.description ? props.book.description.slice(0, 50) : "";
});

const gotoUrl = () => {
  router.push(`book/${props.book.id}`);
};
</script>

<template>
  <a
    @click="gotoUrl()"
    class="flex flex-row items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      class="object-fit rounded-t-lg h-[150px] w-[100px] rounded-none rounded-l-lg"
      :src="book.image"
      alt=""
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ book.title }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ d }}
      </p>
    </div>
  </a>
</template>
