<script setup lang="ts">
import type { Project } from "../../types";
import PillButton from "./PillButton.vue";
const props = defineProps<{
  project: Project;
}>();
const { title, description, image, technologies, links } = props.project;

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
</script>

<template>
  <main
    class="h-fit container m-4 p-4 flex flex-col justify-center rounded-xl shadow-lg bg-white bg-opacity-80"
  >
    <h2 class="self-center text-3xl text-gray-800 font-semibold mb-4">{{ title }}</h2>
    <img
      :src="getImageUrl(image)"
      alt="project image"
      class="aspect-square h-40 object-cover rounded-lg shadow-md mb-4"
    />
    <div class="flex justify-center mb-4">
      <div class=' flex flex-col justify-center mb-4' v-for="technology in technologies" :key="technology.name">

        <PillButton
        :key="technology.name"
        :icon="technology.icon"
        styles="bg-gray-200 rounded-full mx-2 p-2 shadow-sm w-fit"
        />
        <span class="text-gray-700 text-xs text-center">{{ technology.name }}</span>
      </div>
    </div>
    <p class="text-center text-gray-700 mb-4">{{ description }}</p>
    <ul class="flex justify-center">
      <PillButton
        v-for="link in links"
        :key="link.url"
        :url="link.url"
        :icon="link.icon"
        styles="bg-blue-600 text-white rounded-full mx-2 p-2 shadow-sm"
      />
    </ul>
  </main>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
