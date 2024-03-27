<script setup lang="ts">
import { contactMeText, whatAmIDoingNow } from "../../consts/InfoTexts";
</script>

<template>
  <div
    class="flex max-w-4xl flex-col justify-center text-center text-[#495057]"
  >
    <p class="m-2 text-xl">{{ contactMeText.introduction }}</p>
    <p class="m-2 text-xl">{{ whatAmIDoingNow.currentProject }}</p>
  </div>
</template>

<style scoped></style>
