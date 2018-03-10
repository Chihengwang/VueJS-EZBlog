<template>
<header>
    <h1 @click="changeTitle">{{Title}}</h1>
</header>
</template>

<script>
import {bus} from '../main';
export default {
    props:{
        Title:{
            type:String,
            required:true,
        }
    },
  data () {
    return {

    }
  },
  methods:{
      changeTitle:function(){
        //   this.Title="hello world";
        // this.$emit('changeTitle','hello world');
        this.Title='Hello world';
        bus.$emit('titleChanged','Hello world');
    }
  }
}
</script>
<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>
