import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { MonstersModule } from './monsters/monsters.module';
import { TrinketsModule } from './trinkets/trinkets.module';
import { GameModule } from './game/game.module';
import { ItemHolderModule } from './item-holder/item-holder.module';
import { SoundTogglerModule } from './sound-toggler/sound-toggler.module';

@NgModule({
	declarations: [],
	imports: [MonstersModule, TrinketsModule, GameModule, ItemHolderModule, SoundTogglerModule],
	exports: [MonstersModule, TrinketsModule, GameModule, ItemHolderModule, SoundTogglerModule]
})
export class ComponentsModule {};
