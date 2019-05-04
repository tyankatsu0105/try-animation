<template>
  <section>
    <div class="el">
      <div>
        <svg class="icon" x="0px" y="0px" viewBox="0 0 512 512">
          <g>
            <path
              id="body1"
              d="M0,206.254v99.491c0,20.663,16.752,37.418,37.414,37.418h69.667V168.844H37.414   C16.752,168.844,0,185.591,0,206.254z"
            />
            <path
              id="body2"
              d="M280.326,99.026c-3.768-2.31-8.464-2.5-12.403-0.494l-138.431,70.313v174.319l138.431,70.313   c3.94,1.996,8.635,1.806,12.403-0.503c3.764-2.31,6.059-6.416,6.059-10.826V109.86C286.386,105.441,284.09,101.335,280.326,99.026z   "
            />
            <path
              id="medium"
              class="medium"
              d="M408.522,162.666c-5.066-5.626-13.725-6.073-19.346-1.007c-5.618,5.057-6.068,13.715-1.007,19.341   c19.15,21.252,28.713,48.074,28.718,75c-0.005,26.936-9.567,53.756-28.713,74.998c-5.066,5.618-4.615,14.285,1.002,19.351   c5.617,5.056,14.28,4.61,19.341-1.007c23.842-26.451,35.775-59.944,35.765-93.342C444.291,222.61,432.358,189.107,408.522,162.666z   "
            />
            <path
              id="large"
              class="large"
              d="M458.88,117.33c-5.061-5.617-13.72-6.064-19.342-0.998c-5.622,5.056-6.073,13.715-1.007,19.341   c30.722,34.092,46.068,77.156,46.077,120.326c-0.01,43.168-15.355,86.232-46.077,120.334c-5.066,5.618-4.614,14.276,1.007,19.342   c5.622,5.066,14.28,4.62,19.346-1.008C494.289,355.367,512.01,305.631,512,256C512.01,206.368,494.289,156.631,458.88,117.33z"
            />
            <path
              id="small"
              class="small"
              d="M338.764,207.032c-5.622,5.057-6.073,13.725-1.007,19.342c7.594,8.43,11.362,18.98,11.371,29.626   c-0.009,10.644-3.777,21.194-11.371,29.634c-5.066,5.618-4.614,14.276,1.007,19.341c5.622,5.066,14.28,4.609,19.341-1.007   c12.261-13.601,18.43-30.832,18.415-47.968c0.015-17.137-6.154-34.359-18.415-47.96   C353.044,202.414,344.382,201.967,338.764,207.032z"
            />
          </g>
        </svg>
        <input
          v-model.number="rangeValue"
          class="seek"
          type="range"
          min="0"
          max="100"
          step="1"
        >
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      rangeValue: 0,
      status: {
        small: false,
        medium: false,
        large: false
      }
    };
  },
  watch: {
    rangeValue(val) {
      val >= 1 ? (this.status.small = true) : (this.status.small = false);
      val >= 50 ? (this.status.medium = true) : (this.status.medium = false);
      val > 99 ? (this.status.large = true) : (this.status.large = false);

      if (this.status.small) {
        this.animation({
          targets: '#small',
          fill: 'rgba(255,0,0,1)'
        });
      } else {
        this.animation({
          targets: '#small',
          fill: 'rgba(255,0,0,0)'
        });
      }
      if (this.status.medium) {
        this.animation({
          targets: '#medium',
          fill: 'rgba(255,0,0,1)'
        });
      } else {
        this.animation({
          targets: '#medium',
          fill: 'rgba(255,0,0,0)'
        });
      }
      if (this.status.large) {
        this.animation({
          targets: '#large',
          fill: 'rgba(255,0,0,1)'
        });
      } else {
        this.animation({
          targets: '#large',
          fill: 'rgba(255,0,0,0)'
        });
      }
    }
  },
  methods: {
    animation(property) {
      anime({
        duration: 400,
        ...property
      });
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
}
.el {
  display: flex;
  align-items: center;
  justify-content: center;
}

.seek {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #eaeaea;
  border-radius: 6px;
  appearance: none;

  &::-webkit-slider-thumb {
    position: relative;
    display: block;
    width: 22px;
    height: 22px;
    cursor: pointer;
    background-color: #ff02ff;
    border-radius: 50%;
    appearance: inherit;
  }
}

.icon {
  width: 300px;
  height: auto;

  g {
    fill: currentColor;
  }
  .small,
  .medium,
  .large {
    fill: transparent;
  }
}
</style>
