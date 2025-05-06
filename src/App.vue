<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  let myCard = localStorage.getItem("myCard");
  if (!myCard) {
    router.push({ name: "login" });
  }
});
</script>

<template>
  <div class="layout">
    <RouterView />
  </div>
</template>
