import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent {
  constructor(private _router: Router) {}

  onStartPractice(){
    this._router.navigate(['/main']);
  }
}
