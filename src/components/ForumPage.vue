<script>
export default {
    data() {
        return {
            topics: JSON.parse(localStorage.getItem('topics')) || [],
            newTopic: null,
            selectedTopic: null,
            comments: [],
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
        showComments(topicId) {

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
    <CommentList :selectedTopic="selectedTopic" :comments="comments" />
    <Footer />
</template>
