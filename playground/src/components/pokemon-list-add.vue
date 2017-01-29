<template>
  <router-link class="item" v-bind:to="{ name: 'pokemon-new' }">
    +
  </router-link>
</template>

<style scoped>
.item {
  display: inline-block;
  padding: 10px;
  margin: 10px 5px 10px 10px;
  width: 230px;
  height: 260px;
  line-height: 240px;
  border: 5px dashed #777;
  background: transparent;
  vertical-align: top;
  font-size: 80px;
  color: #777;
  box-sizing: border-box;
}
</style>
