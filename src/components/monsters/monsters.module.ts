import { NgModule } from '@angular/core';

// List of Monsters
import { ZombieComponent } from './zombie/zombie';
import { SkeletonComponent } from './skeleton/skeleton';


import { MonstersComponent } from './monsters.component';
import { MonstersHostDirective } from './monsters-host.directive';
import { MonsterPartDirective } from './monster-part.directive';

@NgModule({
	declarations: [ZombieComponent, SkeletonComponent, MonstersComponent, MonstersHostDirective, MonsterPartDirective],
	providers: [],
	entryComponents: [ZombieComponent, SkeletonComponent],
	exports: [MonstersComponent]
})
export class MonstersModule {}
