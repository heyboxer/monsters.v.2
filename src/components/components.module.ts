import { NgModule } from '@angular/core';
import { MonstersModule } from './monsters/monsters.module';
import { TrinketsModule } from './trinkets/trinkets.module';
import { GameModule } from './game/game.module';
import { ItemHolderModule } from './item-holder/item-holder.module';

@NgModule({
	declarations: [],
	imports: [MonstersModule, TrinketsModule, GameModule, ItemHolderModule],
	exports: [MonstersModule, TrinketsModule, GameModule, ItemHolderModule]
})
export class ComponentsModule {};
