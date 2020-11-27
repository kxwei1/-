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
let APIwangguan = {
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-20 18:51
     * @desc: 添加API网关模块
     */
    addAPIwangguan() {
      let x = 285
      let y = 20
      let z = 230
      let marketingBusinessGroup = new THREE.Group()

      marketingBusinessGroup.position.set(
        (this.centerBottomFloorSize.x - x) / 2 - 100 - 30 * 2,
        this.centerBottomFloorSize.y + y / 2 + 10 + 10,
        -1240
      )

      // 加入地板
      let plane = this.addPlaneGeometry({
        size: { x: x, y: z },
        color: 0x041648,
        borderColor: 0x104b77
      })
      plane.rotateX(Math.PI / 2)
      marketingBusinessGroup.add(plane)
      plane.position.y = 20
      // 添加光墙
      let lightWall = this.addLightAroundWall({ x, y, z })
      lightWall.position.y += 2
      marketingBusinessGroup.add(lightWall)
      let topGroup = this.addAPIwangguanBoxTopGroup({ x, y, z })

      marketingBusinessGroup.add(topGroup)

      return marketingBusinessGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-22 21:44
     * @desc: 添加 盒子上 摆放的元素
     */
    addAPIwangguanBoxTopGroup({ x, y, z }) {
      let group = new THREE.Group()
      group.position.y = y
      group.position.z = -20
      let pw = z / 3 // 分成五分排列
      // 添加 应用服务器集群
      let yyfwqjqTxt = this.addTextGrometry({
        txt: '接口服务器集群',
        fontSize: 20,
        color: 0x00f6ff,
        toTop: true
      })
      yyfwqjqTxt.geometry.center()
      yyfwqjqTxt.position.z = 1.5 * pw
      group.add(yyfwqjqTxt)
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
      return group
    },
  }
}
export default APIwangguan
