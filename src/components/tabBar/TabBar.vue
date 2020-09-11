<template>
  <div id="tab-tar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-tar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f7f7f7;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.3);

}

</style>
