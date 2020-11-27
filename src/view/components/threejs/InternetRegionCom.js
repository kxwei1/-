/*
 * @Description: 
 * @Author: kxwei
 * @Date: 2020-11-25 14:42:09
 * @LastEditTime: 2020-11-26 09:58:03
 * @FilePath: \security\src\view\components\threejs\InternetRegionCom.js
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
let InternetRegionCom = {
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-20 18:51
     * @desc: 信息网络安全隔离装置
     */
    addInternetRegion() {
      let x = 980
      let y = 20
      let z = 150
      let marketingBusinessGroup = new THREE.Group()

      marketingBusinessGroup.position.set(
        (this.centerBottomFloorSize.x - x) / 2 + 300 - 30 * 2,
        this.centerBottomFloorSize.y + y / 2 + 10 + 10,
        -2300
      )
      // 加入地板
      let plane = this.addPlaneGeometry({
        size: { x: x, y: z },
        color: 0x041648,
        borderColor: 0x104b77
      })
      plane.rotateX(Math.PI / 2)
      marketingBusinessGroup.add(plane)
      let topGroup = this.addInternetRegionBoxTopGroup({ x, y, z })
      marketingBusinessGroup.add(topGroup)
      return marketingBusinessGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-22 21:44
     * @desc: 添加 盒子上 摆放的元素
     */
    addInternetRegionBoxTopGroup({ x, y, z }) {
      let group = new THREE.Group()
      group.position.y = y
      group.position.z = -20
      let pw = z / 3 // 分成五分排列
      // 添加 应用服务器集群
      let yyfwqjqTxt = this.addTextGrometry({
        txt: '互联网大区',
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
          x: 90,
          y: 54,
          url: 'blue_server.png'
        },
        txtInfo: {
          txt: '线上银行',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerLeft1.position.z = 0.5 * pw
      blueServerLeft1.position.x = +430
      group.add(blueServerLeft1)

      // 黄色服务器
      let yellowServerLeft = this.addNormalImgText({
        imgInfo: {
          x: 90,
          y: 54,
          url: 'dxyzf.png'
        },
        txtInfo: {
          txt: '电信翼支付',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      yellowServerLeft.position.z = 0.5 * pw
      yellowServerLeft.position.x = +312
      group.add(yellowServerLeft)
      // 下方 蓝色服务器
      let blueServerLeft3 = this.addNormalImgText({
        imgInfo: {
          x: 90,
          y: 54,
          url: 'blue_server.png'
        },
        txtInfo: {
          txt: '支付宝',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerLeft3.position.z = 0.5 * pw
      blueServerLeft3.position.x = +194
      group.add(blueServerLeft3)
      let yellowServerLeft1 = this.addNormalImgText({
        imgInfo: {
          x: 90,
          y: 54,
          url: 'weixin.png'
        },
        txtInfo: {
          txt: '微信',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft1.position.set(-10, 0, 0.5 * pw)
      yellowServerLeft1.position.z = 0.5 * pw
      yellowServerLeft1.position.x = 76
      group.add(yellowServerLeft1)

      let yellowServerLeft2 = this.addNormalImgText({
        imgInfo: {
          x: 90,
          y: 54,
          url: 'dyb.png'
        },
        txtInfo: {
          txt: '电e宝',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft2.position.set(-10, 0, 0.5 * pw)
      yellowServerLeft2.position.z = 0.5 * pw
      yellowServerLeft2.position.x = -42
      group.add(yellowServerLeft2)
      // 下方 蓝色服务器
      let blueServerLeft2 = this.addNormalImgText({
        imgInfo: {
          x: 90,
          y: 54,
          url: 'yhdk.png'
        },
        txtInfo: {
          txt: '银行代扣',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerLeft2.position.z = 0.5 * pw
      blueServerLeft2.position.x = -160
      group.add(blueServerLeft2)
      // 下方 蓝色服务器
      let blueServerLeft4 = this.addNormalImgText({
        imgInfo: {
          x: 90,
          y: 54,
          url: 'zsdl.png'
        },
        txtInfo: {
          txt: '掌上电力SD',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerLeft4.position.z = 0.5 * pw
      blueServerLeft4.position.x = -278
      group.add(blueServerLeft4)
      let blueServerLeft5 = this.addNormalImgText({
        imgInfo: {
          x: 90,
          y: 54,
          url: 'wsgw.png'
        },
        txtInfo: {
          txt: '网上国网',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerLeft5.position.z = 0.5 * pw
      blueServerLeft5.position.x = -400
      group.add(blueServerLeft5)
      return group
    },
  }
}
export default InternetRegionCom
