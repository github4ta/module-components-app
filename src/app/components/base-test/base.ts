import { DoCheck, Injectable } from '@angular/core';

@Injectable()
export class Base implements DoCheck {
    protected test(): void {
        console.log('Class Base, test() method')
    }
    ngDoCheck(): void {
        console.log('Class Base, ngDoCheck() method')
    }
}