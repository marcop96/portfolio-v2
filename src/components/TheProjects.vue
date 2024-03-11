<script setup lang="ts">
import { ref } from "vue";
import CardComponent from "./CardComponent.vue";
import { projects } from "../consts/Projects";
</script>

<template>
  <ul class="flex flex-wrap justify-center">
    <li v-for="project in projects" :key="project.title">
      <CardComponent :project="project" />
    </li>
  </ul>
</template>
