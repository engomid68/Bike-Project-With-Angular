import { Component, OnInit } from '@angular/core';
import { IBike } from '../../models';
import { HttpClientService } from '../../service/httpClient.service';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Bike Manager';
  public isLoading: boolean = false;
  public bikes: IBike[] = [];

  constructor(
    private httpClientService: HttpClientService,
    private storeService: StoreService
    ){}

  ngOnInit(): any {
    this.isLoading = true;
    this.httpClientService.getBikesAngular()
      .then((result: any) => {
        this.isLoading = false;
        this.storeService.setBikes(result);
        this.bikes = this.storeService.getBikes();
        console.log(this.bikes);
      }, (error) => {
        this.isLoading = false;
        // any
      });
  }

  public deleteFunc(id: any, event: Event) {
    console.log('event', event);
    let value = (event.target as HTMLInputElement).value;
    (event.target as HTMLInputElement).value = 'Loading...';
    (event.target as HTMLInputElement).disabled = true;
    this.httpClientService.deleteBike(id)
    .then((result: any) => {
      let idx = this.bikes.findIndex((arr) => arr.id === id);
      this.bikes.splice(idx, 1);
      alert("data delete successfully id ="+ id);
    }, (error: any) => {
      console.log('HI'); 
    });
  }
  putmethod(id:number,event:Event){
    console.log('event', event);
    let value = (event.target as HTMLInputElement).value;
    (event.target as HTMLInputElement).value = 'Please Wait';
    (event.target as HTMLInputElement).disabled = true;
    alert("You Can Edit Record on Top");
}





}
