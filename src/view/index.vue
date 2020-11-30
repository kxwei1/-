<template>
  <div class="index">
    <div class="indexHeader">营销业务安全监控</div>
    <div class="channelLeft">
      <left-model></left-model>
    </div>
    <div class="channelCenter">
      <center-model></center-model>
    </div>
    <div class="channelRight">
      <right-model @yujingTabChange="yujingTabChange"></right-model>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
import { demo } from '@/api/index' //请求函数
import LeftModel from './components/left'
import CenterModel from './components/center'
import RightModel from './components/right'

export default {
  name: 'index',
  components: {
    LeftModel,
    CenterModel,
    RightModel,
  },
  mounted() {},
  data() {
    return {}
  },
  methods: {
    //请求函数demo
    demos() {
      let info = {
        startDate: 'dddd',
      }
      demo(info)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //安全预警TAB切换
    yujingTabChange(query) {
      switch (query) {
        case 'jiekou':
          console.log('jiekou')
          break
        case 'yunxing':
          console.log('yunxing')
          break
        case 'yingyong':
          console.log('yingyong')
          break
      }
    },
  },
}
</script>

<style scoped>
.index {
  width: 9600px;
  height: 1620px;
  display: flex;
  background: #091436;
  background-image: url('../assets/img/beijing.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #00b2e1;
  font-size: 22px;
  display: flex;
}
.indexHeader {
  position: absolute;
  left: 4500px;
  top: 35px;
  width: 600px;
  font-size: 72px;
  font-weight: bold;
  font-family: '苹方';
  z-index: 10;
}
.channelLeft {
  width: 2270px;
  height: 100%;
  border: 1px solid white;
}
.channelCenter {
  width: 5060px;
  height: 100%;
}
.channelRight {
  width: 2270px;
  height: 100%;
  border: 1px solid white;
}
</style>
