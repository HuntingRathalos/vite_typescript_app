<script lang="ts">
export interface MenuItem {
  type: "heading" | "menu";
  title: string;
  icon?: string;
  url?: string;
}
</script>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

defineProps<{ title: string; menuItems: MenuItem[] }>();

const router = useRouter();

const isToggle = ref(false);

const gotoUrl = (url?: string) => {
  if (url != undefined) {
    router.push(url);
  }
};
</script>
<template>
  <body class="min-h-screen w-full bg-gray-100 text-gray-700">
    <header
      class="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2"
    >
      <div class="flex items-center space-x-2">
        <button type="button" class="text-3xl" @click="isToggle = !isToggle">
          <i class="bx bx-menu"></i>
        </button>
        <div>Logo</div>
      </div>
    </header>

    <div class="flex">
      <aside
        class="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
        style="height: 90.5vh"
        v-show="isToggle"
      >
        <div v-for="(item, index) in menuItems">
          <a
            @click="gotoUrl(item.url)"
            class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
          >
            <span class="text-2xl"><i class="bx bx-home"></i></span>
            <span>{{ item.title }}</span>
          </a>
        </div>
      </aside>
    </div>
    <div>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </body>
</template>
