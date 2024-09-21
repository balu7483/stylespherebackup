import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  productData:any

  constructor(private router:Router,private service:ProductService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    return this.service.getProducts().subscribe(data=>{
      this.productData=data;
    })
  }

  editProduct(id:number){
    this.router.navigate([`product/edit/${id}`])
  }

}
