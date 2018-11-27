<template>
  <div id="app">
    <nav class="container">
      <ul>
        <li><router-link to="/" exact>トップ</router-link></li>
        <li><router-link to="/full-canvas">フルキャンバス</router-link></li>
        <li><router-link to="/tween-max-to">TweenMaxTo</router-link></li>
      </ul>
    </nav>
    <main><router-view /></main>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
nav {
  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.6rem;

    li {
      margin-right: 10px;
      margin-bottom: 10px;
    }

    a {
      border-bottom: 1px solid #000;
    }
    .router-link-active {
      border-bottom-color: rgb(255, 155, 5);
    }
  }
}
</style>
