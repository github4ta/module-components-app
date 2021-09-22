import { Component, OnInit } from '@angular/core';
import { Base } from './base';

@Component({
  selector: 'app-base-test',
  templateUrl: './base-test.component.html',
  styleUrls: ['./base-test.component.scss']
})
export class BaseTestComponent extends Base implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
