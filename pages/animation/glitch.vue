<template>
  <div class="Glitch">
    <div class="Glitch_textBox">
      <p class="Glitch_text" data-text="GLITCH">GLITCH</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$chromatic-aberration-color-main: rgb(236, 30, 255);
$chromatic-aberration-color-sub: complement($chromatic-aberration-color-main);

@keyframes glitch-animation-1 {
  $steps: 50;
  @for $i from 0 through $steps {
    #{percentage($i / $steps)} {
      clip-path: inset(
        percentage(random(100) / 100) 0 percentage(random(100) / 100)
      );
    }
  }
}

@keyframes glitch-animation-2 {
  $steps: 50;
  @for $i from 0 through $steps {
    #{percentage($i / $steps)} {
      clip-path: inset(
        percentage(random(100) / 100) 0 percentage(random(100) / 100)
      );
    }
  }
}

.Glitch {
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC');
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Amatic SC', cursive;
  letter-spacing: 0.2em;
  background-color: #000;

  &_text {
    position: relative;
    font-size: 20rem;
    font-weight: bold;
    color: #fff;

    &::before,
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: attr(data-text);
      background: #000;
    }

    &::before {
      left: 2px;
      text-shadow: -2px 0 $chromatic-aberration-color-main;
      animation: glitch-animation-1 2s linear 0s infinite alternate-reverse;
    }
    &::after {
      left: -2px;
      text-shadow: -2px 0 $chromatic-aberration-color-sub;
      animation: glitch-animation-2 2s linear 0s infinite alternate-reverse;
    }
  }
}
</style>
