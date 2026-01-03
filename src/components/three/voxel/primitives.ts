import * as THREE from "three";
import type { Voxel } from "./voxelMesh";

export function addBox(
  out: Voxel[],
  from: THREE.Vector3,
  to: THREE.Vector3,
  color: string | number | THREE.Color
) {
  for (let x = from.x; x <= to.x; x++) {
    for (let y = from.y; y <= to.y; y++) {
      for (let z = from.z; z <= to.z; z++) {
        out.push({ x, y, z, color });
      }
    }
  }
}

export function addLine(
  out: Voxel[],
  a: THREE.Vector3,
  b: THREE.Vector3,
  color: string | number | THREE.Color
) {
  const steps = Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y), Math.abs(a.z - b.z));
  for (let i = 0; i <= steps; i++) {
    const t = steps === 0 ? 0 : i / steps;
    const x = Math.round(THREE.MathUtils.lerp(a.x, b.x, t));
    const y = Math.round(THREE.MathUtils.lerp(a.y, b.y, t));
    const z = Math.round(THREE.MathUtils.lerp(a.z, b.z, t));
    out.push({ x, y, z, color });
  }
}

