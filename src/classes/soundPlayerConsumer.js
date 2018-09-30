import { SoundPlayer } from './soundPlayer';

export class SoundPlayerConsumer {
  constructor() {
    this.soundPlayer = new SoundPlayer('Sony');
  }

  playSomethingCool() {
    const soundFileName = 'file.mp3';
    this.soundPlayer.playSoundFile(soundFileName);
  }
}
