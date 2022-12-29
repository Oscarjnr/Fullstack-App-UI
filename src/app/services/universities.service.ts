import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { University } from '../models/university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllUniversities(): Observable<University[]> {
    return this.http.get<University[]>(this.baseApiUrl + '/api/universities')
  }

  addUniversity(addUniversityRequest: University): Observable<University> {
    addUniversityRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<University>(this.baseApiUrl + '/api/universities', addUniversityRequest);
  }

  getUniversity(id: string): Observable<University> {
    return this.http.get<University>(this.baseApiUrl + '/api/universities/' + id);
  }

  updateUniversity(id: string, updateUniversityRequest: University): Observable<University> {
    return this.http.put<University>(this.baseApiUrl + '/api/universities/' + id, updateUniversityRequest)
  }
  
  deleteUniversity(id: string): Observable<University> {
    return this.http.delete<University>(this.baseApiUrl + '/api/universities/' + id);
  }

}
