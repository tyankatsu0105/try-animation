<template>
  <section>
    <p class="time">{{ obj.time }}%</p>
    <svg class="line"><line v-bind="line" /></svg>
  </section>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      obj: {
        time: 0
      },
      line: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        stroke: 'black',
        'stroke-width': '20'
      }
    };
  },
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      const randomColor = (h, s, l, a) => {
        return `hsla(${h},${s}%,${l}%,${a})`;
      };

      const tl = anime.timeline({
        easing: 'linear',
        duration: 3000
      });
      tl.add({
        targets: this.obj,
        time: 100,
        // duration: 2000,
        round: 1
        // easing: 'linear'
      }).add(
        {
          targets: this.line,
          x2: 600,
          stroke() {
            return randomColor(
              anime.random(0, 180),
              anime.random(0, 100),
              50,
              1
            );
          }
          // easing: 'linear'
        },
        0
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.time {
  margin-bottom: 30px;
  text-align: center;
}
.line {
  width: 100%;
}
</style>
