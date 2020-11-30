/*
 * @Description: 安全接入区
 * @Version: 1.0
 * @Autor: 孟祥辉
 * @Date: 2020-11-26 09:42:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 09:58:15
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
      yellowServerLeft.position.y = 20
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
      blueServerLeft.position.y = 20
      group.add(blueServerLeft)
      // 右边图标
      let yellowServerRight = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: '认证(1)@2x.png'
        },
        txtInfo: {
          txt: '3A认证服务器',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerRight.position.set(-10, 0, 0.5 * pw)
      yellowServerRight.position.z = -1.5 * pw
      yellowServerRight.position.x = -imgTxtMargin / 2
      yellowServerRight.position.y = 20
      group.add(yellowServerRight)
      // 下方蓝色服务器

      let blueServerRight = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: '图层 1712@2x.png'
        },
        txtInfo: {
          txt: 'IPS',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerRight.position.z = -1.5 * pw
      blueServerRight.position.x = imgTxtMargin / 2
      blueServerRight.position.y = 20
      group.add(blueServerRight)






      //=======================================================
      //右侧
      let leftYellowServerLeft = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: '集中器@2x.png'
        },
        txtInfo: {
          txt: '采集终端',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      leftYellowServerLeft.position.z = 0.5 * pw - 400
      leftYellowServerLeft.position.x = -imgTxtMargin / 2
      leftYellowServerLeft.position.y = 20
      group.add(leftYellowServerLeft)
      // 下方 蓝色服务器
      let leftBlueServerLeft = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: '电能表 拷贝@2x.png'
        },
        txtInfo: {
          txt: '电能表',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      leftBlueServerLeft.position.z = 0.5 * pw - 400
      leftBlueServerLeft.position.x = imgTxtMargin / 2
      leftBlueServerLeft.position.y = 20

      group.add(leftBlueServerLeft)


      let leftBlueServerRight = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: '电能表 拷贝@2x.png'
        },
        txtInfo: {
          txt: '电能表',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      leftBlueServerRight.position.z = -0.5 * pw - 320
      leftBlueServerRight.position.x = imgTxtMargin / 2 - 310
      leftBlueServerRight.position.y = 20

      group.add(leftBlueServerRight)
      // 右边图标
      let rightYellowServerRight = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: '电能表 拷贝@2x.png'
        },
        txtInfo: {
          txt: '电能表',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerRight.position.set(-10, 0, 0.5 * pw)
      rightYellowServerRight.position.z = -1.5 * pw - 400
      // rightYellowServerRight.position.y = 20
      rightYellowServerRight.position.x = -imgTxtMargin / 2
      group.add(rightYellowServerRight)
      // 下方蓝色服务器





      let VTMBox1 = this.addFloatBoxFaceText9()
      // VTMBox.position.z = z - 350
      // VTMBox.position.x = x / 2 - 960
      VTMBox1.position.y = 80 + 150
      group.add(VTMBox1)

      let leftPlane = this.addPlaneGeometry({
        size: { x: 40, y: 260 },
        color: 0x28409a,
        borderColor: 0x28409a
      })
      leftPlane.rotateX(Math.PI / 2)
      leftPlane.rotateY(Math.PI / 2)
      leftPlane.position.y = 80 + 150
      leftPlane.position.x = 10
      leftPlane.position.z = 295
      group.add(leftPlane)



      let centerPlane = this.addPlaneGeometry({
        size: { x: 40, y: 260 },
        color: 0x28409a,
        borderColor: 0x28409a
      })
      centerPlane.rotateX(Math.PI / 2)
      centerPlane.rotateY(Math.PI / 2)

      centerPlane.position.y = 80 + 150
      centerPlane.position.x = 10
      centerPlane.position.z = 0 + 15
      group.add(centerPlane)


      let rightPlane = this.addPlaneGeometry({
        size: { x: 40, y: 260 },
        color: 0x28409a,
        borderColor: 0x28409a
      })
      rightPlane.rotateX(Math.PI / 2)
      rightPlane.rotateY(Math.PI / 2)

      rightPlane.position.y = 80 + 150
      rightPlane.position.x = 10
      rightPlane.position.z = -270
      group.add(rightPlane)


      let leftPlane1 = this.addPlaneGeometry({
        size: { x: 40, y: 260 },
        color: 0x28409a,
        borderColor: 0x28409a
      })
      leftPlane1.rotateX(Math.PI / 2)
      leftPlane1.rotateY(Math.PI / 2)
      leftPlane1.position.y = 80 + 68 + 150
      leftPlane1.position.x = 10
      leftPlane1.position.z = 295
      group.add(leftPlane1)



      let centerPlane1 = this.addPlaneGeometry({
        size: { x: 40, y: 260 },
        color: 0x28409a,
        borderColor: 0x28409a
      })
      centerPlane1.rotateX(Math.PI / 2)
      centerPlane1.rotateY(Math.PI / 2)

      centerPlane1.position.y = 80 + 68 + 150
      centerPlane1.position.x = 10
      centerPlane1.position.z = 0 + 15
      group.add(centerPlane1)


      let rightPlane1 = this.addPlaneGeometry({
        size: { x: 40, y: 260 },
        color: 0x28409a,
        borderColor: 0x28409a
      })
      rightPlane1.rotateX(Math.PI / 2)
      rightPlane1.rotateY(Math.PI / 2)

      rightPlane1.position.y = 80 + 68 + 150
      rightPlane1.position.x = 10
      rightPlane1.position.z = -270
      group.add(rightPlane1)

      let leftPlane2 = this.addPlaneGeometry({
        size: { x: 40, y: 260 },
        color: 0x28409a,
        borderColor: 0x28409a
      })
      leftPlane2.rotateX(Math.PI / 2)
      leftPlane2.rotateY(Math.PI / 2)
      leftPlane2.position.y = 80 - 68 + 150
      leftPlane2.position.x = 10
      leftPlane2.position.z = 295
      group.add(leftPlane2)



      let centerPlane2 = this.addPlaneGeometry({
        size: { x: 40, y: 260 },
        color: 0x28409a,
        borderColor: 0x28409a
      })
      centerPlane2.rotateX(Math.PI / 2)
      centerPlane2.rotateY(Math.PI / 2)

      centerPlane2.position.y = 80 - 68 + 150
      centerPlane2.position.x = 10
      centerPlane2.position.z = 0 + 15
      group.add(centerPlane2)


      let rightPlane2 = this.addPlaneGeometry({
        size: { x: 40, y: 260 },
        color: 0x28409a,
        borderColor: 0x28409a
      })
      rightPlane2.rotateX(Math.PI / 2)
      rightPlane2.rotateY(Math.PI / 2)

      rightPlane2.position.y = 80 - 68 + 150
      rightPlane2.position.x = 10
      rightPlane2.position.z = -270
      group.add(rightPlane2)

      //==========================================================

      // 添加线段 安全接入区
      let aqjrqLeftLine = this.addPolyline({
        point: [
          { x: x / 2 - 180, y: 26, z: z / 2 - 555 },
          // { x: x / 2 - 300, y: 26, z: z / 2 - 555 },
          { x: x / 2 - 470, y: 26, z: z / 2 - 555 },

        ],
        color: 0x5af9ff,
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      }
      )
      aqjrqLeftLine.position.y = -36 / 2
      group.add(aqjrqLeftLine)
      let aqjrqRightLine = this.addPolyline({

        point: [
          { x: x / 2 - 470, y: 26, z: z / 2 - 575 },
          // { x: x / 2 - 300, y: 26, z: z / 2 - 575 },
          { x: x / 2 - 180, y: 26, z: z / 2 - 575 },
        ],
        color: 0x5af9ff,
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      }
      )
      aqjrqRightLine.position.y = -36 / 2
      group.add(aqjrqRightLine)


      //===========================
      //左侧
      let leftaqjrqLeftLine = this.addPolyline({
        point: [
          { x: x / 2 - 340, y: 26, z: z / 2 - 720 },
          // { x: x / 2 - 340, y: 26, z: z / 2 - 555 },
          { x: x / 2 - 340, y: 26, z: z / 2 - 400 },
        ],
        color: 0x5af9ff,
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      }
      )
      leftaqjrqLeftLine.position.y = -36 / 2
      group.add(leftaqjrqLeftLine)
      let leftaqjrqRightLine = this.addPolyline({

        point: [
          { x: x / 2 - 310, y: 26, z: z / 2 - 400 },
          // { x: x / 2 - 310, y: 26, z: z / 2 - 555 },
          { x: x / 2 - 310, y: 26, z: z / 2 - 720 },

        ],
        color: 0x5af9ff,
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      }
      )
      leftaqjrqRightLine.position.y = -36 / 2
      group.add(leftaqjrqRightLine)


      //=============================================
      //右侧
      let rightaqjrqLeftLine = this.addPolyline({
        point: [
          { x: x / 2 - 340, y: 26, z: z / 2 - 580 },
          { x: x / 2 - 340, y: 26, z: z / 2 - 720 },
        ],
        color: 0x5af9ff,
        arrow: {
          show: false,
          color: 0x5af9ff,
          scale: 0.8
        }
      }
      )
      rightaqjrqLeftLine.position.y = -36 / 2
      // group.add(rightaqjrqLeftLine)
      let rightaqjrqRightLine = this.addPolyline({

        point: [
          { x: x / 2 - 310, y: 26, z: z / 2 - 720 },
          { x: x / 2 - 310, y: 26, z: z / 2 - 580 },
        ],
        color: 0x5af9ff,
        arrow: {
          show: false,
          color: 0x5af9ff,
          scale: 0.8
        }
      }
      )
      rightaqjrqRightLine.position.y = -36 / 2
      // group.add(rightaqjrqRightLine)







      return group
    },
  }
}
export default safetyAccessAreaCom
