// Import necessary Three.js modules
import * as THREE from './three.module.js';
// Import the scene object from initScene.js to add the car to it
import { scene } from './initScene.js';

/**
 * Creates and adds a 3D toy car model to the scene.
 * The car is constructed from various geometric primitives and materials.
 */
export function createTable() {
  // --- Table Group ---
  const tableGroup = new THREE.Group();
  tableGroup.name = 'Table';

  // --- Materials Definition ---
  const tableMaterial = new THREE.MeshStandardMaterial({
    color: 0x8B4513, // SaddleBrown
    metalness: 0.1,
    roughness: 0.8
  });

  // --- Table Parts ---
  // Table Top
  const tableTopGeo = new THREE.BoxGeometry(5, 0.2, 3);
  const tableTopMesh = new THREE.Mesh(tableTopGeo, tableMaterial);
  tableTopMesh.position.y = 2.5;
  tableTopMesh.name = 'Table Top';
  tableGroup.add(tableTopMesh);

  // Table Legs
  const legGeo = new THREE.BoxGeometry(0.2, 2.5, 0.2);
  const legPositions = [
    { x: -2.3, z: -1.3, name: 'Front Left Leg' },
    { x: 2.3, z: -1.3, name: 'Front Right Leg' },
    { x: -2.3, z: 1.3, name: 'Rear Left Leg' },
    { x: 2.3, z: 1.3, name: 'Rear Right Leg' }
  ];

  legPositions.forEach(posData => {
    const leg = new THREE.Mesh(legGeo, tableMaterial);
    leg.position.set(posData.x, 1.25, posData.z);
    leg.name = posData.name;
    tableGroup.add(leg);
  });

  // --- Scene Addition ---
  scene.add(tableGroup);
}

