<template>
  <div class="relative w-48">
    <button @click="isOpen = !isOpen"
      class="z-10 block w-full py-2 rounded truncate text-2xl font-mono hover:bg-green-400 focus:outline-none">
        {{ serie.series_name }}
      <i class="fas fa-chevron-down text-base"></i>
    </button>
    <div
      v-if="isOpen"
      class="shadow-lg py-1 bg-white focus:outline-none animate-fade-in-down"
    >
      <div v-for="paragraph in serie.paragraphs" :key="paragraph.id">
        <router-link :to="{ name: 'Paragraph', params: { paragraph_id: paragraph.id }}"
          class="block px-4 py-2 text-gray-700 text-center hover:bg-gray-200 w-full focus:outline-none"
        >{{ paragraph.paragraphs_title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  props: ["serie"]
};
</script>

<style>
</style>