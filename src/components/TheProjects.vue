<script setup lang="ts">
import CardComponent2 from "./CardComponent2.vue";
import { projects } from "../consts/Projects";
</script>

<template>
  <ul class="flex flex-col justify-center lg:flex-row lg:justify-center">
    <li class="mx-2" v-for="project in projects" :key="project.title">
      <!-- <CardComponent :project="project" class="h-80 w-96 rounded-sm" /> -->
      <CardComponent2 :project="project" class="my-2 h-80 w-96 rounded-sm" />
    </li>
  </ul>
</template>
