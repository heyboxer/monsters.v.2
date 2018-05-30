import { AnimationSetController } from './animation-set.controller';
import { AnimationSequenceController } from './animation-sequence.controller';

export type AnimationScheme = (string | string[])[];
export type AnimationFunctions = { [key: string] : (callback) => void };

export class AnimationSequenceModel {
  constructor(
    private scheme: AnimationScheme,
    private animations: AnimationFunctions,
  ) {
    const keys = Object.keys(this.animations);

    const rec = (acc) => {
      if(!acc.length) return true;

      const [ current, ...rest ] = acc;

      const child = current instanceof Array ? rec(current) : null;

      return keys.includes(current) ?  rec(rest) : false;
    }

    const isCorrect = () => rec( this.scheme );

    if(!isCorrect()) throw new Error('AnimationSequenceModel: Wrong Scheme Values');
  }

  public getScheme() {
    return this.scheme;
  }

  public getFunction(name) {
    return this.animations[name];
  }
}
