import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesListComponent } from './components/universities/universities-list/universities-list.component';

const routes: Routes = [
  {
    path: 'universities',
    component: UniversitiesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
