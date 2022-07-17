<template>
  <div>
    <select name="" v-model="selectedCity">
      <option value=""></option>
      <option value="02">서울</option>
      <option value="051">부산</option>
      <option value="064">제주</option>
    </select>

    <br>
    <div>
      <input type="checkbox" id="html" value="HTML" v-model="favoriteLang">
      <label for="html">html</label>
      <input type="checkbox" id="css" value="CSS" v-model="favoriteLang">
      <label for="css">css</label>
      <input type="checkbox" id="js" value="JS" v-model="favoriteLang">
      <label for="js">js</label>
    </div>
    <div>
      선택한 지역: {{ favoriteLang }}
    </div>

    <div>
      <input type="radio" id="html" value="HTML" v-model="radio">
      <label for="html">html</label>
      <input type="radio" id="css" value="CSS" v-model="radio">
      <label for="css">css</label>
      <input type="radio" id="js" value="JS" v-model="radio">
      <label for="js">js</label>
    </div>

    <div>
      라디오: {{ radio }}
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '02',
      favoriteLang: [],
      radio: ''
    }
  },
  setup() { },
  created() { },
  mounted() { },
  unmounted() { },
  methods: {}
}
</script>
