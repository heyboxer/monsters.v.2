import { NgModule } from "@angular/core";
import { ElementRepository } from "./element.repository";
import { ElementComponentModel } from './element-component.model';

@NgModule({
  declarations: [ElementComponentModel],
  imports: [],
  providers: [ElementRepository],
  exports: [ElementComponentModel],
})
export class ModelModule {};
