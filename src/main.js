import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BlogRouter from './routes'
export const bus = new Vue();
//register axios as the parameter in the global environment.
window.axios=require('axios');

//Custom directives
// Vue.directive('rainbow', {
//   bind(el) {
//       //el 意味著拿到整個元素<h3 v-rainbow>Title:{{post.title}}</h3>
//       el.style.color = '#' + Math.random().toString().slice(2, 8);    
//   }
// });

//configuration in the vue router 
// parameter: routes should put in the array
// mode: default or history => history would eliminate the hash tag
Vue.use(VueRouter);
const router = new VueRouter({
  routes:BlogRouter,
  mode: 'history'
});

// directive could be the global registration or local registeration 
// if global, just need to use the object.directive.
// if local components, need to use the directives in the attribute of the directives!!
// the reason  you use this kind of the method is that easilier to customize your own theme from the website.
Vue.directive('theme',{
  bind(el,binding,vnode){
    //接收從tag傳遞過來的數值需要再字定義的地方去傳入參數
    if(binding.value=='wide'){
      el.style.maxWidth = '1200px';
    }else if(binding.value=='narrow'){
      el.style.maxWidth = '500px';
    };
    if(binding.arg=='columns'){
      el.style.background="#ddd";
      el.style.padding="20px";
    }
  }
});
//=======================================
// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase();
// })
//========================================
// Vue.filter('snippet',function(value){
//   return value.slice(0,100)+"......";
// })
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
