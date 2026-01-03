import * as THREE from "three";

export type Voxel = { x: number; y: number; z: number; color: string | number | THREE.Color };

export function buildVoxelInstancedMesh(
  voxels: Voxel[],
  voxelSize = 0.08,
  material?: THREE.MeshStandardMaterial
) {
  const geom = new THREE.BoxGeometry(voxelSize, voxelSize, voxelSize);
  const mat =
    material ??
    new THREE.MeshStandardMaterial({
      roughness: 0.85,
      metalness: 0.0,
      vertexColors: true,
      color: 0xffffff, // Set base color to white so instance colors show through
    });

  const mesh = new THREE.InstancedMesh(geom, mat, voxels.length);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  const dummy = new THREE.Object3D();
  const color = new THREE.Color();

  for (let i = 0; i < voxels.length; i++) {
    const v = voxels[i];
    dummy.position.set(v.x * voxelSize, v.y * voxelSize, v.z * voxelSize);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);

    color.set(v.color);
    mesh.setColorAt(i, color);
  }

  mesh.instanceMatrix.needsUpdate = true;
  // @ts-ignore - instanceColor exists but may not be in type definitions for this version
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;

  return mesh;
}

