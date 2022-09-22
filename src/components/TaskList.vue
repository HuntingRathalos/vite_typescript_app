<script setup lang="ts">
import { Task } from "../models/Task";

defineProps<{ tasks: Task[] }>();

const emit = defineEmits<{
  (eventName: "done", id: number): void;
  (eventName: "delete", id: number): void;
}>();
</script>
<template>
  <div class="max-w-2xl overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="w-3/4 py-3 px-6">Task</th>
          <th scope="col" class="w-1/4 py-3 px-6">Action</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(task, index) in tasks">
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="p-4 w-4">
              <div class="flex items-center">
                <input
                  :checked="task.done"
                  type="checkbox"
                  @click="emit('done', task.id)"
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only"
                  >checkbox</label
                >
              </div>
            </td>
            <td class="py-4 px-6 text-white">
              <label v-if="task.done">
                <del>{{ task.title }}</del>
              </label>
              <label v-else class="font-medium text-white">
                {{ task.title }}
              </label>
            </td>
            <td class="py-4 px-6">
              <button type="button" @click="emit('delete', task.id)">
                <svg
                  class="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
