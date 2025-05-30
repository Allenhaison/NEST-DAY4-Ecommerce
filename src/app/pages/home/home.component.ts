import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardComponent } from '../../component/card/card.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 product: any;

 constructor(private apiservices: ApiService){
  this.apiservices.getproducts().subscribe((data)=> {
    this.product = data ;

  });
 }
}
