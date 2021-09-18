import {
  Component, OnChanges, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnChanges {
  public counts: number = 0;

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges LifeCycle Hooks', changes);
  }

  public change(): void {
    this.counts++;
  }
}
