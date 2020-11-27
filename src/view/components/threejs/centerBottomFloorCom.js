/**============================================================================
 *
 * Author: luo1o1o1o 
 *
 * QQ: 330240995, PHONE: 17600071321
 *
 * Last modified: 2020-11-17 17:41
 *
 * Filename: centerBottomFloorCom.js
 *
 * Description: 底部地板
 *
 ============================================================================**/
import * as THREE from 'three'

let centerBottomFloorCom = {
  data() {
    return {
      centerBottomFloorSize: {
        x: 1115,
        y: 50,
        z: 3450
      }
    }
  },
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-16 17:34
     * @desc: 添加地板
     */
    addCenterBottomFloor() {
      let x = this.centerBottomFloorSize.x
      let y = this.centerBottomFloorSize.y
      let z = this.centerBottomFloorSize.z
      let floorGroup = new THREE.Group()
      floorGroup.position.set(0, y / 2, 0)
      let cube = this.addCubeBox({
        x,
        y,
        z,
        opacity: 0.8,
        borderColor: 0x062149
      })
      floorGroup.add(cube)

      // 添加光墙
      let lightWall = this.addLightAroundWall({ x, y, z })
      lightWall.position.y += 2
      floorGroup.add(lightWall)
      // 添加亮线
      let surfaceLine = this.addSurfaceLine(
        new THREE.Vector3(-x / 2, y / 2, -z / 2),
        new THREE.Vector3(-x / 2, y / 2, z / 2),
        new THREE.Vector3(x / 2, y / 2, z / 2),
        new THREE.Vector3(x / 2, y / 2, -z / 2)
      )
      surfaceLine.position.y = 1
      floorGroup.add(surfaceLine)
      // 添加title
      let fontSize = 70
      let title = this.addTextGrometry({
        txt: '管理信息大区',
        fontSize: fontSize,
        color: 0x4dfffa,
        toTop: true
      })
      title.geometry.center()
      title.position.set(
        this.centerBottomFloorSize.x / 2 - 20,
        y + fontSize / 2,
        0
      )
      title.rotateY(this.deg90)
      floorGroup.add(title)
      return floorGroup
    }
  }
}
export default centerBottomFloorCom
