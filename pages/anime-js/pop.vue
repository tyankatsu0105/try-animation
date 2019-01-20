<template>
  <section>
    <button type="button" @click="animation">
      <svg class="svg" x="0px" y="0px" viewBox="0 0 512 512">
        <g>
          <path
            d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391   c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547   l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"
          />
        </g>
      </svg>
      <div class="particles-wrap">
        <div class="particles">
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
          <svg class="particle"><circle cx="10" cy="10" r="10" /></svg>
        </div>
      </div>
    </button>
  </section>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    animation() {
      const randomColor = (h, s, l, a) => {
        return `hsla(${h},${s}%,${l}%,${a})`;
      };

      const tl = anime.timeline({
        targets: '.svg'
      });

      if (this.isClicked === false) {
        tl.add({
          scale: 0,
          duration: 0
        }).add({
          easing: 'spring(1, 100, 10, 0)',
          scale: 1,
          color: '#ff0000'
        });
        // tl2
        //   .add({
        //     color() {
        //       return randomColor(anime.random(0, 360), 100, 70, 1);
        // },
        //     width: '10px',
        //     height: '10px',
        //     translateY() {
        //       return anime.random(-100, 100);
        //     },
        //     translateX() {
        //       return anime.random(-100, 100);
        //     }
        //   })
        //   .add(
        //     {
        //       width: '0',
        //       height: '0'
        //     },
        //     '-=600'
        //   );
        anime({
          targets: '.particle',
          easing: 'easeOutCirc',
          color() {
            return randomColor(anime.random(0, 360), 100, 70, 1);
          },
          translateY() {
            return anime.random(-100, 100);
          },
          translateX() {
            return anime.random(-100, 100);
          },
          scale: [
            { value: 1, duration: 100, easing: 'easeOutExpo' },
            { value: 0, duration: 900 }
          ],
          complete(anim) {
            anim.set('.particle', {
              translateY: 0,
              translateX: 0
            });
          }
        });
        this.isClicked = true;
      } else {
        tl.add({
          color: '#000'
        });
        this.isClicked = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
}
button {
  position: relative;
  display: flex;
  cursor: pointer;
}
.svg {
  width: 80px;
  height: 80px;
  g {
    fill: currentColor;
  }
}
.particles-wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 10px;
  margin: auto;
}
.particles {
  position: relative;
}
.particle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 20px;
  height: 20px;
  margin: auto;

  circle {
    fill: currentColor;
  }
}
</style>
