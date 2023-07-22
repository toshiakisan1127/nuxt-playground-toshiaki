<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("app:created", () => {
  console.log("page start");
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  console.log("page finished");
  loading.value = false;
});
</script>

<template>
  <div>
    <NuxtLayout>
      <div v-if="loading">ローディング中</div>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
