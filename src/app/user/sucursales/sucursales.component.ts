import { FormBuilder, FormGroup } from "@angular/forms";
import { ConnectionService } from "src/app/servicios/connection.service";
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { sucursal } from "src/app/servicios/sucursal";
import { plan } from "src/app/servicios/plan";
import { SucursalService } from "src/app/servicios/sucursal.service";
import { PlanService } from "src/app/servicios/plan.service";
import { Router, ActivatedRoute } from "@angular/router";
import { TestService } from "src/app/servicios/test.service";

@Component({
  selector: "app-sucursales",
  templateUrl: "./sucursales.component.html",
  styleUrls: ["./sucursales.component.css"],
})
export class SucursalesComponent implements OnInit {
  form: FormGroup;
  @ViewChild("loadMoreMarker", { read: ElementRef })
  loadMoreMarker: ElementRef | null = null;
  sucursales: sucursal[] = [];
  membresias: any[] = [];
  currentPage = 1;
  gimnasiosPerPage = 4;
  displayedGimnasios: sucursal[] = [];
  startIndex = 0;
  elID: any;
  gymName: any;
  public hasMoreRecords = true;
  dataSourceReenovacion: any;
  palabraClave: string = "";
  gimnasios: any[] = [];
  sucursalesFiltradas: any[] = [];

  constructor(
    private router: Router,
    private sucursalService: SucursalService,
    private planService: PlanService,
    private http: ConnectionService,
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private testService: TestService
  ) {
    this.elID = this.activeRoute.snapshot.paramMap.get("id");
    this.gymName = this.activeRoute.snapshot.paramMap.get("idName");

    this.testService.idGym = this.elID;
    this.testService.nameGym = this.gymName;

    this.form = this.fb.group({
      casilleros: [false],
      estacionamiento: [false],
      bicicletero: [false],
      regaderas: [false],
    });
  }

  onNombreChange() {
    this.http.filtrarSuc(this.form.value).subscribe({
      next: (resultData) => {
        this.sucursales = resultData;
        this.displayedGimnasios = this.sucursales.slice(
          0,
          this.gimnasiosPerPage
        );
        this.http
          .filtrarMem(this.form.value)
          .subscribe((membresias: Object) => {
            this.sucursales.forEach((sucursal) => {
              sucursal.membresias = (membresias as plan[]).filter(
                (membresia) =>
                  membresia.Gimnasio_idGimnasio === sucursal.idGimnasio
              );
            });
          });
      },
      error: (error) => {},
    });
  }

  navegarPagina(url: string): void {
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.sucursalService.getSucursales().subscribe((data) => {
      this.sucursales = data;
      this.displayedGimnasios = this.sucursales.slice(0, this.gimnasiosPerPage);
      this.planService.obternerPlan().subscribe((membresias: Object) => {
        this.sucursales.forEach((sucursal) => {
          sucursal.membresias = (membresias as plan[]).filter(
            (membresia) => membresia.Gimnasio_idGimnasio === sucursal.idGimnasio
          );
        });
      });
    });
    this.sucursalesFiltradas = this.sucursales;
  }

  loadMoreGimnasios() {
    this.currentPage++; 
    const startIndex = (this.currentPage - 1) * this.gimnasiosPerPage; 
    const endIndex = startIndex + this.gimnasiosPerPage; 
    const newGimnasios = this.sucursales.slice(startIndex, endIndex); 
    this.displayedGimnasios = this.displayedGimnasios.concat(newGimnasios);
    if (endIndex >= this.sucursales.length) {
      this.hasMoreRecords = false; // Ya no hay más registros
    }
  }

  applyFilterReenovacion(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceReenovacion.filter = filterValue.trim().toLowerCase();
  }

  filtrarSucursales(): void {
    this.displayedGimnasios = this.sucursales.filter((sucursal) =>
      this.cumpleCriterio(sucursal)
    );
  }

  cumpleCriterio(sucursal: any): boolean {
    const criterioBusqueda = this.palabraClave.toLowerCase();
    return (
      sucursal.nombreGym.toLowerCase().includes(criterioBusqueda) ||
      sucursal.direccion.toLowerCase().includes(criterioBusqueda) ||
      false
    );
  }
}
