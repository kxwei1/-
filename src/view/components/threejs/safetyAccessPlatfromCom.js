/**============================================================================
 *
 * Author: luo1o1o1o 
 *
 * QQ: 330240995, PHONE: 17600071321
 *
 * Last modified: 2020-11-17 17:41
 *
 * Filename: safetyAccessPlatfromCom.js
 *
 * Description: 安全接入平台 
 *
 ============================================================================**/
import * as THREE from 'three'
let safetyAccessPlatfromCom = {
  data() {
    return {
      safetyAccessPlatfromSize: {
        x: 130,
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
     * @desc: 安全接入平台
     */
    addsafetyAccessPlatfrom() {
      let x = this.safetyAccessPlatfromSize.x
      let y = this.safetyAccessPlatfromSize.y
      let z = this.safetyAccessPlatfromSize.z
      let safetyAccessPlatfromGroup = new THREE.Group()
      safetyAccessPlatfromGroup.position.set(
        -(
          this.centerBottomFloorSize.x / 2 -
          this.safetyAccessPlatfromSize.x / 2 +
          180
        ),
        this.centerBottomFloorSize.y + 70,
        this.centerBottomFloorSize.z / 2 -
          this.safetyAccessPlatfromSize.z / 2 -
          2300
      )
      // 加入地板
      let plane = this.addPlaneGeometry({
        size: { x: x, y: z },
        color: 0x02133f,
        borderColor: 0x2094fa
      })
      plane.rotateX(Math.PI / 2)
      safetyAccessPlatfromGroup.add(plane)
      // 加入光墙
      // let lightWall = this.addLightAroundWall({ x, y, z })
      // lightWall.position.y += 2
      // safetyAccessPlatfromGroup.add(lightWall)
      // 加入中间三个图标
    //   let serverImgText = this.addsafetyAccessPlatfromServerImgText()
    //   safetyAccessPlatfromGroup.add(serverImgText)
      // 添加title
      let title = this.addTextGrometry({
        txt: '安全接入平台',
        fontSize: 40,
        color: 0x2cfffd,
        toTop: true
      })
      title.geometry.center()
      title.position.y += title.geometry.boundingBox.max.y
      title.position.x = this.safetyAccessPlatfromSize.x / 2 - 10
      title.rotateY(Math.PI / 2)
      safetyAccessPlatfromGroup.add(title)
      return safetyAccessPlatfromGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-19 15:55
     * @desc: 当前组件 默认图文
     */
    // addsafetyAccessPlatfromServerImgText() {
    //   let serverImgTxtGroup = new THREE.Group()
    //   serverImgTxtGroup.position.y += 18 + 9
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
    //   imgText1.position.set(0, 0, this.safetyAccessPlatfromSize.z / 4)
    //   serverImgTxtGroup.add(imgText1)
    //   let imgText2 = this.addNormalImgText({
    //     imgInfo: {
    //       x: 50,
    //       y: 50,
    //       url: 'server.png'
    //     },
    //     txtInfo: {
    //       txt: '签验服务器',
    //       fontSize: 14,
    //       color: 0xffffff
    //     },
    //     face: true
    //   })
    //   imgText2.position.set(0, 0, 0)
    //   serverImgTxtGroup.add(imgText2)
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
    //   imgText3.position.set(0, 0, -this.safetyAccessPlatfromSize.z / 4)
    //   serverImgTxtGroup.add(imgText3)
    //   return serverImgTxtGroup
    // }
  }
}
export default safetyAccessPlatfromCom
