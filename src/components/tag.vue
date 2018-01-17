<template>
  <div>
    <ul class="archive">
      <li v-for="post in data.posts" v-bind:key="post._id">
        <h3 v-if="lastYear != post.time.year">{{post.time.year}}</h3>
        <div>
          <time>{{post.time.day}}</time>
          <router-link v-bind:to="'/post/' + post._id">{{post.title}}</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tag',
  data () {
    return {
      data: '',
      lastYear: 0
    }
  },
  mounted () {
    this.getPost(this.$route.params.tag)
  },
  methods: {
    getPost (tag) {
      var that = this
      this.axios.get('http://127.0.0.1:80/tags/' + tag).then(res => {
        that.data = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
