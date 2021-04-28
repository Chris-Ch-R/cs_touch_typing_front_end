<template>
  <div>
    <div class="relative">
      <div
        id="inputDiv"
        contenteditable="true"
        v-on:input="checkValue()"
        class="absolute text-transparent"
        autofocus
      >{{test}}</div>
      <dir id="quoteDisplay" class="absolute m-0 p-0">
        <span v-for="word in words" :key="word.id" :id="word.id">{{word}}</span>
      </dir>
    </div>
    <!-- <textarea
      id="quoteInput"
      class="quote-input"
      v-model="ansInput"
      v-on:input="checkValue()"
    ></textarea> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      words: [],
      ans: [],
      ansInput: "",

      test: ""
    };
  },
  created() {
    axios
      .get(`http://api.quotable.io/random`)
      .then(response => {
        this.words = response.data;
        this.words = this.splitSpace(this.words.content);
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    splitSpace(arr) {
      return arr.split("");
    },
    checkValue() {
      const spanTexts = document
        .getElementById("quoteDisplay")
        .querySelectorAll("span");
      const ansInput = document.getElementById("inputDiv").textContent;
      this.ans = ansInput.split("");
      this.words.forEach((x, index) => {
        if (this.ans[index] == null) {
          spanTexts[index].classList.remove("text-green-800");
          spanTexts[index].classList.remove("text-red-700");
        } else if (this.ans[index] === this.words[index]) {
          spanTexts[index].classList.remove("text-red-700");
          spanTexts[index].classList.add("text-green-800");
        } else {
          spanTexts[index].classList.remove("text-green-800");
          spanTexts[index].classList.add("text-red-700");
        }
      });
    }
  },
  computed: {}
};
</script>

<style>
</style>