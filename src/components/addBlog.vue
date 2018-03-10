<template>
  <div id="add-blog">
      <h2>Add a new Blog Post</h2>
      <form action="" v-if="!Sending">
          <label for="">Blog title</label>
          <input type="text" required v-model.lazy="blog.title">
          <label for="">Blog content</label>
          <textarea name="" id="" cols="30" rows="3" v-model.lazy="blog.content"></textarea>
          <div id="checkboxes">
              <label for="">Kobe</label>
              <input type="checkbox" name="categories" id="" value="Kobe" v-model="blog.categories">
              <label for="">James</label>
              <input type="checkbox" name="categories" id="" value="James" v-model="blog.categories">
              <label for="">Durant</label>
              <input type="checkbox" name="categories" id="" value="Durant" v-model="blog.categories">
              <label for="">Wade</label>
              <input type="checkbox" name="categories" id="" value="Wade" v-model="blog.categories">
          </div>
          <label for="">Author</label>
          <select name="" id="" v-model="blog.author">
              <option v-for="author in Authors" :key="author">{{author}}</option>
          </select>
          <button @click.prevent="post">Add blog</button>
      </form>
      <div v-if="Sending">
          <h3>Your request has been submitted.....</h3>
      </div>
      <div id="preview">
          <h3>Preview Blog</h3>
          <p>Blog title: {{blog.title}}</p>
          <p>Blog content:</p>
          <p>{{blog.content}}</p>
          <p>categories:{{blog.categories}}</p>
          <ul>
              <li v-for="category in blog.categories" :key="category.id">{{category}}</li>
          </ul>
          <p>Author:{{blog.author}}</p>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        blog:{
            title:'',
            content:'',
            categories:[],
            author:'',
        },
        Authors:['Ivan','Joe','John'],
        Sending:false,
    }
  },
  components:{

  },
  methods:{
      post:function(){
          this.Sending=!this.Sending;
          axios.post(URL,this.blog)
          .then(function(res){
              console.log(res);
          })
          .catch(err=>{
              console.log(err);
          })
      }
  }
}
</script>
<style >
#add-blog *{
    box-sizing:border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    
}
</style>
