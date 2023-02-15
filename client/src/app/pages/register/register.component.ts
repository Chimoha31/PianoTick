import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    username: '',
    password: '',
  };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector('.form') as any);
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res: any) => {
        console.log(res);
        console.log("Test")
        sessionStorage.setItem('token', JSON.stringify(res.token));
        this._router.navigate(['/login']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
