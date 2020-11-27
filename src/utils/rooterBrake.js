import router from '../router'
import Vue from 'vue'
import {
  getToken
} from '@/utils/cookie' // getToken from cookie
// import axios from 'axios'

const whiteList = ['/login', '/'] // 路由白名单
router.beforeEach(async (to, from, next) => {
  if (getToken() == 'chinacar') { // determine if there has token
    next()
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) != -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/') // 否则全部重定向到登录页
    }
  }
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})