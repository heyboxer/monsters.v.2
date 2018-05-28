import { Component, AfterViewInit } from '@angular/core';
import { BackgroundComponent } from './bg.component';

@Component({
  selector: 'background-mobile',
  templateUrl: './background-mobile.component.html',
})

export class BackgroundMobileComponent extends BackgroundComponent implements AfterViewInit {
  constructor() {
    super();
  }

  ngAfterViewInit() {
    
  }
}
