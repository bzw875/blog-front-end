<template>
  <div>
    <p><input class="title-input" type="text" placeholder="标题..." v-model="title"></p>
    <p><label>标签</label></p>
    <p class="tag-input">
        <input type="text" v-model="tag1">
        <input type="text" v-model="tag2">
        <input type="text" v-model="tag3">
    </p>
    <p><label>类型</label></p>
    <p>
        <label><input type="radio" v-model="contentType" value="Markdown" checked>Markdown</label>
        <label><input type="radio" v-model="contentType" value="HTML">HTML</label>
    </p>
    <p><label>正文</label></p>
    <p><textarea v-model="post" rows="30" cols="100"></textarea></p>
    <p><input type="submit" v-on:click="submitPost()" value="发表"></p>

  </div>
</template>
<script>
  export default {
    name: 'post',
    data () {
      return {
        title: '',
        tag1: '',
        tag2: '',
        tag3: '',
        post: '',
        contentType: 'Markdown'
      }
    },
    methods: {
      submitPost () {
        const that = this
        this.axios.post('http://127.0.0.1:80/post/', {
          title: this.title,
          tag1: this.tag1,
          tag2: this.tag2,
          tag3: this.tag3,
          post: this.post,
          contentType: this.contentType
        }).then(res => {
          if (res.data.status === 'success') {
            that.$router.push('/')
          }
        })
      }
    }
  }
</script>

<style scoped>
</style>

