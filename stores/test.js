import { defineStore } from "pinia";
import { ref } from "vue";
export const useTestStore = defineStore(
  "test",
  () => {
    let nub = ref(0);
    function addNub() {
      nub.value++;
    }
    return { nub, addNub };
  },
  {
    // 开启持久化保存
    persist: true,
  }
);
