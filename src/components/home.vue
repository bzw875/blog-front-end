<template>
  <div class="hello">
    <article v-for="post in data.posts" v-bind:key="post._id">
      <p>
        <h3>
        <router-link v-bind:to="'/post/' + post._id">{{post.title}}</router-link>

        </h3>
        <p class="info">
          <span title="日期" class="glyphicon glyphicon-time"></span>
          <span data-date="post.time.date.toString()">{{post.time.minute}}</span>
          |
          <span title="标签" class="glyphicon glyphicon-tags"></span>
          <a v-for="tag in post.tags" v-bind:key="tag" class="tag" href="/tags/tag">{{tag}}</a>
        </p>
        <div class="post-content">{{ post.post }}</div>
        <p class="info">
          阅读：{{post.pv}}
        </p>
    </article>
  </div>
</template>


<script>
export default {
  name: 'home',
  data () {
    return {
      data: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    getPost () {
      var that = this
      this.axios.get('http://127.0.0.1:80/home').then(res => {
        that.data = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
