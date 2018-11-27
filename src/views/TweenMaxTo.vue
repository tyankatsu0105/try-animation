<template>
  <div>
    <button @mousedown="clickAction">ボタン</button>
    <div ref="target" class="target"></div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
  mounted() {
    this.target = this.$refs.target;
  },
  methods: {
    clickAction() {
      TweenMax.to(this.target, 10, {
        startAt: {
          left: '100px',
          rotation: 0
        },
        left: '1000px',
        backgroundColor: 'blue',
        rotation: 360,
        repeat: -1,
        yoyo: true,
        delay: 1,
        // @see https://greensock.com/ease-visualizer
        ease: Bounce.easeOut,
        onUpdate() {
          var progress = this.progress();
          console.log('現在のleft値は' + progress + 'です');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.target {
  position: absolute;
  top: 200px;
  left: 100px;
  width: 100px;
  height: 100px;
  background-color: #f00;
}

button {
  padding: 10px 15px;
  font-size: 1.2rem;
  border: 1px solid #000;
}
</style>
