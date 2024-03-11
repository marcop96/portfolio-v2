<script setup lang="ts">
import { ref } from "vue";
import { contactMeText } from "../consts/ContactMe";
import { palettes } from "../consts/colors";
import type { Palette } from "../../types";

const backgroundColor = ref("");
const textColor = ref("");
const accentColor = ref("");
const CTAColor = ref("");

function changePalete(palette: Palette) {
  backgroundColor.value = palette.bg;
  textColor.value = palette.text;
  accentColor.value = palette.accent;
  CTAColor.value = palette.cta;
}
</script>

<template>
  <div class="p-8 container">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="(palette, index) in palettes"
        :key="index"
        class="p-4 border rounded-lg shadow-lg"
      >
        <div class="grid grid-cols-4 gap-2">
          <div
            v-for="(color, colorIndex) in palette"
            @click="changePalete(palette)"
            :key="colorIndex"
            :style="{ backgroundColor: color }"
            class="h-16 w-16 rounded hover:opacity-80 transition-opacity duration-300 ease-in-out cursor-pointer"
          ></div>
        </div>
        <div class="mt-2 text-center font-bold">{{ index }}</div>
      </div>
    </div>
  </div>

  <div
    class="container h-72 p-4 my-10"
    :style="{ 'background-color': backgroundColor }"
  >
    <p :style="{ color: textColor }">{{ contactMeText.introduction }}</p>
    <button
      :style="{ color: accentColor, border: `2px solid ${CTAColor}` }"
      class="border-2 rounded-sm p-4 text-center mx-auto"
    >
      {{ contactMeText.email }}
    </button>
    <p :style="{ color: accentColor }">{{ contactMeText.buildTogether }}</p>
  </div>
</template>

<style scoped></style>
