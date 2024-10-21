import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  img: string = "../../../assets/img/mecanico"

  mecanicos: any = [
    {
      image: `${this.img}1.jpg`,
      name: 'Carlos Albeiro Martinez',
      ocupation: 'Mecanico de pista 1.',
      btn1: 'Ver',
      btn2: 'Editar'
    },
    {
      image: `${this.img}2.jpg`,
      name: 'Santiago alberto hoyos',
      ocupation: 'Mecanico de pista 2.',
      btn1: 'Asignar',
      btn2: 'Modificar'
    },
    {
      image: `${this.img}3.jpg`,
      name: 'Cristian Sandoval',
      ocupation: 'Tecnico en Sincronizacion.',
      btn1: 'Eliminar',
      btn2: 'Crear'
    },
    {
      image: `${this.img}4.jpg`,
      name: 'Sergio Arango',
      ocupation: 'Supervisor de Area.',
      btn1: 'Mantener',
      btn2: 'Sacar'
    }
  ]

  constructor() { }

  ngOnInit() {
    this.mecanicos.map((x:any) => {
      console.log(x.name)
    })
  }

}