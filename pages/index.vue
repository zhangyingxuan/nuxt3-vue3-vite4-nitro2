<template>
  <div>首页</div>
  <chat title="chart" :names="[1, 2]" :score="[1, 2]" />
  <div>
    {{ state }}
    <span @click="clickStartTask">启动</span>
  </div>
</template>

<script setup>
import chat from "@/components/chat.vue";
import { ref, onMounted, reactive } from "vue";
const layout = "detail";

// 响应式状态
const count = ref(0);
const state = reactive({ resData: null });

// 用来修改状态、触发更新的函数
function increment() {
  count.value++;
}

async function clickStartTask() {
  const data = await $fetch("/api/fetchTodayData");
  console.log(data);
  state.resData = data;
}

// 生命周期钩子
onMounted(async () => {
  console.log(`The initial count is ${count.value}.`);
});
useHead({
  title: "首页",
});
</script>
