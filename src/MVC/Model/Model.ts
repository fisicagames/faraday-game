import { Scene, HavokPlugin, KeyboardEventTypes, Vector3} from "@babylonjs/core";
import { IModel } from "./IModel";
import { SoundModel } from "./SoundLoader";

export class Model implements IModel {
    private scene: Scene;
    public backgroundMusic: SoundModel;
    private allSounds: SoundModel[] = [];
    private physicsPlugin: HavokPlugin;
    private endGameCallback: ((isVisible: boolean) => void) | null = null;
    public endGAme: boolean = false;

    constructor(scene: Scene, physicsPlugin: HavokPlugin) {
        this.scene = scene;
        this.physicsPlugin = physicsPlugin;
        //https://pixabay.com/pt/music/otimista-moving-on-253731/
        this.backgroundMusic = new SoundModel(this.scene, "backgroundSound", "./assets/sounds/moving-on-253731.compress.mp3", true);
        this.allSounds.push(this.backgroundMusic);

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
