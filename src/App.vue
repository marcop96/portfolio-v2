<template>
  <div class="p-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="(palette, index) in palettes"
        :key="index"
        class="p-4 border rounded-lg shadow-lg"
      >
        <div class="grid grid-cols-4 gap-2">
          <div
            v-for="(color, colorIndex) in palette"
            :key="colorIndex"
            :style="{ backgroundColor: color }"
            class="h-16 w-16 rounded hover:opacity-80 transition-opacity duration-300 ease-in-out cursor-pointer"
          ></div>
        </div>
        <div class="mt-2 text-center font-bold">Palette {{ index }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const palettes = {
  pallete1: {
    bg: "#e9ecef",
    text: "#495057",
    accent: "#15aabf",
    cta: "#fab005",
  },
  pallete2: {
    bg: "#f8f9fa",
    text: "#6c757d",
    accent: "#20c997",
    cta: "#fd7e14",
  },
  pallete3: {
    bg: "#ffffff",
    text: "#343a40",
    accent: "#e64980",
    cta: "#228be6",
  },
  pallete4: {
    bg: "#fff4e6",
    text: "#868e96",
    accent: "#fcc419",
    cta: "#12b886",
  },
};
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
