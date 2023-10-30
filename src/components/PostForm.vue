<template >
  <form>
    <input type="text" class="input" placeholder="Название" v-model="title" />
    <input type="text" class="input" placeholder="Описание" v-model="body" />
    <button
      class="btn"
      @click.prevent="
        () => {
          $emit('create-post', { title, body });
          title = '';
          body = '';
        }
      "
    >
      Создать
    </button>
  </form>
</template>

<script>
export default {
  name: "PostList",
  data: () => {
    return {
      title: "",
      body: "",
    };
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>