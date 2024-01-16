import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectsServiceService } from './projects-service.service';
import { Projects } from '../models/projects.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // private dataListSubject = new BehaviorSubject<Projects[]>([]);
  // dataList$ = this.dataListSubject.asObservable();

  // constructor(private apiService: ProjectsServiceService) {}

  // addData(newData: Projects) {
  //   // Assuming newData is an object to be added to the data list
  //   this.apiService.save(newData).subscribe(
  //     (response) => {
  //       const currentDataList = this.dataListSubject.value;
  //       const updatedDataList = [...currentDataList, response]; // Use the response from the server
  //       this.dataListSubject.next(updatedDataList);
  //     },
  //     (error) => {
  //       console.error('Error adding data:', error);
  //     }
  //   );
  // }
}