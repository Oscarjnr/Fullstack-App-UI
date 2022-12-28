import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { University } from 'src/app/models/university.model';
import { UniversitiesService } from 'src/app/services/universities.service';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {
  addUniversityRequest: University = {
    id: '',
    name: '',
    city: '',
    state: '',
    VC: '',
    email: '',
    contact: 0
  };

  constructor(private universityService: UniversitiesService, private router: Router) {}

  ngOnInit(): void {
    
  }

  addUniversity() {
    this.universityService.addUniversity(this.addUniversityRequest)
    .subscribe({
      next: (university) => {
        this.router.navigate((['universities']))
      }
    });
  }
}
