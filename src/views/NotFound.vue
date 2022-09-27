<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goHome = () => {
  router.push("/");
};
</script>

<template>
  <section
    class="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100"
  >
    <div
      class="container flex flex-col items-center justify-center px-5 mx-auto my-8"
    >
      <div class="max-w-md text-center">
        <h2 class="mb-4 font-extrabold text-9xl dark:text-gray-600">
          <span class="sr-only">Error</span>404
        </h2>
        <p class="text-2xl font-semibold md:text-3xl pb-5">
          ページが見つかりません。
        </p>
        <button
          @click="goHome"
          class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
        >
          ホームに戻る
        </button>
      </div>
    </div>
  </section>
</template>
