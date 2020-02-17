import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  isProduction = environment.production;

  constructor() { }

  ngOnInit(): void {
  }

}
