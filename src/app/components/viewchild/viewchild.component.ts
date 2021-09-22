import { AfterContentInit, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements AfterContentInit, AfterViewInit {
  @ViewChild(ChildComponent, { static: true })
  public childComponent!: ChildComponent;

  @ViewChild("pviewchild")
  pviewchild!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit : ' + this.childComponent.testP.innerText);
  }

  ngAfterContentInit(): void {
    //this.childComponent.testFn();
    console.log('ngAfterContentInit : ' + this.childComponent.testP.innerText);
  }

}
