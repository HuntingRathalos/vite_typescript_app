<script setup lang="ts">
import { reactive } from "vue";
import { Task } from "../models/Task";
import TaskAdd from "../components/TaskAdd.vue";
import TaskList from "../components/TaskList.vue";

const tasks: Task[] = reactive([
  {
    id: 1,
    title: "起きる",
    done: false,
  },
  {
    id: 2,
    title: "きがえる",
    done: false,
  },
]);
</script>
