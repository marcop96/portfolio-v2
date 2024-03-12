<script setup lang="ts">
import { aboutMe, introText } from "../consts/InfoTexts";
import {
  IconLinkedin,
  IconGithub,
  IconEmail,
} from "@iconify-prerendered/vue-mdi";
console.log(aboutMe);
</script>

<template>
  <div class="container flex flex-col justify-center">
    <img
      src="../assets/marcoprofile.jpg"
      class="mx-2 h-48 w-48 self-center rounded-full object-cover"
    />
    <span class="text-center text-4xl"
      >{{ introText.title }} {{ introText.name }} <br />
      <span class="text-red-500">{{ introText.role }}</span> developer</span
    >
    <p class="text-2xl">{{ introText.description }}</p>
    <nav class="m-12 flex justify-center">
      <a
        class="mx-2"
        :href="'https://www.linkedin.com/in/marco-pianaroli96/'"
        target="_blank"
      >
        <IconLinkedin class="h-12 w-12 hover:opacity-50" />
      </a>
      <a class="mx-2" :href="'https://github.com/marcop96'" target="_blank">
        <IconGithub class="h-12 w-12 hover:opacity-50" />
      </a>
      <a
        class="mx-2"
        :href="'mailto:me@marcopianaroli.com?subject=Front end developer position'"
      >
        <IconEmail class="h-12 w-12 hover:opacity-50" />
      </a>
    </nav>
  </div>
</template>

<style scoped></style>
