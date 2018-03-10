<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import addBlog from './components/addBlog';
// import showBlogs from './components/showBlogs';
// import listBlogs from './components/listBlogs';
import header from './components/header2';
export default {
  data () {
    return {

    }
  },
  components:{
    // 'add-blog':addBlog,
    // 'show-blogs':showBlogs,
    // 'list-blogs':listBlogs,
    'app-header':header
  },
  methods:{

  }
}
</script>
<style >
body{
  margin: 0;
  font-family: monospace;
}
</style>
