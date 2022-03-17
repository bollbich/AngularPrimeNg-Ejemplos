import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower:string = 'rolando';
  nombreUpper:string = 'ROLANDO';
  nombreCompleto:string = 'rolando Lopez';

  fecha:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
