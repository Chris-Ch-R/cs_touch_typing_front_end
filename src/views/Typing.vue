<template>
  <div>
    <div class="timer" id="timer"></div>
    <div class="container">
      <div class="quote-display" id="quoteDisplay">
        <span v-for="word in words" :key="word.id">{{ word }}</span>
      </div>
      <!-- <div style="position:relative;"> 
        <div id="btext" style="color:transparent;" contenteditable="true"></div>
        <div id="dtext" contenteditable="true"></div>
        <div style="background-color: white;color: rgba(0,0,0,0.3);" contenteditable="true">
          {{posts.content}}
        </div>
      </div> -->
      <textarea
        id="quoteInput"
        class="quote-input"
        autofocus
        v-model="ansInput"
        v-on:input="check"
      ></textarea>
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
      posts: [],
      errors: [],
    };
  },
  created() {
    axios
      .get("http://api.quotable.io/random")
      .then((response) => {
        this.posts = response.data;
        this.splitWords();
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    splitWords() {
      this.words = this.posts.content.split("");
    },
    check() {
      const spanText = document
        .getElementById("quoteDisplay")
        .querySelectorAll("span");

      this.ans = this.ansInput.split("");
      this.words.forEach((x, index) => {
        if (this.ans[index] == null) {
          spanText[index].classList.remove("correct");
          spanText[index].classList.remove("incorrect");
        } else if (this.ans[index] === this.words[index]) {
          spanText[index].classList.add("correct");
          spanText[index].classList.remove("incorrect");
          console.log("correct");
        } else {
          spanText[index].classList.remove("correct");
          spanText[index].classList.add("incorrect");
          console.log("incorrect");
        }
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background-color: #1e0555;
}

body,
.quote-input {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.container {
  background-color: #f0db4f;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 700px;
  max-width: 90%;
}

.timer {
  position: absolute;
  top: 2rem;
  font-size: 3rem;
  color: #f0db4f;
  font-weight: bold;
}

.quote-display {
  margin-bottom: 1rem;
  margin-left: calc(1rem + 2px);
  margin-right: calc(1rem + 2px);
}

.quote-input {
  background-color: transparent;
  border: 2px solid #a1922e;
  outline: none;
  width: 100%;
  height: 8rem;
  margin: auto;
  resize: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}

.quote-input:focus {
  border-color: black;
}

.correct {
  color: green;
}

.incorrect {
  color: red;
  text-decoration: underline;
}

.captcha {
  display: inline-block;
  padding: 0.2em;
  background-color: white;
  border: 1px solid #A9A9A9;
}

.placeholder {
  color: #A9A9A9;
}

.answer {
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
}
</style>
