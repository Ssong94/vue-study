<template>
  <div>
    <select v-model="selectedCity" @change="changeCity">
      <option>==도시 선택==</option>
      <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList">{{ city.title }}</option>
    </select>
  </div>

  <div>
    <select>
      <option>선택</option>
      <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in selectedDongList">{{
          dong.dongTItle
      }}</option>
    </select>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  components: {},
  setup() {
    const cityList = [
      { cityCode: '02', title: '서울' },
      { cityCode: '051', title: '부산' },
      { cityCode: '064', title: '제주' }
    ]

    const dongList = [
      { cityCode: '02', dongCode: 1, dongTItle: '서울1동' },
      { cityCode: '02', dongCode: 2, dongTItle: '서울2동' },
      { cityCode: '02', dongCode: 3, dongTItle: '서울3동' },
      { cityCode: '02', dongCode: 4, dongTItle: '서울4동' },
      { cityCode: '051', dongCode: 1, dongTItle: '부산1동' },
      { cityCode: '051', dongCode: 2, dongTItle: '부산2동' },
      { cityCode: '051', dongCode: 3, dongTItle: '부산3동' },
      { cityCode: '064', dongCode: 1, dongTItle: '제주1동' }
    ]
    // ref를 쓰면 .value를 써주자...
    const selectedDongList = ref([])
    const selectedCity = ref('')

    const changeCity = () => {
      selectedDongList.value = dongList.filter(dong => dong.cityCode === selectedCity.value)
    }
    return {
      cityList,
      selectedCity,
      selectedDongList,
      dongList,
      changeCity
    }
  }
}
</script>
