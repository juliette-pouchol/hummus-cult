import * as THREE from "three";

const state = {
  activeMesh: null,
  cameraPos: new THREE.Vector3(1, 2, 5),
  target: new THREE.Vector3(-4, 0, 0),
  shouldUpdate: true,
  isVisible: true,
};

export default state;
