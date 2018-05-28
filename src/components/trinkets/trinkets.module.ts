import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassComponent } from './glass/glass';
import { EyesComponent } from './eyes/eyes';
import { HoodComponent } from './hood/hood';

import { TrinketsComponent } from './trinkets.component';
import { TrinketHostDirective } from './trinket-host.directive';

@NgModule({
	declarations: [ GlassComponent, EyesComponent, HoodComponent, TrinketsComponent, TrinketHostDirective ],
	providers: [],
	imports: [ CommonModule ],
	entryComponents: [ GlassComponent, EyesComponent, HoodComponent ],
	exports: [ TrinketsComponent ]
})
export class TrinketsModule {}
