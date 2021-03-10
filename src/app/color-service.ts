export abstract class ColorService {
  abstract name: string;

  get(): string {
    return `this is the ${this.name}`;
  }

}
