<template>
  <div>
    <input type="text" v-bind:value="userId" readonly />
    <input type="text" :value="userId" readonly />
    <br>
    <img :src=imgSrc alt="" style="width:100px; height: auto; " />
  </div>

  <br>
  <input type="search" v-model="txt1" />
  <button :disabled="txt1 === ''">조회</button>

  <div :class="{ 'text-red': hasError, active: isActive }"> 클래스 바인딩</div>
  <div :class="{ 'text-red': hasError, active: isActive }"> 클래스 바인딩2</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'ssong',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
      txt1: '',
      hasError: true,
      isActive: false
    }
  },
  setup() { },
  created() { },
  mounted() { },
  unmounted() { },
  methods: {}
}
</script>

<style scoped>
.active {
  background-color: aqua;
  font-weight: bold;
  font-size: large;
}

.text-red {
  color: red;
}
</style>
