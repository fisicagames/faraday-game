import { Scene, HavokPlugin, KeyboardEventTypes, Vector3, PointLight, Color3, TransformNode} from "@babylonjs/core";
import { IModel } from "./IModel";
import { SoundModel } from "./SoundModel";

export class Model implements IModel {
    private scene: Scene;
    public backgroundMusic: SoundModel;
    private allSounds: SoundModel[] = [];
    private physicsPlugin: HavokPlugin;
    private endGameCallback: ((isVisible: boolean) => void) | null = null;
    public endGAme: boolean = false;
    private magnetNode: TransformNode | null;

    constructor(scene: Scene, physicsPlugin: HavokPlugin) {
        this.scene = scene;
        //TODO: Remove Havok for this game.
        this.physicsPlugin = physicsPlugin;
        
        //TODO: Create glow effect to lamp material.
        //TODO: Create a LightLampModel class.        
        const lightLamp: PointLight = new PointLight("LightLamp", new Vector3(13, 8.5, -5.5), this.scene);
        lightLamp.intensity = 10
        lightLamp.diffuse = Color3.FromHexString('#5C3E04')

        //https://pixabay.com/pt/music/otimista-legendary-paganini-caprice-house-background-music-for-video-full-ver-271219/
        //Music by Maksym Dudchyk from Pixabay
        this.backgroundMusic = new SoundModel(this.scene, "backgroundSound", "./assets/sounds/legendary-paganini-caprice-house-background-music-for-video-full-ver-271219-compress.mp3", true);
        this.backgroundMusic.setVolume(0.7);
        this.allSounds.push(this.backgroundMusic);
        
        this.magnetNode = this.scene.getTransformNodeById('Magnet')
        const textN_Mesh = this.scene.getMeshByName(`TextN`);
        const textS_Mesh = this.scene.getMeshByName(`TextS`);
        textN_Mesh?.setParent(this.magnetNode)
        textS_Mesh?.setParent(this.magnetNode)


        this.keyboardInput();
        this.updateSceneModels();
    }

    private updateSceneModels() {
        this.scene.onBeforeRenderObservable.add(() => {
        });
    }
    private keyboardInput() {
        let forceAccumulator = new Vector3(0, 0, 0);

        this.scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case KeyboardEventTypes.KEYDOWN:
                    if (kbInfo.event.key === "w" ||
                        kbInfo.event.key === "W" ||
                        kbInfo.event.key === "ArrowUp" ||
                        kbInfo.event.key === " ") {
                            this.magnetNode?.rotate(new Vector3(0,0,1),0.1)

                    }
                    if (kbInfo.event.key === "q"){

                    }
                    break;
            }
        });
    }

    public toggleMusicPlayback(): void {
        this.backgroundMusic.togglePlayback();
    }

    public setEndGameCallback(callback: (isVisible: boolean) => void): void {
        this.endGameCallback = callback;
    }
    public setScoreUpdateCallback(callback: (newScore: number) => void): void {
     
    }    

}
