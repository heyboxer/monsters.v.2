import { NgModule } from '@angular/core';

import { ItemHolderComponent } from './item-holder.component';
import { TemplateHostDriective } from './template-host.directive';

@NgModule({
	declarations: [ ItemHolderComponent, TemplateHostDriective ],
	providers: [],
	imports: [],
	entryComponents: [],
	exports: [ ItemHolderComponent, TemplateHostDriective ]
})
export class ItemHolderModule {}
