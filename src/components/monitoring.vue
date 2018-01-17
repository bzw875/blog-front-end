<template>
  <div>
    
<h4>CPU</h4>
<table style="width:100%">
    <tr>
        <th>model</th>
        <th>speed</th>
        <th>user</th>
        <th>nice</th>
        <th>sys</th>
        <th>idle</th>
        <th>irq</th>
    </tr>
    <tr v-for="cpu in cpus" v-bind:key="cpu.irq">
        <td>{{  cpu.model }}</td>
        <td>{{  cpu.speed }}</td>
        <td>{{  cpu.times.user }}</td>
        <td>{{  cpu.times.nice }}</td>
        <td>{{  cpu.times.sys }}</td>
        <td>{{  cpu.times.idle }}</td>
        <td>{{  cpu.times.irq }}</td>
    </tr>
</table>
<h4>Architecture</h4>
<p>{{  arch }}</p>
<h4>systemTime</h4>
<p>{{  systemTime.toLocaleString() }}</p>
<h4>RAM</h4>
<p>Total: {{  Math.floor(totalmem / 1048576) }} MB</p>
<p>Usage: {{  Math.floor(usage / 1048576) }} MB / {{  Math.floor(usage / totalmem * 100) }} %</p>
<p>Rree: {{   Math.floor(freemem / 1048576) }} MB / {{  Math.floor(freemem / totalmem * 100) }} %</p>
<h4>Load average</h4>
<p>{{  loadavg }}</p>
  </div>
</template>
<script>
export default {
  name: 'monitoring',
  data () {
    return {
      cpus: '',
      arch: '',
      freemem: '',
      loadavg: '',
      systemTime: '',
      totalmem: '',
      usage: ''
    }
  },
  mounted () {
    var that = this
    this.axios.get('http://127.0.0.1:80/monitoring/').then(res => {
      var data = res.data
      that.cpus = data.cpus
      that.arch = data.arch
      that.freemem = data.freemem
      that.loadavg = data.loadavg
      that.systemTime = data.systemTime || ''
      that.totalmem = data.totalmem
      that.usage = data.usage
    })
  }
}
</script>

<style scoped>

</style>
