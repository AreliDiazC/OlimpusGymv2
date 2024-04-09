import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { sucursal } from './sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  API: string = 'https://olympus.arvispace.com/olimpusGym/conf/gym.php';

  constructor(private http: HttpClient) {}

  getSucursales(): Observable<sucursal[]> {
    return this.http.get(this.API).pipe(
      map((data: any) =>
        data.map((item: any) => {
          console.log(data, "data");
          const s = new sucursal();
          s.idGimnasio = item.id_bodega;
          s.nombreGym = item.nombreBodega;
          s.direccion = item.direccion;
          s.telefono = item.numeroTelefonico;
          s.estatus = item.estatus;
          return s;
        })
      )
    );
  }
}
