import { Scene, HavokPlugin, KeyboardEventTypes, Vector3, PointLight, Color3, TransformNode} from "@babylonjs/core";
import { IModel } from "./IModel";
import { SoundModel } from "./SoundModel";
import { MagnetModel } from "./MagnetModel";

export class Model implements IModel {
    private scene: Scene;
    public backgroundMusic: SoundModel;
    private allSounds: SoundModel[] = [];
    private physicsPlugin: HavokPlugin | null;
    private endGameCallback: ((isVisible: boolean) => void) | null = null;
    public endGAme: boolean = false;
    private magnetModel: MagnetModel;
    private lightLamp: PointLight;

    constructor(scene: Scene, physicsPlugin?: HavokPlugin | null) {
        this.scene = scene;
        //TODO: Remove Havok for this game.
        this.physicsPlugin = physicsPlugin || null;
        
        //TODO: Create glow effect to lamp material.
        //TODO: Create a LightLampModel class.        
        this.lightLamp = new PointLight("LightLamp", new Vector3(13, 8.5, -5.5), this.scene);
        this.lightLamp.intensity = 10
        this.lightLamp.diffuse = Color3.FromHexString('#5C3E04')

        //https://pixabay.com/pt/music/otimista-legendary-paganini-caprice-house-background-music-for-video-full-ver-271219/
        //Music by Maksym Dudchyk from Pixabay
        this.backgroundMusic = new SoundModel(
            this.scene, 
            "backgroundSound", 
            "./assets/sounds/overdrive-play-271522_compress.mp3", 
            true
        );
        this.backgroundMusic.setVolume(0.7);
        this.allSounds.push(this.backgroundMusic);

        this.magnetModel = new MagnetModel(this.scene);

        this.keyboardInput();
        this.updateSceneModels();
    }

    private updateSceneModels() {
        this.scene.onBeforeRenderObservable.add(() => {
            if(this.magnetModel.getMode() == "angular"){
                this.lightLamp.intensity = this.magnetModel.angularVelocity*500;
                this.onUpdateScoreCallback(Math.ceil(this.magnetModel.angularVelocity));
            }
            else if(this.magnetModel.getMode() == "linear"){
                this.lightLamp.intensity = Math.abs(this.magnetModel.linearVelocity*500);
                this.onUpdateScoreCallback(Math.ceil(this.magnetModel.linearVelocity));
            }
        });
    }
    private keyboardInput() {
        let forceAccumulator = new Vector3(0, 0, 0);

        this.scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case KeyboardEventTypes.KEYUP:
                    if (kbInfo.event.key === "w" ||
                        kbInfo.event.key === "W" ||
                        kbInfo.event.key === "ArrowUp" ||
                        kbInfo.event.key === " ") {
                            this.addAccelerationToMagnet();
                    }
                    if (kbInfo.event.key === "q"){

                    }
                    break;
            }
        });
    }

    public addAccelerationToMagnet(){
        this.magnetModel.addAcceleration();
    }
    public toggleMusicPlayback(): void {
        this.backgroundMusic.togglePlayback();
    }

    public setEndGameCallback(callback: (isVisible: boolean) => void): void {
        this.endGameCallback = callback;
    }

    private onUpdateScoreCallback: (newScore: number) => void = () => {
        console.warn("No callback registered for score updates.");
    };
    public setScoreUpdateCallback(callback: (newScore: number) => void): void {
        this.onUpdateScoreCallback = callback;
    }

    public resetMagnetPosition(mode: "angular" | "linear"){
        this.magnetModel.setMode(mode);
        this.magnetModel.resetMagnetPosition();

    }
}
