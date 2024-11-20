import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  //===== state =====//
  const count = ref(0);

  //===== actions: to modify the state =====//
  function increaseCount() {
    count.value++;
  }
  function decreaseCount() {
    count.value--;
  }
  function doubleCount() {
    count.value *= 2;
  }

  //===== getters: to get the state, or compute new values based on the state =====//
  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return "even";
    return "odd";
  });
  const isPrimaryNumber = computed(() => {
    const num = count.value;
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });

  return {
    // state
    count,

    // actions
    increaseCount,
    decreaseCount,
    doubleCount,

    // getters
    oddOrEven,
    isPrimaryNumber,
  };
});
