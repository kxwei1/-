/**============================================================================
 *
 * Author: luo1o1o1o 
 *
 * QQ: 330240995, PHONE: 17600071321
 *
 * Last modified: 2020-11-17 17:41
 *
 * Filename: productionControlDomainCom.js
 *
 * Description: 生产控制域
 *
 ============================================================================**/
import * as THREE from 'three'

let productionControlDomainCom = {
  data() {
    return {
      productionControlDomainSize: {
        x: 190,
        y: 0,
        z: 585
      }
    }
  },
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-17 15:37
     * @desc: 生产控制域
     */
    addProductionControlDomain() {
      let x = this.productionControlDomainSize.x
      let y = this.productionControlDomainSize.y
      let z = this.productionControlDomainSize.z
      let productionControlDomainGroup = new THREE.Group()
      productionControlDomainGroup.position.set(
        -(
          this.centerBottomFloorSize.x / 2 -
          this.productionControlDomainSize.x / 2 -
          20
        ),
        this.centerBottomFloorSize.y + 77,
        this.centerBottomFloorSize.z / 2 -
        this.productionControlDomainSize.z / 2 -
        100
      )
      // 加入地板
      let plane = this.addPlaneGeometry({
        size: { x: x, y: z },
        color: 0x02133f,
        borderColor: 0x2094fa
      })
      plane.rotateX(Math.PI / 2)
      productionControlDomainGroup.add(plane)
      // 加入光墙
      let lightWall = this.addLightAroundWall({ x, y, z })
      lightWall.position.y += 2
      productionControlDomainGroup.add(lightWall)
      // 加入中间三个图标
      let serverImgText = this.addProductionControlDomainServerImgText()
      productionControlDomainGroup.add(serverImgText)
      // 添加title
      let title = this.addTextGrometry({
        txt: '生产控制域',
        fontSize: 20,
        color: 0x2cfffd,
        toTop: true
      })
      title.geometry.center()
      title.position.y += title.geometry.boundingBox.max.y
      title.position.x = this.productionControlDomainSize.x / 2 - 10
      title.rotateY(Math.PI / 2)
      productionControlDomainGroup.add(title)
      return productionControlDomainGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-19 15:55
     * @desc: 当前组件 默认图文
     */
    addProductionControlDomainServerImgText() {
      let serverImgTxtGroup = new THREE.Group()
      serverImgTxtGroup.position.y += 18 + 9
      let imgText1 = this.addNormalImgText({
        imgInfo: {
          x: 50,
          y: 50,
          url: 'server.png'
        },
        txtInfo: {
          txt: '签到服务器',
          fontSize: 14,
          color: 0xffffff
        },
        face: true
      })
      imgText1.position.set(0, 0, this.productionControlDomainSize.z / 4)
      serverImgTxtGroup.add(imgText1)
      let imgText2 = this.addNormalImgText({
        imgInfo: {
          x: 50,
          y: 50,
          url: 'server.png'
        },
        txtInfo: {
          txt: '签验服务器',
          fontSize: 14,
          color: 0xffffff
        },
        face: true
      })
      imgText2.position.set(0, 0, 0)
      serverImgTxtGroup.add(imgText2)
      let imgText3 = this.addNormalImgText({
        imgInfo: {
          x: 50,
          y: 50,
          url: 'server.png'
        },
        txtInfo: {
          txt: '控制服务器',
          fontSize: 14,
          color: 0xffffff
        },
        face: true
      })
      imgText3.position.set(0, 0, -this.productionControlDomainSize.z / 4)
      serverImgTxtGroup.add(imgText3)
      return serverImgTxtGroup
    }
  }
}
export default productionControlDomainCom
