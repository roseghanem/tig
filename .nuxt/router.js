import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f79cf8a = () => interopDefault(import('..\\pages\\aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _7bd03390 = () => interopDefault(import('..\\pages\\ourservice1.vue' /* webpackChunkName: "pages/ourservice1" */))
const _7bb4048e = () => interopDefault(import('..\\pages\\ourservice2.vue' /* webpackChunkName: "pages/ourservice2" */))
const _fc51bebc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutus",
    component: _5f79cf8a,
    name: "aboutus"
  }, {
    path: "/ourservice1",
    component: _7bd03390,
    name: "ourservice1"
  }, {
    path: "/ourservice2",
    component: _7bb4048e,
    name: "ourservice2"
  }, {
    path: "/",
    component: _fc51bebc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
