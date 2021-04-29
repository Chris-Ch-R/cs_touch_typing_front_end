<template>
  <div>
    <div class="relative font-mono text-3xl">
      
      <!-- input Div ( h--screen and w-screen can delete ) -->
      <div
        id="inputDiv"
        contenteditable="true"
        v-on:keydown.delete="pressDelete"
        v-on:keypress="checkValue"
        class="absolute text-transparent focus:outline-none text-left h-screen w-screen"
        autofocus
      ></div>

      <!-- display origin words ( text-left can't be delete )-->
      <div id="display" class="absolute text-left text-gray-400">
        <span v-for="word in words" :key="word.id">{{word}}</span>
      </div>

      <!-- display curcer only curcer ( text-left can't be delete )-->
      <div class="absolute text-left text-transparent">
        <span>{{words.join('').substr(0,current)}}</span>
        <span class="animate-pulse-faster bg-blue-200 text-gray-400">{{words[current]}}</span>
        <span>{{words.join('').substr(current+1,words.length)}}</span>
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
      current: 0,
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

    pressDelete(){
      if(this.current > 0){
        document.getElementById("display").querySelectorAll("span")[this.current - 1].classList.remove("text-green-800", "bg-green-300","text-red-800", "bg-red-300");
        this.current--;
      }
    },

    checkValue(event) {
      const spanTexts = document.getElementById("display").querySelectorAll("span");
      if (this.current < this.words.length){
        if(event.key === this.words[this.current]){
          spanTexts[this.current].classList.add("text-green-800", "bg-green-300");
        }
        else{
          spanTexts[this.current].classList.add("text-red-800", "bg-red-300");
        }
        this.current++;
      }
    }

  },
  computed: {}
};
</script>

<style></style>
