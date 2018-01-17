<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <p>用户名：
        <br>
<input type="text" v-model="name">

      </p>
      <p>密码：
        <br>
<input type="password" v-model="password">

      </p>
      <p>
        <input type="submit" value="登录">
      </p>
    </form>
  </div>

</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const that = this
        this.axios.post('http://127.0.0.1:80/login', {
          name: this.name,
          password: this.password
        }).then(res => {
          if (res.data.status === 'success') {
            const token = res.data.token
            window.localStorage.setItem('token', token)
            that.axios.defaults.headers.common['x-access-token'] = token
            alert(token)
            that.$router.push('/')
          }
        })
      }
    }
  }
</script>

<style scoped>
</style>