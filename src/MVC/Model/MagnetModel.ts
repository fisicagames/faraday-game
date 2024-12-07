import { Scene, TransformNode, Vector3 } from "@babylonjs/core";

export class MagnetModel {
    private magnetNode: TransformNode | null;
    private scene: Scene;
    public angularVelocity: number = 0;
    private angularAcceleration: number = 0;
    private maxAngularVelocity: number = 150;
    private angularFriction: number = 0.05;
    private angularAccelerationIncrement: number = 2.0;

    constructor(scene: Scene) {
        this.scene = scene;
        this.magnetNode = this.scene.getTransformNodeById("Magnet");
        const textN_Mesh = this.scene.getMeshByName(`TextN`);
        const textS_Mesh = this.scene.getMeshByName(`TextS`);
        textN_Mesh?.setParent(this.magnetNode);
        textS_Mesh?.setParent(this.magnetNode);
        this.updateMagnetPosition();
    }

    public addAngularAcceleration(): void {
        this.angularAcceleration += this.angularAccelerationIncrement;
    }

    private updateMagnetPosition(): void {
        this.scene.onBeforeRenderObservable.add(() => {
            this.angularFriction = this.angularVelocity/500 + 0.05
            this.angularVelocity += this.angularAcceleration;
            this.angularVelocity = Math.max(
                Math.min(this.angularVelocity, this.maxAngularVelocity),
                -this.maxAngularVelocity
            );
            if (this.angularAcceleration === 0) {
                if (this.angularVelocity > 0) {
                    this.angularVelocity -= this.angularFriction;
                    if (this.angularVelocity < 0) this.angularVelocity = 0;
                } else if (this.angularVelocity < 0) {
                    this.angularVelocity += this.angularFriction;
                    if (this.angularVelocity > 0) this.angularVelocity = 0;
                }
            }

            this.angularAcceleration = 0;

            if (this.magnetNode) {
                this.magnetNode.rotate(new Vector3(0, 0, 1), this.angularVelocity * 0.01);
            }
        });
    }
}
