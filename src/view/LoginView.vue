<template>
  <div class="login-wrapper">
    <h2>建立我的電子名片</h2>
    <form @submit.prevent="handleSubmit">
      <label>
        姓名：
        <input v-model="form.name" required />
      </label>

      <label>
        職稱：
        <input v-model="form.title" required />
      </label>

      <label>
        公司：
        <input v-model="form.company" required />
      </label>

      <label>
        電話：
        <input v-model="form.phone" required />
      </label>

      <button type="submit">✅ 儲存並進入</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  name: "",
  title: "",
  company: "",
  phone: "",
});

function handleSubmit() {
  localStorage.setItem("myCard", JSON.stringify(form));
  router.push({ name: "home" });
}
</script>

<style scoped>
.login-wrapper {
  max-width: 360px;
  margin: 80px auto;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
}

label {
  display: block;
  margin-bottom: 12px;
  color: #333;
}

input {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 4px;
}

button {
  margin-top: 16px;
  width: 100%;
  padding: 10px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}
</style>
