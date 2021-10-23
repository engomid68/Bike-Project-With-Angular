import { Injectable } from '@angular/core';
import { IBike, IUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public bikes: IBike[] = [];
  public user: IUser[] = [];
  constructor() { }

  setBikes(bikes: any) {
    this.bikes = bikes;
  }

  getBikes() {
    return this.bikes;
  }

  getBike(bikeId: Number) {
    // let idx = this.bikes.findIndex((arr) => parseInt(arr.id) === parseInt(bikeId));
    // if(idx === -1) {
    //   return null;
    // }
    // return this.bikes[idx];
  }

  serachBike(bike: any) {
    const inputBikeName = this.bikes.filter((item) => (item.name).toLowerCase().includes(bike.toLowerCase()));
    return inputBikeName;
  }

  removeItem(bikeId: Number) {
    // let idx = this.bikes.findIndex((arr) => parseInt(arr.id) === bikeId);
    // idx !== -1 && this.bikes.splice(idx, 1);
  }

  addItem(bike: any) {
    this.bikes.push(bike);
  }

  editItem(bikeId: any) {
    // let idx = this.bikes.findIndex((arr) => parseInt(arr.id) === bikeId);
    // this.bikes.splice(idx,1, bikeId);
  }

  setUser(user: string) {
    // this.user = user;
  }

  getUser() {
    return this.user;
  }
}
