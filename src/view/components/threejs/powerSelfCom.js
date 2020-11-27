/**============================================================================
 *
 * Author: luo1o1o1o 
 *
 * QQ: 330240995, PHONE: 17600071321
 *
 * Last modified: 2020-11-17 17:41
 *
 * Filename: powerSelfCom.js
 *
 * Description: 电力自助终端（社会）  
 *
 ============================================================================**/
import * as THREE from 'three'
let powerSelfCom = {
  data() {
    return {
      powerSelfSize: {
        x: 140,
        y: 0,
        z: 140
      }
    }
  },
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-17 15:37
     * @desc: 电力自助终端（社会）
     */
    addpowerSelf() {
      let x = this.powerSelfSize.x
      let y = this.powerSelfSize.y
      let z = this.powerSelfSize.z
      let powerSelfGroup = new THREE.Group()
      powerSelfGroup.position.set(
        -(
          this.centerBottomFloorSize.x / 2 -
          this.powerSelfSize.x / 2 +
          420
        ),
        this.centerBottomFloorSize.y + 10,
        this.centerBottomFloorSize.z / 2 -
          this.powerSelfSize.z / 2 -
          3000
      )
      // 加入地板
      let plane = this.addPlaneGeometry({
        size: { x: x, y: z },
        color: 0x02133f,
        borderColor: 0x2094fa
      })
      plane.rotateX(Math.PI / 2)
      powerSelfGroup.add(plane)
      // 加入光墙
      // let lightWall = this.addLightAroundWall({ x, y, z })
      // lightWall.position.y += 2
      // powerSelfGroup.add(lightWall)
    //   加入中间三个图标
      let serverImgText = this.addpowerSelfServerImgText()
      powerSelfGroup.add(serverImgText)
      // 添加title
    //   let title = this.addTextGrometry({
    //     txt: '电力自助终端（社会）',
    //     fontSize: 40,
    //     color: 0x2cfffd,
    //     toTop: true
    //   })
    //   title.geometry.center()
    //   title.position.y += title.geometry.boundingBox.max.y
    //   title.position.x = this.powerSelfSize.x / 2 - 10
    //   title.rotateY(Math.PI / 2)
    //   powerSelfGroup.add(title)
      return powerSelfGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-19 15:55
     * @desc: 当前组件 默认图文
     */
    addpowerSelfServerImgText() {
      let serverImgTxtGroup = new THREE.Group()
      serverImgTxtGroup.position.y += 18 + 9
    //   let imgText1 = this.addNormalImgText({
    //     imgInfo: {
    //       x: 50,
    //       y: 50,
    //       url: 'server.png'
    //     },
    //     txtInfo: {
    //       txt: '签到服务器',
    //       fontSize: 14,
    //       color: 0xffffff
    //     },
    //     face: true
    //   })
    //   imgText1.position.set(0, 0, this.powerSelfSize.z / 4)
    //   serverImgTxtGroup.add(imgText1)
      let imgText2 = this.addNormalImgText({
        imgInfo: {
          x: 100,
          y: 100,
          url: 'server.png'
        },
        txtInfo: {
          txt: '电力自助终端（社会）',
          fontSize: 30,
          color: 0xffffff
        },
        face: true
      })
      imgText2.position.set(0, 0, 0)
      serverImgTxtGroup.add(imgText2)
    //   let imgText3 = this.addNormalImgText({
    //     imgInfo: {
    //       x: 50,
    //       y: 50,
    //       url: 'server.png'
    //     },
    //     txtInfo: {
    //       txt: '控制服务器',
    //       fontSize: 14,
    //       color: 0xffffff
    //     },
    //     face: true
    //   })
    //   imgText3.position.set(0, 0, -this.powerSelfSize.z / 4)
    //   serverImgTxtGroup.add(imgText3)
      return serverImgTxtGroup
    }
  }
}
export default powerSelfCom
