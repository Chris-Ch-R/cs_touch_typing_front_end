<template>
  <div>
    <typing />
    <button class="p-20" @click="logout">log out</button>
  </div>
</template>

<script>
import typing from "../components/Typing";

export default {
  data() {
    return {
      test: 0
    };
  },
  components: {
    typing
  },
  mounted() {},
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
</style>
