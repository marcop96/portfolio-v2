<script setup lang="ts">
import { contactMeText, whatAmIDoingNow } from "../../consts/InfoTexts";
console.log(contactMeText);
console.log(whatAmIDoingNow);
</script>

<template>
  <div
    class="container m-12 flex max-w-4xl flex-col justify-center text-center"
  >
    <p class="m-3 text-2xl">{{ contactMeText.introduction }}</p>
    <p class="m-3 text-2xl">{{ whatAmIDoingNow.currentProject }}</p>
  </div>
</template>

<style scoped></style>
