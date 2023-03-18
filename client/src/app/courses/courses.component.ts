import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { faPhone, faUser, faMailBulk, faUniversity, faBook } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courseForm = new FormGroup({
    studName: new FormControl(''),
    studEmailID: new FormControl(''),
    studPhone: new FormControl(''),
    studCollege: new FormControl(''),
    studCourse: new FormControl('')
  });
  
  faUser = faUser;
  faPhone = faPhone;
  faMailBulk = faMailBulk;
  faUniversity = faUniversity;
  faBook = faBook;

  courseSub(formData: any) {
    console.log(formData)
    this.courseForm.reset();
  }
}
