import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { University } from 'src/app/models/university.model';
import { UniversitiesService } from 'src/app/services/universities.service';

@Component({
  selector: 'app-edit-university',
  templateUrl: './edit-university.component.html',
  styleUrls: ['./edit-university.component.css']
})
export class EditUniversityComponent implements OnInit {

  universityDetails: University = {
    id: '',
    name: '',
    city: '',
    state: '',
    vc: '',
    email: '',
    contact: 0
  };

  constructor(private  route: ActivatedRoute, private universityService: UniversitiesService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.universityService.getUniversity(id)
          .subscribe({
            next: (response) => {
              this.universityDetails = response;
            }
          })
        }
      }
    })
   }

   updateUniversity() {
    this.universityService.updateUniversity(this.universityDetails.id, this.universityDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate((['universities']))
      }
    });
   }

   deleteUniversity(id: string) {
    this.universityService.deleteUniversity(id)
    .subscribe({
      next: (response) => {
        this.router.navigate((['universities']))
      }
    });
   }

}
