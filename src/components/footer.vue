<template>
<footer>
    <p>{{copyright}}{{Title}}</p>
</footer>
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
        copyright:'Copyright 2017'
    }
  },
    created(){
        bus.$on('titleChanged',(data)=>{
            this.Title=data;
        });
    }
}
</script>
<style scoped>
footer{
    background: #222;
    padding: 10px;
}
p{
    color: lightgreen;
    text-align: center;
}
</style>
