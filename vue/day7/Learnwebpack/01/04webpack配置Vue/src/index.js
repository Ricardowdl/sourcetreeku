const{add}=require("./js/mathUtil")

console.log(add(20,30))

import {name,age,height} from "./js/info"
console.log(name);
console.log(age);
console.log(height);



//5使用Vue开发
import Vue from 'vue'
// import App from './vue/app/'
import App from './vue/App.vue'

const app=new Vue({
    el:'#app',
    template:'',
    data:{
    },
   
})

new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})