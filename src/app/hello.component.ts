import { Component } from '@angular/core';
@Component({
    selector: 'app-hello',
   // template: `<h1>Hello Angular 6.0</h1>`,
   templateUrl:'./hello.component.html',
    styles: [`h1{
        color:blue;
        font-size:20px;
        text-transform:Uppercase;
    }`]
})

export class helloComponent{
    title= 'hello world';
}
