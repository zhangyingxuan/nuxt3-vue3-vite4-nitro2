<template>
  chat
  <div ref="el" class="liveChars"></div>
</template>

<script setup lang="ts">
import { EChartsType } from "echarts/core";
import { PropType } from "vue";
import { setLiveChar, updateLiveChar } from "@/utils/live";
const { title, names, score } = defineProps({
  title: String,
  names: Array as PropType<string[]>,
  score: Array as PropType<number[]>,
});
const el = ref<Element>();
const chart = ref<EChartsType>();
onMounted(() => {
  chart.value = setLiveChar(el.value as HTMLElement, title, names, score);
});
watch(
  () => score,
  (newValue) => {
    updateLiveChar(chart.value, newValue);
  },
  { deep: true }
);
</script>

<style>
.liveChars {
  height: 300px;
  width: 200px;
}
</style>
