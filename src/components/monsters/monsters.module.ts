import { NgModule } from '@angular/core';

// List of Monsters
import { AlienComponent } from './alien/alien';
import { SkeletonComponent } from './skeleton/skeleton';
import { ZombieComponent } from './zombie/zombie';
import { BedComponent } from './bed/bed';
import { SpiderComponent } from './spider/spider';
import { VampireComponent } from './vampire/vampire';
import { WolfComponent } from './wolf/wolf';
import { MummyComponent } from './mummy/mummy';
import { YagaComponent } from './yaga/yaga';
import { DoctorComponent } from './doctor/doctor';
import { YetiComponent } from './yeti/yeti';
import { GhostComponent } from './ghost/ghost';


import { MonstersComponent } from './monsters.component';
import { MonstersHostDirective } from './monsters-host.directive';
import { MonstersScreenDirective } from './monsters-screen.directive';
import { MonsterPartDirective } from './monster-part.directive';

@NgModule({
	declarations: [ZombieComponent, SkeletonComponent, AlienComponent, BedComponent, SpiderComponent, VampireComponent,WolfComponent, MummyComponent, YagaComponent, DoctorComponent, YetiComponent, GhostComponent, MonstersComponent, MonstersHostDirective, MonstersScreenDirective, MonsterPartDirective],
	providers: [],
	entryComponents: [ZombieComponent, SkeletonComponent, AlienComponent, BedComponent, SpiderComponent, VampireComponent,WolfComponent, YagaComponent, DoctorComponent, YetiComponent, MummyComponent, GhostComponent,],
	exports: [MonstersComponent]
})
export class MonstersModule {}
