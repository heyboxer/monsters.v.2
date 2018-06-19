import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassComponent } from './glass/glass';
import { EyesComponent } from './eyes/eyes';
import { HoodComponent } from './hood/hood';
import { MoleComponent } from './mole/mole';
import { HeartComponent } from './heart/heart';
import { BeardComponent } from './beard/beard';
import { MoustacheComponent } from './moustache/moustache';
import { SnivelComponent } from './snivel/snivel';
import { DressComponent } from './dress/dress';
import { BraComponent } from './bra/bra';
import { WigComponent } from './wig/wig';
import { LipsComponent } from './lips/lips';
import { LollipopComponent } from './lollipop/lollipop';
import { EggComponent } from './egg/egg';
import { EarringsComponent } from './earrings/earrings';
import { NecklaceComponent } from './necklace/necklace';
import { FlatulenceComponent } from './flatulence/flatulence';
import { FlowerComponent } from './flower/flower';
import { BubbleComponent } from './bubble/bubble';
import { PigtailComponent } from './pigtail/pigtail';

import { TrinketsComponent } from './trinkets.component';
import { TrinketHostDirective } from './trinket-host.directive';
import { TrinketRandomPartDirective } from './trinket-random-part.directive';
import { TrinketUniqPartDirective } from './trinket-uniq-part.directive';

@NgModule({
	declarations: [ GlassComponent, EyesComponent, HoodComponent, MoleComponent, HeartComponent, BeardComponent, MoustacheComponent, SnivelComponent, DressComponent, BraComponent, WigComponent, LipsComponent, LollipopComponent, EggComponent, EarringsComponent, NecklaceComponent, FlatulenceComponent, FlowerComponent, BubbleComponent, PigtailComponent, TrinketsComponent, TrinketHostDirective, TrinketRandomPartDirective, TrinketUniqPartDirective ],
	providers: [],
	imports: [ CommonModule ],
	entryComponents: [ GlassComponent, EyesComponent, HoodComponent, MoleComponent, HeartComponent, BeardComponent, MoustacheComponent, SnivelComponent, DressComponent, BraComponent, WigComponent, LipsComponent, EggComponent, EarringsComponent, NecklaceComponent, FlatulenceComponent, BubbleComponent, LollipopComponent, PigtailComponent, FlowerComponent, ],
	exports: [ TrinketsComponent ]
})
export class TrinketsModule {}
