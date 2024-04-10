import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucursalesComponent } from './user/sucursales/sucursales.component';
import { AltaUsuarioComponent } from './user/alta-usuario/alta-usuario.component';
import { LineaComponent } from './admin/timeline/timeline.component';
import { IndexComponent } from './user/index/index.component';
import { MembresiasComponent } from './recepcionist/membresias/membresias.component';
import { AboutUsComponent } from '../app/user/about-us/about-us.component'
import { SucursalComponent } from './user/sucursal/sucursal.component'
import { ConfirmacionComponent } from './user/confirmacion/confirmacion.component';
import { PlanvirtualComponent } from './user/planvirtual/planvirtual.component';
import { HorariosComponent } from './admin/horarios/horarios.component';
import { PagoInscripcionComponent } from './user/pago-inscripcion/pago-inscripcion.component';

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "index", component: IndexComponent },
  { path: "sucursales", component: SucursalesComponent },
  { path: "registro/:id/:idName/:idPrecio", component: AltaUsuarioComponent },
  { path: "sobre-nosotros", component: AboutUsComponent },
  { path: "sucursal/:id/:idName", component: SucursalComponent},
  { path: "confirmacion", component: ConfirmacionComponent},
  { path: "VirtualOlimpusGym", component: PlanvirtualComponent },
  { path: "pago-inscripcion/:idEmail", component: PagoInscripcionComponent},
  { path: "membresias/:id/:idName", component: MembresiasComponent },
  { path: "linea", component: LineaComponent },
  { path: "horario/:id", component:HorariosComponent},
  { path: "**", redirectTo: "index", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
