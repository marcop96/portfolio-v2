<script setup lang="ts">
import { ref } from "vue";

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
  <div class="container p-8">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(palette, index) in palettes"
        :key="index"
        class="rounded-lg border p-4 shadow-lg"
      >
        <div class="grid grid-cols-4 gap-2">
          <div
            v-for="(color, colorIndex) in palette"
            @click="changePalete(palette)"
            :key="colorIndex"
            :style="{ backgroundColor: color }"
            class="h-16 w-16 cursor-pointer rounded transition-opacity duration-300 ease-in-out hover:opacity-80"
          ></div>
        </div>
        <div class="mt-2 text-center font-bold">{{ index }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
