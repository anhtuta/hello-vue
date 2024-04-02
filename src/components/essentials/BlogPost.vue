<script setup>
defineProps({
    title: String,
    author: {
        type: String,
        default: 'Anonymous'
    }
})
const emit = defineEmits(['enlarge-text', 'shrink-text'])
</script>

<template>
    <h3 class="post-title">{{ title }} - posted by <i>{{ author }}</i></h3>
    <!-- Content Distribution with Slots. This is equivalent to this.props.children in React -->
    <slot />

    <!-- $emit and emit are the same, maybe $emit is from vue2. Note: emit is the output of defineEmits -->
    <button @click="$emit('enlarge-text')">Enlarge text</button>
    <button @click="emit('shrink-text')">Shrink text</button>
</template>

<style scoped>
.post-title {
    color: yellow;
    font-size: 1.5rem;
}
</style>