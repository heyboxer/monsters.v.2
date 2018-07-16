import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { SoundTogglerComponent } from './sound-toggler.component';
import { SoundManagerService } from './sound-manager.service';


@NgModule({
	declarations: [ SoundTogglerComponent ],
	providers: [ SoundManagerService ],
	imports: [ CommonModule, IonicModule ],
	exports: [ SoundTogglerComponent ],
	entryComponents: [],
})
export class SoundTogglerModule {}
