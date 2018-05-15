<template>
  <div id="app">
    <top :seller = "seller"></top>
    <div class="tab">
        <div class="tab-item"><router-link to="/goods">商品</router-link></div>
        <div class="tab-item"><router-link to="/rating">评论</router-link></div>
        <div class="tab-item"><router-link to="/sellers">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import top from '@/components/header/top.vue'
// import iconfont from '@/common/css/style.css'
import axios from 'axios';

export default {
  data() {
    return {
      seller:{}
    }
  },
  created() {
    var arr_ok = 0
    axios.get('/api/seller').then(
      (res) => {
        console.log(res.data);
         if(res.data.errno == arr_ok ){
         this.seller = res.data.data;
          console.log(this.seller)
         }
      }
    )
  },
  components:{
    top
  },
  mounted:function(){
    this.$router.push('/goods')
  }
}
</script>

<style>
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eeeeee
  }
  .tab-item{
    flex: 1;
    text-align: center;
  }
  .tab-item a{
     display: block;
     font-size: 14px;
     color:rgb(77, 85, 93) 
  }
  .tab-item .router-link-exact-active{
    color: #f01414
  }

</style>
