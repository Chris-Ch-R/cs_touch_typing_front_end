<template>
  <header class="sticky top-0 z-50">
    <div class="shadow-xl bg-gradient-to-r from-white to-green-200">
      <div
        class="flex items-center justify-between px-4 py-3 container mx-auto"
      >
        <router-link to="/" class="flex items-stretch hover:animate-pulse">
          <img
            src="../assets/images/KU_logo_name.png"
            alt="logoKU"
            class="h-10"
          />
          <h3 class="text-3xl font-mono self-center px-3">CS TOUCH TYPING</h3>
        </router-link>
        <div class="flex relative">
          <button
            class="focus:outline-none"
            @click="isProfileOpen = !isProfileOpen"
          >
            <img
              src="../assets/images/default-profile.jpg"
              alt="profile"
              class="h-10 rounded-full"
            />
          </button>
          <div
            :class="isProfileOpen ? 'block' : 'hidden'"
            class="origin-top-right absolute right-0 mt-10 w-48 rounded-md shadow-lg py-1 bg-white focus:outline-none animate-fade-in-down"
          >
            <button
              @click="logout"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full focus:outline-none"
            >
              Sign out
            </button>
          </div>

          <div>
            <button
              @click="toggleManu"
              type="button"
              class="block text-grey-500 focus:outline-none hover:text-white sm:hidden p-2"
            >
              <i id="icon" class="fas fa-bars text-green-800 text-3xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="isMenuOpen ? 'block' : 'hidden'"
      class="bg-green-800 justify-center shadow-xl w-full sm:flex"
    >
      <router-link
        to="/"
        class="block text-xl font-mono text-white hover:bg-green-600 p-3 sm:mx-3 transition"
        >HOME</router-link
      >

      <router-link
        to="/about"
        class="block text-xl font-mono text-white hover:bg-green-600 p-3 sm:mx-3 transition"
        >ABOUT</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isProfileOpen: false
    };
  },
  methods: {
    toggleManu() {
      if (this.isMenuOpen) {
        document.getElementById("icon").classList.remove("fa-times");
        document.getElementById("icon").classList.add("fa-bars");
      } else {
        document.getElementById("icon").classList.remove("fa-bars");
        document.getElementById("icon").classList.add("fa-times");
      }
      this.isMenuOpen = !this.isMenuOpen;
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
</style>