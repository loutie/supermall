<template>
  <tab-tar>
    <tab-tar-item path="/home" >
      <img slot="item-icon" src="~assets/img/tabBar/home.svg" alt="">
      <img slot="item-icon-activate" src="~assets/img/tabBar/home-activate.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-tar-item>
    <tab-tar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabBar/categroy.svg" alt="">
      <img slot="item-icon-activate" src="~assets/img/tabBar/category-activate.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-tar-item>
    <tab-tar-item path="/shopcart">
      <img slot="item-icon" src="~assets/img/tabBar/shopcart.svg" alt="">
      <img slot="item-icon-activate" src="~assets/img/tabBar/shopcart-activate.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-tar-item>
    <tab-tar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabBar/profile.svg" alt="">
      <img slot="item-icon-activate" src="~assets/img/tabBar/profile-activate.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-tar-item>
  </tab-tar>
</template>

<script>
import TabTar from "./tabBar/TabBar";
import TabTarItem from "./tabBar/TabBarItem";
export default {
  name: "MainTabTar",
  components: {
    TabTar,
    TabTarItem
  }
}
</script>

<style scoped>

</style>
