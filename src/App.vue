<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import WithoutScriptSetup from './components/essentials/WithoutScriptSetup.vue'
import WithScriptSetup from './components/essentials/WithScriptSetup.vue'
import ReactivityFundamentals from './components/essentials/ReactivityFundamentals.vue'
import ComputedProperties from './components/essentials/ComputedProperties.vue'
import ClassAndStyleBindings from './components/essentials/ClassAndStyleBindings.vue'
import ListRendering from './components/essentials/ListRendering.vue'
import EventHandling from './components/essentials/EventHandling.vue'
import FormInputBindings from './components/essentials/FormInputBindings.vue'
import ComponentsBasics from './components/essentials/ComponentsBasics.vue'
import Watchers from './components/essentials/Watchers.vue'
import TemplateRefs from './components/essentials/TemplateRefs.vue'
import Composables from './components/reusability/Composables.vue'
import WriteComposableStepByStep from './components/reusability/WriteComposableStepByStep.vue'
import CustomDirectives from './components/reusability/CustomDirectives.vue'
import Slots from './components/components-in-depth/Slots.vue'
import Events from './components/components-in-depth/Events.vue'
</script>

<template>
  <h1>Essentials</h1>

  <WithoutScriptSetup />
  <WithScriptSetup />
  <hr />
  <ReactivityFundamentals />
  <hr />
  <ComputedProperties />
  <hr />
  <ClassAndStyleBindings />
  <hr />
  <ListRendering />
  <hr />
  <EventHandling />
  <hr />
  <FormInputBindings />
  <hr />
  <ComponentsBasics />
  <hr />
  <Watchers />
  <hr />
  <TemplateRefs />
  <hr />
  <Composables />
  <hr />
  <WriteComposableStepByStep />
  <hr />
  <CustomDirectives />
  <hr />

  <h1>Components In-Depth</h1>
  <Slots />
  <hr />
  <Events />
  <hr />

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
hr {
  margin: 20px 0;
}

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
