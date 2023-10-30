<script>
import axios from "axios";
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import MyModal from "./components/UI/MyModal.vue"


export default {
  components: { PostList, PostForm, MyModal},
  data: () => {
    return {
      posts: [
        {
          id: 1,
          title: "Javascript 1",
          body: "Description of post 1",
        },
        {
          id: 2,
          title: "Javascript 2",
          body: "Description of post 2",
        },
        {
          id: 3,
          title: "Javascript 3",
          body: "Description of post 3",
        },
      ],
      title: "",
      body: "",

    };
  },
  methods: {
    createPost({ body, title }) {
      const newPost = {
        id: Date.now(),
        title,
        body,
      };
      this.posts.push(newPost);
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id != id);
    },
    showModal(){
      this.isShown = !this.isShown
    }
  },
};
</script>

<template>
  <div>
    <!-- <PostForm @create-post="createPost" /> -->
    <button @click="showModal">Post</button>
    <MyModal : show="isShown">
      
    </MyModal>
    <PostList :posts="posts" @delete-post="deletePost" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn {
  align-self: flex-end;
  margin-top: 15px;
  border: 1px solid teal;
  padding: 10px 15px;
  background: none;
  color: teal;
}
</style>  