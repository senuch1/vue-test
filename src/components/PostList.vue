<template>
  <div>
    <h2>Список постов:</h2>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @delete-post="$emit('delete-post', post.id)"
    />
    <!-- <div v-show="posts.length === 0">
        <h2>Постов нет!</h2>
    </div> -->
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  name: "PostList",
  components: { PostItem },
  props: ["posts"],
  data: () => {
    return {};
  },
};
</script>

<style scoped></style>