<template>
  <section>
    <svg v-for="(line, index) in lines" :key="index" class="line">
      <line v-bind="line" />
    </svg>
  </section>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      lines: [
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'green',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'blue',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'red',
          'stroke-width': 80
        }
      ]
    };
  },
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      const tl = anime.timeline({
        easing: 'easeInOutQuart',
        duration: 1000
      });
      tl.add(
        {
          targets: this.lines[0],
          y2() {
            return anime.random(500, 0);
          }
          // stroke: 'red'
        },
        0
      )
        .add(
          {
            targets: this.lines[1],
            y2() {
              return anime.random(500, 0);
            }
            // stroke: 'green'
          },
          0
        )
        .add(
          {
            targets: this.lines[2],
            y2() {
              return anime.random(500, 0);
            }
            // stroke: 'blue'
          },
          0
        );
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-between;
  width: 200px;
}
.line {
  width: 40px;
  height: 500px;
}
</style>
