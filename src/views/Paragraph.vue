<template>
  <div>
    <div class="font-mono text-5xl text-center">{{ paragraph.paragraphs_title }}</div>
    <div class="m-10">
      <typing v-bind:words="this.words" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import typing from "../components/Typing.vue";

export default {
  data() {
    return {
      paragraph: [],
      words: [],
    };
  },
  created() {
    axios
      .get(
        `http://127.0.0.1:8000/api/paragraph/` + this.$route.params.paragraph_id
      )
      .then(response => {
        this.paragraph = response.data;
        this.words = this.paragraph.paragraphs_content.split("");
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  components: {
    typing,
  }
};
</script>

<style>
</style>