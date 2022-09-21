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

const addTsk = (newTaskTitle: string) => {
  let newTask: Task = {
    id: Date.now(),
    title: newTaskTitle,
    done: false,
  };
  tasks.push(newTask);
};

const doneTask = (id: number) => {
  let task = tasks.find((t) => t.id === id);
  if (task !== undefined) {
    task.done = !task.done;
  }
};

const deleteTask = (id: number) => {
  tasks.forEach((task, index) => {
    if (task.id === id) tasks.splice(index, 1);
  });
};
</script>
