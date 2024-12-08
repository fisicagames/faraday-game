import { Quaternion, Scene, TransformNode, Vector3 } from "@babylonjs/core";

export class MagnetModel {
    private magnetNode: TransformNode | null;
    private scene: Scene;

    private mode: "angular" | "linear" = "angular";

    public angularVelocity: number = 0;
    private angularAcceleration: number = 0;
    private maxAngularVelocity: number = 30000;
    private angularFriction: number = 0.05;
    private angularAccelerationIncrement: number = 2.0;

    public linearVelocity: number = 0;
    private linearAcceleration: number = 0;
    private maxLinearVelocity: number = 30000;
    private linearFriction: number = 0.05;
    private linearAccelerationIncrement: number = 2.0;
    private minY: number = -5;
    private maxY: number = 21.5;

    constructor(scene: Scene) {
        this.scene = scene;
        this.magnetNode = this.scene.getTransformNodeById("Magnet");
        const textN_Mesh = this.scene.getMeshByName(`TextN`);
        const textS_Mesh = this.scene.getMeshByName(`TextS`);
        textN_Mesh?.setParent(this.magnetNode);
        textS_Mesh?.setParent(this.magnetNode);
        this.updateMagnetPosition();
    }

    public resetMagnetPosition(): void {
        if (this.magnetNode) {
            this.magnetNode.position = new Vector3(0, 21.5, 0);
            this.magnetNode.rotationQuaternion = Quaternion.FromEulerAngles(0, Math.PI, Math.PI);
        }
        this.angularVelocity = 0;
        this.angularAcceleration = 0;
        this.linearVelocity = 0;
        this.linearAcceleration = 0;
    }

    public addAcceleration(): void {
        if (this.mode === "angular") {
            this.angularAcceleration += this.angularAccelerationIncrement;
        }
        if (this.mode === "linear") {
            if (this.linearVelocity >= 0){
                this.linearAcceleration += this.linearAccelerationIncrement
            }
            else{
                this.linearAcceleration -= this.linearAccelerationIncrement
            }
            
        }    
    }

    private updateMagnetPosition(): void {
        this.scene.onBeforeRenderObservable.add(() => {
            if (this.mode === "angular" && this.magnetNode) {
                // Handle angular mode
                this.angularFriction = this.angularVelocity / 500 + 0.05;
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

                this.magnetNode.rotate(new Vector3(0, 0, 1), this.angularVelocity * 0.01);
            } 
            else if (this.mode === "linear" && this.magnetNode) {
                this.linearVelocity += this.linearAcceleration;
                this.linearVelocity = Math.max(
                    Math.min(this.linearVelocity, this.maxLinearVelocity),
                    -this.maxLinearVelocity
                );

                this.magnetNode.position.y += this.linearVelocity / 10;

                if (this.magnetNode.position.y >= this.maxY) {
                    this.magnetNode.position.y = this.maxY;
                    this.linearVelocity = -Math.abs(this.linearVelocity); 
                } else if (this.magnetNode.position.y <= this.minY) {
                    this.magnetNode.position.y = this.minY; 
                    this.linearVelocity = Math.abs(this.linearVelocity); 
                }
                if (this.linearAcceleration === 0) {
                    this.linearFriction = Math.abs(this.linearVelocity / 500) + 0.05; // Opcional: escalar o atrito
                    if (this.linearVelocity > 0) {
                        this.linearVelocity -= this.linearFriction;
                        if (this.linearVelocity < 0) this.linearVelocity = 0; // Evitar inversão
                    } else if (this.linearVelocity < 0) {
                        this.linearVelocity += this.linearFriction;
                        if (this.linearVelocity > 0) this.linearVelocity = 0; // Evitar inversão
                    }
                }
                this.linearAcceleration = 0;
            }
        });
    }

    public setMode(mode: "angular" | "linear"): void {
        this.mode = mode;
    }
    public getMode(): "angular" | "linear" {
        return this.mode;
    }
}
