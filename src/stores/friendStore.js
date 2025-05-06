import { ref } from "vue";
import { defineStore } from "pinia";

const useFriendStore = defineStore("friend", () => {
  const friendList = ref([
    {
      id: 1,
      name: "張三",
      title: "工程師",
      company: "ABC 公司",
      phone: "0900-000-000",
      avatar: "https://picsum.photos/200/300?grayscale",
    },
    {
      id: 2,
      name: "李四",
      title: "設計師",
      company: "XYZ 公司",
      phone: "0911-222-333",
      avatar: "https://picsum.photos/200/300/",
    },
    {
      id: 3,
      name: "王五",
      title: "產品經理",
      company: "ACME 公司",
      phone: "0988-123-456",
      avatar: "https://picsum.photos/id/870/200/300",
    },
  ]);

  function getFriendList() {}

  function addFriend(res) {
    friendList.value.push(res);
  }

  function deleteFriend(id) {
    friendList.value = friendList.value.filter((f) => f.id !== id);
  }

  return {
    friendList,

    getFriendList,
    addFriend,
    deleteFriend,
  };
});

export default useFriendStore;
