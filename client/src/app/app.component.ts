import { Component } from '@angular/core';
import { faHome, faPhone, faPeopleArrows, faBookOpen, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  faHome = faHome;
  faPhone = faPhone;
  faPeopleArrows = faPeopleArrows;
  faBookOpen = faBookOpen;
  faInfoCircle = faInfoCircle;
}
