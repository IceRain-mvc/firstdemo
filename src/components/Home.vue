<template>
  <!--在此处添加渲染的内容-->
  <div>
    <h1>我是首页</h1>
    <p>{{result.seller}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  //将渲染的内容导出
  export default{
    name: "home",
    created() {
      this.$http.get("/api/home").then(function (data) {
        this.result = data.data;
      });

    },
    data(){
      return {
        result: "",
      };
    }


  }
</script>

<style>
  /**渲染内容的样式**/
</style>
