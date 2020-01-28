import { Component, OnInit } from '@angular/core';

import { PresupuestosService } from '../../servicios/presupuestos.service';

import { Presupuestos } from 'src/app/Model/presupuestos.model';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  presupuestos: Presupuestos [] = [];

  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos().subscribe(presupuestos => {
      this.presupuestos = presupuestos;
    });
  }

  ngOnInit() {
  }

}
