<template>
  <div v-theme:columns="'wide'" id="show-blogs">
      <h1>List blog title</h1>
      <input type="text" v-model="search" placeholder="Find blog">
      <div class="single-blog" v-for="post in filteredBlogs" :key="post.id">
          <h2 v-rainbow>Title:{{post.title |to-uppercase}}</h2>
          <hr>
      </div>
  </div>
</template>


<script>
import searchMixin from '../mixins/searchmixin';
export default {
  data(){
      return{
          posts:[],
          search:''
      }
  },
  methods:{

  },
  created(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
          console.log(res.data);
          this.posts=res.data;
      })
      .catch(err=>{
          console.log(err);
      })
  },
  computed:{
  },
  filters:{
      'to-uppercase':function(value){
        return value.toUpperCase();},
        'snippet':function(value){
        return value.slice(0,100)+"......";},
  },
  directives:{
      'rainbow':{
            bind(el) {
                //el 意味著拿到整個元素<h3 v-rainbow>Title:{{post.title}}</h3>
                el.style.color = '#' + Math.random().toString().slice(2, 8);    
            }
        },
  },
  mixins:[searchMixin]
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0 ;
    box-sizing: border-box;
    background: #eee;
}
input[type="text"]{
    max-width: 800px;
}
</style>
