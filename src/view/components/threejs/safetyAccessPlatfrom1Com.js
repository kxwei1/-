/*
 * @Description: 
 * @Author: kxwei
 * @Date: 2020-11-26 15:03:32
 * @LastEditTime: 2020-11-29 15:53:24
 * @FilePath: \security\src\view\components\threejs\safetyAccessPlatfrom1Com.js
 * @LastModifiedBy: kxwei
 */
/**============================================================================
 *
 * Author: luo1o1o1o 
 *
 * QQ: 330240995, PHONE: 17600071321
 *
 * Last modified: 2020-11-17 17:41
 *
 * Filename: safetyAccessPlatfrom1Com.js
 *
 * Description: 安全接入平台 
 *
 ============================================================================**/
import * as THREE from 'three'
let safetyAccessPlatfrom1Com = {
  data() {
    return {
      safetyAccessPlatfrom1Size: {
        x: 130,
        y: 0,
        z: 600
      }
    }
  },
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-17 15:37
     * @desc: 安全接入平台
     */
    addsafetyAccessPlatfrom1() {
      let x = this.safetyAccessPlatfrom1Size.x
      let y = this.safetyAccessPlatfrom1Size.y
      let z = this.safetyAccessPlatfrom1Size.z
      let safetyAccessPlatfrom1Group = new THREE.Group()
      safetyAccessPlatfrom1Group.position.set(
        -(
          this.centerBottomFloorSize.x / 2 -
          this.safetyAccessPlatfrom1Size.x / 2 +
          180
        ),
        this.centerBottomFloorSize.y + 150,
        this.centerBottomFloorSize.z / 2 -
        this.safetyAccessPlatfrom1Size.z / 2 -
        2800
      )
      // 加入地板
      let plane = this.addPlaneGeometry({
        size: { x: x, y: z },
        color: 0x02133f,
        borderColor: 0x2094fa
      })
      plane.rotateX(Math.PI / 2)
      safetyAccessPlatfrom1Group.add(plane)
      // 加入光墙
      // let lightWall = this.addLightAroundWall({ x, y, z })
      // lightWall.position.y += 2
      // safetyAccessPlatfrom1Group.add(lightWall)
      // 加入中间三个图标
      let serverImgText = this.addsafetyAccessPlatfrom1ServerImgText()
      safetyAccessPlatfrom1Group.add(serverImgText)
      // 添加title
      let title = this.addTextGrometry({
        txt: '安全接入平台',
        fontSize: 40,
        color: 0x2cfffd,
        toTop: true
      })
      title.geometry.center()
      title.position.y += title.geometry.boundingBox.max.y
      title.position.x = this.safetyAccessPlatfrom1Size.x / 2 - 10
      title.rotateY(Math.PI / 2)
      safetyAccessPlatfrom1Group.add(title)
      return safetyAccessPlatfrom1Group
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-19 15:55
     * @desc: 当前组件 默认图文
     */
    addsafetyAccessPlatfrom1ServerImgText() {
      let serverImgTxtGroup = new THREE.Group()
      serverImgTxtGroup.position.y += 18 + 9

      let VTMBox = this.addFloatBoxFaceText8()
      // VTMBox.position.z = z - 350
      // VTMBox.position.x = x / 2 - 960
      VTMBox.position.y = 80
      serverImgTxtGroup.add(VTMBox)

      let leftPlane = this.addPlaneGeometry({
        size: { x: 50, y: 250 },
        color: 0x28409a,
        borderColor: 0x28409a
      })
      leftPlane.rotateX(Math.PI / 2)
      leftPlane.rotateY(Math.PI / 2)
      leftPlane.position.y = 80
      leftPlane.position.x = 10
      leftPlane.position.z = 135
      serverImgTxtGroup.add(leftPlane)
      let rightPlane = this.addPlaneGeometry({
        size: { x: 50, y: 250 },
        color: 0x28409a,
        borderColor: 0x28409a
      })
      rightPlane.rotateX(Math.PI / 2)
      rightPlane.rotateY(Math.PI / 2)

      rightPlane.position.y = 80
      rightPlane.position.x = 10
      rightPlane.position.z = -130
      serverImgTxtGroup.add(rightPlane)


      return serverImgTxtGroup

    }
  }
}
export default safetyAccessPlatfrom1Com
