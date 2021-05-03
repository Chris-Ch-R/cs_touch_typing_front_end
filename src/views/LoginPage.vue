<template>
  <div class="relative bg-green-400 h-screen">
    <div class="absolute top-1/3 w-full flex justify-center">
      <div class="flex bg-gray-300 p-5 shadow-2xl rounded-lg">
        <img
          src="../assets/images/KU_logo_name.png"
          alt="logo_KU"
          class="p-5"
        />
        <div>
          <h3 class="text-5xl p-5 font-mono">CS TOUCH TYPING</h3>
          <div class="flex justify-center p-5">
            <GoogleLogin
              :params="params"
              :renderParams="renderParams"
              :onSuccess="onSuccess"
              :onFailure="onFailure"
            ></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
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
          "971929386601-nr1h5oi81ve8jna4gvcoud318k6hs8lq.apps.googleusercontent.com"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    };
  },
  components: {
    GoogleLogin
  },
  methods: {
    onSuccess(googleUser) {
      this.$store.dispatch("login", {
        name: googleUser.getBasicProfile().getName(),
        imageUrl: googleUser.getBasicProfile().getImageUrl()
      });
      this.$router.push("/");
    },
    onFailure(errorData) {
      console.log("ErrorMessage:" + errorData);
    }
  }
};
</script>

<style>

</style>
