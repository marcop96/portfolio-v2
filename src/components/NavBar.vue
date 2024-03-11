<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <div class="flex justify-center p-7">
    <nav
      class="color-white border-black fixed top-4 mx-1 flex h-fit w-fit flex-row rounded-lg border-2 p-1 backdrop-blur"
    >
      <article to="/" class="mx-2" @click="scrollToTop">home</article>
      <article to="projects" class="mx-2" @click="scrollToTop">
        projects
      </article>
      <article to="about" class="mx-2" @click="scrollToTop">about me</article>
      <article to="contactme" class="mx-2" @click="scrollToTop">
        contact
      </article>
    </nav>
  </div>
</template>

<style scoped>
article {
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

article:hover {
  background-color: black;
  color: white;
  border-radius: 0.5rem;
}
</style>
