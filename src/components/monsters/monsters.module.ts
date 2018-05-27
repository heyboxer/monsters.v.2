import { NgModule } from '@angular/core';

// List of Monsters
import { AlienComponent } from './alien/alien';
import { SkeletonComponent } from './skeleton/skeleton';
import { ZombieComponent } from './zombie/zombie';
import { BedComponent } from './bed/bed';
import { SpiderComponent } from './spider/spider';
import { VampireComponent } from './vampire/vampire';
import { WolfComponent } from './wolf/wolf';


import { MonstersComponent } from './monsters.component';
import { MonstersHostDirective } from './monsters-host.directive';
import { MonsterPartDirective } from './monster-part.directive';

@NgModule({
	declarations: [ZombieComponent, SkeletonComponent, AlienComponent, BedComponent, SpiderComponent, VampireComponent,WolfComponent, MonstersComponent, MonstersHostDirective, MonsterPartDirective],
	providers: [],
	entryComponents: [ZombieComponent, SkeletonComponent, AlienComponent, BedComponent, SpiderComponent, VampireComponent,WolfComponent,],
	exports: [MonstersComponent]
})
export class MonstersModule {}
