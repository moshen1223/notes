#### 使用Vue-cli创建的项目关于路由中#问题

原因：vue开发单页面应用，在切换不同页面的时候，HTML永远保持一个，正是单页面的原因，vue-router默认hash模式--使用URL的hash来模拟一个完整的URL，
URL改变时，页面不会重新加载。正常的页面来说，更换URL一定会导致页面更换，只更换URL中的查询字符串和hash值不会改变。

移除路由中的#，使用history模式改变，histor模式充分利用history.pushState API来完成URL的跳转而不需要重新加载页面。<br/>
const router = new VueRouter({
  mode: 'history',
  routes: []
}) <br/>

history模式需要后端配合。


