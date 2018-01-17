<template>
  <div>
    <h2>标签</h2>
    <router-link v-bind:key="tag" v-for="tag in data.posts" v-bind:to="'/tags/' + tag">{{tag}}</router-link>
  </div>
</template>
<script>
export default {
  name: 'tags',
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
      this.axios.get('http://127.0.0.1:80/tags').then(res => {
        that.data = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
