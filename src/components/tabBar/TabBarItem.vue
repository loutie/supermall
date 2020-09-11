<template>
  <div class="tab-bar-item" @click="changeClick">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-activate"></slot></div>
    <div :style="changeColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  methods: {
    changeClick() {
      // console.log('changeClick');
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive() {
      //indexof: 当路由找到的地址与当前活跃的地址相同时indexof返回1
      return this.$route.path.indexOf(this.path) !== -1;
    },
    changeColor() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 15px;
  margin-top: 4px;
  font-family: '微软雅黑';
  box-shadow: -0.8px 0 0 rgba(10,10,10,0.09);
}

.tab-bar-item img {
  width: 25px;
  height: 25px;
  vert-align: middle;
}

.active {
  color: #f00
}
</style>
