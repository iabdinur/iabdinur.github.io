import * as THREE from "three";
import { buildVoxelInstancedMesh, type Voxel } from "../voxel/voxelMesh";
import { addBox, addLine } from "../voxel/primitives";

export function makeVoxelCamel(scale = 0.08, colorMode: 'light' | 'dark' = 'light') {
  const vox: Voxel[] = [];

  // Use white colors in dark mode, sand colors in light mode
  const sand = colorMode === 'dark' ? "#FFFFFF" : "#a07b4f";
  const dark = colorMode === 'dark' ? "#CCCCCC" : "#1a1410";

  // Body
  addBox(vox, new THREE.Vector3(-10, 6, -4), new THREE.Vector3(10, 12, 4), sand);

  // Two humps
  addBox(vox, new THREE.Vector3(-6, 13, -3), new THREE.Vector3(-1, 16, 3), sand);
  addBox(vox, new THREE.Vector3(2, 13, -3), new THREE.Vector3(7, 16, 3), sand);

  // Neck and head
  addBox(vox, new THREE.Vector3(9, 10, -2), new THREE.Vector3(14, 15, 2), sand);
  addBox(vox, new THREE.Vector3(14, 13, -2), new THREE.Vector3(18, 15, 2), sand);

  // Legs (front pair)
  addBox(vox, new THREE.Vector3(7, 0, -3), new THREE.Vector3(9, 6, -1), sand);
  addBox(vox, new THREE.Vector3(7, 0, 1), new THREE.Vector3(9, 6, 3), sand);

  // Legs (back pair)
  addBox(vox, new THREE.Vector3(-9, 0, -3), new THREE.Vector3(-7, 6, -1), sand);
  addBox(vox, new THREE.Vector3(-9, 0, 1), new THREE.Vector3(-7, 6, 3), sand);

  // Feet pads
  addBox(vox, new THREE.Vector3(6, -1, -4), new THREE.Vector3(10, 0, 0), sand);
  addBox(vox, new THREE.Vector3(6, -1, 0), new THREE.Vector3(10, 0, 4), sand);
  addBox(vox, new THREE.Vector3(-10, -1, -4), new THREE.Vector3(-6, 0, 0), sand);
  addBox(vox, new THREE.Vector3(-10, -1, 0), new THREE.Vector3(-6, 0, 4), sand);

  // Tail
  addLine(vox, new THREE.Vector3(-11, 11, 0), new THREE.Vector3(-15, 8, 0), sand);

  // Eye hint
  addBox(vox, new THREE.Vector3(17, 14, -1), new THREE.Vector3(17, 14, -1), dark);

  const mesh = buildVoxelInstancedMesh(vox, scale);
  const group = new THREE.Group();
  group.add(mesh);
  group.position.y = scale * 1.0; // lift slightly above mirror plane
  return group;
}

