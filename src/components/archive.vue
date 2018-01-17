<template>
  <div>
    <ul>
      <li v-for="post in data.posts" v-bind:key="post._id">
        <div v-if="lastYear != post.time.year">
          <h1>{{post.time.year}}年</h1>
        </div>
        <div v-if="lastMonth != post.time.month">
          <h1>{{post.time.month.split('-')[1]}}月</h1>
        </div>
        <div>
          <time>{{post.time.day}}</time>
        </div>
        <div>
          <router-link v-bind:to="'/post/' + post._id">{{post.title}}</router-link>
        </div>
      </li>
    </ul>
  </div>

</template>



<script>
export default {
  name: 'archive',
  data () {
    return {
      data: '',
      lastYear: '',
      lastMonth: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    getPost () {
      var that = this
      this.axios.get('http://127.0.0.1:80/archive').then(res => {
        that.data = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
