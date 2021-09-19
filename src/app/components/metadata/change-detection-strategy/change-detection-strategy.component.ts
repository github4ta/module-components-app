import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeDetectionStrategyComponent implements OnInit {
  @Input() public testObject: any;

  constructor() { }

  ngOnInit(): void {
  }

}
