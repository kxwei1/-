/**============================================================================
 *
 * Author: luo1o1o1o 
 *
 * QQ: 330240995, PHONE: 17600071321
 *
 * Last modified: 2020-11-17 17:41
 *
 * Filename: intranetOfficeDomainCom.js
 *
 * Description: 内网办公域   
 *
 ============================================================================**/
import * as THREE from 'three'
let intranetOfficeDomainCom = {
  data() {
    return {
      intranetOfficeDomainSize: {
        x: 330,
        y: 0,
        z: 1000
      }
    }
  },
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-17 15:37
     * @desc: 内网办公域
     */
    addintranetOfficeDomain() {
      let x = this.intranetOfficeDomainSize.x
      let y = this.intranetOfficeDomainSize.y
      let z = this.intranetOfficeDomainSize.z
      let intranetOfficeDomainGroup = new THREE.Group()
      intranetOfficeDomainGroup.position.set(
        -(
          this.centerBottomFloorSize.x / 2 -
          this.intranetOfficeDomainSize.x / 2 +
          100
        ),
        this.centerBottomFloorSize.y + 80,
        this.centerBottomFloorSize.z / 2 -
        this.intranetOfficeDomainSize.z / 2 -
        1200
      )
      // 加入地板
      let plane = this.addPlaneGeometry({
        size: { x: x, y: z },
        color: 0x02133f,
        borderColor: 0x2094fa
      })
      plane.rotateX(Math.PI / 2)
      intranetOfficeDomainGroup.add(plane)
      // 加入光墙
      let lightWall = this.addLightAroundWall({ x, y, z })
      lightWall.position.y += 2
      intranetOfficeDomainGroup.add(lightWall)
      // 加入中间三个图标
      let serverImgText = this.addintranetOfficeDomainServerImgText()
      intranetOfficeDomainGroup.add(serverImgText)


      //添加浮动
      let yxzybgzddBox = this.addFloatBoxFaceText10()
      // yxzybgzddBox.position.z = z - 130
      // yxzybgzddBox.position.x = x / 2 - 760
      yxzybgzddBox.name = 'centerBottomFloor'
      yxzybgzddBox.position.x = 220
      yxzybgzddBox.position.y = 150

      // intranetOfficeDomainGroup.add(yxzybgzddBox)



      return intranetOfficeDomainGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-19 15:55
     * @desc: 当前组件 默认图文
     */
    addintranetOfficeDomainServerImgText() {
      let serverImgTxtGroup = new THREE.Group()
      serverImgTxtGroup.position.y += 18 + 9
      let imgText2 = this.addNormalImgText({
        imgInfo: {
          x: 100,
          y: 100,
          url: '图层 10781@2x.png'
        },
        txtInfo: {
          txt: '内网办公域',
          fontSize: 30,
          color: 0xffffff
        },
        face: true
      })
      imgText2.position.set(100, 0, 0)
      imgText2.position.x = 150
      imgText2.position.y = 50
      serverImgTxtGroup.add(imgText2)



      return serverImgTxtGroup
    }
  }
}
export default intranetOfficeDomainCom
