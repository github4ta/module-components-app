import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPerson } from '../inputoutput.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input()  person!: IPerson;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  
  public delete(): void {
    this.onDelete.emit(this.person.id);
  }
}
