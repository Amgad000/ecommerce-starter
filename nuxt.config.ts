// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/image"],

  colorMode: {
    preference: "system",
    classSuffix: "",
  },

  app: {
    head: {
      link: [
        // adding font Roboto
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
          rel: "stylesheet",
        },
        // --------------------------------------
      ],
    },
  },

  compatibilityDate: "2024-07-10",
});
