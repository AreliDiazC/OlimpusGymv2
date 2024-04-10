import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { empleado, filtroSucursales } from './Empleado';
import { sucursal } from './sucursal';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  Api_server: String = 'https://olympus.arvispace.com/olimpusGym/conf/mem.php';

  constructor(private http: HttpClient){}

  filtrarMem(filtros: filtroSucursales):Observable<any> {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.Api_server+"?fm=1", filtros, {headers});

  }

  //metodo traer datos filtrados - sucursales 
  filtrarSuc(filtros: filtroSucursales):Observable<any> {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.Api_server+"?fs=1", filtros, {headers}).pipe(
      map((data: any) =>
        data.map((item: any) => {
          const s = new sucursal();
          s.idGimnasio = item.idGimnasio;
          s.nombreGym = item.nombreGym;
          s.direccion = item.direccion;
          s.estado = item.estado;
          s.ciudad = item.ciudad;
          s.colonia = item.colonia;
          s.calle = item.calle;
          s.numExt = item.numExt;
          s.numInt = item.numInt;
          s.telefono = item.telefono;
          s.tipo = item.tipo;
          s.Franquicia_idFranquicia = item.Franquicia_idFranquicia;
          s.horarios = item.horarios;
          return s;
        })
      )
    );;
  }

}