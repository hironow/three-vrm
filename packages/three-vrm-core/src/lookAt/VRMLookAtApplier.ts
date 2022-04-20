/**
 * This class is used by {@link VRMLookAt}, applies look at direction.
 * There are currently two variant of applier: {@link VRMLookAtBoneApplier} and {@link VRMLookAtExpressionApplier}.
 */
export interface VRMLookAtApplier {
  /**
   * Apply look at direction to its associated VRM model.
   *
   * @param yaw Rotation around Y axis, in degree
   * @param pitch Rotation around X axis, in degree
   */
  lookAt: (yaw: number, pitch: number) => void;
}
