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
      let yxjcsjptline = this.addParallelLine(
        [
          { x: x / 2 - 55, y: 0, z: z / 2 },
          { x: x / 2 - 55, y: 0, z: z / 2 + 123 },
          { x: x / 2 - 78 + 4, y: 0, z: z / 2 + 123 }
        ],
        {
          color: 0x1eeafa,
          startDirection: 'v', // 开始节点为水平
          endDirection: 'h' // 结束点为垂直
        }
      )
      yxjcsjptline.position.y = -36 / 2
      group.add(yxjcsjptline)
      //营销地理信息系统
      let yxdlxxxtBox = this.addBoxFaceText({
        x: 8,
        y: 36,
        z: 180,
        txt: '营销地理信息系统'
      }
      )
      yxdlxxxtBox.position.z = z + 110
      yxdlxxxtBox.position.x = x / 2 - 180
      group.add(yxdlxxxtBox)
      let yxdlxxxtline = this.addParallelLine(
        [
          { x: x / 2 - 157.5, y: 0, z: z / 2 },
          { x: x / 2 - 157.5, y: 0, z: z / 2 + 263 },
          { x: x / 2 - 180.5 + 4, y: 0, z: z / 2 + 263 }
        ],
        {
          color: 0x1eeafa,
          startDirection: 'v', // 开始节点为水平
          endDirection: 'h' // 结束点为垂直
        }
      )
      yxdlxxxtline.position.y = -36 / 2
      group.add(yxdlxxxtline)
      //营销稽查监控
      let yxjcjkBox = this.addBoxFaceText({
        x: 8,
        y: 36,
        z: 180,
        txt: '营销稽查监控'
      }
      )
      yxjcjkBox.position.z = z - 20
      yxjcjkBox.position.x = x / 2 - 230
      group.add(yxjcjkBox)
      let yxjcjkline = this.addParallelLine(
        [
          { x: x / 2 - 207.5, y: 0, z: z / 2 },
          { x: x / 2 - 207.5, y: 0, z: z / 2 + 143 },
          { x: x / 2 - 230.5 + 4, y: 0, z: z / 2 + 143 }
        ],
        {
          color: 0x1eeafa,
          startDirection: 'v', // 开始节点为水平
          endDirection: 'h' // 结束点为垂直
        }
      )
      yxjcjkline.position.y = -36 / 2
      group.add(yxjcjkline)

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
      let jlscddpline = this.addParallelLine(
        [
          { x: x / 2 - 307.5, y: 0, z: z / 2 },
          { x: x / 2 - 307.5, y: 0, z: z / 2 + 343 },
          { x: x / 2 - 330.5 + 4, y: 0, z: z / 2 + 343 }
        ],
        {
          color: 0x1eeafa,
          startDirection: 'v', // 开始节点为水平
          endDirection: 'h' // 结束点为垂直
        }
      )
      jlscddpline.position.y = -36 / 2
      group.add(jlscddpline)
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
      let dnglfwptline = this.addParallelLine(
        [
          { x: x / 2 - 357.5, y: 0, z: z / 2 },
          { x: x / 2 - 357.5, y: 0, z: z / 2 + 58 },
          { x: x / 2 - 380.5 + 4, y: 0, z: z / 2 + 58 }
        ],
        {
          color: 0x1eeafa,
          startDirection: 'v', // 开始节点为水平
          endDirection: 'h' // 结束点为垂直
        }
      )
      dnglfwptline.position.y = -36 / 2
      group.add(dnglfwptline)
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
      let jlzcqsmzqglxtline = this.addParallelLine(
        [
          { x: x / 2 - 332.5, y: 0, z: z / 2 },
          { x: x / 2 - 332.5, y: 0, z: z / 2 + 228 },
          { x: x / 2 - 430.5 + 4, y: 0, z: z / 2 + 228 }
        ],
        {
          color: 0x1eeafa,
          startDirection: 'v', // 开始节点为水平
          endDirection: 'h' // 结束点为垂直
        }
      )
      jlzcqsmzqglxtline.position.y = -36 / 2
      group.add(jlzcqsmzqglxtline)
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
      let schsdywyyxtline = this.addParallelLine(
        [
          { x: x / 2 - 332.5, y: 0, z: z / 2 - 50 },
          { x: x / 2 - 382.5, y: 0, z: z / 2 - 50 },
          { x: x / 2 - 462.5, y: 0, z: z / 2 - 50 },

        ],
        {
          color: 0x1eeafa,
          startDirection: 'v', // 开始节点为水平
          endDirection: 'h' // 结束点为垂直
        }
      )
      schsdywyyxtline.position.y = -36 / 2
      group.add(schsdywyyxtline)

      //用电信息采集连线
      let ElectricityConsumptionInformationLine = this.addParallelLine(
        [
          { x: x / 2 - 127.5 + 4, y: 25, z: z / 2 + 819 },
          { x: x / 2 - 127.5, y: 25, z: z / 2 - 99 },
          { x: x / 2 - 127.5, y: 25, z: z / 2 - 100 },
        ],
        {
          color: 0x1eeafa,
          startDirection: 'v', // 开始节点为水平
          endDirection: 'h' // 结束点为垂直
        }
      )
      ElectricityConsumptionInformationLine.position.y = -36 / 2
      group.add(ElectricityConsumptionInformationLine)

      //营销移动作业
      let MarketingMobileJobine = this.addParallelLine(
        [
          { x: x / 2 - 332.5, y: 25, z: z / 2 - 640 },
          { x: x / 2 - 332.5, y: 25, z: z / 2 - 349 },
          { x: x / 2 - 332.5, y: 25, z: z / 2 - 350 },
        ],
        {
          color: 0x1eeafa,
          startDirection: 'v', // 开始节点为水平
          endDirection: 'h' // 结束点为垂直
        }
      )
      MarketingMobileJobine.position.y = -36 / 2
      group.add(MarketingMobileJobine)

      //添加API网关模块
      let APIwangguanLine = this.addParallelLine(
        [
          { x: x / 2 - 127.5 + 4, y: 25, z: z / 2 - 1323 },
          { x: x / 2 - 127.5, y: 25, z: z / 2 - 349 },
          { x: x / 2 - 127.5, y: 25, z: z / 2 - 350 },
        ],
        {
          color: 0x1eeafa,
          startDirection: 'v', // 开始节点为水平
          endDirection: 'h' // 结束点为垂直
        }
      )
      APIwangguanLine.position.y = -36 / 2
      group.add(APIwangguanLine)
      // 采集成功率
      let cjcglBox = this.addFloatBoxFaceText()
      cjcglBox.position.z = z + 650
      cjcglBox.position.x = x / 2 - 510
      cjcglBox.position.y = y + 59
      group.add(cjcglBox)

      //采集成功率线段

      let cjcglRightLine = this.addLine(
        [
          { x: x / 2 - 510, y: 26, z: z / 2 + 749 },
          { x: x / 2 - 510, y: 26, z: z / 2 + 849 },
          { x: x / 2 - 510, y: 65, z: z / 2 + 849 },

        ],
        {
          color: 0x1C9ED8,
        }
      )
      cjcglRightLine.position.y = -36 / 2
      group.add(cjcglRightLine)
      // 营销专业办公终端
      let yxzybgzdBox = this.addFloatBoxFaceText1()
      yxzybgzdBox.position.z = z - 130
      yxzybgzdBox.position.x = x / 2 - 760
      group.add(yxzybgzdBox)
      // 办公终端使用情况
      let bgzdsyqkBox = this.addFloatBoxFaceText2()
      bgzdsyqkBox.position.z = z - 630
      bgzdsyqkBox.position.x = x / 2 - 760
      group.add(bgzdsyqkBox)
      // 系统账号
      let zhxtBox = this.addFloatBoxFaceText3()
      zhxtBox.position.z = z - 630
      zhxtBox.position.y = y + 50
      zhxtBox.position.x = x / 2 - 460
      group.add(zhxtBox)
      // 总调用次数
      let zdycsBox = this.addFloatBoxFaceText4()
      zdycsBox.position.z = z - 750
      zdycsBox.position.x = x / 2 - 30
      group.add(zdycsBox)
      //接口交互总次数
      let jkjhzcsBox = this.addFloatBoxFaceText5()
      jkjhzcsBox.position.z = z - 1550
      jkjhzcsBox.position.x = x / 2 - 760
      group.add(jkjhzcsBox)
      //移动作业终端
      let ydzyzdBox = this.addFloatBoxFaceText7()
      ydzyzdBox.position.z = z - 350
      ydzyzdBox.position.x = x / 2 - 960
      ydzyzdBox.position.y = 80
      group.add(ydzyzdBox)


      // // 添加线段 安全接入区
      // let aqjrqLeftLine = this.addLine(
      //   [
      //     { x: x / 2 - 400, y: 26, z: z / 2 + 990 },
      //     { x: x / 2 - 580, y: 26, z: z / 2 + 990 },
      //     { x: x / 2 - 580, y: 60, z: z / 2 + 990 },
      //     { x: x / 2 - 1375, y: 60, z: z / 2 + 990 },
      //     { x: x / 2 - 1375, y: 60, z: z / 2 + 920 },
      //   ]
      // )
      // aqjrqLeftLine.position.y = -36 / 2
      // group.add(aqjrqLeftLine)
      // let aqjrqRightLine = this.addLine(
      //   [
      //     { x: x / 2 - 400, y: 26, z: z / 2 + 749 },
      //     { x: x / 2 - 580, y: 26, z: z / 2 + 749 },
      //     { x: x / 2 - 580, y: 60, z: z / 2 + 749 },
      //     { x: x / 2 - 1175, y: 60, z: z / 2 + 749 },
      //   ]
      // )
      // aqjrqRightLine.position.y = -36 / 2
      // group.add(aqjrqRightLine)

      // // 内网办公区域
      // let newgqyLeftLine = this.addLine(
      //   [
      //     { x: x / 2 - 400, y: 25, z: z / 2 - 180 },
      //     { x: x / 2 - 580, y: 25, z: z / 2 - 180 },
      //     { x: x / 2 - 580, y: 60, z: z / 2 - 180 },
      //     { x: x / 2 - 725, y: 60, z: z / 2 - 180 },
      //   ]
      // )
      // newgqyLeftLine.position.y = -36 / 2
      // group.add(newgqyLeftLine)
      // let newgqyRightLine = this.addLine(
      //   [
      //     { x: x / 2 - 400, y: 25, z: z / 2 - 30 - 180 },
      //     { x: x / 2 - 580, y: 25, z: z / 2 - 30 - 180 },
      //     { x: x / 2 - 580, y: 60, z: z / 2 - 30 - 180 },
      //     { x: x / 2 - 725, y: 60, z: z / 2 - 30 - 180 },
      //   ]
      // )
      // newgqyRightLine.position.y = -36 / 2
      // group.add(newgqyRightLine)

      // let zhxtLine = this.addLine(
      //   [
      //     { x: x / 2 - 460, y: 25, z: z / 2 - 30 - 180 },
      //     { x: x / 2 - 460, y: 25, z: z / 2 - 30 - 350 },
      //     { x: x / 2 - 460, y: 60, z: z / 2 - 30 - 350 },
      //   ]
      // )
      // zhxtLine.position.y = -36 / 2
      // group.add(zhxtLine)




      return group
    }
  }
}
export default marketingBusinessCom
