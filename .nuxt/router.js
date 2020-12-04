import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _740666df = () => interopDefault(import('../pages/category/_CategorySlug.vue' /* webpackChunkName: "pages/category/_CategorySlug" */))
const _6979d614 = () => interopDefault(import('../pages/category/_ProductSlug.vue' /* webpackChunkName: "pages/category/_ProductSlug" */))
const _b1ef6fcc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category/:CategorySlug?",
    component: _740666df,
    name: "category-CategorySlug"
  }, {
    path: "/category/:ProductSlug?",
    component: _6979d614,
    name: "category-ProductSlug"
  }, {
    path: "/",
    component: _b1ef6fcc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
