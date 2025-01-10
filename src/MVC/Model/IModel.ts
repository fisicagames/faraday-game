import { SoundModel } from "./SoundModel";

export interface IModel {
    toggleMusicPlayback(): void;
    setScoreUpdateCallback(callback: (newScore: number) => void): void;
    setEndGameCallback(callback: (isVisible: boolean) => void): void;    
    addAccelerationToMagnet(): void;
    resetMagnetPosition(mode: "angular" | "linear"): void;
    modeEffectIntense: boolean;
    backgroundMusic: SoundModel | undefined;


}
