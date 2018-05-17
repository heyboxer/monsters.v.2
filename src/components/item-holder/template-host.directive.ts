import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[template-host]',
})
export class TemplateHostDriective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
