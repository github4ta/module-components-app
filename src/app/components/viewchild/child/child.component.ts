import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @ViewChild('pviewchild', { static: true })
  public testP!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  public testFn(): void {
    console.log('VIEW CHILD WORKS!');
    console.log(this.testP.textContent);
  }

}
