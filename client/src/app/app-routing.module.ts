import { AppComponent } from './app.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { NewPetsComponent } from './new-pets/new-pets.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { InfoPetComponent } from './info-pet/info-pet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'pet',component: AllPetsComponent },
  { path: 'pet/new',component: NewPetsComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'pet/:id/edit', component: EditPetComponent },
  { path: 'pet/:id', component: InfoPetComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/pet' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
