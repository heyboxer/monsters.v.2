import { Injectable } from '@angular/core';
import hood from './hood/instance';
import heart from './heart/instance';
import snivel from './snivel/instance';
import moustache from './moustache/instance';
import beard from './beard/instance';
import mole from './mole/instance';
import glass from './glass/instance';
import eyes from './eyes/instance';
import dress from './dress/instance';
import bra from './bra/instance';
import wig from './wig/instance';
import lips from './lips/instance';
import lollipop from './lollipop/instance';
import egg from './egg/instance';
import earrings from './earrings/instance';
import necklace from './necklace/instance';
import flatulence from './flatulence/instance';
import flower from './flower/instance';
import bubble from './bubble/instance';
import pigtail from './pigtail/instance';

@Injectable()
export class TrinketsService {
  constructor() {
  }
  getTrinkets() {
    return [
      eyes,
      mole,
      moustache,
      lips,
      earrings,
      beard,
      heart,
      dress,
      flower,
      wig,
      necklace,
      snivel,
      glass,
      lollipop,
      bra,
      pigtail,
      egg,
      flatulence,
      bubble,
      hood,
    ]
  }
}
