<script setup lang="ts">
import type { Project } from "../../types";

const props = defineProps<{
  project: Project;
}>();
const { title, description, image, technologies } = props.project;

console.log(title, description, image, technologies);
</script>

<template>
  <main class="container">
    {{ title }}
    {{ description }}
    {{ image }}
    {{ technologies }}
  </main>
</template>
