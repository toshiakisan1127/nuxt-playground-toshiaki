// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: "nuxt playground toshiaki",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        { charset: "UTF-16" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
});
