import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineaComponent } from './admin/timeline/timeline.component';
import { AltaUsuarioComponent } from './user/alta-usuario/alta-usuario.component';
import { SucursalesComponent } from './user/sucursales/sucursales.component';
import { IndexComponent } from './user/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MembresiasComponent } from './recepcionist/membresias/membresias.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { SucursalComponent } from './user/sucursal/sucursal.component';
import { ConfirmacionComponent } from './user/confirmacion/confirmacion.component';
import { PlanvirtualComponent } from './user/planvirtual/planvirtual.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MensajeEmergentesComponent } from './user/mensaje-emergentes/mensaje-emergentes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MensajeEmergenteEliminarComponent } from './user/mensaje-emergente-eliminar/mensaje-emergente-eliminar.component';
import { HorariosComponent } from './admin/horarios/horarios.component';
import { PagoInscripcionComponent } from './user/pago-inscripcion/pago-inscripcion.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from "ngx-spinner";
import { AltaPlanComponent } from './recepcionist/alta-plan/alta-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    AltaUsuarioComponent,
    SucursalesComponent,
    IndexComponent,
    MembresiasComponent,
    AboutUsComponent,
    SucursalComponent,
    ConfirmacionComponent,
    PlanvirtualComponent,
    MensajeEmergentesComponent,
    MensajeEmergenteEliminarComponent,
    HorariosComponent,
    PagoInscripcionComponent,
    AltaPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSidenavModule,
    ToastrModule.forRoot({positionClass:'toast-bottom-left'}),
    HttpClientModule, 
    MatTableModule,
    MatCardModule,
    MatButtonToggleModule,
    MatRadioModule,
    _MatSlideToggleRequiredValidatorModule,
    FlexLayoutModule,
    MatDialogModule,
    QRCodeModule,
    NgxPayPalModule,
    NgxSpinnerModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
