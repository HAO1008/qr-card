<template>
  <div class="modal-backdrop">
    <div class="modal-card">
      <h3>確認加為好友？</h3>
      <div class="info">
        <p><strong>姓名：</strong>{{ card.name }}</p>
        <p><strong>職稱：</strong>{{ card.title }}</p>
        <p><strong>電話：</strong>{{ card.phone }}</p>
      </div>
      <div class="actions">
        <button @click="$emit('confirm', card)">✅ 加好友</button>
        <button @click="$emit('cancel')">❌ 取消</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ card: Object });
defineEmits(["confirm", "cancel"]);
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 {
  color: #333;
}

.modal-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 320px;
  width: 100%;
}

.info {
  color: #333;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
