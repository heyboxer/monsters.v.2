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

import { TrinketsComponent } from './trinkets.component';
import { TrinketHostDirective } from './trinket-host.directive';
import { TrinketRandomPartDirective } from './trinket-random-part.directive';
import { TrinketUniqPartDirective } from './trinket-uniq-part.directive';

@NgModule({
	declarations: [ GlassComponent, EyesComponent, HoodComponent, MoleComponent, HeartComponent, BeardComponent, MoustacheComponent, SnivelComponent, DressComponent, BraComponent, WigComponent, TrinketsComponent, TrinketHostDirective, TrinketRandomPartDirective, TrinketUniqPartDirective ],
	providers: [],
	imports: [ CommonModule ],
	entryComponents: [ GlassComponent, EyesComponent, HoodComponent, MoleComponent, HeartComponent, BeardComponent, MoustacheComponent, SnivelComponent, DressComponent, BraComponent, WigComponent, ],
	exports: [ TrinketsComponent ]
})
export class TrinketsModule {}
