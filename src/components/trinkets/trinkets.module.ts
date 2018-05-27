import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassComponent } from './glass/glass';
import { EyesComponent } from './eyes/eyes';

import { TrinketsComponent } from './trinkets.component';
import { TrinketHostDirective } from './trinket-host.directive';

@NgModule({
	declarations: [ GlassComponent, EyesComponent, TrinketsComponent, TrinketHostDirective ],
	providers: [],
	imports: [ CommonModule ],
	entryComponents: [ GlassComponent, EyesComponent, ],
	exports: [ TrinketsComponent ]
})
export class TrinketsModule {}
