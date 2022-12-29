import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversitiesListComponent } from './components/universities/universities-list/universities-list.component';
import { AddUniversityComponent } from './components/universities/add-university/add-university.component';
import { FormsModule } from '@angular/forms';
import { EditUniversityComponent } from './components/universities/edit-university/edit-university.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversitiesListComponent,
    AddUniversityComponent,
    EditUniversityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
