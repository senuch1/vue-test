<script>
export default {
    name: "CommentList",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
    },
    props: ['selectedTopic', 'comments'],
};
</script>

<template>
    <div>
        <h3 v-if="selectedTopic">Комментарии для темы "{{ selectedTopic.title }}"</h3>
        <ul>
            <li v-for="comment in comments" :key="comment.id">
                {{ comment.text }}
            </li>
        </ul>
    </div>
</template>

<style>

</style>