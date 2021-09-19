import { Component, OnInit } from '@angular/core';

export interface IPerson {
  id: number;
  name: string;
}

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.scss']
})
export class InputoutputComponent implements OnInit {
  public newPerson: IPerson = {
    id: 0,
    name: ''
  }

  public persons: IPerson[] = [
    {
      id: 0,
      name: 'Kitty Kate'
    },
    {
      id: 1,
      name: 'Ole Wale'
    },
    {
      id: 2,
      name: 'Max Fry'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public add(): void {
    this.persons.push({...this.newPerson});
  }
  
  public onDelete(id: number): void {
    this.persons = this.persons.filter((item: IPerson) => item.id !== id);
  }
}
