import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBike, IBikeAdd } from '../models';
import { HttpClientService } from '../service/httpClient.service';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.scss']
})
export class AddBikeComponent implements OnInit {

  public bikes: IBike[] = [];

  //***********ngModel */
  public idM: number = 0;
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
    console.log('id=>',this.storeService.bikes);
  }

  addingNewBike(event: Event) {
    let u: IBikeAdd = {
      createdAt: this.createdAt,
      name: this.name,
      color: this.color,
      country: this.country
    };
    this.httpClientService.postBike(u)
    let uu = this.storeService.addItem(u);
    console.log(uu);
  }

}
