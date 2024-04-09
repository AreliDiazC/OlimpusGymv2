import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URLServices: String = "https://olympus.arvispace.com/olimpusGym/conf/registroLinea.php"; //http://localhost/plan/registro.php/ https://olympus.arvispace.com/conPrincipal/registro.php
  constructor( private http: HttpClient) { }

  agregarCliente(datosCliente:Cliente):Observable<any>{
    return this.http.post(this.URLServices+"?insertar=1",datosCliente);
  }
  

}
