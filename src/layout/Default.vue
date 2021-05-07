<template>
  <div>
    <navbar />
    <seriesbar />
    <main class="main">
      <div class="container mx-auto mt-10">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
import navbar from "../components/Navbar";
import seriesbar from "../components/SeriesBar";
export default {
  components: {
    navbar,
    seriesbar
  }
};
</script>

<style>
</style>