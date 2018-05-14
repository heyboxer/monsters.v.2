import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassComponent } from './glass/glass';

import { TrinketsComponent } from './trinkets.component';
import { TrinketHostDirective } from './trinket-host.directive';

@NgModule({
	declarations: [ GlassComponent, TrinketsComponent, TrinketHostDirective ],
	providers: [],
	imports: [ CommonModule ],
	entryComponents: [ GlassComponent ],
	exports: [ TrinketsComponent ]
})
export class TrinketsModule {}
