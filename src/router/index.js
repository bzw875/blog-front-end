import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import archive from '@/components/archive'
import tags from '@/components/tags'
import tag from '@/components/tag'
import upload from '@/components/upload'
import monitoring from '@/components/monitoring'
import post from '@/components/post'
import about from '@/components/about'
import articleDetail from '@/components/articleDetail'
import edit from '@/components/edit'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/archive', name: 'archive', component: archive },
    { path: '/tags', name: 'tags', component: tags },
    { path: '/tags/:tag', name: 'tag', component: tag },
    { path: '/upload', name: 'upload', component: upload },
    { path: '/monitoring', name: 'monitoring', component: monitoring },
    { path: '/post', name: 'post', component: post },
    { path: '/about', name: 'about', component: about },
    { path: '/post/:id', name: 'articleDetail', component: articleDetail },
    { path: '/edit/:id', name: 'edit', component: edit },
    { path: '/login', name: 'login', component: login }
  ]
})
