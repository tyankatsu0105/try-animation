<template>
  <section>
    <p class="count">{{ count.text }}%</p>
    <div :style="graph" class="graph"></div>
  </section>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      count: {
        text: 0
      },
      graph: {
        width: '0px'
      }
    };
  },
  mounted() {
    this.anime1();
    this.anime2();
  },
  methods: {
    anime1() {
      anime({
        targets: this.count,
        text: 100,
        round: 1,
        easing: 'easeInOutQuad',
        duration: 1000
      });
    },
    anime2() {
      anime({
        targets: this.graph,
        width: '100%',
        easing: 'easeInOutQuad',
        duration: 1000
      });
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 600px;
  margin: 50px auto;
}
.count {
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  text-align: center;
}
.graph {
  height: 40px;
  background-color: #000;
}
</style>
