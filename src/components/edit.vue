<template>
  <div>
      <h2>
        {{post.title}}
      </h2>
      标签：
      <br />
      <p class="tag-input">
        <span v-for="tag in post.tags"> {{tag}} </span>
      </p>
      正文：
      <br />
      <textarea id="postText" v-model="post.post" data-postid="post._id" name="post" rows="30" style="width:100%">
      </textarea>
      <br />
      <p>
        <input type="button" v-on:click="submitPost(post)" value="保存修改" />
        <button id="showDraft" type="button" style="display: none;">草稿</button>
      </p>
  </div>
</template>

<script>
  export default {
    name: 'edit',
    data () {
      return {
        post: ''
      }
    },
    mounted () {
      this.getPostById(this.$route.params.id)
    },
    methods: {
      getPostById (id) {
        const that = this
        this.axios.get('http://127.0.0.1:80/p/' + id).then(res => {
          that.post = res.data.post
        })
      },
      submitPost (post) {
        const that = this
        this.axios.post('http://127.0.0.1:80/edit/' + post._id, {
          post: post.post,
          tag1: post.tags[0],
          tag2: post.tags[1],
          tag3: post.tags[2]
        }).then(res => {
          if (res.data.status === 'success') {
            that.$router.push('/post/' + post._id)
          }
        })
      }
    }
  }
</script>

<style scoped>
</style>
