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
    methods: {
        closeCommentList() {
            this.$emit('close-comment-list');
        },
    },
    data() {
        return {
            newCommentText: '',
        };
    },
    methods: {
        closeCommentList() {
            this.$emit('close-comment-list');
        },

        addComment() {
            if (this.newCommentText.trim() !== '') {
                const comment = { text: this.newCommentText };
                this.$emit('add-comment', comment);
                this.newCommentText = '';
            }
        },
        deleteComment(index) {
            const confirmed = confirm('Вы уверены, что хотите удалить этот комментарий?');
            if (confirmed) {
                this.$emit('delete-comment', index);
            }
        },
    },
};
</script>

<template>
    <section class="comment-list">
        <div class="comment">
            <h3 class="comment-list_title" v-if="selectedTopic">Комментарии для темы "{{ selectedTopic.title }}"</h3>
            <div class="comment-add_tools">
                <input class="comment-add_input" v-model="newCommentText" placeholder="Введите комментарий" />
                <button class="comment-add_btn" @click="addComment">Добавить комментарий</button>
            </div>
            <p class="comments" v-for="comment in comments">
                {{ comment.text }}
                <button @click="deleteComment(index)">Удалить</button>
            </p>
            <button class="comment-list_btn" @click="closeCommentList">Закрыть</button>
        </div>
    </section>
</template>

<style>
.comment-list {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    z-index: 99;
    padding: 30px 0;
    background-color: rgba(0, 0, 0, 0.575)
}

.comment {
    background: white;
    width: 1300px;
    height: 400px;
    max-width: 100%;
    max-height: 100%;
    text-align: center;
}

.comment-list_title {
    font-size: 12px;
    color: #0e3eff;
    font-family: 'Montserrat', sans-serif;
}


.comment-add_tools {
    justify-content: space-between;
    display: flex;
    width: 200px;
    margin: 0 auto;
}


.comment-list_btn {
    border: #0e3eff 1px solid;
    background-color: white;
    color: #0e3eff;
    width: 80px;
    height: 40px;
    cursor: pointer;
}

.comment-add_btn {
    border: #0e3eff 1px solid;
    background-color: white;
    color: #0e3eff;
    font-size: 8px;
    width: 80px;
    height: 40px;
    cursor: pointer;
}

.comment-add_input {
    border: #0e3eff 1px solid;
    background-color: white;
    color: #0e3eff;
    font-size: 8px;
    width: 86px;
    height: 40px;
}

.comment-add_input::placeholder {
    color: #0e3eff;
}

.comments {
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
}
</style>