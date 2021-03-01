import {Component, OnInit} from '@angular/core';
import {upload} from "./upload";
import {error} from "@angular/compiler/src/util";
import {StructureIsReused} from "@angular/compiler-cli/src/transformers/util";
import {Product} from "./product";
import {ProductService} from "./product.service";
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'primeTable';

  products: Product[];
  form: FormGroup

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      tableRowArray: new FormArray([])
    })
  }

  get getArrayControl() {
    return this.form.get('tableRowArray') as FormArray;
  }
  addFormControl() {
    const control = this.getArrayControl;
    control.push(new FormGroup({
      name: new FormControl(1)
    }))
  }
}
