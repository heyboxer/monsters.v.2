import { NgModule } from '@angular/core';

import { BackgroundComponent } from './bg.component';
import { BackgroundAnchorDirective } from './bg.directive';
import { BackgroundTabletComponent } from './background-tablet.component';
import { BackgroundMobileComponent } from './background-mobile.component';

@NgModule({
	declarations: [BackgroundComponent, BackgroundTabletComponent, BackgroundMobileComponent, BackgroundAnchorDirective],
	providers: [],
	entryComponents: [BackgroundTabletComponent, BackgroundMobileComponent, ],
	exports: [BackgroundTabletComponent, BackgroundMobileComponent]
})
export class BackgroundModule {}
