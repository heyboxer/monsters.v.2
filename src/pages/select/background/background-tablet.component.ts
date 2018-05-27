import { Component, AfterViewInit } from '@angular/core';
import { BackgroundComponent } from './bg.component';

@Component({
  selector: 'background-tablet',
  templateUrl: './background-tablet.component.html',
})

export class BackgroundTabletComponent extends BackgroundComponent implements AfterViewInit {
  constructor() {
    super();
  }

  ngAfterViewInit() {
  }
}
