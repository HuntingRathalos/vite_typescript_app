<script setup lang="ts">
import { ref } from "vue";
import { Book } from "../../models/book";
import { useRouter } from "vue-router";

const router = useRouter();
defineProps<{ book: Book }>();

const url = ref("book/1");
const gotoUrl = (url?: string) => {
  if (url != undefined) {
    router.push(url);
  }
};
</script>

<template>
  <a
    @click="gotoUrl(url)"
    class="flex flex-row items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <!-- <img class="object-cover w-full h-80 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="" alt=""> -->
    <div class="object-cover w-full h-80 rounded-t-lg md:rounded-l-lg">aaa</div>
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        本のタイトル
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        本の内容が入ります。
      </p>
    </div>
  </a>
</template>
