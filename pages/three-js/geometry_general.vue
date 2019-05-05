<template>
  <div><canvas id="myCanvas"></canvas></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // サイズを指定
      const width = 960;
      const height = 540;

      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('myCanvas')
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      // シーンを作成
      const scene = new THREE.Scene();

      // カメラを作成
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
      camera.position.set(0, 0, +1000);

      // // 球体
      // const geometry = new THREE.SphereGeometry(300, 30, 30);
      // const material = new THREE.MeshPhongMaterial({color: 0xFF0000});
      // const mesh = new THREE.Mesh(geometry, material);

      // // 直方体
      // const geometry = new THREE.BoxGeometry(300, 300, 300);
      // const material = new THREE.MeshPhongMaterial({color: 0xFF0000});
      // const mesh = new THREE.Mesh(geometry, material);

      // // 平面
      // const geometry = new THREE.PlaneGeometry(300, 300, 300);
      // const material = new THREE.MeshPhongMaterial({color: 0xFF0000, side: THREE.DoubleSide});
      // const mesh = new THREE.Mesh(geometry, material);

      // // 三角錐
      // const geometry = new THREE.ConeGeometry(300, 300, 300);
      // const material = new THREE.MeshPhongMaterial({color: 0xFF0000});
      // const mesh = new THREE.Mesh(geometry, material);

      // // 円柱
      // const geometry = new THREE.CylinderGeometry(300, 300, 300, 300);
      // const material = new THREE.MeshPhongMaterial({color: 0xFF0000});
      // const mesh = new THREE.Mesh(geometry, material);

      // 円柱
      const geometry = new THREE.TorusGeometry(200, 20, 200, 200);
      const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
      const mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);

      // 平行光源
      const directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(1, 1, 1);
      // シーンに追加
      scene.add(directionalLight);

      tick();

      // 毎フレーム時に実行されるループイベントです
      function tick() {
        mesh.rotation.y += 0.01;
        renderer.render(scene, camera); // レンダリング

        requestAnimationFrame(tick);
      }
    }
  }
};
</script>
