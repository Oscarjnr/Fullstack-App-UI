import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUniversityComponent } from './components/universities/add-university/add-university.component';
import { EditUniversityComponent } from './components/universities/edit-university/edit-university.component';
import { UniversitiesListComponent } from './components/universities/universities-list/universities-list.component';

const routes: Routes = [
  {
    path: 'universities',
    component: UniversitiesListComponent
  },
  {
    path: 'universities/add',
    component: AddUniversityComponent
  },
  {
    path: 'universities/edit/:id',
    component: EditUniversityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
