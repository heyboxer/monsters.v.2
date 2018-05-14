import { NgModule } from '@angular/core';
import { MonstersModule } from './monsters/monsters.module';
import { TrinketsModule } from './trinkets/trinkets.module';

@NgModule({
	declarations: [],
	imports: [MonstersModule, TrinketsModule],
	exports: [MonstersModule, TrinketsModule]
})
export class ComponentsModule {};
