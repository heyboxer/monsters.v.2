import { NgModule } from '@angular/core';

// List of Monsters
import { ZombieComponent } from './zombie/zombie';
import { GlassComponent } from './glass/glass';

// Services
import { MonstersComponent } from './monsters.component';
import { MonstersDirective } from './monsters.directive';

@NgModule({
	declarations: [ZombieComponent, GlassComponent, MonstersComponent, MonstersDirective],
	providers: [],
	entryComponents: [ZombieComponent, GlassComponent],
	exports: [MonstersComponent]
})
export class MonstersModule {}
