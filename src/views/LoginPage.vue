<template>
  <div>
    in new page.
    <GoogleLogin
      :params="params"
      :renderParams="renderParams"
      :onSuccess="onSuccess"
      :onFailure="onFailure"
    ></GoogleLogin>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";

export default {
  name: "App",
  data() {
    return {
      params: {
        client_id:
          "971929386601-nr1h5oi81ve8jna4gvcoud318k6hs8lq.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    onSuccess(googleUser) {
      this.$store.dispatch('login', {
        name: googleUser.getBasicProfile().getName(),
        imageUrl: googleUser.getBasicProfile().getImageUrl()
      })
      this.$router.push('/')
    },
    onFailure(errorData) {
      console.log("ErrorMessage:" + errorData);
    },
  },
};
</script>

<style></style>
