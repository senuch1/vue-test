<script>
import MyInput from './UI/MyInput.vue';
import MyButton from './UI/MyButton.vue';
export default {
  components:{MyButton,MyInput},
  name: "PostForm",
  props: {
    changeShow: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  data: () => {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    sendPostEntity() {
      this.$emit("create-post", { title: this.title, body: this.body });
      this.title = "";
      this.body = "";
      this.changeShow();
    },
    changeTitle(value){
      this.title = value
    },
    changeValue(value){
      this.body = value
    }
  },
};
</script>

<template>
  <form>
    <!-- <input type="text" class="input" placeholder="название" v-model="title" />
    <input type="text" class="input" placeholder="описание" v-model="body" /> -->

    <MyButton class="" @click.prevent="sendPostEntity"> Создать </MyButton>
    <MyInput
    :value="title"
    :placeholder="'название'"
    @change-value="changeTitle"
    />
    <MyInput
    :value="body"
    :placeholder="'описание'"
    @change-value="changeValue"
    />
    
  </form>
</template>

<style scoped>
.close-button {
  background-color: red;
}
</style>