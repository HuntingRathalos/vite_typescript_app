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
  <router-view></router-view>
</template>
