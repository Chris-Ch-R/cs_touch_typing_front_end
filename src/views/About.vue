<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <div v-if="posts">
        {{posts}}
    </div> -->
    <div v-for="post in posts" :key="post.id">
        <div>{{post.p_file}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
      return{
        posts: [],
        errors: []
      }
    },
    created(){
      axios.get('http://127.0.0.1:8000/api/paragraph')
      .then(response => {

        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
}
</script>
