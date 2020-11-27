/*
 * @Description: 
 * @Author: kxwei
 * @Date: 2020-11-25 14:42:09
 * @LastEditTime: 2020-11-26 10:27:22
 * @FilePath: \security\src\view\components\threejs\networkSecurityCom.js
 * @LastModifiedBy: kxwei
 */
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
 * Description: 信息网络安全隔离装置
 *
 ============================================================================**/

import * as THREE from 'three'
let networkSecurityCom = {
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-20 18:51
     * @desc: 信息网络安全隔离装置
     */
    addnetworkSecurity() {
      let x = 655
      let y = 20
      let z = 50
      let marketingBusinessGroup = new THREE.Group()

      marketingBusinessGroup.position.set(
        (this.centerBottomFloorSize.x - x) / 2 + 130 - 30 * 2,
        this.centerBottomFloorSize.y + y / 2 + 10 + 10,
        -1900
      )
      // 加入地板
      let plane = this.addPlaneGeometry({
        size: { x: x, y: z },
        color: 0x041648,
        borderColor: 0x104b77
      })
      let plane2 = this.addPlaneGeometry({
        size: { x: x + 220, y: z + 100 },
        color: 0x041648,
        borderColor: 0x104b77
      })
      plane.rotateX(Math.PI / 2)
      marketingBusinessGroup.add(plane)
      plane2.rotateX(Math.PI / 2)
      marketingBusinessGroup.add(plane2)
      plane2.position.z = -200

      let networkSecurityLine = this.addParallelLine(
        [
          { x: x / 2 - 300, y: 15, z: z / 2 + 530 },
          { x: x / 2 - 300, y: 15, z: z / 2 - 349 },
          { x: x / 2 - 300, y: 15, z: z / 2 - 350 },
        ],
        {
          color: 0x1eeafa,
          startDirection: 'v', // 开始节点为水平
          endDirection: 'h' // 结束点为垂直
        }
      )
      networkSecurityLine.position.y = -36 / 2
      marketingBusinessGroup.add(networkSecurityLine)


      let topGroup = this.addnetworkSecurityBoxTopGroup({ x, y, z })
      marketingBusinessGroup.add(topGroup)
      return marketingBusinessGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-22 21:44
     * @desc: 添加 盒子上 摆放的元素
     */
    addnetworkSecurityBoxTopGroup({ x, y, z }) {
      let group = new THREE.Group()
      group.position.y = y
      group.position.z = -20
      let pw = z / 3 // 分成五分排列
      // 添加 信息网络安全隔离装置
      let yyfwqjqTxt = this.addTextGrometry({
        txt: '信息网络安全隔离装置',
        fontSize: 28,
        color: 0x00f6ff,
        toTop: true
      })
      yyfwqjqTxt.geometry.center()
      yyfwqjqTxt.position.z = 1.5 * pw
      group.add(yyfwqjqTxt)
      // 第一个盒子
      let blueServerLeft1 = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'blue_server.png'
        },
        txtInfo: {
          txt: '基于流量安全监控',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerLeft1.position.z = 0.5 * pw - 200
      blueServerLeft1.position.x = +360
      group.add(blueServerLeft1)

      // 黄色服务器
      let yellowServerLeft = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'blue_server.png'
        },
        txtInfo: {
          txt: '抗拒绝服务攻击设备',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      yellowServerLeft.position.z = 0.5 * pw - 200
      yellowServerLeft.position.x = +240
      group.add(yellowServerLeft)
      // 下方 蓝色服务器
      let blueServerLeft3 = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'blue_server.png'
        },
        txtInfo: {
          txt: '数据脱敏服务器',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerLeft3.position.z = 0.5 * pw - 200
      blueServerLeft3.position.x = +120
      group.add(blueServerLeft3)
      let yellowServerLeft1 = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'yellow_server.png'
        },
        txtInfo: {
          txt: '防火墙',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft1.position.set(-10, 0, 0.5 * pw)
      yellowServerLeft1.position.z = 0.5 * pw - 200
      yellowServerLeft1.position.x = 0
      group.add(yellowServerLeft1)

      let yellowServerLeft2 = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'blue_server.png'
        },
        txtInfo: {
          txt: '漏扫设备',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft2.position.set(-10, 0, 0.5 * pw)
      yellowServerLeft2.position.z = 0.5 * pw - 200
      yellowServerLeft2.position.x = -120
      group.add(yellowServerLeft2)
      // 下方 蓝色服务器
      let blueServerLeft2 = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'blue_server.png'
        },
        txtInfo: {
          txt: 'IPS设备',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerLeft2.position.z = 0.5 * pw - 200
      blueServerLeft2.position.x = -240
      group.add(blueServerLeft2)

      let yellowServerLeft3 = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'blue_server.png'
        },
        txtInfo: {
          txt: '防DDoS',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft2.position.set(-10, 0, 0.5 * pw)
      yellowServerLeft3.position.z = 0.5 * pw - 200
      yellowServerLeft3.position.x = -360
      group.add(yellowServerLeft3)
      return group
    },
  }
}
export default networkSecurityCom
