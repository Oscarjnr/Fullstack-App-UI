import { Component, OnInit } from '@angular/core';
import { University } from 'src/app/models/university.model';
import { UniversitiesService } from 'src/app/services/universities.service';

@Component({
  selector: 'app-universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.css']
})
export class UniversitiesListComponent implements OnInit {

  universities: University[] = [ ];
  constructor(private universitiesService: UniversitiesService) { }
  
  ngOnInit(): void {
    this.universitiesService.getAllUniversities()
    .subscribe({
      next: (universities) => {
        this.universities = universities;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
