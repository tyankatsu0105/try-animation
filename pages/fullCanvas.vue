<template>
  <div class="FullCanvas">
    <canvas
      ref="canvas"
      :width="canvasSize.width"
      :height="canvasSize.height"
      @mousedown="clickAction"
    ></canvas>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';

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

      const render = () => {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
        const renderCircle = () => {
          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = circle.circleColor;
          ctx.arc(
            clientPositionX,
            clientPositionY,
            circle.circleRadius,
            0,
            Math.PI * 2,
            false
          );
          ctx.globalAlpha = circle.circleGlobalAlpha;
          ctx.lineWidth = 5;
          ctx.stroke();
          ctx.restore();
        };

        const renderParticle = () => {
          ctx.save();
          ctx.beginPath();
          ctx.fillStyle = 'red';
          ctx.arc(
            particle.particleMoveX,
            particle.particleMoveY,
            particle.particleRadius,
            0,
            Math.PI * 2,
            false
          );
          ctx.fill();
          ctx.restore();
        };
        renderCircle();
        renderParticle();
      };

      const init = {
        circle: {
          circleRadius: 1,
          circleGlobalAlpha: 0.5,
          circleColor: '#fff'
        },
        particle: {
          particleRadius: 20,
          particleColor: ['#fff', '#000'],
          particleAmount: 32,
          particleMoveX: clientPositionX,
          particleMoveY: clientPositionY
        }
      };

      const moveX = clientPositionX + Math.random() * (45 - -90) + -45;
      const moveY = clientPositionY + Math.random() * (45 - -90) + -45;

      const { circle } = { ...init };
      const { particle } = { ...init };

      TweenMax.to([circle, particle], 1, {
        circleRadius: 50,
        circleGlobalAlpha: 0,
        particleRadius: 0,
        particleMoveX: moveX,
        particleMoveY: moveY,
        ease: Strong.easeOut,
        onUpdate() {
          render();
        }
      });
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
  background-color: #272c35;
}
</style>
