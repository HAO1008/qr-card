<template>
  <div class="scanner-wrapper">
    <div class="scanner-header">
      <h2>掃描 QRCode 加入好友</h2>
      <button class="close-btn" @click="handleClose">✕</button>
    </div>
    <div id="qr-reader" class="qr-reader"></div>
    <p v-if="error" class="error-text">{{ error }}</p>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { Html5Qrcode } from "html5-qrcode";

const emit = defineEmits(["scanned", "close"]);

const error = ref("");
let qrCodeScanner = null;

function handleClose() {
  // stopScanner();
  emit("close");
}

function stopScanner() {
  if (qrCodeScanner) {
    qrCodeScanner
      .stop()
      .then(() => {
        qrCodeScanner.clear();
      })
      .catch((err) => {
        console.error("停止掃描錯誤", err);
      });
  }
}

onMounted(() => {
  const config = { fps: 10, qrbox: 250 };

  qrCodeScanner = new Html5Qrcode("qr-reader");

  qrCodeScanner
    .start(
      { facingMode: "environment" },
      config,
      (decodedText) => {
        try {
          const parsed = JSON.parse(decodedText);
          emit("scanned", parsed);
          handleClose();
        } catch (e) {
          error.value = "掃到的內容不是有效的名片格式";
        }
      },
      () => {}
    )
    .catch((err) => {
      error.value = "啟動相機失敗：" + err;
    });
});

onBeforeUnmount(() => {
  // stopScanner();
});
</script>

<style scoped>
.scanner-wrapper {
  position: relative;
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  max-width: 360px;
  margin: 40px auto;
  text-align: center;
}

.scanner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.scanner-header h2 {
  color: #333;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #333;
}

.qr-reader {
  width: 100%;
  margin: 0 auto;
}

.error-text {
  color: red;
  font-size: 0.9rem;
  margin-top: 12px;
}
</style>
