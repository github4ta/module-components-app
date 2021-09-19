import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss'],
  interpolation: ['((', '))'],
})
export class MetadataComponent implements OnInit {
  public interpolationVar: string = "Interpolation & Style Incapsulation";
  public changedObject: any;

  constructor() { }

  ngOnInit(): void {
    this.changedObject = {
      changedObjectProperty: "Before change detection"
    };
  }

  public testChangeDetectionStrategy(): void {
    this.changedObject.changedObjectProperty = "Property change is detected";
  }
}
