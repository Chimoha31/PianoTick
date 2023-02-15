import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginUserData = {
    username: '',
    password: '',
  };

  constructor(private _router: Router, private _auth: AuthService) {}

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector('.form') as any);
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res: any) => {
        sessionStorage.setItem('token', res.token);
        this._router.navigate(['/setup']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
