import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoInscripcionService {

  URLServices: string = "https://olympus.arvispace.com/olimpusGym/conf/registroLinea.php";
  constructor( private http: HttpClient) { }
  
  consultarDataPago(id:any):Observable<any>{
    return this.http.get(this.URLServices+"?consultar="+id);
  }
  
  idPagoSucursal(form:any):Observable<any>{
    return this.http.post(this.URLServices+"?consuProcAlmac",form);
  }
}
