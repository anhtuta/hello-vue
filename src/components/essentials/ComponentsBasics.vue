<script setup>
import { ref } from 'vue'
import BlogPost from './BlogPost.vue'

const posts = ref([
    { id: 1, title: 'My journey with Vue', content: `Hello VueJS, I'm happy to learn it!` },
    { id: 2, title: 'Blogging with Vue', author: 'Tuzaku', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, nobis tenetur perferendis odio quos, soluta voluptate suscipit a cumque necessitatibus eveniet, excepturi ut. Error placeat assumenda beatae' },
    { id: 3, title: 'Why Vue is so fun', content: 'Another one' }
])
const postFontSize = ref(1)
</script>

<template>
    <h1>Components Basics</h1>
    <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogPost v-for="post in posts" :key="post.id" :title="post.title" :author="post.author"
            @enlarge-text="postFontSize += 0.1" @shrink-text="postFontSize -= 0.1">
            <p>{{ post.content }}</p>
            <div>Some extra information</div>
        </BlogPost>
    </div>
</template>