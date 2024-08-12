<!-- <script setup lang="ts">
import { ref } from "vue";
import type { Project } from "../../types";
import PillButton from "./PillButton.vue";
const props = defineProps<{
  project: Project;
}>();

const { title, description, image, technologies, links } = props.project;

const isExpanded = ref(false);

const expandCard = () => {
  isExpanded.value = true;
};

const shrinkCard = () => {
  isExpanded.value = false;
};
function getImageUrl(name: String) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
</script>
<template>
  <div class="card" @mouseover="expandCard" @mouseleave="shrinkCard">
    <img :src="getImageUrl(image)" class="" />
    <div class="card__content" :class="{ expanded: isExpanded }">
      <p class="card__title">{{ title }}</p>
      <div class="flex">
        <PillButton
          v-for="technology in technologies"
          :key="technology"
          :icon="technology"
          styles="bg-white rounded-full mx-2"
        />
      </div>
      <p class="card__description">
        {{ description }}
      </p>
      <ul class="m-4 flex justify-center">
        <PillButton
          v-for="link in links"
          :key="link.url"
          :url="link.url"
          :icon="link.icon"
          styles="bg-black rounded-full mx-1"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 500px;
  height: 300px;

  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
@media (max-width: 768px) {
  .card {
    width: 250px;
  }
}
.card svg {
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}
</style> -->
