import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  API: string = 'https://olympus.arvispace.com/olimpusGym/conf/membresias.php';
  apiProducts: string = 'https://olympus.arvispace.com/Products/products.php';
  API3: string = "https://olympus.arvispace.com/conPrincipal/servicesMembresia.php";

  constructor(private clienteHttp:HttpClient) {
  }

  agregarPlan(datosPlan:plan):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosPlan);
  }

  obternerPlan(){
    return this.clienteHttp.get(this.API);
  }

  consultarPlan(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }

  borrarPlan(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id)
  }

  actualizarPlan(id:any,datosPlan:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosPlan);
  }  

  obtenerProducts() {
    return this.clienteHttp.get(this.apiProducts);
  }

  newService(data: any): Observable<any> {
    return this.clienteHttp.post(this.API3+"?insertarservicio", data);
  }

}
