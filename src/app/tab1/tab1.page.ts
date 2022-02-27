import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  ngOninit(){

    
    let numero = 10
    debugger
    numero=20

    numero=numero+30


    console.log(numero);
  }

}
