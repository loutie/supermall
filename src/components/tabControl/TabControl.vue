<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="item" :class="{active: index === currentindex}" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentindex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentindex = index;
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  padding-bottom: 2px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span{
  padding-bottom: 5px;
}
.active {
  color: #ff8198;
}
.active span {
  border-bottom: 3px solid #ff8198;
}
</style>
