import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { horarioService } from 'src/app/servicios/horario.service';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  idGimnasio: any;
  jsonPaths: string[] = [
    '$.horarios.lunes.horaInicio',
    '$.horarios.lunes.horaFin',
    '$.horarios.martes.horaInicio',
    '$.horarios.martes.horaFin',
    '$.horarios.miercoles.horaInicio',
    '$.horarios.miercoles.horaFin',
    '$.horarios.jueves.horaInicio',
    '$.horarios.jueves.horaFin',
    '$.horarios.viernes.horaInicio',
    '$.horarios.viernes.horaFin',
    '$.horarios.sabado.horaInicio',
    '$.horarios.sabado.horaFin',
    '$.horarios.domingo.horaInicio',
    '$.horarios.domingo.horaFin',
  ];

  valorJSON: { [key: string]: any } = {};

  constructor(
    public dialogo: MatDialogRef<HorariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private HorarioService: horarioService,
  ) {
    this.idGimnasio = data.idGimnasio; // Accede a idGimnasio desde los datos
    console.log(this.idGimnasio);
  }

  cerrarDialogo(): void {
    this.dialogo.close(true);
  }

  ngOnInit(): void {
  }
}
