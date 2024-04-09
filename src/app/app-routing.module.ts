import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RecuperarPasswordComponent } from './user/recuperar-password/recuperar-password.component';
import { SucursalesComponent } from './user/sucursales/sucursales.component';
import { AltaUsuarioComponent } from './user/alta-usuario/alta-usuario.component';
import { FinalizarCompraComponent } from './user/finalizar-compra/finalizar-compra.component';
import { DetalleCompraComponent } from './recepcionist/detalle-compra/detalle-compra.component';
import { LineaComponent } from './admin/timeline/timeline.component';
import { IndexComponent } from './user/index/index.component';
import { MembresiasComponent } from './recepcionist/membresias/membresias.component';
import { CarruselComponent } from './user/carrusel/carrusel.component';
import { AboutUsComponent } from '../app/user/about-us/about-us.component'
import { PlanComponent } from './user/plan/plan.component';
import { SucursalComponent } from './user/sucursal/sucursal.component'
import { PerfilUsuarioComponent } from './user/perfil-usuario/perfil-usuario.component';
import { ConfirmacionComponent } from './user/confirmacion/confirmacion.component';
import { PlanvirtualComponent } from './user/planvirtual/planvirtual.component';
import { PlanListaComponent } from './user/plan-lista/plan-lista.component';
import { PlanEditarComponent } from './user/plan-editar/plan-editar.component';
import { HorariosComponent } from './admin/horarios/horarios.component';
import { PagoInscripcionComponent } from './user/pago-inscripcion/pago-inscripcion.component';



const routes: Routes = [
  //cuando el usuario no ponga nada
 { path: "", redirectTo: "index", pathMatch: "full" },
  //componentes usuario
  { path: "index", component: IndexComponent },
  { path: "login", component: LoginComponent },
  { path: "olvide-contrasena", component: RecuperarPasswordComponent },
  { path: "sucursales", component: SucursalesComponent },
  { path: "registro/:id/:idName/:idPrecio", component: AltaUsuarioComponent },
  { path: "finaliza-compra", component: FinalizarCompraComponent },
  { path: "carrusel", component: CarruselComponent },
  { path: "sobre-nosotros", component: AboutUsComponent },
  { path: "plan", component: PlanComponent },
  { path: "planLista", component: PlanListaComponent },
  { path: "planEditar/:id", component: PlanEditarComponent },
  { path: "sucursal/:id/:idName", component: SucursalComponent},
  { path: "perfil-usuario", component: PerfilUsuarioComponent},
  { path: "confirmacion", component: ConfirmacionComponent},
  { path: "VirtualOlimpusGym", component: PlanvirtualComponent },
  { path: "pago-inscripcion/:idEmail", component: PagoInscripcionComponent},
  { path: "detalles-compra", component: DetalleCompraComponent },
  { path: "membresias/:id/:idName", component: MembresiasComponent },
  //componentes admin
  { path: "linea", component: LineaComponent },
  { path: "horario/:id", component:HorariosComponent},
  //cuando el usuario agrega cualquier cosa como ruta
  { path: "**", redirectTo: "index", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
