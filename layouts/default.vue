<template>
  <div class="app">
    <header class="header">
      <ul>
        <li>
          <NuxtLink to="/"> 首页</NuxtLink>
        </li>
        <li>
          <!-- <NuxtLayout /> -->
          <!-- <NuxtWelcome /> -->
          <NuxtLink to="/detail"> 详情页</NuxtLink>
        </li>
      </ul>
    </header>
    <div class="content">
      <slot />
    </div>
    <footer class="footer">footer</footer>
  </div>
</template>

<script setup></script>
<style lang="less" scoped>
@header-height: 80px;
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  .header {
    height: @header-height;
    background-color: aqua;

    ul {
      height: 100%;
      display: flex;
      list-style: none;
      margin: 0;
    }
    li {
      margin: 0 20px;
      line-height: @header-height;
    }
  }
  .footer {
    height: 60px;
    background-color: aqua;
  }
  .content {
    flex: 1;
  }
}
</style>
