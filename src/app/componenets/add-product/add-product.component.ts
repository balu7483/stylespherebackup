import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  productForm!:FormGroup
  productName!:FormControl
  productBrand!:FormControl
  productType!:FormControl
  productMaterialType!:FormControl
  productGender!:FormControl
  productColor!:FormControl
  productSize!:FormControl
  productImageUrl!:FormControl



  constructor(private builder:FormBuilder,private service:ProductService,private router:Router,private route:ActivatedRoute){
    this.productName=new FormControl('',[Validators.required])
  }


  ngOnInit(): void {
    
  }
}
