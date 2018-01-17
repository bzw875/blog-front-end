<template>
  <div>
    <h2>
      {{post.title}}
    </h2>
    <p>
      <router-link v-bind:to="'/edit/' + post._id">编辑</router-link>
      <a href="javascrip:;" v-on:click="deletePost()">删除</a>
    </p>
    <p class="info">
      <span title="日期" class="glyphicon glyphicon-time"></span>
      <span title="标签" class="glyphicon glyphicon-tags"></span>
      <router-link v-for="tag in post.tags" v-bind:key="tag" v-bind:to="'/tags/' + tag">{{tag}}</router-link>
    </p>
    <p>
      {{post.post}}
    </p>
    <p class="info">
      阅读： {{post.pv}}
    </p>

  </div>

</template>
<script>
  export default {
    name: 'articleDetail',
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
      deletePost () {
        const that = this
        this.axios.get('http://127.0.0.1:80/remove/' + this.post._id).then(res => {
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