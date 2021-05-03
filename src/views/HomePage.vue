<template>
  <div>
    <narbar />
    <typing />
  </div>
</template>

<script>
import typing from "../components/Typing";
import narbar from "../components/Navbar"
export default {
  data() {
    return {
      test: 0
    };
  },
  components: {
    typing,
    narbar
  },
  mounted() {},
  methods: {}
};
</script>

<style>
</style>
