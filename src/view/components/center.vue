<template>
  <div class="center-box">
    <div class="topology-img" ref="topology-img"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js' // 计算动画运行轨迹
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import drawImgMixin from './threejs/drawImgMixin'
import centerBottomFloorCom from './threejs/centerBottomFloorCom'
import centerRedWallCom from './threejs/centerRedWallCom'
import productionControlDomainCom from './threejs/productionControlDomainCom'
import marketingBusiness from './threejs/marketingBusiness'
import APIgatewayCom from './threejs/APIgatewayCom'
import MarketingMobileJobCom from './threejs/MarketingMobileJobCom'
import ElectricityConsumptionInformationCom from './threejs/ElectricityConsumptionInformationCom'
import networkSecurityCom from './threejs/networkSecurityCom'
import InternetRegionCom from './threejs/InternetRegionCom'

import intranetOfficeDomainCom from './threejs/intranetOfficeDomainCom'
import moveHomeworkTerminalCom from './threejs/moveHomeworkTerminalCom'
import powerPaymentCom from './threejs/powerPaymentCom'
import powerSelfCom from './threejs/powerSelfCom'
import safetyAccessAreaCom from './threejs/safetyAccessAreaCom'
import safetyAccessPlatfrom1Com from './threejs/safetyAccessPlatfrom1Com'
import safetyAccessPlatfromCom from './threejs/safetyAccessPlatfromCom'
// import event from './threejs/event'

