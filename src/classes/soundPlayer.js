export class SoundPlayer {
  constructor(brand) {
    this.brand = brand;
  }

  playSoundFile(fileName) {
    console.log(`playing ${fileName} on ${this.brand} music player`);
  }
}
