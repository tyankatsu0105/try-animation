<template>
  <section>
    <div class="el">
      <div>
        <p>スクープ！！！</p>
        <p>なたでー<br>マンションを買う！？！？</p>
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs';

export default {
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      anime({
        targets: '.el',
        duration: 1000,
        rotate: 360 * 12,
        easing: 'linear',
        scale: [0, 2]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.el {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: #f00;
}
</style>
