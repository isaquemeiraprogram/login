import { Component, Input } from '@angular/core';
import { User } from 'src/app/Models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() user!:User;
}
