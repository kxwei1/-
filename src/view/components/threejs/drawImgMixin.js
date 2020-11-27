import * as THREE from 'three'

let drawImgMixin = {
  data() {
    return {
      gradientImg: '', // 渐变图片
      baseUrl: 'static/threejs/',
      faceArr: [], // 需要一直面向 屏幕
      font: '', // 字体
      deg90: Math.PI / 2 // 旋转90度
    }
  },
  async mounted() { },
  methods: {
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-16 20:28
     * @desc: 生成渐变贴图
     */
    createGradientImg() {
      let reCanvas
      if (this.gradientImg && this.gradientImg != '') {
        reCanvas = this.gradientImg
      } else {
        const canvas = document.createElement('canvas')
        canvas.width = 100
        canvas.height = 100

        const context = canvas.getContext('2d')
        const gradient = context.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, 'rgba(3,24,90,0)')
        gradient.addColorStop(1, 'rgba(3,24,90,1)')

        context.fillStyle = gradient
        context.fillRect(0, 0, canvas.width, canvas.height)
        reCanvas = canvas
      }
      return reCanvas
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-17 15:21
     * @desc: 画一个盒子
     */
    addCubeBox({
      x,
      y,
      z,
      boxColor = 0x011f59,
      opacity = 1,
      borderColor,
      borderType = 'solid'
    }) {
      let geometry = new THREE.BoxGeometry(x, y, z)
      let geometryBuffer = new THREE.BoxBufferGeometry(x + 1, y + 1, z + 1)
      let material = new THREE.MeshLambertMaterial({
        color: boxColor,
        // transparent: true,
        opacity: opacity
      })
      let cube = new THREE.Mesh(geometry, material)
      if (borderColor) {
        let type = new THREE.LineBasicMaterial({ color: borderColor })
        if (borderType == 'dotted') {
          type = new THREE.LineDashedMaterial({
            color: borderColor,
            dashSize: 6,
            gapSize: 3
          })
        }
        // 画边框线
        let edges = new THREE.EdgesGeometry(geometryBuffer, 1)
        let line = new THREE.LineSegments(edges, type)
        if (borderType == 'dotted') {
          line.computeLineDistances()
        }

        line.material.depthFunc = THREE.AlwaysDepth
        line.renderOrder = 30 // 渲染层级
        cube.add(line)
        cube.renderOrder = 50
      }

      return cube
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-17 14:16
     * @desc: 添加平面线框
     */
    addSurfaceLine(pointA, pointB, pointC, pointD) {
      let material = new THREE.LineBasicMaterial({
        color: 0x238ef1
      })
      var geometry = new THREE.Geometry()
      geometry.vertices.push(pointA, pointB, pointC, pointD)
      var line = new THREE.LineLoop(geometry, material)
      line.material.depthFunc = THREE.AlwaysDepth
      line.renderOrder = 99 // 渲染层级
      return line
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-17 09:55
     * @desc: 四面光墙
     */
    addLightAroundWall({ x, y, z }) {
      let h = 140 // 光墙统一高度
      let aroundWall = new THREE.Group()
      // 设置基准
      aroundWall.position.set(0, h / 2 + y / 2 + 1, 0)
      let rotateY = Math.PI / 2
      let left = this.addLightOneWall({
        size: { x: x, y: h },
        position: { x: 0, y: 0, z: z / 2 }
      })

      let right = this.addLightOneWall({
        size: { x: x, y: h },
        position: { x: 0, y: 0, z: -z / 2 }
      })
      let top = this.addLightOneWall({
        size: { x: z, y: h },
        position: { x: -x / 2, y: 0, z: 0 },
        rotateY: rotateY
      })
      let bottom = this.addLightOneWall({
        size: { x: z, y: h },
        position: { x: x / 2, y: 0, z: 0 },
        rotateY: rotateY
      })
      aroundWall.add(left)
      aroundWall.add(right)
      aroundWall.add(top)
      aroundWall.add(bottom)
      return aroundWall
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-17 18:15
     * @desc: 生成一个面
     */
    addPlaneGeometry({ size = { x, y }, color = 0xffffff, borderColor }) {
      let geometry = new THREE.PlaneGeometry(size.x, size.y)
      let material = new THREE.MeshBasicMaterial({
        color: color,
        opacity: 1,
        side: THREE.DoubleSide,
        aoMapIntensity: 1
      })
      let plane = new THREE.Mesh(geometry, material)
      if (borderColor) {
        // 画边框线
        let edges = new THREE.EdgesGeometry(geometry)
        let line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: borderColor })
        )
        line.material.depthFunc = THREE.AlwaysDepth
        line.renderOrder = 30 // 渲染层级

        plane.add(line)
      }
      return plane
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-16 16:29
     * @desc: 设置光墙
     */
    addLightOneWall({ size = { x, y }, position = { x, y, z }, rotateY }) {
      let geometry = new THREE.PlaneGeometry(size.x, size.y)
      let img = this.createGradientImg()
      const shadowTexture = new THREE.CanvasTexture(img)
      let material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: shadowTexture,
        transparent: true
      })
      let plane = new THREE.Mesh(geometry, material)
      if (rotateY) plane.rotateY(rotateY)
      plane.position.set(position.x, position.y, position.z)
      return plane
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-19 23:58
     * @desc: 添加一面红色砖墙
     */
    addRedOneWall({ size = { x, y, z }, position = { x, y, z }, rotateY }) {
      let geometry = new THREE.BoxGeometry(size.x, size.y, size.z)
      var texture = new THREE.TextureLoader().load(
        this.baseUrl + 'red_wall.png'
      )
      let textureWidth = 35
      let repeatZNum = size.z / textureWidth
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.ClampToEdgeWrapping

      texture.repeat.set(repeatZNum, 1)

      let textureConf = {
        map: texture,
        transparent: true
      }
      let colorConf = {
        color: 0x511c3f,
        opacity: 0.4,
        transparent: true
      }
      let material = [
        new THREE.MeshBasicMaterial(textureConf),
        new THREE.MeshBasicMaterial(textureConf),
        new THREE.MeshBasicMaterial(colorConf),
        new THREE.MeshBasicMaterial(colorConf),
        new THREE.MeshBasicMaterial(colorConf),
        new THREE.MeshBasicMaterial(colorConf),
        new THREE.MeshBasicMaterial(colorConf),
        new THREE.MeshBasicMaterial(colorConf)
      ]
      let plane = new THREE.Mesh(geometry, material)
      if (rotateY) plane.rotateY(rotateY)
      plane.position.set(position.x, position.y, position.z)
      return plane
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-20 13:57
     * @desc: 四周红色围墙
     */
    addRedAroundWall({ x, y, z }) {
      let w = 10 // 墙厚度
      let h = 76 // 光墙统一高度
      let aroundWall = new THREE.Group()
      // 设置基准
      aroundWall.position.set(0, h / 2 + y / 2 + 1, 0)
      let left = this.addRedOneWall({
        size: { x: w, y: h, z: x },
        position: { x: 0, y: y, z: z / 2 - w / 2 },
        rotateY: this.deg90
      })

      let right = this.addRedOneWall({
        size: { x: w, y: h, z: x },
        position: { x: 0, y: y, z: -z / 2 + w / 2 },
        rotateY: this.deg90
      })
      let top = this.addRedOneWall({
        size: { x: w, y: h, z: z },
        position: { x: -x / 2 + w / 2, y: y, z: 0 }
      })
      let bottom = this.addRedOneWall({
        size: { x: w, y: h, z: z },
        position: { x: x / 2 - w / 2, y: y, z: 0 }
      })
      aroundWall.add(left)
      aroundWall.add(right)
      aroundWall.add(top)
      aroundWall.add(bottom)
      return aroundWall
    },

    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-18 17:42
     * @desc: 添加图片
     */
    addPlaneImg({ size = { x, y }, imgUrl = '', face = false, toTop = false }) {
      let geometry = new THREE.PlaneGeometry(size.x, size.y)
      var texture = new THREE.TextureLoader().load(this.baseUrl + imgUrl)
      let material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        map: texture
      })
      let plane = new THREE.Mesh(geometry, material)
      if (toTop) {
        plane.material.depthTest = false
        plane.renderOrder = 99 // 渲染层级
      }
      if (face) {
        this.faceArr.push(plane)
      }
      return plane
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-18 18:31
     * @desc: 添加文字
     */
    addTextGrometry({
      txt = '请添加字符',
      fontSize = 14,
      color = 0xffffff,
      face = false,
      toTop = false
    }) {
      if (this.font) {
        var geometry = new THREE.TextGeometry(txt, {
          font: this.font,
          size: fontSize,
          height: 1
        })
        let material = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true
        })
        let text = new THREE.Mesh(geometry, material)
        if (toTop) {
          text.material.depthTest = false
          text.renderOrder = 99 // 渲染层级
        }
        if (face) {
          this.faceArr.push(text)
        }
        return text
      }
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-19 10:15
     * @desc: 加载字体
     */
    loaderFont() {
      let promise = new Promise((resolve, reject) => {
        if (this.font && this.font != '') resolve(this.font)
        let loader = new THREE.FontLoader()
        loader.load(this.baseUrl + 'YaHei_Regular.json', font => {
          if (font) {
            this.font = font
            resolve(font)
          } else {
            reject(false)
          }
        })
      })
      return promise
    },

    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-19 14:27
     * @desc: 添加一个上下结构的图文
     */
    addNormalImgText({
      imgInfo = { x, y, url },
      txtInfo = { txt, fontSize, color },
      face,
      point = 'center'
    }) {
      let imgTextGroup = new THREE.Group()
      let planeImg = this.addPlaneImg({
        size: { x: imgInfo.x, y: imgInfo.y },
        imgUrl: imgInfo.url,
        toTop: true
      })
      planeImg.geometry.center()
      planeImg.position.y += planeImg.geometry.boundingBox.max.y + 5
      imgTextGroup.add(planeImg)
      let text = this.addTextGrometry({
        txt: txtInfo.txt,
        fontSize: txtInfo.fontSize,
        color: txtInfo.color,
        toTop: true
      })
      text.geometry.center()
      text.position.y -= text.geometry.boundingBox.max.y + 5
      imgTextGroup.add(text)
      if (face) {
        this.faceArr.push(imgTextGroup)
      }
      if (point == 'bottom') {
        imgTextGroup.position.y += text.geometry.boundingBox.max.y + 5
      }
      return imgTextGroup
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-23 08:52    
     * @desc: 添加 前面有字的盒子
     */
    addBoxFaceText({
      x,
      y,
      z,
      txt,
      fontSize = 14,
      boxColor = 0x021446,
      borderColor = 0x4b69d2
    }) {
      let group = new THREE.Group()
      let box = this.addCubeBox({
        x: x,
        y: y,
        z: z,
        boxColor: boxColor,
        borderColor: borderColor
      })
      group.add(box)
      let text = this.addTextGrometry({
        txt: txt,
        fontSize: fontSize,
        toTop: true
      })
      text.rotateY(this.deg90)
      text.geometry.center()
      text.position.x = x / 2
      group.add(text)
      return group
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-23 08:52    
     * @desc: 添加 浮动有字的盒子
     */
    addFloatBoxFaceText() {
      let x = 8
      let y = 70
      let z = 180
      let group = new THREE.Group()
      let box = this.addCubeBox({
        x: x,
        y: y,
        z: z,
        boxColor: 0x263aa5,
        borderColor: 0x4b69d2
      })
      group.add(box)
      let txt = this.addTextGrometry({
        txt: '采集成功率',
        fontSize: 14,
        toTop: true
      })
      let txt1 = this.addTextGrometry({
        txt: '99.85%',
        fontSize: 14,
        weight: 'normal',
        color: 0x14e4f0,
        toTop: true,
      })
      txt.rotateY(this.deg90)
      txt.geometry.center()
      txt1.rotateY(this.deg90)
      txt1.geometry.center()
      txt.position.x = x
      txt.position.y = 16
      txt1.position.x = x
      txt1.position.y = -12
      group.add(txt)
      group.add(txt1)
      group.position.y = 30
      group.renderOrder = 99
      return group
    },
    addFloatBoxFaceText1() {
      let x = 8
      let y = 70
      let z = 180
      let group = new THREE.Group()
      let box = this.addCubeBox({
        x: x,
        y: y,
        z: z,
        boxColor: 0x263aa5,
        borderColor: 0x4b69d2
      })
      group.add(box)
      let txt = this.addTextGrometry({
        txt: '营销专业办公终端',
        fontSize: 14,
        toTop: true
      })
      let txt1 = this.addTextGrometry({
        txt: '67435',
        fontSize: 14,
        weight: 'normal',
        color: 0x14e4f0,
        toTop: true,
      })
      txt.rotateY(this.deg90)
      txt.geometry.center()
      txt1.rotateY(this.deg90)
      txt1.geometry.center()
      txt.position.x = x
      txt.position.y = 16
      txt1.position.x = x
      txt1.position.y = -12
      group.add(txt)
      group.add(txt1)
      group.position.y = 30
      group.renderOrder = 99
      return group
    },
    addFloatBoxFaceText2() {
      let x = 8
      let y = 70
      let z = 180
      let group = new THREE.Group()
      let box = this.addCubeBox({
        x: x,
        y: y,
        z: z,
        boxColor: 0x263aa5,
        borderColor: 0x4b69d2
      })
      group.add(box)
      let txt = this.addTextGrometry({
        txt: '办公终端使用情况',
        fontSize: 14,
        toTop: true
      })
      let txt1 = this.addTextGrometry({
        txt: '99.85%',
        fontSize: 14,
        weight: 'normal',
        color: 0x14e4f0,
        toTop: true,
      })
      txt.rotateY(this.deg90)
      txt.geometry.center()
      txt1.rotateY(this.deg90)
      txt1.geometry.center()
      txt.position.x = x
      txt.position.y = 16
      txt1.position.x = x
      txt1.position.y = -12
      group.add(txt)
      group.add(txt1)
      group.position.y = 30
      group.renderOrder = 99
      return group
    },
    addFloatBoxFaceText3() {
      let x = 8
      let y = 70
      let z = 240
      let group = new THREE.Group()
      let box = this.addCubeBox({
        x: x,
        y: y,
        z: z,
        boxColor: 0x263aa5,
        borderColor: 0x4b69d2
      })
      group.add(box)
      let txt = this.addTextGrometry({
        txt: '系统账号',
        fontSize: 14,
        toTop: true
      })
      let txt2 = this.addTextGrometry({
        txt: '345678',
        fontSize: 14,
        weight: 'normal',
        color: 0x14e4f0,
        toTop: true,
      })
      let txt3 = this.addTextGrometry({
        txt: '系统访问率',
        fontSize: 14,
        toTop: true,
      })
      let txt4 = this.addTextGrometry({
        txt: '87.56%',
        fontSize: 14,
        weight: 'normal',
        color: 0x14e4f0,
        toTop: true,
      })
      txt.rotateY(this.deg90)
      txt.geometry.center()
      txt.position.x = x
      txt.position.z = 70
      txt.position.y = 16
      group.add(txt)

      txt2.rotateY(this.deg90)
      txt2.geometry.center()
      txt2.position.x = x
      txt2.position.z = +70
      txt2.position.y = -12
      group.add(txt2)

      txt3.rotateY(this.deg90)
      txt3.geometry.center()
      txt3.position.x = x
      txt3.position.z = -50

      txt3.position.y = 16
      group.add(txt3)

      txt4.rotateY(this.deg90)
      txt4.geometry.center()
      txt4.position.x = x
      txt4.position.z = -50
      txt4.position.y = -12
      group.add(txt4)


      group.position.y = 30
      group.renderOrder = 99
      return group
    },
    addFloatBoxFaceText4() {
      let x = 8
      let y = 70
      let z = 220
      let group = new THREE.Group()
      let box = this.addCubeBox({
        x: x,
        y: y,
        z: z,
        boxColor: 0x263aa5,
        borderColor: 0x4b69d2
      })
      group.add(box)
      let txt = this.addTextGrometry({
        txt: '总调用次数',
        fontSize: 14,
        toTop: true
      })
      let txt2 = this.addTextGrometry({
        txt: '233456',
        fontSize: 14,
        weight: 'normal',
        color: 0x14e4f0,
        toTop: true,
      })
      let txt3 = this.addTextGrometry({
        txt: '成功率',
        fontSize: 14,
        toTop: true,
      })
      let txt4 = this.addTextGrometry({
        txt: '95%',
        fontSize: 14,
        weight: 'normal',
        color: 0x14e4f0,
        toTop: true,
      })
      txt.rotateY(this.deg90)
      txt.geometry.center()
      txt.position.x = x
      txt.position.z = +50
      txt.position.y = 16
      group.add(txt)

      txt2.rotateY(this.deg90)
      txt2.geometry.center()
      txt2.position.x = x
      txt2.position.z = +50
      txt2.position.y = -12
      group.add(txt2)

      txt3.rotateY(this.deg90)
      txt3.geometry.center()
      txt3.position.x = x
      txt3.position.z = -50
      txt3.position.y = 16
      group.add(txt3)

      txt4.rotateY(this.deg90)
      txt4.geometry.center()
      txt4.position.x = x
      txt4.position.z = -50
      txt4.position.y = -12

      group.add(txt4)
      group.position.y = 30
      group.renderOrder = 99
      return group
    },
    addFloatBoxFaceText5() {
      let x = 8
      let y = 70
      let z = 180
      let group = new THREE.Group()
      let box = this.addCubeBox({
        x: x,
        y: y,
        z: z,
        boxColor: 0x263aa5,
        borderColor: 0x4b69d2
      })
      group.add(box)
      let txt = this.addTextGrometry({
        txt: '接口交互总次数',
        fontSize: 14,
        toTop: true
      })
      let txt2 = this.addTextGrometry({
        txt: '233456',
        fontSize: 14,
        weight: 'normal',
        color: 0x14e4f0,
        toTop: true,
      })
      let txt3 = this.addTextGrometry({
        txt: '成功率',
        fontSize: 14,
        toTop: true,
      })
      let txt4 = this.addTextGrometry({
        txt: '95%',
        fontSize: 14,
        weight: 'normal',
        color: 0x14e4f0,
        toTop: true,
      })
      txt.rotateY(this.deg90)
      txt.geometry.center()
      txt.position.x = x
      txt.position.y = 16
      group.add(txt)

      txt2.rotateY(this.deg90)
      txt2.geometry.center()
      txt2.position.x = x
      txt2.position.y = -12
      group.add(txt2)

      txt3.rotateY(this.deg90)
      txt3.geometry.center()
      txt3.position.x = x
      txt3.position.y = 16
      group.add(txt3)

      txt4.rotateY(this.deg90)
      txt4.geometry.center()
      txt4.position.x = x
      txt4.position.y = -12

      group.add(txt4)
      group.position.y = 30
      group.renderOrder = 99
      return group
    },
    addFloatBoxFaceText7() {
      let x = 8
      let y = 70
      let z = 480
      let group = new THREE.Group()
      let box = this.addCubeBox({
        x: x,
        y: y,
        z: z,
        boxColor: 0x263aa5,
        borderColor: 0x4b69d2
      })
      group.add(box)
      let txt = this.addTextGrometry({
        txt: '移动作业终端',
        fontSize: 14,
        toTop: true
      })
      let txt2 = this.addTextGrometry({
        txt: '移动业务应用',
        fontSize: 14,
        weight: 'normal',
        toTop: true,
      })
      let txt3 = this.addTextGrometry({
        txt: '18432台',
        fontSize: 14,
        color: 0x14e4f0,
        toTop: true,
      })
      let txt4 = this.addTextGrometry({
        txt: '18578个',
        fontSize: 14,
        weight: 'normal',
        color: 0x14e4f0,
        toTop: true,
      })
      let txt5 = this.addTextGrometry({
        txt: '终端使用率',
        fontSize: 14,
        toTop: true
      })
      let txt6 = this.addTextGrometry({
        txt: 'app使用率',
        fontSize: 14,
        weight: 'normal',
        toTop: true,
      })
      let txt7 = this.addTextGrometry({
        txt: '85.23%',
        fontSize: 14,
        color: 0x14e4f0,
        toTop: true,
      })
      let txt8 = this.addTextGrometry({
        txt: '76.32%',
        fontSize: 14,
        weight: 'normal',
        color: 0x14e4f0,
        toTop: true,
      })
      txt.rotateY(this.deg90)
      txt.geometry.center()
      txt.position.x = x
      txt.position.y = 16
      txt.position.z = +160
      group.add(txt)

      txt2.rotateY(this.deg90)
      txt2.geometry.center()
      txt2.position.x = x
      txt2.position.y = -12
      txt2.position.z = +160

      group.add(txt2)

      txt3.rotateY(this.deg90)
      txt3.geometry.center()
      txt3.position.x = x
      txt3.position.y = 16
      txt3.position.z = +30
      group.add(txt3)

      txt4.rotateY(this.deg90)
      txt4.geometry.center()
      txt4.position.x = x
      txt4.position.y = -12
      txt4.position.z = +30

      group.add(txt4)
      group.position.y = 30
      group.renderOrder = 99

      txt5.rotateY(this.deg90)
      txt5.geometry.center()
      txt5.position.x = x
      txt5.position.y = 16
      txt5.position.z = -90
      group.add(txt5)

      txt6.rotateY(this.deg90)
      txt6.geometry.center()
      txt6.position.x = x
      txt6.position.y = -12
      txt6.position.z = -90

      group.add(txt6)

      txt7.rotateY(this.deg90)
      txt7.geometry.center()
      txt7.position.x = x
      txt7.position.y = 16
      txt7.position.z = -190

      group.add(txt7)

      txt8.rotateY(this.deg90)
      txt8.geometry.center()
      txt8.position.x = x
      txt8.position.y = -12
      txt8.position.z = -190

      group.add(txt8)
      group.position.y = 30
      group.renderOrder = 99
      return group
    },


    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-23 14:29
     * @desc: 添加线段
     */
    addLine([...point]) {
      let material = new THREE.LineBasicMaterial({
        color: 0x47CBDA
      })
      var geometry = new THREE.Geometry()
      geometry.vertices.push(...point)
      var line = new THREE.Line(geometry, material)
      line.material.depthFunc = THREE.AlwaysDepth
      line.renderOrder = 30 // 渲染层级
      return line
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-23 15:31
     * @desc: 添加平行线段,仅支持90度内折线，复杂折线不支持
     */
    addParallelLine({
      point = [],
      color = 0x238ef1,
      startDirection = 'h',
      endDirection = 'h',
      arrow = {
        show: false,
        color: 0xffffff,
        scale: 1
      }
    }) {
      let pointArr = [...point]
      let paralWidth = 10
      let paralBaseArr = []
      let paralPointArr = []
      let startIdx = 0
      let endIdx = point.length - 1
      // 处理一下 开头结尾水平
      pointArr.forEach((item, idx) => {
        paralBaseArr.push(new THREE.Vector3(item.x, 0, item.z))
        let x = item.x - paralWidth
        let z = item.z - paralWidth
        if (idx == startIdx) {
          if (startDirection == 'h') {
            x = item.x
          } else {
            z = item.z
          }
        }
        if (idx == endIdx) {
          if (endDirection == 'h') {
            x = item.x
          } else {
            z = item.z
          }
        }
        paralPointArr.push(new THREE.Vector3(x, item.y, z))
      })
      let group = new THREE.Group()

      let lineBase = this.addLine(paralBaseArr, color)
      group.add(lineBase)

      let lineParal = this.addLine(paralPointArr, color)
      group.add(lineParal)
      if (arrow.show) {
        let arrowConf = {
          color: arrow.color,
          scale: arrow.scale
        } // 加入三角形
        let arrow1 = this.addArrow(arrowConf)
        group.add(arrow1)
        // 加点
        let linePointBase = this.addPoint({ point: paralBaseArr })
        group.add(...linePointBase)

        group.updateMatrixWorld(true)
        this.tweenComplete(linePointBase, arrow1)

        // 加入反向
        let arrow2 = this.addArrow(arrowConf)
        group.add(arrow2)
        paralPointArr = paralPointArr.reverse()
        let linePointParal = this.addPoint({ point: paralPointArr })
        group.add(...linePointParal)
        this.tweenComplete(linePointParal, arrow2)
      }
      return group
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-23 18:35
     * @desc: 加入箭头
     */
    addArrow({ color = 0x5af9ff, scale = 1 }) {
      let x = 0
      let y = 0
      let w = 20
      let th = 14
      let bh = 4
      let shape = new THREE.Shape()

      shape.moveTo(x, y)
      shape.lineTo(x - w / 2, y - bh)
      shape.lineTo(x, y + th)
      shape.lineTo(x + w / 2, y - bh)
      shape.lineTo(x, y)

      let geometry = new THREE.ShapeGeometry(shape)
      geometry.rotateX(this.deg90)
      geometry.scale(scale, scale, scale)
      let material = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide
      })
      let mesh = new THREE.Mesh(geometry, material)
      mesh.renderOrder = 30
      return mesh
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-24 11:09
     * @desc: 创建下一次动画
     */
    tweenComplete(point, sphere) {
      let startPoint = point[0].position.clone()
      let data = {
        x: [],
        y: [],
        z: [],
        tag: []
      }
      startPoint.tag = 0
      point.forEach((item, idx) => {
        if (idx != 0) {
          let itemPosition = item.position
          let x = itemPosition.x
          let y = itemPosition.y
          let z = itemPosition.z
          let tag = idx
          data.x.push(x)
          data.y.push(y)
          data.z.push(z)
          data.tag.push(tag)
        }
      })

      new TWEEN.Tween(startPoint)
        .to(data, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate((obj, progress) => {
          let index = parseInt(obj.tag + 1) % point.length
          sphere.position.set(obj.x, obj.y, obj.z)
          let v3 = this.getWorldPosition(point[index])
          sphere.lookAt(v3)
        })
        .repeat(Infinity)
        .start()
    },
    /**
     * @Author: luo1o1o1o
     * @QQ: 330240995, @PHONE: 17600071321
     * @Date: 2020-11-26 11:01
     * @desc: 获取世界坐标信息
     */
    getWorldPosition(geomerty) {
      let world = new THREE.Vector3()
      geomerty.getWorldPosition(world)
      return world
    }
  }
}
export default drawImgMixin
