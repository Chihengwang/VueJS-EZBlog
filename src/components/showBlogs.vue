<template>
  <div v-theme:columns="'wide'" id="show-blogs">
      <h1>All blog show</h1>
      <input type="text" v-model="search" placeholder="Find blog">
      <div class="single-blog" v-for="post in filteredBlogs" :key="post.id">
          <router-link v-bind:to="'/blog/'+post.id">
          <h2>Title:{{post.title |to-uppercase}}</h2>
          </router-link>
          <p>ID:{{post.id}}</p>
          <p>Content:{{post.content |snippet}}</p>
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
      axios.get('https://vue-js-d0394.firebaseio.com/posts.json')
      .then(res=>{
          //return an object
          console.log(res.data);
          var BlogArray=[];
          for(let key in res.data){
              console.log(key);
              console.log(res.data[key])
              res.data[key].id=key
              BlogArray.push(res.data[key]);
          }
          console.log(BlogArray);
        this.posts=BlogArray;
        //   this.posts=res.data;   
      })
      .catch(err=>{
          console.log(err);
      })
  },
  computed:{

  },
  //<h2 v-rainbow>Title:{{post.title |to-uppercase}}</h2>
/*
when you use the filter, you should define the tag and template like above.
In the script, you should define the attribute in the components to register the filter
like below. importantly, the name in both tags and the components should correspond to each other,
or that would be fail. In the filter, the parameter you register would be a object and the key there would
accept the value which is the function. The value in the function you pass through is the value in the tags.

*/

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
  //self-definition to load in the repetitive code from different components.
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
