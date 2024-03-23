<script setup lang="ts">
import type { Project } from "../../types";
import PillButton from "./PillButton.vue";
const props = defineProps<{
  project: Project;
}>();
const { title, description, image, technologies, links } = props.project;

function getImageUrl(name: String) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
</script>

<template>
  <main
    class="container m-2 mx-2 flex h-96 w-96 flex-col justify-center rounded-sm bg-red-500"
  >
    <h2 class="self-center text-2xl">{{ title }}</h2>
    <img
      :src="getImageUrl(image)"
      alt="project image"
      class="aspect-square h-32 object-contain"
    />
    <div class="flex justify-center p-3">
      <PillButton
        v-for="technology in technologies"
        :key="technology"
        :icon="technology"
        styles="bg-white rounded-full mx-2"
      />
    </div>
    <p class="text-center">{{ description }}</p>
    <ul class="flex justify-center">
      <PillButton
        v-for="link in links"
        :key="link.url"
        :url="link.url"
        :icon="link.icon"
        styles="bg-black rounded-full mx-1"
      />
    </ul>
  </main>
</template>
<style>
html {
  scroll-behavior: smooth;
}
</style>
