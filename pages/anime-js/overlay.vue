<template>
  <section>
    <p class="text">Text</p>
    <div class="overlay overlay-above"></div>
    <div :style="obj" class="overlay overlay-bottom"></div>
  </section>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      obj: {
        opacity: 1
      }
    };
  },
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      anime({
        targets: this.obj,
        duration: function() {
          return anime.random(10, 500);
        },
        delay: function() {
          return anime.random(100, 500);
        },
        autoplay: true,
        opacity() {
          return anime.random(0, 1);
        },
        easing: 'easeInOutQuad',
        complete: this.animation
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
  width: 100%;
  height: 100vh;
  margin: 0;
}
.text {
  font-size: 3rem;
  font-weight: bold;
}
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.overlay-above {
  background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 1) 10%
  );
}
.overlay-bottom {
  background-color: #000;
}
</style>
