import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class horarioService {
  APIHorario: string = 'https://olympus.arvispace.com/olimpusGym/conf/gym.php'
  constructor(private http: HttpClient) {}

  consultarHorario(id:any):Observable<any>{
    console.log(id);
    return this.http.get(this.APIHorario+"?consultarHorario="+id);
  }
}
