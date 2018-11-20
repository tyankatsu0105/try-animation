<template>
  <canvas id="canvas" ref="canvas" class="canvas"></canvas>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('resize', () => {
      this.monitorWindowWidthHeight();
      this.paint();
    });
    this.ctx = this.$refs.canvas.getContext('2d');
    this.monitorWindowWidthHeight();
    this.paint();
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => {
      this.monitorWindowWidthHeight();
      this.paint();
    });
  },
  methods: {
    paint() {
      this.ctx.fillStyle = '#222';
      this.ctx.fillRect(
        0,
        0,
        this.$refs.canvas.width,
        this.$refs.canvas.height
      );
    },
    monitorWindowWidthHeight() {
      this.$refs.canvas.width = window.innerWidth;
      this.$refs.canvas.height = window.innerHeight;
    }
  }
};
</script>

<style lang="scss" scoped>
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
