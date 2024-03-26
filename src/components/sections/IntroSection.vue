<script setup lang="ts">
import { introText } from "../../consts/InfoTexts";
import PillButton from "../PillButton.vue";
</script>

<template>
  <div class="container flex max-w-4xl flex-col justify-center text-center">
    <img
      src="../../assets/marcoprofile.jpg"
      class="mx-2 h-48 w-48 self-center rounded-full object-cover"
    />
    <span class="text-center text-4xl"
      >{{ introText.title }} {{ introText.name }} <br />
      <span class="text-red-500">{{ introText.role }}</span> developer</span
    >
    <p class="text-2xl">{{ introText.description }}</p>
    <nav class="my-6 flex w-full justify-center">
      <PillButton
        url="https://www.linkedin.com/in/marco-pianaroli96/"
        icon="carbon:logo-linkedin"
        styles=" w- bg-black rounded-full mx-1"
      />

      <PillButton
        url="https://github.com/marcop96"
        icon="carbon:logo-github"
        styles="  bg-black rounded-full mx-1"
      />
      <PillButton
        url="mailto:pianarolimarco@gmail.com?subject=Front end developer position"
        icon="carbon:email"
        styles="  bg-black rounded-full mx-1"
      />
    </nav>
    <RouterLink to="/resume">
      <button class="rounded-full bg-black p-3 text-white hover:opacity-80">
        view my resume
      </button>
    </RouterLink>
  </div>
</template>

<style scoped></style>
