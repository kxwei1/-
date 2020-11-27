/**============================================================================
 *
 * Author: luo1o1o1o 
 *
 * QQ: 330240995, PHONE: 17600071321
 *
 * Last modified: 2020-11-19 18:45
 *
 * Filename: centerRedWallCom.js
 *
 * Description: 红墙区域
 *
 ============================================================================**/
import * as THREE from 'three'

let centerRedWallCom = {
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-19 18:48
     * @desc: 添加红墙区域组
     */
    addCenterRedWallCom() {
      let x = 680
      let z = 3450 - 200
      let centerRedWallGroup = new THREE.Group()
      centerRedWallGroup.position.set(
        (this.centerBottomFloorSize.x - x) / 2 - 100,
        this.centerBottomFloorSize.y + 10,
        0
      )
      // 添加带线框地板
      let bottomGround = this.addPlaneGeometry({
        size: {
          x: x,
          y: z
        },
        color: 0x011c49,
        borderColor: 0x1893c9
      })
      bottomGround.rotateX(this.deg90)
      centerRedWallGroup.add(bottomGround)
      // 红墙
      let redWall = this.addRedAroundWall({
        x: x,
        y: 0,
        z: z
      })
      centerRedWallGroup.add(redWall)
      let coreSwitchPlane = this.addCoreSwitchPlane({
        x: x - 30 * 2,
        y: z - 30 * 2
      })
      centerRedWallGroup.add(coreSwitchPlane)
      return centerRedWallGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-20 15:41
     * @desc: 添加核心交换机
     */
    addCoreSwitchPlane({ x, y }) {
      let coreSwitchPlaneGroup = new THREE.Group()
      // 核心交换机边线
      let coreSwitchPlane = this.addPlaneGeometry({
        size: {
          x: x,
          y: y
        },
        color: 0x00133c,
        borderColor: 0x1899c9
      })
      coreSwitchPlane.rotateX(this.deg90)
      coreSwitchPlane.position.y += 2
      coreSwitchPlaneGroup.add(coreSwitchPlane)
      // 添加图文
      let imgTextGroup = this.addCoreSwitchPlaneImgText({ x, y })
      imgTextGroup.position.y = 30
      coreSwitchPlaneGroup.add(imgTextGroup)
      return coreSwitchPlaneGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-20 15:53
     * @desc: 添加图文
     */
    addCoreSwitchPlaneImgText({ x, y }) {
      let imgTextGroup = new THREE.Group()
      let padding = 40
      let addImgTextLT = this.addImgText({ type: 'left' })
      addImgTextLT.position.set(-x / 2 + padding, 0, y / 2 - padding)
      imgTextGroup.add(addImgTextLT)
      let addImgTextLB = this.addImgText({ type: 'left' })
      addImgTextLB.position.set(x / 2 - padding, 0, y / 2 - padding)
      imgTextGroup.add(addImgTextLB)
      let addImgTextRT = this.addImgText({ type: 'right' })
      addImgTextRT.position.set(-x / 2 + padding, 0, -y / 2 + padding)
      imgTextGroup.add(addImgTextRT)
      let addImgTextRB = this.addImgText({ type: 'right' })
      addImgTextRB.position.set(x / 2 - padding, 0, -y / 2 + padding)
      imgTextGroup.add(addImgTextRB)
      return imgTextGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-20 16:25
     * @desc: 添加左上角图文
     */
    addImgText({ type = 'left' }) {
      let imgTextLT = new THREE.Group()
      let img = this.addPlaneImg({
        size: {
          x: 60,
          y: 60
        },
        imgUrl: 'core_switch.png',
        face: true,
        toTop: true
      })
      img.geometry.center()
      let txt = this.addTextGrometry({
        txt: '核心交换机',
        fontSize: 24,
        toTop: true
      })
      txt.geometry.center()
      txt.rotateY(this.deg90)
      if (type == 'left') {
        txt.position.z =
          -txt.geometry.boundingBox.max.x - img.geometry.boundingBox.max.x - 10
      }
      if (type == 'right') {
        txt.position.z =
          txt.geometry.boundingBox.max.x + img.geometry.boundingBox.max.x + 10
      }
      imgTextLT.add(img)
      imgTextLT.add(txt)
      return imgTextLT
    }
  }
}
export default centerRedWallCom
