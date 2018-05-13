import { Component, OnInit, OnDestroy } from '@angular/core';
import ElementRepository from './element.repository';
import { ElementModel } from './element.model';
import * as $ from 'jquery';


@Component({
  // providers: [ElementRepository]
})
export class ElementComponentModel implements OnInit, OnDestroy {
  private repo = ElementRepository;
  private element: ElementModel;

    constructor(private name: string, private node: HTMLElement) {
    };

    ngOnInit() {
      this.element = new ElementModel(this.name, this.node);
      this.add(this.element);

      const monsters = $( this.node ).find('[data-monster]').get();
      const data = monsters.map(m => ({ node: m, data: $(m).data('monster')}));
    };

    ngOnDestroy() {
      this.repo.removeById(this.element.getId());
    };

    private add(element: ElementModel) {
      return this.repo.add(element);
    }
}
