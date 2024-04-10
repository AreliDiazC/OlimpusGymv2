import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ClienteService } from "src/app/servicios/cliente.service";
import { MatDialog } from "@angular/material/dialog";
import { MensajeEmergentesComponent } from "../mensaje-emergentes/mensaje-emergentes.component";
import { ErrorStateMatcher } from "@angular/material/core";
import { ToastrService } from "ngx-toastr";
import { TestService } from "src/app/servicios/test.service";
import { GimnasioService } from "src/app/servicios/gimnasio.service";
import { PlanService } from "src/app/servicios/plan.service";
import { OnInit } from "@angular/core";

interface Food {
  value: string;
  viewValue: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    formulario: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = formulario && formulario.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: "app-alta-usuario",
  templateUrl: "./alta-usuario.component.html",
  styleUrls: ["./alta-usuario.component.css"],
})
export class AltaUsuarioComponent implements OnInit {
  foods: Food[] = [
    { value: "Aguascalientes", viewValue: "Aguascalientes" },
    { value: "Baja California", viewValue: "Baja California" },
    { value: "Baja California Sur", viewValue: "Baja California Sur" },
    { value: "Campeche", viewValue: "Campeche" },
    { value: "Chiapas", viewValue: "Chiapas" },
    { value: "Chihuahua", viewValue: "Chihuahua" },
    { value: "Coahuila", viewValue: "Coahuila" },
    { value: "Colima", viewValue: "Colima" },
    { value: "Ciudad de México", viewValue: "CDMX" },
    { value: "Durango", viewValue: "Durango" },
    { value: "Guanajuato", viewValue: "Guanajuato" },
    { value: "Guerrero", viewValue: "Guerrero" },
    { value: "Hidalgo", viewValue: "Hidalgo" },
    { value: "Jalisco", viewValue: "Jalisco" },
    { value: "México", viewValue: "México" },
    { value: "Michoacán", viewValue: "Michoacán" },
    { value: "Morelos", viewValue: "Morelos" },
    { value: "Nayarit", viewValue: "Nayarit" },
    { value: "Nuevo León", viewValue: "Nuevo León" },
    { value: "Oaxaca", viewValue: "Oaxaca" },
    { value: "Puebla", viewValue: "Puebla" },
    { value: "Querétaro", viewValue: "Querétaro" },
    { value: "San Luis Potosi", viewValue: "San Luis Potosi" },
    { value: "Sinaloa", viewValue: "Sinaloa" },
    { value: "Sonora", viewValue: "Sonora" },
    { value: "Tabasco", viewValue: "Tabasco" },
    { value: "Tamaulipas", viewValue: "Tamaulipas" },
    { value: "Tlaxcala", viewValue: "Tlaxcala" },
    { value: "Veracruz", viewValue: "Veracruz" },
    { value: "Yucatán", viewValue: "Yucatán" },
    { value: "Zacatecas", viewValue: "Zacatecas" },
  ];

  currentStep: number = 1;
  hide = true;
  form: FormGroup;
  message: string = "";
  idMembresia: any;
  nameMembresia: any;
  precioId: any;
  email: any;
  gimnasio: any;
  membresia: any;

  constructor(
    public fb: FormBuilder,
    private gimnasioService: GimnasioService,
    private clienteService: ClienteService,
    public testService: TestService,
    private planService: PlanService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.idMembresia = this.activeRoute.snapshot.paramMap.get("id");
    this.nameMembresia = this.activeRoute.snapshot.paramMap.get("idName");
    this.precioId = this.activeRoute.snapshot.paramMap.get("idPrecio");

    this.form = this.fb.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ]),
      ],
      pass: [
        "",
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      user: [""],
      fon: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(0|[1-9][0-9]*)$/),
        ]),
      ],
      nombreU: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/),
        ]),
      ],
      apPaterno: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/),
        ]),
      ],
      apMaterno: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/),
        ]),
      ],
      destino: ["Cliente"],
      direccion: [""],
      codigoPromotor: [0],
      genero: [""],
      idGym: [testService.idGym],
      fechaNacimiento: ["", Validators.required],
      foto: [""],
      nombre: [""],
      idMem: [this.idMembresia],
      fechaInicio: [""],
      fechaFin: [""],
    });
  }

  ngOnInit(): void {
    this.consultarMem();
  }

  registrar(): any {
    const nombreU = this.form.get("nombreU")?.value;
    const apPaterno = this.form.get("apPaterno")?.value;
    const apMaterno = this.form.get("apMaterno")?.value;
    const nombreCompleto = `${nombreU} ${apPaterno} ${apMaterno}`;
    const fechaInicio = new Date();

    // Convierte la fecha en un objeto tipo 'Date' y lo formatea como una cadena ISO
    const fechaInicioISO = fechaInicio.toISOString().split("T")[0];

    this.form.patchValue({
      nombre: nombreCompleto,
      fechaInicio: fechaInicioISO,
      fechaFin: fechaInicioISO,
    });

    if (this.form.valid) {
      this.clienteService
        .agregarCliente(this.form.value)
        .subscribe((respuesta) => {
          if (respuesta.message == "MailExists") {
            this.toastr.error("El correo electrónico ya existe.", "Error!!!");
          } else {
            this.dialog
              .open(MensajeEmergentesComponent, {
                data: `Usuario registrado exitosamente`,
              })
              .afterClosed()
              .subscribe((cerrarDialogo: Boolean) => {
                if (cerrarDialogo) {
                  this.router.navigateByUrl(
                    `/pago-inscripcion/${respuesta.email}`
                  );
                } else {
                }
              });
          }
        });
    } else {
      this.message = "Por favor, complete todos los campos requeridos.";
    }
  }
  
  consultarMem() {
    this.planService.consultarPlan(this.idMembresia).subscribe(
      (respuesta) => {
        this.membresia = respuesta;
        this.gimnasioService
          .consultarPlanes(this.membresia[0].Gimnasio_idGimnasio)
          .subscribe(
            (respuesta) => {
              this.gimnasio = respuesta;
            },
            (error) => {
              console.error(
                "Error al consultar los planes del gimnasio:",
                error
              );
            }
          );
      },
      (error) => {
        console.error("Error al consultar los planes del gimnasio:", error);
      }
    );
  }
}
