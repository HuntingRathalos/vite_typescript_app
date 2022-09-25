<script setup lang="ts">
import { Book } from "../../models/book";
const props = defineProps<{
  book: Book;
}>();

const sendBookPage = () => {
  if (props.book) {
    window.open(props.book.link, "_blank");
  }
};
</script>

<template>
  <section class="text-gray-600 body-font">
    <div
      class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
    >
      <a @click="sendBookPage">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt=""
          :src="book.image"
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            {{ book.title }}
          </h1>
          <p class="mb-8 leading-relaxed">{{ book.description }}</p>
          <div class="flex justify-center">
            <button
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Button
            </button>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
