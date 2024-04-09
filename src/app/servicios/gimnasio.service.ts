import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, catchError, map, tap } from 'rxjs';
import { gimnasio } from './gimnasio';

@Injectable({
  providedIn: 'root'
})
export class GimnasioService {

  //API: string = 'https://olympus.arvispace.com/gimnasioRoles/configuracion/administrador/gimnasio.php'
  API: string = 'https://olympus.arvispace.com/olimpusGym/conf/gym.php'
  APISERVICE: string = 'https://olympus.arvispace.com/olimpusGym/conf/serviciosGym.php';
  API2: string = 'https://olympus.arvispace.com/olimpusGym/conf/'

  constructor(private clienteHttp:HttpClient) {
  }

  obternerPlan(){
    return this.clienteHttp.get(this.API);
  }

  // Angular service method
  agregarSucursal(datosGym: gimnasio):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1", datosGym);
  }

  actualizarPlan(id:any,datosPlan:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosPlan);
  } 

  consultarPlan(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }

  getServicesForId(id: any): Observable<any> {
    return this.clienteHttp.post(this.APISERVICE, { id: id });
  }

  consultarPlanes(id:any):Observable<any>{
    return this.clienteHttp.get(this.API2+"bodega.php?consultarB="+id);
  }

}
