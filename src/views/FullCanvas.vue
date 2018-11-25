<template>
  <div class="FullCanvas">
    <canvas
      ref="canvas"
      :width="canvasSize.width"
      :height="canvasSize.height"
      @click="clickAction"
    ></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvasSize: {
        width: 0,
        height: 0
      }
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.resizeHandler();

    window.addEventListener('resize', () => {
      this.resizeHandler();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => {
      this.resizeHandler();
    });
  },
  methods: {
    resizeHandler() {
      this.canvasSize.width = this.canvas.parentNode.clientWidth;
      this.canvasSize.height = this.canvas.parentNode.clientHeight;
    },
    clickAction(event) {
      const clientPositionX = event.offsetX;
      const clientPositionY = event.offsetY;

      const createCircle = () => {
        // circleの大きさ
        let radius = 1;
        // 透過度
        let globalAlpha = 1;
        const color = '#fff';
        const render = () => {
          this.ctx.clearRect(
            0,
            0,
            this.canvasSize.width,
            this.canvasSize.height
          );
          window.requestAnimationFrame(render);
          if (globalAlpha <= 0) return;

          this.ctx.beginPath();
          this.ctx.strokeStyle = color;
          this.ctx.arc(
            clientPositionX,
            clientPositionY,
            radius,
            0,
            Math.PI * 2,
            false
          );
          this.ctx.globalAlpha = globalAlpha;
          this.ctx.stroke();

          radius = radius + 2;
          globalAlpha = globalAlpha - 0.025;
        };
        render();
      };

      createCircle();
    }
  }
};
</script>

<style lang="scss" scoped>
.FullCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: #222;
}
</style>