export default {
  mixins: [
    drawImgMixin,
    centerBottomFloorCom,
    productionControlDomainCom,
    centerRedWallCom,
    marketingBusiness,
    APIgatewayCom,
    MarketingMobileJobCom,
    ElectricityConsumptionInformationCom,
    networkSecurityCom,
    InternetRegionCom,

    intranetOfficeDomainCom,
    moveHomeworkTerminalCom,
    powerPaymentCom,
    powerSelfCom,
    safetyAccessAreaCom,
    safetyAccessPlatfrom1Com,
    safetyAccessPlatfromCom,
  ],
  data() {
    return {
      scene: '', // 场景
      camera: '', // 摄像机
      renderer: '', // 渲染器
      width: 5160,
      height: 1264,
      hoverDict: {
        centerBottomFloor: 'glxxdq',
      },
    }
  },
  async mounted() {
    this.font = await this.loaderFont()
    this.initThreeJs()
    this.setImage()
  },
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-13 10:37
     * @desc: 初始化 three.js
     */
    initThreeJs() {
      this.initScene()
      this.initCamera()
      this.initLight()
      this.initMouseEvent()
    },

    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-14 13:26
     * @desc: 注册场景
     */
    initScene() {
      this.scene = new THREE.Scene()
      this.renderer = new THREE.WebGLRenderer({
        alpha: true, // 背景是否透明
        antilias: true, // 抗锯齿
        preserveDrawingBuffer: true, // 保存缓冲区
        sortObjects: false,
        logarithmicDepthBuffer: true,
      })
      // this.renderer.setPixelRatio(2) // 设置超级清晰
      this.renderer.setPixelRatio(window.devicePixelRatio)

      // this.scene.add(new THREE.AxesHelper(500))
      this.renderer.setSize(this.width, this.height)
      this.$refs['topology-img'].appendChild(this.renderer.domElement)
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-17 17:21
     * @desc: 设置光线
     */
    initLight() {
      let shadowLight = new THREE.DirectionalLight(0xffffff, 0.8)
      shadowLight.position.set(200, 500, -500)
      let basicMaterial = new THREE.MeshBasicMaterial({ color: 0xf5f5f5 })
      let shadowTarget = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        basicMaterial
      )
      shadowTarget.visible = false
      shadowTarget.name = 'shadowTarget'
      shadowLight.target = shadowTarget
      this.scene.add(shadowTarget)
      this.scene.add(shadowLight)
      let light = new THREE.AmbientLight(0xffffff, 0.3)
      this.scene.add(light)
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-14 13:25
     * @desc: 注册相机
     */
    initCamera() {
      // this.camera = new THREE.OrthographicCamera(
      //   -this.width / 2,
      //   this.width / 2,
      //   this.height / 2,
      //   -this.height / 2,
      //   1,
      //   2000
      // )
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        1,
        5000
      )
      // this.camera.position.set(-3420 / 2, 1500, 500);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)

      this.controls.update()

      this.camera.position.set(900 * 2, 600 * 2, 200 * 2)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-13 10:53
     * @desc: 设置图形
     */
    setImage() {
      // 设置背景色
      // this.renderer.setClearColor(new THREE.Color(0x00092a));
      this.renderer.setClearAlpha(0)
      this.addCenterAllGroup()
      this.goDrawing()
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-16 17:03
     * @desc: 设置中间区域总体 group
     */
    addCenterAllGroup() {
      let centerGroup = new THREE.Group()
      let floor = this.addCenterBottomFloor()
      centerGroup.add(floor)
      // 生产控制域
      // let PCDGroup = this.addProductionControlDomain()
      // centerGroup.add(PCDGroup)
      // 添加红墙区域
      // let centerRedWallGroup = this.addCenterRedWallCom()
      // centerGroup.add(centerRedWallGroup)
      // 内网办公域
      // let IODGroup = this.addintranetOfficeDomain()
      // centerGroup.add(IODGroup)
      // 移动作业终端
      // let moveHomeworkTerminalCom = this.addmoveHomeworkTerminal()
      // centerGroup.add(moveHomeworkTerminalCom)
      // 电力缴费pos
      // let powerPaymentCom = this.addpowerPayment()
      // centerGroup.add(powerPaymentCom)
      // 电力自助终端（社会）
      // let powerSelfCom = this.addpowerSelf()
      // centerGroup.add(powerSelfCom)
      // 安全接入区
      // let safetyAccessAreaCom = this.addsafetyAccessArea()
      // centerGroup.add(safetyAccessAreaCom)
      // // 安全接入平台
      // let safetyAccessPlatfromCom = this.addsafetyAccessPlatfrom()
      // centerGroup.add(safetyAccessPlatfromCom)
      // // 安全接入平台
      // let safetyAccessPlatfrom1Com = this.addsafetyAccessPlatfrom1()
      // centerGroup.add(safetyAccessPlatfrom1Com)

      // // API网关
      // let APIwangguan = this.addAPIwangguan()
      // centerGroup.add(APIwangguan)
      // 营销业务应用
      let marketingBusinessGroup = this.addMarketingBusinessCom()
      centerGroup.add(marketingBusinessGroup)
      // // 营销移动作业模块
      // let MarketingMobileJob = this.addMarketingMobileJob()
      // centerGroup.add(MarketingMobileJob)
      // 用电信息采集
      // let ElectricityConsumptionInformation = this.addElectricityConsumptionInformation()
      // centerGroup.add(ElectricityConsumptionInformation)
      this.scene.add(centerGroup)
      let rightGroup = new THREE.Group()
      // 信息网络安全隔离装置
      // let networkSecurityCom = this.addnetworkSecurity()
      // rightGroup.add(networkSecurityCom)
      // 互联网大区
      // let InternetRegionCom = this.addInternetRegion()
      // rightGroup.add(InternetRegionCom)
      this.scene.add(rightGroup)
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-13 10:37
     * @desc: 画图
     */
    goDrawing() {
      this.renderer.render(this.scene, this.camera)
      this.animate()
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-16 11:26
     * @desc: 循环执行
     */
    animate() {
      requestAnimationFrame(this.animate)

      // required if controls.enableDamping or controls.autoRotate are set to true
      this.controls.update()
      this.faceArr.forEach((geometry) => {
        geometry.rotation.copy(this.camera.rotation)
        geometry.updateMatrix()
      })
      TWEEN.update()

      this.renderer.render(this.scene, this.camera)
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-27 16:43
     * @desc: 设置鼠标事件
     */
    initMouseEvent() {
      // this.raycaster = new THREE.Raycaster() // 光线投射，确定鼠标点击位置
      // this.mouse = new THREE.Vector2() // 二维平面坐标
      this.renderer.domElement.addEventListener(
        'mousemove',
        this.mousemove,
        false
      )
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-27 16:47
     * @desc: 鼠标点击事件
     */
    mousemove(e) {
      e.preventDefault()
      let intersects = this.getIntersects(
        e,
        this.renderer,
        this.camera,
        this.scene
      )
      // let dom = this.scene.getObjectByName('glxxdq')
      if (intersects.length != 0) {
        let find = []
        intersects.forEach((item) => {
          let hoverStr = this.hoverDict[item.object.name] || ''
          if (hoverStr && hoverStr != '' && find.indexOf[hoverStr] != -1) {
            find.push(hoverStr)
          }
        })
        for (let i in this.hoverDict) {
          let dom = this.scene.getObjectByName(this.hoverDict[i])
          dom.visible = false
        }
        find.forEach((key) => {
          let dom = this.scene.getObjectByName(key)
          dom.visible = true
        })
      }
    },
  },
}
</script>

<style scoped>
.center-box {
  margin-top: 200px;
  width: 5160px;
  height: 1264px;
}
.topology-img {
  width: 100%;
  height: 100%;
}
</style>
