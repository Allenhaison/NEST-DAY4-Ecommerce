import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
product:any;

constructor(private apiservice: ApiService,private route: ActivatedRoute){}
ngOnInit(){
  let id = this.route.snapshot.params['id'];
  this.apiservice.getproductbyid(id).subscribe((data) => {
    console.log(data);
    this.product = data ;
  });
}
}
