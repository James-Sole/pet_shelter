import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-info-pet',
  templateUrl: './info-pet.component.html',
  styleUrls: ['./info-pet.component.css']
})
export class InfoPetComponent implements OnInit {
pet: Pet;
liked: Boolean;

// Before you html loads
constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.pet = new Pet();
    this.liked = false;
}
ngOnInit() {
    this.getPet();
}

getPet(){
    this._route.params.subscribe( (params: Params) => {
    this._httpService.getPet(params.id).subscribe(
        (pet: Pet) => {
          console.log(pet[0]);
            this.pet = pet[0];
        },
        (err: any) => {
            console.log(err);
        }
    )
  });
}
likes(){
  this._httpService.likePet(this.pet._id, this.pet).subscribe(
    (pet: Pet) => {
      console.log(pet[0]);
      this.pet.likes +=1;
      this.liked = true;
    });
}
adopt(){
  this._httpService.deletePets(this.pet._id).subscribe(
    (pet: Pet) => {
      this._router.navigate(['/pet']);
    });
}

}
