<template>
  <div class="card-app">
    <!-- 名片區塊 -->
    <div class="card">
      <img
        class="avatar"
        src="https://picsum.photos/id/237/200/300
"
        alt="Avatar"
      />
      <div class="info">
        <h2>{{ myData.name }}</h2>
        <p>{{ myData.title }}</p>
        <p>{{ myData.company }}</p>
        <p>{{ myData.phone }}</p>
      </div>
    </div>

    <!-- QR Code 區塊 -->
    <div class="qrcode-box">
      <button @click="scanQr">掃描 QR 碼</button>
      <img class="qrcode" :src="qrcode" alt="QR Code" />
    </div>
  </div>

  <QrScanner v-if="showCamera" @scanned="getScanned" @close="close"></QrScanner>
  <FriendConfirmModal
    v-if="qrData"
    :card="qrData"
    @cancel="cancel"
    @confirm="confirm"
  ></FriendConfirmModal>
</template>

<script setup>
import { ref, onMounted } from "vue";
import QRCode from "qrcode";

import QrScanner from "../components/QrScanner.vue";
import FriendConfirmModal from "../components/FriendConfirmModal.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const myData = ref({
  name: "張三",
  title: "工程師",
  phone: "0900-000-000",
  company: "ABC 公司",
});
const qrcode = ref("");
const showCamera = ref(false);
const qrData = ref(null);

function scanQr() {
  alert("這裡可以觸發 QRCode 掃描功能");
  showCamera.value = true;
}

function getScanned(res) {
  console.log(res);
  qrData.value = res;
}

function close() {
  console.log("close");
  showCamera.value = false;
}

function cancel() {
  qrData.value = null;
}

function confirm() {
  router.push({ name: "list" });
}

onMounted(() => {
  QRCode.toDataURL(JSON.stringify(myData.value))
    .then((url) => {
      console.log(url);
      qrcode.value = url;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style scoped>
.card-app {
  width: 500px;
  margin: 40px auto;
  padding: 16px;
  font-family: sans-serif;
  background: #f9f9f9;
}

.card,
.qrcode-box {
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.card .avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 16px;
  object-fit: cover;
}

.info h2 {
  margin: 0 0 4px;
  font-size: 1.4rem;
}

.info p {
  margin: 2px 0;
  color: #333;
}

.qrcode-box {
  justify-content: space-between;
}

.qrcode-box button {
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #333;
  color: #333;
  background: white;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.3s;
}

.qrcode-box button:hover {
  background: #eee;
}

.qrcode-box .qrcode {
  width: 100px;
  height: 100px;
}
</style>
