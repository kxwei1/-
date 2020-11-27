/*
 * @Description: 
 * @Author: kxwei
 * @Date: 2020-11-26 17:31:10
 * @LastEditTime: 2020-11-26 17:46:02
 * @FilePath: \security\src\view\components\threejs\event.js
 * @LastModifiedBy: kxwei
 */


import * as THREE from 'three'

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
let renderer = new THREE.WebGLRenderer({ antialias: true })
let camera
let scene
render()
function onMouseMove(event) {
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function render() {
    scene = new THREE.Scene();
    // 通过摄像机和鼠标位置更新射线
    raycaster.setFromCamera(mouse, camera);

    // 计算物体和射线的焦点
    var intersects = raycaster.intersectObjects(scene.children);

    for (var i = 0; i < intersects.length; i++) {

        intersects[i].object.material.color.set(0xff0000);

    }
    console.log(intersects)
    renderer.render(scene, camera);
}

window.addEventListener('mousemove', onMouseMove, false);

window.requestAnimationFrame(render);
