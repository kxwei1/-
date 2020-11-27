<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*公共部分*/
* {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  color: #3ae6fe;
  font-size: 22px;
}
html,body,#app {
  width: 100%;
  height: 100%;
}
.qfcxPro .el-progress-bar__inner {
  background-image: linear-gradient(to right, #455fed , #20cdfe);
}
.jinPro .el-progress-bar__inner {
  background-image: linear-gradient(to right, #e4b702 , #f5cc69);
}
.header-item {
  font-size: 18px;
  color: #8da3cc;
}
.ceil {
  font-size: 18px;
  color: #eef5fd;
}
</style>
