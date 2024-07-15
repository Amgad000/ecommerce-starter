<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5 relative">
        <h1 class="text-3xl font-bold text-blue-500">SoleStyle</h1>
        <button
          @click="navOpen = !navOpen"
          class="nav-btn inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div
          :class="navOpen ? 'block' : 'hidden'"
          class="w-full absolute top-[80%] left-0 md:block md:w-auto md:relative">
          <ul
            class="nav-menu font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li
              v-for="link in links"
              :key="link.link"
              class="text-center w-full">
              <NuxtLink
                :to="link.link"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                @click="navOpen = false"
                >{{ link.name }}</NuxtLink
              >
            </li>

            <li class="theme-btn">
              <ThemeIcon />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const links = ref([
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Products", link: "/products" },
  { name: "Contact", link: "/contact" },
]);
const navOpen = ref(false);

const closeMenu = (event) => {
  if (
    // !event.target.closest(".theme-btn") &&
    !event.target.closest(".nav-menu") &&
    !event.target.closest(".nav-btn")
  ) {
    navOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeMenu);
});

onUnmounted(() => {
  document.removeEventListener("click", closeMenu);
});
</script>
<style>
.router-link-active,
.router-link-exact-active {
  @apply text-primary-700 dark:text-primary-500;
}
</style>
