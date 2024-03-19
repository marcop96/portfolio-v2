<script setup lang="ts">
import CardComponent from "./CardComponent.vue";
import { projects } from "../consts/Projects";
</script>

<template>
  <ul class="flex flex-col justify-center lg:flex-row lg:justify-center">
    <li class="mx-2" v-for="project in projects" :key="project.title">
      <CardComponent :project="project" class="h-80 w-96 rounded-sm" />
    </li>
  </ul>
</template>
