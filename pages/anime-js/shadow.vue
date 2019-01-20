<template>
  <section ref="section">
    <span
      v-for="(item, index) in obj"
      :key="index"
      :class="`text-${index}`"
      class="text"
      >死</span
    >
  </section>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      obj: [
        {
          textShadow: 'rgba(255, 0, 0, 0) 0px 0px 50px'
        }
      ]
    };
  },
  mounted() {
    this.createObj(700);
    this.animation();
  },
  methods: {
    createObj(count) {
      const obj = this.obj[0];
      for (let index = 0; index < count; index++) {
        this.obj.push(obj);
      }
    },
    animation() {
      anime({
        targets: '.text',
        duration: function() {
          return anime.random(10, 1000);
        },
        delay: function() {
          return anime.random(100, 500);
        },
        textShadow() {
          return `rgba(255, 0, 0, ${anime.random(
            0,
            0.4
          )}) 0px 0px ${anime.random(20, 300)}px`;
        },
        autoplay: true,
        easing: 'easeInOutQuad',
        complete: this.animation
      });
    }
  }
};
</script>

<style lang="scss">
section {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: currentColor;
}
.text {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
}
</style>
