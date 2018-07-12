import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Pet } from '../pet';
@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  pet: Pet;

  // Before you html loads
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
      this.pet = new Pet();
  }
  ngOnInit() {
      this.getPet();
  }

  getPet(){
      this._route.params.subscribe( (params: Params) => {
      this._httpService.getPet(params.id).subscribe(
          (pet: Pet) => {
              this.pet = pet[0];
          },
          (err: any) => {
              console.log(err);
          }
      )
    });
  }
  editPet(){
    this._httpService.editPet(this.pet._id, this.pet).subscribe(
      (msg) => {
        console.log(msg);
        this._router.navigate(['/pet']);
      }
    )
  }

}
