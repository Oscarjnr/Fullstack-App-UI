import { Component, OnInit } from '@angular/core';
import { University } from 'src/app/models/university.model';

@Component({
  selector: 'app-universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.css']
})
export class UniversitiesListComponent implements OnInit {

  universities: University[] = [
    {
      id: '1b3422dfss-fg31b-avbdg-h494hfnsjeii',
      nameOfUniversity: 'University of Ilorin',
      city: 'Ilorin',
      state: 'Kwara',
      nameOfVC: 'Prof. Abolaji Oni',
      email: 'unilorinedu@gmail.com',
      contactNumber: 9811116512
    },
    {
      id: '1b34647dfss-2231b-avbdg-h494h35jeii',
      nameOfUniversity: 'University of Nigeria',
      city: 'Nsukka',
      state: 'Enugu',
      nameOfVC: 'Prof. Udeh Oga',
      email: 'unnedu@gmail.com',
      contactNumber: 6838748848333
    }
  ];
  constructor() { }
  
  ngOnInit(): void {

  }

}
