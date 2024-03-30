<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import WithoutScriptSetup from './components/essentials/WithoutScriptSetup.vue'
import ReactivityFundamentals from './components/essentials/ReactivityFundamentals.vue'
import ComputedProperties from './components/essentials/ComputedProperties.vue'
import ClassAndStyleBindings from './components/essentials/ClassAndStyleBindings.vue'
</script>

<template>
  <WithoutScriptSetup />
  <ReactivityFundamentals />
  <ComputedProperties />
  <ClassAndStyleBindings />

  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
