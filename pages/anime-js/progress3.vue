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
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
          'stroke-width': 80
        },
        {
          x1: 0,
          y1: 500,
          x2: 0,
          y2: 500,
          stroke: 'gray',
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
        },
        0
      )
        .add(
          {
            targets: this.lines[1],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[2],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[3],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[4],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[5],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[6],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[7],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[8],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[9],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[10],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[11],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[12],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[13],
            y2() {
              return anime.random(500, 0);
            }
          },
          0
        )
        .add(
          {
            targets: this.lines[14],
            y2() {
              return anime.random(500, 0);
            }
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
}
.line {
  width: 40px;
  height: 500px;
}
line {
  transition: 0.4s;
  &:hover {
    stroke: #f00;
  }
}
</style>
