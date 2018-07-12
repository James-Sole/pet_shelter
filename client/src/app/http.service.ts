import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}
  getPets(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/pets');
  }
  postPets(pet){
    console.log("this is whats ins sevice", pet)
    // our http response is an Observable, store it in a variable
    return this._http.post('/pets', pet);
  }
  getPet(id){
    // our http response is an Observable, store it in a variable
    return this._http.get('/pets/'+ id);
  }
  editPet(id, pet){
    // our http response is an Observable, store it in a variable
    return this._http.patch('/pets/'+ id, pet);
  }
  deletePets(id){
    // our http response is an Observable, store it in a variable
    return this._http.delete('/pets/'+ id);
  }
  likePet(id, pet){
    console.log('/pets/'+id+'/like')
    return this._http.patch('/pets/'+id+'/like', pet);
  }
}
