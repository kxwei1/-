/**============================================================================
 *
 * Author: wx 
 *
 * QQ: , PHONE: 
 *
 * Last modified: 2020-11-20 18:14
 *
 * Filename: marketingBusiness.js
 *
 * Description: 营销移动作业
 *
 ============================================================================**/

import * as THREE from 'three'
let MarketingMobileJob = {
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-20 18:51
     * @desc: 添加营销移动作业模块
     */
    addMarketingMobileJob() {
      let x = 305
      let y = 20
      let z = 395
      let marketingBusinessGroup = new THREE.Group()

      marketingBusinessGroup.position.set(
        (this.centerBottomFloorSize.x - x) / 2 - 280 - 30 * 2,
        this.centerBottomFloorSize.y + y / 2 + 10 + 10,
        -640
      )

      // 添加光墙
      let lightWall = this.addLightAroundWall({ x, y, z })
      lightWall.position.y += 2
      marketingBusinessGroup.add(lightWall)
      let topGroup = this.addMarketingMobileJobBoxTopGroup({ x, y, z })

      marketingBusinessGroup.add(topGroup)

      return marketingBusinessGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-22 21:44
     * @desc: 添加 盒子上 摆放的元素
     */
    addMarketingMobileJobBoxTopGroup({ x, y, z }) {
      let group = new THREE.Group()
      group.position.y = y
      let pw = z / 5 // 分成五分排列
      // 添加 应用服务器集群
      let yyfwqjqTxt = this.addTextGrometry({
        txt: '应用服务器集群',
        fontSize: 20,
        color: 0x00f6ff,
        toTop: true
      })
      yyfwqjqTxt.geometry.center()
      yyfwqjqTxt.position.z = 1.5 * pw
      group.add(yyfwqjqTxt)
      // 数据库服务器集群
      let sjkfwqjqTxt = this.addTextGrometry({
        txt: '数据库服务器集群',
        fontSize: 20,
        color: 0x00f6ff,
        toTop: true
      })
      sjkfwqjqTxt.geometry.center()
      sjkfwqjqTxt.position.z = -0.5 * pw
      group.add(sjkfwqjqTxt)
      // 添加图标
      let imgTxtMargin = 100
      // 黄色服务器
      let yellowServerLeft = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'yellow_server.png'
        },
        txtInfo: {
          txt: '110台',
          fontSize: 18,
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
          fontSize: 18,
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
          fontSize: 18,
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
          fontSize: 18,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerRight.position.z = -1.5 * pw
      blueServerRight.position.x = imgTxtMargin / 2
      group.add(blueServerRight)
      // 营销移动作业线段
      let yxydzyLeftLine = this.addLine(
        [
          { x: x / 2 - 300, y: 25, z: z / 2 - 180 },
          { x: x / 2 - 380, y: 25, z: z / 2 - 180 },
          { x: x / 2 - 380, y: 45, z: z / 2 - 180 },
          { x: x / 2 - 815, y: 45, z: z / 2 - 180 },
        ]
      )
      yxydzyLeftLine.position.y = -36 / 2
      group.add(yxydzyLeftLine)
      let yxydzyRightLine = this.addLine(
        [
          { x: x / 2 - 300, y: 25, z: z / 2 - 30 - 180 },
          { x: x / 2 - 380, y: 25, z: z / 2 - 30 - 180 },
          { x: x / 2 - 380, y: 45, z: z / 2 - 30 - 180 },
          { x: x / 2 - 815, y: 45, z: z / 2 - 30 - 180 },
        ]
      )
      yxydzyRightLine.position.y = -36 / 2
      group.add(yxydzyRightLine)


      let yxydzyBackLeftline = this.addLine(
        [
          { x: x / 2 - 885 - 65, y: 45, z: z / 2 - 180 - 30 },
          { x: x / 2 - 935 - 100, y: 45, z: z / 2 - 180 - 30 },
          { x: x / 2 - 935 - 100, y: 45, z: z / 2 - 15 },
        ]
      )
      yxydzyBackLeftline.position.y = -36 / 2
      group.add(yxydzyBackLeftline)

      let yxydzyFrontLeftline = this.addLine(
        [
          { x: x / 2 - 885 - 65, y: 45, z: z / 2 - 180 },
          { x: x / 2 - 905 - 100, y: 45, z: z / 2 - 180 },
          { x: x / 2 - 905 - 100, y: 45, z: z / 2 - 15 },
        ]
      )
      yxydzyFrontLeftline.position.y = -36 / 2
      group.add(yxydzyFrontLeftline)
      return group
    },
  }
}
export default MarketingMobileJob
