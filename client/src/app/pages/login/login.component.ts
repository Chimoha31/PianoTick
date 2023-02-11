import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import { Router } from '@angular/router';
// import {FormControl, Validators} from '@angular/forms';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(private _router: Router){}

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector('.form') as any);
  }

  loginUser() {
    this._router.navigate(['/setup']);
  }
}
