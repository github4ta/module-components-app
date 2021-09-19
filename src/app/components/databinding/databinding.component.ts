import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router'

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  public twoWayBinding = 'Input text goes here';
  public bindingVarInterpolation = 'Interpolation';
  public bindingVarAttribute = 'Attribute Binding';

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    console.log('onClick');
  }

  public onChange(): void {
    console.log(event);
  }
}
