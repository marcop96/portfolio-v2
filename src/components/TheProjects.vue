<script setup lang="ts">
import CardComponent2 from "./CardComponent2.vue";
import { projects } from "../consts/Projects";
</script>

<template>
  <div class="flex flex-col">
    <h2 class="text-center text-3xl">My projects</h2>
    <main>
      <ul class="grid grid-cols-1 lg:grid-cols-2">
        <li class="mx-2" v-for="project in projects" :key="project.title">
          <!-- <CardComponent :project="project" class="h-80 w-96 rounded-sm" /> -->
          <CardComponent2
            :project="project"
            class="my-2 h-72 w-96 rounded-sm"
          />
        </li>
      </ul>
    </main>
  </div>
</template>
