<template>
  <div class="h-full fixed bg-green-600 overflow-x-hidden min-h-screen">
      <div class=" space-y-6 px-3 py-4">
        <div class="text-3xl text-center font-mono">SERIES</div>
        <nav>
          <div v-for="serie in series" :key="serie.id" style="Background-color">
            <dropDownSeries :serie="serie" />
          </div>
        </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dropDownSeries from "../components/DropDownSeries";
export default {
  data() {
    return {
      series: []
    };
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/series`)
      .then(response => {
        this.series = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  components: {
    dropDownSeries
  }
};
</script>

<style>
</style>