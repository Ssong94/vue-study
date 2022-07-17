<template>
<div>
<h1>Hello {{ userName }}</h1>
<p></p>
</div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'ssong',
      message: '',
      arr: [],
      obj: {}
    }
  }
}
</script>

<style scoped>
.text-red {
  color: red
}
</style>
