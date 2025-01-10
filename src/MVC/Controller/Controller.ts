import { Scene, Vector3, Mesh, FollowCamera } from "@babylonjs/core";
import { IModel } from "../Model/IModel";
import { IView } from "../View/IView";
import { CameraController } from "./CameraController";

export class Controller {
    private scene: Scene;
    private model: IModel;
    private view: IView;
    private followCamera: FollowCamera;
    private followCameraTarget: Mesh | null = null;

    private isUpPressed: boolean = false;
    private isDownPressed: boolean = false;
    private isLeftPressed: boolean = false;
    private isRightPressed: boolean = false;

    constructor(scene: Scene, model: IModel, view: IView) {
        this.scene = scene;
        this.model = model;
        this.view = view;
        this.setupControls();

        this.followCamera = this.scene.activeCamera as FollowCamera;

        this.model.setScoreUpdateCallback((newScore) => {
            this.view.updateScoreText(newScore);
        });

        this.model.setEndGameCallback((isVisible: boolean) => this.showEndGamePanel(isVisible));

        this.update();

    }

    private update() {
        this.scene.onBeforeRenderObservable.add(() => {
            this.updateCameraPosition();            
        });
    }
    private setupControls() {

        this.view.onButtonMenuStartA(() => this.startGameAngular());
        this.view.onButtonMenuStartB(() => this.startGameLinear());
        this.view.onButtonMenuStartC(() => this.startGameAngular());
        this.view.onButtonMenuContinuar(() => this.continueGame());
        this.view.onButtonMenu(() => this.showMenu());
        this.view.onToggleMusic(() => this.toggleMusic());
        this.view.onButtonLang(() => this.changeLanguage());
        //Change for age 3+:
        this.view.onButtonEfeitoIntenso(() => {this.model.modeEffectIntense = false});
        this.view.onButtonEfeitoSuave(() => {this.model.modeEffectIntense = false});

        //this.view.buttonUpDown(() => { this.isUpPressed = true; });
        //this.view.onButtonUpUp(() => { this.isUpPressed = false; });
        this.view.setButtonUpUpCallback(() => this.model.addAccelerationToMagnet());

    }

    public setCameraTarget(target: Vector3 | Mesh): void {
        if (target instanceof Mesh) {
            this.followCameraTarget = target;
        } else if (target instanceof Vector3) {
            this.followCamera.lockedTarget = null;
            this.followCamera.setTarget(target);
        }
    }

    private updateCameraPosition(): void {
        if (this.followCameraTarget && this.followCamera) {
            CameraController.updatePosition(this.followCamera, this.followCameraTarget);
        }
    }

    private startGameAngular(): void {
        this.view.changeButtonUPSymbol(`↻`);
        this.model.resetMagnetPosition("angular");
        this.continueGame();
    }
    private startGameLinear(): void {
        this.view.changeButtonUPSymbol(`⇅`);
        this.model.resetMagnetPosition("linear");
        this.continueGame();
    }
    private continueGame(){
        this.view.updateMainMenuVisibility(false);        
        this.view.showEndGamePanel(false);
        this.view.updateScoreText(0);        
    }

    private showMenu(): void {
        this.model.backgroundMusic?.pause();
        this.view.updateMainMenuVisibility(true);
        this.model.backgroundMusic?.pause();
        // Verifica se o SDK está disponível e exibe o banner
        if (typeof sdk !== 'undefined' && typeof sdk.showBanner === 'function') {
            sdk.showBanner();
        } else {
            console.warn("SDK não disponível ou não inicializado corretamente.");
        }
    }

    private toggleMusic(): void {
        this.model.toggleMusicPlayback();
    }

    private changeLanguage(): void {
        this.view.changeLanguage();
    }

    private showEndGamePanel(isVisible: boolean): void {
        this.view.showEndGamePanel(isVisible);
    }
}
