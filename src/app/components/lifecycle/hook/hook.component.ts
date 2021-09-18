import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, 
  AfterViewInit, 
  ChangeDetectionStrategy, 
  Component, 
  DoCheck, 
  Input, 
  OnInit, 
  OnChanges, 
  ViewEncapsulation, 
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class HookComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  @Input()
  public counts!: number;

  constructor() { }

  public ngOnInit(): void {
    console.log('OnInit Hook');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges Hook', changes);
  }

  public ngDoCheck(): void {
    console.log('DoCheck Hook');
  }

  public ngAfterContentInit(): void {
    console.log('AfterContentInit Hook');
  }

  public ngAfterContentChecked(): void {
    console.log('AfterContentChecked Hook');
  }

  public ngAfterViewInit(): void {
    console.log('AfterViewInit Hook');
  }

  public ngAfterViewChecked(): void {
    console.log('AfterViewChecked Hook');
  }

  /*
  public change(): void {
    this.hookCounts++;
  }
  */ // лектор говорит это не надо
}
