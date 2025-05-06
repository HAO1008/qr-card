<template>
  <div class="friend-list">
    <h1>好友列表</h1>
    <div v-for="friend in friendList" :key="friend.id" class="friend-card">
      <img class="avatar" :src="friend.avatar" alt="avatar" />
      <div class="info">
        <h2>{{ friend.name }}</h2>
        <p>{{ friend.title }}</p>
        <p>{{ friend.company }}</p>
        <p>{{ friend.phone }}</p>
      </div>
      <button class="delete-btn" @click="deleteFriend(friend.id)">刪除</button>
    </div>
    <div v-if="friendList.length == 0" class="friend-card">你這邊緣人~</div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import useFriendStore from "../stores/friendStore";

const friendStore = useFriendStore();
const { deleteFriend } = friendStore;
const { friendList } = storeToRefs(friendStore);

onMounted(() => {});
</script>

<style scoped>
.friend-list {
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
  background: #f9f9f9;
  font-family: sans-serif;
}

.friend-list h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.friend-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  color: #cfcfcf;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 16px;
}

.info {
  flex: 1;
}

.info h2 {
  margin: 0;
  font-size: 1.2rem;
}

.info p {
  margin: 2px 0;
  color: #333;
  font-size: 0.95rem;
}

.delete-btn {
  padding: 6px 12px;
  font-size: 0.9rem;
  background: white;
  border: 1px solid #333;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  color: #333;
}

.delete-btn:hover {
  background: #eee;
}
</style>
