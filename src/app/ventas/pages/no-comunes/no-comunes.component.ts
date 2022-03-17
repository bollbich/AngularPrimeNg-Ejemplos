import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre:string = "Rolando";
  genero:string = 'masculino';

  nombre2:string = "María";
  genero2:string = 'femenino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  clientes:string[] = ['Maria','Pablo','Francisco','Leticia','Olegario',]

  clientesMapa = {
    '=0':'no tenemos ningún cliente esperano',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
