<template>
    <div class="relative font-mono text-3xl text-left">
      <!-- input Div  -->
      <div
        id="inputDiv"
        :contenteditable="isTimeRunning"
        v-on:keydown.delete="pressDelete"
        v-on:keypress="typing"
        class="absolute focus:outline-none text-transparent z-50 w-full"
        spellcheck="false"
        autocomplete="off"
        autocorrect="off"
        autofocus
      ></div>

      <!-- display origin words -->
      <div id="display" class="absolute select-none text-gray-400">
        <span v-for="word in words" :key="word.id">{{word}}</span>
      </div>

      <!-- display curcer only curcer -->
      <div class="absolute select-none text-transparent">
        <span>{{words.join('').substr(0,currentCursor)}}</span>
        <span class="animate-pulse-faster bg-blue-200 text-gray-400">{{words[currentCursor]}}</span>
        <span>{{words.join('').substr(currentCursor+1,words.length)}}</span>
      </div>

    </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    words: {
      type: Array,
      requied: true,
      default: () => {
        return ["T", "h", "i", "s", " ", "i", "s", " ", "t", "h", "e", " ", "d", "e", "f", "a", "u", "l", "t", " ", "t", "e", "x", "t"]
      }
    }
  },
  data() {
    return {
      currentCursor: 0,
      allTypedEntries: 0,
      uncorrectedErrors: 0,
      timer: 0,
      isTimeRunning: true,
    };
  },
  methods: {
    pressDelete(){
      if(this.currentCursor > 0){
        document.getElementById("display")
        .querySelectorAll("span")[this.currentCursor - 1]
        .classList.remove("text-green-800", "bg-green-300","text-red-800", "bg-red-300");
        this.currentCursor--;
      }
    },
    typing(event) {
      if (this.allTypedEntries == 0){
        this.countUpTimer();
      }
      if (this.currentCursor == this.words.length){
        this.isTimeRunning = false
        this.savedScore();
      }
      if (this.currentCursor < this.words.length){
        const spanTexts = document.getElementById("display").querySelectorAll("span");
        if(event.key === this.words[this.currentCursor]){
          spanTexts[this.currentCursor].classList.add("text-green-800", "bg-green-300");
        }
        else{
          spanTexts[this.currentCursor].classList.add("text-red-800", "bg-red-300");
          this.uncorrectedErrors++;
        }
        this.allTypedEntries++;
        this.currentCursor++;
      }
    },
    countUpTimer() {
      if (this.isTimeRunning){
        setTimeout(() => {
            this.timer += 1
            this.countUpTimer()
        }, 1000)
      }
    },
    savedScore(){

      console.log("saved func");
      axios.post('http://127.0.0.1:8000/api/add', 
      {
        "name": "test",
        "allTypedEntries": this.allTypedEntries,
        "uncorrectedErrors": this.uncorrectedErrors,
        "countTime": this.timer
      })
           .then(
             console.log("success")
           ).catch(e => {
             console.log(e);
            });
    }
  },
};
</script>

<style>
</style>