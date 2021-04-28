<template>
  <div>
    <div class="relative  text-3xl">
      <div
        id="inputDiv"
        contenteditable="true"
        v-on:input="checkValue()"
        class="absolute text-transparent focus:outline-none text-left h-screen w-screen"
        autofocus
      ></div>
      <div id="quoteDisplay" class="absolute text-left">
        <span v-for="word in words" :key="word.id" :id="word.id">{{
          word
        }}</span>
      </div>
    </div>
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

      test: "",
    };
  },
  created() {
    axios
      .get(`http://api.quotable.io/random`)
      .then((response) => {
        this.words = response.data;
        this.words = this.splitSpace(this.words.content);
      })
      .catch((e) => {
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
      this.ans = document.getElementById("inputDiv").textContent.split("");
      if (this.ans == null) {
        len = 0;
      } else {
        var len = this.ans.length;
      }
      console.log(len);

      this.words.forEach((x, index) => {
        spanTexts[len].classList.add("animate-pulse-faster", "bg-blue-200");
        if (this.ans[index] == null) {
          spanTexts[index].classList.remove(
            "animate-pulse-faster",
            "bg-blue-200"
          );
          spanTexts[index].classList.remove("text-green-800", "bg-green-300");
          spanTexts[index].classList.remove("text-red-700", "bg-red-400");
        } else if (this.ans[index] === this.words[index]) {
          spanTexts[len - 1].classList.remove(
            "animate-pulse-faster",
            "bg-blue-200"
          );
          spanTexts[index].classList.remove("text-red-700", "bg-red-400");
          spanTexts[index].classList.add("text-green-800", "bg-green-300");
        } else {
          spanTexts[len - 1].classList.remove(
            "animate-pulse-faster",
            "bg-blue-200"
          );
          spanTexts[index].classList.remove("text-green-800", "bg-green-300");
          spanTexts[index].classList.add("text-red-700", "bg-red-400");
        }
      });
    },
  },
  computed: {},
};
</script>

<style></style>
