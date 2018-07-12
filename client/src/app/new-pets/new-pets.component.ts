import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';
import {HttpService} from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-new-pets',
  templateUrl: './new-pets.component.html',
  styleUrls: ['./new-pets.component.css']
})
export class NewPetsComponent implements OnInit {
  pet: Pet;
  errors: any[];
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }


  ngOnInit() {
    this.pet = new Pet();
    this.errors=[];
  }
  newPet(){
    console.log(this.pet);
    let tempObservable= this._httpService.postPets(this.pet);
    tempObservable.subscribe((pet: Pet)=> {
    this._router.navigate(['/pet']);
  });
  }

}
