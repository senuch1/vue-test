<script>
export default {
    data() {
        return {
            topics: JSON.parse(localStorage.getItem('topics')) || [],
            newTopic: null,
            selectedTopic: null,
            comments: [],
            isCommentListVisible: false,

        };
    },
    methods: {
        saveTopics() {
            localStorage.setItem('topics', JSON.stringify(this.topics));
        },
        addTopic(newTopic) {
            const topic = { id: Date.now(), title: newTopic };
            this.topics.push(topic);
            this.newTopic = topic;
            this.saveTopics();
        },
        showComments(topic) {
            this.selectedTopic = topic;
            this.comments = this.selectedTopic.comments || [];
            this.isCommentListVisible = true;
        },
        closeCommentList() {
            this.selectedTopic = null;
            this.comments = [];
            this.isCommentListVisible = false;
        },
        addComment(comment) {
            if (this.selectedTopic) {
                this.selectedTopic.comments = this.selectedTopic.comments || [];
                this.selectedTopic.comments.push(comment);
                this.saveTopics();
                this.comments = [...this.selectedTopic.comments];
            }
        },
        deleteTopic(topicId) {
            this.topics = this.topics.filter(topic => topic.id !== topicId);
            this.saveTopics();
        },
    },
};
</script>
  

<template>
    <Header />
    <Forum @new-topic="addTopic" />
    <TopicList :topics="topics" :new-topic="newTopic" @show-comments="showComments" @delete-topic="deleteTopic" />
    <CommentList v-if="isCommentListVisible" :selectedTopic="selectedTopic" :comments="comments"
        @close-comment-list="closeCommentList" @add-comment="addComment" />
    <Footer />
</template>

<style></style>    