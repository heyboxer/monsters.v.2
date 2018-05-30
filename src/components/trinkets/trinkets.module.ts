import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassComponent } from './glass/glass';
import { EyesComponent } from './eyes/eyes';
import { HoodComponent } from './hood/hood';
import { MoleComponent } from './mole/mole';

import { TrinketsComponent } from './trinkets.component';
import { TrinketHostDirective } from './trinket-host.directive';

@NgModule({
	declarations: [ GlassComponent, EyesComponent, HoodComponent, MoleComponent, TrinketsComponent, TrinketHostDirective ],
	providers: [],
	imports: [ CommonModule ],
	entryComponents: [ GlassComponent, EyesComponent, HoodComponent, MoleComponent ],
	exports: [ TrinketsComponent ]
})
export class TrinketsModule {}
