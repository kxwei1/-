/*
 * @Description: 安全接入区
 * @Version: 1.0
 * @Autor: 孟祥辉
 * @Date: 2020-11-26 09:42:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-27 09:10:10
 */
/**============================================================================
 *
 * Author: luo1o1o1o 
 *
 * QQ: 330240995, PHONE: 17600071321
 *
 * Last modified: 2020-11-17 17:41
 *
 * Filename: safetyAccessAreaCom.js
 *
 * Description: 安全接入区  
 *
 ============================================================================**/
import * as THREE from 'three'
let safetyAccessAreaCom = {
  data() {
    return {
      safetyAccessAreaSize: {
        x: 500,
        y: 0,
        z: 400
      }
    }
  },
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-17 15:37
     * @desc: 安全接入区
     */
    addsafetyAccessArea() {
      let x = this.safetyAccessAreaSize.x
      let y = this.safetyAccessAreaSize.y
      let z = this.safetyAccessAreaSize.z
      let safetyAccessAreaGroup = new THREE.Group()
      safetyAccessAreaGroup.position.set(
        -(
          this.centerBottomFloorSize.x / 2 -
          this.safetyAccessAreaSize.x / 2 +
          720
        ),
        this.centerBottomFloorSize.y + 70,
        this.centerBottomFloorSize.z / 2 -
        this.safetyAccessAreaSize.z / 2 -
        600
      )
      // 加入地板
      let plane = this.addPlaneGeometry({
        size: { x: x, y: z },
        color: 0x1f3f96,
        borderColor: 0x2094fa
      })
      plane.rotateX(Math.PI / 2)
      safetyAccessAreaGroup.add(plane)
      //加入地板1
      let plane1 = this.addPlaneGeometry({
        size: { x: x, y: z },
        color: 0x107546,
        borderColor: 0x2094fa
      })
      plane1.rotateX(Math.PI / 2)
      safetyAccessAreaGroup.add(plane1)
      plane1.position.y = -10
      //加入地板2
      let plane2 = this.addPlaneGeometry({
        size: { x: x, y: z },
        color: 0x0b4d37,
        borderColor: 0x2094fa
      })
      plane2.rotateX(Math.PI / 2)
      safetyAccessAreaGroup.add(plane2)
      plane2.position.y = -20
      // 加入光墙
      // let lightWall = this.addLightAroundWall({ x, y, z })
      // lightWall.position.y += 2
      // safetyAccessAreaGroup.add(lightWall)
      //   加入中间三个图标
      let serverImgText = this.addsafetyAccessAreaTopGroup({ x, y, z })
      safetyAccessAreaGroup.add(serverImgText)
      // 添加title
      let title = this.addTextGrometry({
        txt: '安全接入区',
        fontSize: 40,
        color: 0x2cfffd,
        toTop: true
      })
      title.geometry.center()
      title.position.y += title.geometry.boundingBox.max.y
      title.position.x = this.safetyAccessAreaSize.x / 2 - 10
      title.rotateY(Math.PI / 2)
      safetyAccessAreaGroup.add(title)
      return safetyAccessAreaGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-22 21:44
     * @desc: 添加 盒子上 摆放的元素
     */
    addsafetyAccessAreaTopGroup({ x, y, z }) {
      let group = new THREE.Group()
      group.position.y = y
      let pw = z / 5 // 分成五分排列
      // 添加 应用服务器集群
      let yyfwqjqTxt = this.addTextGrometry({
        txt: '通信前置服务器集群',
        fontSize: 20,
        color: 0x00f6ff,
        toTop: true
      })
      yyfwqjqTxt.geometry.center()
      yyfwqjqTxt.position.z = 1.5 * pw
      group.add(yyfwqjqTxt)
      // 数据库服务器集群
      // let sjkfwqjqTxt = this.addTextGrometry({
      //   txt: '数据库服务器集群',
      //   fontSize: 20,
      //   color: 0x00f6ff,
      //   toTop: true
      // })
      // sjkfwqjqTxt.geometry.center()
      // sjkfwqjqTxt.position.z = -0.5 * pw
      // group.add(sjkfwqjqTxt)
      // 添加图标
      let imgTxtMargin = 150
      // 黄色服务器
      let yellowServerLeft = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'yellow_server.png'
        },
        txtInfo: {
          txt: '110台',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      yellowServerLeft.position.z = 0.5 * pw
      yellowServerLeft.position.x = -imgTxtMargin / 2
      group.add(yellowServerLeft)
      // 下方 蓝色服务器
      let blueServerLeft = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'blue_server.png'
        },
        txtInfo: {
          txt: '9台',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerLeft.position.z = 0.5 * pw
      blueServerLeft.position.x = imgTxtMargin / 2
      group.add(blueServerLeft)
      // 右边图标
      let yellowServerRight = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'yellow_server.png'
        },
        txtInfo: {
          txt: '110台',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerRight.position.set(-10, 0, 0.5 * pw)
      yellowServerRight.position.z = -1.5 * pw
      yellowServerRight.position.x = -imgTxtMargin / 2
      group.add(yellowServerRight)
      // 下方蓝色服务器

      let blueServerRight = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'blue_server.png'
        },
        txtInfo: {
          txt: '9台',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerRight.position.z = -1.5 * pw
      blueServerRight.position.x = imgTxtMargin / 2
      group.add(blueServerRight)
      return group
    },
  }
}
export default safetyAccessAreaCom
