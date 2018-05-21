import { NgModule } from '@angular/core';

// List of Monsters
import { AlienComponent } from './alien/alien';
import { ZombieComponent } from './zombie/zombie';
import { SkeletonComponent } from './skeleton/skeleton';


import { MonstersComponent } from './monsters.component';
import { MonstersHostDirective } from './monsters-host.directive';
import { MonsterPartDirective } from './monster-part.directive';

@NgModule({
	declarations: [ZombieComponent, SkeletonComponent, AlienComponent, MonstersComponent, MonstersHostDirective, MonsterPartDirective],
	providers: [],
	entryComponents: [ZombieComponent, SkeletonComponent, AlienComponent],
	exports: [MonstersComponent]
})
export class MonstersModule {}
