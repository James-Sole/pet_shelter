import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {
  pets:any;
  constructor(private _httpService: HttpService) {
    this.pets=[];
  }

  ngOnInit() {
    this.getPetsFromService()
  }
  getPetsFromService(){
    let tempObservable = this._httpService.getPets();
    tempObservable.subscribe(data =>{
      console.log("Got our pets!", data),
      this.pets = data;
    });
  }
}
