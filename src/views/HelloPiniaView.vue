<template>
  <h1>Hello Pinia</h1>
  <p>
    This is a simple example of a counter using Pinia. The counter is stored in a Pinia
    store and can be accessed from any component. In this case, we are using the store in
    this view, in the About view and in the Counter component.
  </p>
  <p>All of these components are able to access the same store and update the counter.</p>
  <Counter />

  <div class="buttons">
    <button @click="storeCounter.decreaseCount">-</button>
    <button @click="storeCounter.increaseCount">+</button>
  </div>

  <div>The counter is: {{ storeCounter.oddOrEven }}</div>
  <h3 v-if="storeCounter.isPrimaryNumber" style="color: aqua">
    This is a primary number!
  </h3>

  <!-- Two way data binding: bind input to state of store -->
  <h3>Edit counter:</h3>
  <input v-model="storeCounter.count" type="number" />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import Counter from "@/components/Counter.vue";

const storeCounter = useCounterStore();
</script>

<style scoped>
.count {
  font-size: 60px;
}
.buttons button {
  font-size: 40px;
}
</style>
