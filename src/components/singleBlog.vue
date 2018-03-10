<template>
  <div id="single-blog">
      <h1>{{Blog.title}}</h1>
      <p>ID: {{id}}</p>
      <h2>作者:{{Blog.author}}</h2>
      <h6>分類：
          <ul>
              <li v-for="category in Blog.categories" :key="category">{{category}}</li>
          </ul>
      </h6>
      <h2>內容：</h2>
      <hr>
      <article>{{Blog.content}}</article>
  </div>
</template>

<script>
export default {
  data(){
      return{
          id: this.$route.params.id,
          Blog:{}
      }
  },
  created(){
      axios.get(URL+this.id+'.json')
      .then(res=>{
          console.log(this.id);
          console.log(res.data);
          this.Blog=res.data;
      })
      .catch(err=>{
          console.log(err);
      })
  }
}
</script>

