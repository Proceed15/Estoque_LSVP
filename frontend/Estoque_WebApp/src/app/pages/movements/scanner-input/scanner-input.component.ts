import { AfterViewInit, Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { IconModule, icons } from '../../../shared/modules/icon/icon.module';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import { Router } from '@angular/router';
import { UnitService } from '../../../core/services/unit.service';
import { ProductService } from './../../../core/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MovementService } from '../../../core/services/movement.service';
import { InputMovement } from '../../../shared/models/inputMovement';
import { Product } from '../../../shared/models/product';
import { Unit } from '../../../shared/models/unit';
@Component({
  selector: 'app-scanner-input',
  imports: [IconModule,FormsModule,NavBarComponent, FormsModule],
  templateUrl: './scanner-input.component.html',
  styleUrl: './scanner-input.component.css'
})
export class ScannerInputComponent implements AfterViewInit{
  private buffer: string = '';
  private timeout: any;
  private batchView: boolean = false;
  form: FormGroup;
  private product: Product | undefined;


  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  icons = icons;
  barcode: string = '';
  constructor(private fb: FormBuilder, private router: Router, private unitService: UnitService, private movementService: MovementService, private productService: ProductService) {
  this.form = this.fb.group({
      batch: this.fb.control('', Validators.required),
      quantity: this.fb.control('', Validators.required),
    });


   }

  ngAfterViewInit(): void {
     this.input.nativeElement.focus();
    }

  
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // scanner envia rápido, então juntamos caracteres
    if (this.timeout) clearTimeout(this.timeout);

    if (event.key === 'Enter') {
      // código finalizado
      this.onBarcodeScanned(this.buffer);
      this.buffer = '';
    } else {
      this.buffer += event.key;
    }

    // se parar de digitar por 300ms, limpa (para diferenciar do teclado humano)
    this.timeout = setTimeout(() => {
      this.buffer = '';
    }, 300);
  }
  getControl(field: string): FormControl {
    return this.form.get(field) as FormControl;
  }
  onBarcodeScanned(code: string) {
    let product = this.productService.getProductByGtin(code).subscribe({next: (data) => {
      if(data){
        this.product = data;
        this.batchView = true;
      }else{
        alert("Produto não cadastrado");
        this.router.navigate(['/manage/create/product']);
      }
    }})
}
  onSubmit(){
     
    if(this.form.valid){
      let unit: Unit;
      let batch = this.form.value.batch;
      let quantity = this.form.value.quantity;
      this.unitService.getUnitByBatch(batch).subscribe({next: (data) => {
        unit = data;
        if (this.product && data.gtin === this.product.gtin) {
          unit.quantity += quantity;
        //   this.unitService.updateUnit(unit).subscribe({next: (data) => {
        //     let movement: InputMovement = {
        //       id: 0,
        //       unitId: unit.id,
        //       quantity: quantity,
        //       date: new Date(),
        //       type: 'input'
        //     };
        //     this.movementService.createMovement(movement).subscribe({next: (data) => {
        //       alert("Unidade atualizada com sucesso");
        //       this.router.navigate(['/movements']);
        //     }});/
         
        }
         
      }});
 
    }
  }

}
