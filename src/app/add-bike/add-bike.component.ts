import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBike } from '../models';
import { HttpClientService } from '../service/httpClient.service';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.scss']
})
export class AddBikeComponent implements OnInit {

  public bikes: IBike[] = [];
  public id : number = 0

  //***********ngModel */
  public idM: any = '';
  public name: string = '';
  public color: string = '';
  public country: string = '';
  public createdAt: string = '';
  //***********ngModel */

  constructor(
    private httpClientService: HttpClientService,
    private storeService: StoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    if (this.storeService.getBike(this.id) != null) {
      let idx: any = this.storeService.getBike(this.id);
      this.idM = this.id;
      this.name = idx.name;
      this.color = idx.color;
      this.country = idx.country;
      this.createdAt = idx.createdAt;
      let addBtn = document.querySelector('.add-btn');
      (addBtn as HTMLInputElement).textContent = 'Edit';
    }
  }

  addingNewBike(event: Event) {
    if (this.storeService.getBike(this.id) != null){
      let body: IBike = {
        createdAt: this.createdAt,
        name: this.name,
        color: this.color,
        country: this.country
      };
      this.httpClientService.putBike(this.idM,body);
      let uu = this.storeService.editItem(body);
      console.log(uu);
    }
    let body: IBike = {
      createdAt: this.createdAt,
      name: this.name,
      color: this.color,
      country: this.country
    };
    this.httpClientService.postBike(body);
    let uu = this.storeService.addItem(body);
    console.log(uu);
  }

}
