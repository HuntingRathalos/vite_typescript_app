<script lang="ts">
export interface MenuItem {
  title: string;
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
  <body>
    <nav class="bg-white dark:bg-gray-800 shadow">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex items-center justify-between h-16">
          <div class="w-full justify-between flex items-center">
            <div class="flex items-center">
              <svg
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <h2 class="text-xl font-bold text-white">ToDoApp</h2>
            </div>

            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <div v-for="(item, index) in menuItems">
                  <a
                    class="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    @click="gotoUrl(item.url)"
                  >
                    {{ item.title }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="block">
            <div class="ml-4 flex items-center md:ml-6"></div>
          </div>
        </div>
      </div>
    </nav>
    <div class="h-screen bg-yellow-50">
      <router-view></router-view>
    </div>
  </body>
</template>
