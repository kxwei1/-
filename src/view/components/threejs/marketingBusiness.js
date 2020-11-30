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
 * Description: 营销业务应用
 *
 ============================================================================**/

import * as THREE from 'three'
let marketingBusinessCom = {
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-20 18:51
     * @desc: 添加营销业务模块
     */
    addMarketingBusinessCom() {
      let x = 405
      let y = 26
      let z = 395
      let marketingBusinessGroup = new THREE.Group()

      marketingBusinessGroup.position.set(
        (this.centerBottomFloorSize.x - x) / 2 - 100 - 30 * 2,
        this.centerBottomFloorSize.y + y / 2 + 10 + 10,
        0
      )

      let bottomGround = this.addCubeBox({
        x: x,
        y: y,
        z: z,
        opacity: 1,
        boxColor: 0x00133c,
        borderColor: 0x0091ac,
        borderType: 'dotted'
      })
      bottomGround.renderOrder = 50 // 渲染层级
      marketingBusinessGroup.add(bottomGround)
      // 添加光墙
      let lightWall = this.addLightAroundWall({ x, y, z })
      lightWall.position.y += 2
      marketingBusinessGroup.add(lightWall)
      // 添加面板上元素
      let topGroup = this.addMarketingBusinessBoxTopGroup({ x, y, z })

      marketingBusinessGroup.add(topGroup)
      // 添加板块连线
      let marketingBusinessBoxOtherGroup = this.addMarketingBusinessBoxOtherGroup(
        { x, y, z }
      )
      marketingBusinessGroup.add(marketingBusinessBoxOtherGroup)
      return marketingBusinessGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-22 21:44
     * @desc: 添加 盒子上 摆放的元素
     */
    addMarketingBusinessBoxTopGroup({ x, y, z }) {
      let group = new THREE.Group()
      group.position.y = y
      let pw = z / 5 // 分成五分排列



      let title = this.addTextGrometry({
        txt: '营销业务应用',
        fontSize: 20,
        color: 0xffd700,
        toTop: true
      })
      title.geometry.center()
      title.position.y += title.geometry.boundingBox.max.y
      title.position.x = this.productionControlDomainSize.x / 2 + 60
      title.rotateY(Math.PI / 2)
      group.add(title)
      // 添加 应用服务器集群
      let yyfwqjqTxt = this.addTextGrometry({
        txt: '应用服务器集群',
        fontSize: 20,
        color: 0x00f6ff,
        toTop: true
      })
      yyfwqjqTxt.geometry.center()
      yyfwqjqTxt.position.z = 1.5 * pw
      group.add(yyfwqjqTxt)
      // 数据库服务器集群
      let sjkfwqjqTxt = this.addTextGrometry({
        txt: '数据库服务器集群',
        fontSize: 20,
        color: 0x00f6ff,
        toTop: true
      })
      sjkfwqjqTxt.geometry.center()
      sjkfwqjqTxt.position.z = -0.5 * pw
      group.add(sjkfwqjqTxt)
      // 添加图标
      let imgTxtMargin = 150
      // 黄色服务器
      let yellowServerLeft = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'yellow_server.png'
        },
        txtInfo: {
          txt: '110台',
          fontSize: 14,
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
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerLeft.position.z = 0.5 * pw
      blueServerLeft.position.x = imgTxtMargin / 2
      group.add(blueServerLeft)
      // 右边图标
      let yellowServerRight = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'yellow_server.png'
        },
        txtInfo: {
          txt: '110台',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerRight.position.set(-10, 0, 0.5 * pw)
      yellowServerRight.position.z = -1.5 * pw
      yellowServerRight.position.x = -imgTxtMargin / 2
      group.add(yellowServerRight)
      // 下方蓝色服务器

      let blueServerRight = this.addNormalImgText({
        imgInfo: {
          x: 46,
          y: 54,
          url: 'blue_server.png'
        },
        txtInfo: {
          txt: '9台',
          fontSize: 14,
          color: 0xffffff
        },
        face: true,
        point: 'bottom'
      })
      // yellowServerLeft.position.set(-10, 0, 0.5 * pw)
      blueServerRight.position.z = -1.5 * pw
      blueServerRight.position.x = imgTxtMargin / 2
      group.add(blueServerRight)
      return group
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-23 08:55
     * @desc: 添加盒子外部 连线的盒子
     */
    addMarketingBusinessBoxOtherGroup({ x, y, z }) {
      let group = new THREE.Group()
      group.position.y = 36 / 2 - y / 2
      // 营销数据平台
      let yxjcsjptBox = this.addBoxFaceText({
        x: 8,
        y: 36,
        z: 180,
        txt: '营销基础数据平台'
      })
      yxjcsjptBox.position.z = z / 2 + 180 / 2 + 50
      yxjcsjptBox.position.x = x / 2 - 78

      group.add(yxjcsjptBox)

      let point = [
        { x: x / 2 - 55, y: 0, z: z / 2 },
        { x: x / 2 - 55, y: 0, z: z / 2 + 123 },
        { x: x / 2 - 78, y: 0, z: z / 2 + 123 },
      ]
      let point2 = [
        { x: x / 2 - 78 + 10 - 10, y: 0, z: z / 2 + 133 },
        { x: x / 2 - 55 + 10, y: 0, z: z / 2 + 133 },
        { x: x / 2 - 55 + 10, y: 0, z: z / 2 },
      ]
      let line = this.addPolyline({
        point: point,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      line.position.y = -36 / 2
      group.add(line)
      let line2 = this.addPolyline({
        point: point2,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      line2.position.y = -36 / 2
      group.add(line2)

      //营销稽查监控
      let yxjcjkBox = this.addBoxFaceText({
        x: 8,
        y: 36,
        z: 180,
        txt: '营销稽查监控'
      }
      )
      group.add(yxjcjkBox)
      yxjcjkBox.position.z = z - 20

      yxjcjkBox.position.x = x / 2 - 230



      let yxjcjkpoint = [
        { x: x / 2 - 207.5, y: 0, z: z / 2 },
        { x: x / 2 - 207.5, y: 0, z: z / 2 + 143 },
        { x: x / 2 - 230.5, y: 0, z: z / 2 + 143 },
      ]
      let yxjcjkpoint2 = [
        { x: x / 2 - 230.5, y: 0, z: z / 2 + 143 + 10 },
        { x: x / 2 - 207.5 + 10, y: 0, z: z / 2 + 143 + 10 },
        { x: x / 2 - 207.5 + 10, y: 0, z: z / 2 },
      ]
      let yxjcjkline = this.addPolyline({
        point: yxjcjkpoint,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      yxjcjkline.position.y = -36 / 2
      group.add(yxjcjkline)
      let yxjcjkline2 = this.addPolyline({
        point: yxjcjkpoint2,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      yxjcjkline2.position.y = -36 / 2
      group.add(yxjcjkline2)
      //计量生产调度平台

      let jlscddptBox = this.addBoxFaceText({
        x: 8,
        y: 36,
        z: 180,
        txt: '计量生产调度平台'
      }
      )
      jlscddptBox.position.z = z + 185
      jlscddptBox.position.x = x / 2 - 330
      group.add(jlscddptBox)

      let jlscddppoint = [
        { x: x / 2 - 307.5, y: 0, z: z / 2 },
        { x: x / 2 - 307.5, y: 0, z: z / 2 + 343 },
        { x: x / 2 - 330.5, y: 0, z: z / 2 + 343 },
      ]
      let jlscddppoint2 = [
        { x: x / 2 - 330.5, y: 0, z: z / 2 + 343 + 10 },
        { x: x / 2 - 307.5 + 10, y: 0, z: z / 2 + 343 + 10 },
        { x: x / 2 - 307.5 + 10, y: 0, z: z / 2 },
      ]
      let jlscddpline = this.addPolyline({
        point: jlscddppoint,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      jlscddpline.position.y = -36 / 2
      group.add(jlscddpline)
      let jlscddpline2 = this.addPolyline({
        point: jlscddppoint2,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      jlscddpline2.position.y = -36 / 2
      group.add(jlscddpline2)


      //电能管理服务平台
      let dnglfwptBox = this.addBoxFaceText({
        x: 8,
        y: 36,
        z: 180,
        txt: '电能管理服务平台'
      }
      )
      dnglfwptBox.position.z = z + -100
      dnglfwptBox.position.x = x / 2 - 380
      group.add(dnglfwptBox)

      let dnglfwptppoint = [
        { x: x / 2 - 357.5, y: 0, z: z / 2 },
        { x: x / 2 - 357.5, y: 0, z: z / 2 + 58 },
        { x: x / 2 - 380.5, y: 0, z: z / 2 + 58 },
      ]
      let dnglfwptpoint2 = [
        { x: x / 2 - 380.5, y: 0, z: z / 2 + 58 + 10 },
        { x: x / 2 - 357.5 + 10, y: 0, z: z / 2 + 58 + 10 },
        { x: x / 2 - 357.5 + 10, y: 0, z: z / 2 },
      ]
      let dnglfwptline = this.addPolyline({
        point: dnglfwptppoint,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      dnglfwptline.position.y = -36 / 2
      group.add(dnglfwptline)
      let dnglfwptline2 = this.addPolyline({
        point: dnglfwptpoint2,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      dnglfwptline2.position.y = -36 / 2
      group.add(dnglfwptline2)





      //计量资产全寿命周期管理系统
      let jlzcqsmzqglxtBox = this.addBoxFaceText({
        x: 8,
        y: 36,
        z: 265,
        txt: '计量资产全寿命周期管理系统'
      }
      )
      jlzcqsmzqglxtBox.position.z = z + 50
      jlzcqsmzqglxtBox.position.x = x / 2 - 430
      group.add(jlzcqsmzqglxtBox)



      let jlzcqsmzqglxtpoint = [
        { x: x / 2 - 332.5, y: 0, z: z / 2 },
        { x: x / 2 - 332.5, y: 0, z: z / 2 + 228 },
        { x: x / 2 - 430.5, y: 0, z: z / 2 + 228 },
      ]
      let jlzcqsmzqglxtpoint2 = [
        { x: x / 2 - 430.5, y: 0, z: z / 2 + 228 + 10 },
        { x: x / 2 - 332.5 + 10, y: 0, z: z / 2 + 228 + 10 },
        { x: x / 2 - 332.5 + 10, y: 0, z: z / 2 },
      ]
      let jlzcqsmzqglxtline = this.addPolyline({
        point: jlzcqsmzqglxtpoint,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      jlzcqsmzqglxtline.position.y = -36 / 2
      group.add(jlzcqsmzqglxtline)
      let jlzcqsmzqglxtline2 = this.addPolyline({
        point: jlzcqsmzqglxtpoint2,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      jlzcqsmzqglxtline2.position.y = -36 / 2
      group.add(jlzcqsmzqglxtline2)




      //市场化售电业务应用系统
      let schsdywyyxtBox = this.addBoxFaceText({
        x: 8,
        y: 36,
        z: 250,
        txt: '市场化售电业务应用系统'
      }
      )
      schsdywyyxtBox.position.z = z - 250
      schsdywyyxtBox.position.x = x / 2 - 460
      group.add(schsdywyyxtBox)



      let schsdywyyxtpoint = [
        { x: x / 2 - 332.5, y: 0, z: z / 2 - 50 },
        { x: x / 2 - 462.5, y: 0, z: z / 2 - 50 },
      ]
      let schsdywyyxtpoint2 = [
        { x: x / 2 - 462.5, y: 0, z: z / 2 - 50 + 10 },
        { x: x / 2 - 332.5, y: 0, z: z / 2 - 50 + 10 },
      ]
      let schsdywyyxtline = this.addPolyline({
        point: schsdywyyxtpoint,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      schsdywyyxtline.position.y = -36 / 2
      group.add(schsdywyyxtline)
      let schsdywyyxtline2 = this.addPolyline({
        point: schsdywyyxtpoint2,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      schsdywyyxtline2.position.y = -36 / 2
      group.add(schsdywyyxtline2)
      //用电信息采集连线

      let ElectricityConsumptionInformationpoint = [
        { x: x / 2 - 127.5, y: 25, z: z / 2 + 819 },
        // { x: x / 2 - 127.5, y: 25, z: z / 2 - 99 },
        { x: x / 2 - 127.5, y: 25, z: z / 2 - 100 },
      ]
      let ElectricityConsumptionInformationpoint2 = [
        { x: x / 2 - 127.5 + 15, y: 25, z: z / 2 - 100 },
        // { x: x / 2 - 127.5, y: 25, z: z / 2 - 99 },
        { x: x / 2 - 127.5 + 15, y: 25, z: z / 2 + 819 },
      ]
      let ElectricityConsumptionInformationline = this.addPolyline({
        point: ElectricityConsumptionInformationpoint,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      ElectricityConsumptionInformationline.position.y = -36 / 2
      group.add(ElectricityConsumptionInformationline)
      let ElectricityConsumptionInformationline2 = this.addPolyline({
        point: ElectricityConsumptionInformationpoint2,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      ElectricityConsumptionInformationline2.position.y = -36 / 2
      group.add(ElectricityConsumptionInformationline2)


      //营销移动作业

      let MarketingMobileJobpoint = [
        { x: x / 2 - 332.5, y: 25, z: z / 2 - 640 },
        { x: x / 2 - 332.5, y: 25, z: z / 2 - 350 },
      ]
      let MarketingMobileJobpoint2 = [
        { x: x / 2 - 332.5 + 15, y: 25, z: z / 2 - 350 },
        { x: x / 2 - 332.5 + 15, y: 25, z: z / 2 - 640 },
      ]
      let MarketingMobileJobline = this.addPolyline({
        point: MarketingMobileJobpoint,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      MarketingMobileJobline.position.y = -36 / 2
      group.add(MarketingMobileJobline)
      let MarketingMobileJobline2 = this.addPolyline({
        point: MarketingMobileJobpoint2,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      MarketingMobileJobline2.position.y = -36 / 2
      group.add(MarketingMobileJobline2)




      //添加API网关模块

      let APIwangguanpoint = [
        { x: x / 2 - 127.5, y: 25, z: z / 2 - 1323 },
        { x: x / 2 - 127.5, y: 25, z: z / 2 - 350 },
      ]
      let APIwangguanpoint2 = [
        { x: x / 2 - 127.5 + 15, y: 25, z: z / 2 - 350 },
        { x: x / 2 - 127.5 + 15, y: 25, z: z / 2 - 1323 },
      ]
      let APIwangguanline = this.addPolyline({
        point: APIwangguanpoint,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      APIwangguanline.position.y = -36 / 2
      group.add(APIwangguanline)
      let APIwangguanline2 = this.addPolyline({
        point: APIwangguanpoint2,
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      })
      APIwangguanline2.position.y = -36 / 2
      group.add(APIwangguanline2)

      // 采集成功率
      let cjcglBox = this.addFloatBoxFaceText()
      cjcglBox.position.z = z + 650
      cjcglBox.position.x = x / 2 - 510
      cjcglBox.position.y = y + 59
      group.add(cjcglBox)

      //采集成功率线段

      let cjcglRightLine = this.addLine({
        point: [
          { x: x / 2 - 510, y: 26, z: z / 2 + 749, tag: 0 },
          { x: x / 2 - 510, y: 26, z: z / 2 + 849, tag: 1 },
          { x: x / 2 - 510, y: 65, z: z / 2 + 849, tag: 2 },

        ],
        color: 0x1eeafa,
        startDirection: 'v', // 开始节点为水平
        endDirection: 'h', // 结束点为垂直
        arrow: {
          show: true,
          color: 0x1eeafa,
          scale: 0.8
        }
      })
      cjcglRightLine.position.y = -36 / 2
      group.add(cjcglRightLine)
      // 营销专业办公终端
      let yxzybgzdBox = this.addFloatBoxFaceText1()
      yxzybgzdBox.position.z = z - 130
      yxzybgzdBox.position.x = x / 2 - 760
      yxzybgzdBox.name = 'centerBottomFloor'

      group.add(yxzybgzdBox)
      // 办公终端使用情况
      let bgzdsyqkBox = this.addFloatBoxFaceText2()
      bgzdsyqkBox.position.z = z - 630
      bgzdsyqkBox.position.x = x / 2 - 760
      bgzdsyqkBox.name = 'centerBottomFloor1'

      group.add(bgzdsyqkBox)
      // 系统账号
      let zhxtBox = this.addFloatBoxFaceText3()
      zhxtBox.position.z = z - 630
      zhxtBox.position.y = y + 50
      zhxtBox.position.x = x / 2 - 460
      zhxtBox.name = 'centerBottomFloor2'

      group.add(zhxtBox)
      // // 总调用次数
      // let zdycsBox = this.addFloatBoxFaceText4()
      // zdycsBox.position.z = z - 750
      // zdycsBox.position.x = x / 2 - 30
      // group.add(zdycsBox)
      //接口交互总次数
      let jkjhzcsBox = this.addFloatBoxFaceText5()
      jkjhzcsBox.position.z = z - 1550
      jkjhzcsBox.position.x = x / 2 - 760
      group.add(jkjhzcsBox)
      // //移动作业终端
      // let ydzyzdBox = this.addFloatBoxFaceText7()
      // ydzyzdBox.position.z = z - 350
      // ydzyzdBox.position.x = x / 2 - 960
      // ydzyzdBox.position.y = 80
      // group.add(ydzyzdBox)

      // 添加线段 安全接入区
      let aqjrqLeftLine = this.addPolyline({
        point: [
          { x: x / 2 - 400, y: 26, z: z / 2 + 990 },
          { x: x / 2 - 580, y: 26, z: z / 2 + 990 },
          { x: x / 2 - 580, y: 60, z: z / 2 + 990 },
          { x: x / 2 - 1375, y: 60, z: z / 2 + 990 },
          { x: x / 2 - 1375, y: 60, z: z / 2 + 920 },
        ],
        color: 0x5af9ff,
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      }
      )
      aqjrqLeftLine.position.y = -36 / 2
      group.add(aqjrqLeftLine)
      let aqjrqRightLine = this.addPolyline({

        point: [
          { x: x / 2 - 1175, y: 60, z: z / 2 + 749 },
          { x: x / 2 - 580, y: 60, z: z / 2 + 749 },
          { x: x / 2 - 580, y: 26, z: z / 2 + 749 },
          { x: x / 2 - 400, y: 26, z: z / 2 + 749 },
        ],
        color: 0x5af9ff,
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      }
      )
      aqjrqRightLine.position.y = -36 / 2
      group.add(aqjrqRightLine)

      // 内网办公区域
      let newgqyLeftLine = this.addPolyline({
        point: [
          { x: x / 2 - 725, y: 60, z: z / 2 - 180 },
          { x: x / 2 - 580, y: 60, z: z / 2 - 180 },
          { x: x / 2 - 580, y: 25, z: z / 2 - 180 },
          { x: x / 2 - 400, y: 25, z: z / 2 - 180 },
        ],
        color: 0x5af9ff,
        arrow: {
          show: true,
          color: 0x5af9ff,
          scale: 0.8
        }
      }
      )
      newgqyLeftLine.position.y = -36 / 2
      group.add(newgqyLeftLine)
      let newgqyRightLine = this.addPolyline(
        {
          point: [
            { x: x / 2 - 400, y: 25, z: z / 2 - 30 - 180 },
            { x: x / 2 - 580, y: 25, z: z / 2 - 30 - 180 },
            { x: x / 2 - 580, y: 60, z: z / 2 - 30 - 180 },
            { x: x / 2 - 725, y: 60, z: z / 2 - 30 - 180 },
          ],
          color: 0x5af9ff,
          arrow: {
            show: true,
            color: 0x5af9ff,
            scale: 0.8
          }
        }
      )
      newgqyRightLine.position.y = -36 / 2
      group.add(newgqyRightLine)

      let zhxtLine = this.addPolyline(

        {
          point: [
            { x: x / 2 - 460, y: 25, z: z / 2 - 30 - 180 },
            { x: x / 2 - 460, y: 25, z: z / 2 - 30 - 350 },
            { x: x / 2 - 460, y: 60, z: z / 2 - 30 - 350 },
          ],
          color: 0x5af9ff,
          arrow: {
            show: false,
            color: 0x5af9ff,
            scale: 0.8
          }
        }
      )
      zhxtLine.position.y = -36 / 2
      group.add(zhxtLine)
      return group
    },
  }
}
export default marketingBusinessCom
