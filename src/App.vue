<template>
  <div id="app">
    <header>
    <nav>
        <router-link to="/">Demo</router-link>
        <router-link to="/archive">存档</router-link>
        <router-link to="/tags">标签</router-link>
        <router-link to="/upload">上传图片</router-link>
        <router-link to="/monitoring">系统监控</router-link>
        <router-link to="/post">发表</router-link>
        <router-link to="/login">登录</router-link>
        <a href="javascript:;" v-on:click="logout">登出</a>
        <router-link to="javascript:;">搜索</router-link>
        <router-link to="/about">关于</router-link>
    </nav>
    </header>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    logout () {
      window.localStorage.removeItem('token')
      this.axios.defaults.headers.common['x-access-token'] = ''
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
