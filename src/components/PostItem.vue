<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: {
        id: 1,
        title: "default post",
        body: "none",
      },
    },
  },
};
</script>

<template>
  <div class="post" :key="post.id">
    <div class="post-content" id="{{ post.id }}">
      <div class=""><strong>Название: </strong> {{ post.title }}</div>
      <div class=""><strong>Описание: </strong> {{ post.body }}</div>
      <button class="btn-post-delete" @click="$emit('delete-post')">Удалить пост</button>
    </div>
  </div>
</template>

<style scoped>
.post {
  padding: 15px;
  border: 1px solid teal;
  margin-top: 15px;
}
.btn-post-delete{
    background-color: teal;
    border: none;
    color: white;
    border-radius: 10%;
    width: 60px;
    height: 30px;
}
</style>