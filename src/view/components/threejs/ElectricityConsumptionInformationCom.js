/**============================================================================
 *
 * Author: luo1o1o1o 
 *
 * QQ: 330240995, PHONE: 17600071321
 *
 * Last modified: 2020-11-20 18:14
 *
 * Filename: marketingBusiness.js
 *
 * Description: API网关
 *
 ============================================================================**/

import * as THREE from 'three'
let ElectricityConsumptionInformation = {
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-20 18:51
     * @desc: 用电信息采集
     */
    addElectricityConsumptionInformation() {
      let x = 405
      let y = 20
      let z = 445
      let marketingBusinessGroup = new THREE.Group()

      marketingBusinessGroup.position.set(
        (this.centerBottomFloorSize.x - x) / 2 - 100 - 30 * 2,
        this.centerBottomFloorSize.y + y / 2 + 10 + 10,
        1040
      )
      // 添加光墙
      let lightWall = this.addLightAroundWall({ x, y, z })
      lightWall.position.y += 2
      marketingBusinessGroup.add(lightWall)
      let topGroup = this.addElectricityConsumptionInformationBoxTopGroup({ x, y, z })

      marketingBusinessGroup.add(topGroup)

      return marketingBusinessGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-22 21:44
     * @desc: 添加 盒子上 摆放的元素
     */
    addElectricityConsumptionInformationBoxTopGroup({ x, y, z }) {
      let group = new THREE.Group()
      group.position.y = y
      group.position.z = +100
      let pw = z / 6 // 分成五分排列
      // 添加 应用服务器集群
      let yyfwqjqTxt = this.addTextGrometry({
        txt: '应用服务器集群',
        fontSize: 20,
        color: 0x00f6ff,
        toTop: true
      })
      yyfwqjqTxt.geometry.center()
      yyfwqjqTxt.position.z = pw
      group.add(yyfwqjqTxt)
      // 数据库服务器集群
      let sjkfwqjqTxt = this.addTextGrometry({
        txt: '数据库服务器集群',
        fontSize: 20,
        color: 0x00f6ff,
        toTop: true
      })
      sjkfwqjqTxt.geometry.center()
      sjkfwqjqTxt.position.z = -0.6 * pw
      group.add(sjkfwqjqTxt)
      // 接口服务器集群
      let jkfwqqjTxt = this.addTextGrometry({
        txt: '接口服务器集群',
        fontSize: 20,
        color: 0x00f6ff,
        toTop: true
      })
      jkfwqqjTxt.geometry.center()
      jkfwqqjTxt.position.z = -2.6 * pw
      group.add(jkfwqqjTxt)
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
      yellowServerLeft.position.z = 0.3 * pw
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
      blueServerLeft.position.z = 0.3 * pw
      blueServerLeft.position.x = imgTxtMargin / 2
      group.add(blueServerLeft)
      // 中间图标
      let yellowServerCenter = this.addNormalImgText({
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
      yellowServerCenter.position.z = -1.5 * pw
      yellowServerCenter.position.x = -imgTxtMargin / 2
      group.add(yellowServerCenter)
      // 下方蓝色服务器

      let blueServerCenter = this.addNormalImgText({
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
      blueServerCenter.position.z = -1.5 * pw
      blueServerCenter.position.x = imgTxtMargin / 2
      group.add(blueServerCenter)
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
      yellowServerRight.position.z = -3.5 * pw
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
      blueServerRight.position.z = -3.5 * pw
      blueServerRight.position.x = imgTxtMargin / 2
      group.add(blueServerRight)

      return group
    },

  }
}
export default ElectricityConsumptionInformation
